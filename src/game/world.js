import * as THREE from "three";
import { C, ISLAND_R } from "./palette.js";
import { createCharacter } from "./characters.js";
import { createWater } from "./atmosphere.js";
import { createPillMesh } from "./pill.js";

const BLOCKS = [];
function block(x, z, r) {
  BLOCKS.push({ x, z, r });
}
export function resolveCollision(x, z, radius = 0.42) {
  let nx = x;
  let nz = z;
  for (const b of BLOCKS) {
    const dx = nx - b.x;
    const dz = nz - b.z;
    const d = Math.hypot(dx, dz);
    const need = b.r + radius;
    if (d < need && d > 0.0001) {
      const k = need / d;
      nx = b.x + dx * k;
      nz = b.z + dz * k;
    }
  }
  return { x: nx, z: nz };
}

const lambert = (color, extras = {}) =>
  new THREE.MeshLambertMaterial({ color, flatShading: true, ...extras });

function mesh(geo, color, shadows = true) {
  const m = new THREE.Mesh(geo, typeof color === "number" ? lambert(color) : color);
  if (shadows) {
    m.castShadow = true;
    m.receiveShadow = true;
  }
  return m;
}

function n2(x, z) {
  return Math.sin(x * 0.21) * Math.cos(z * 0.17) + Math.sin(x * 0.09 + z * 0.13) * 0.6;
}

export function heightAt(x, z) {
  const r = Math.hypot(x, z);
  if (r > ISLAND_R + 10) return -0.55;

  const beach = x > 10 && z > -4 && z < 22 && r < ISLAND_R + 5;
  if (beach && r > 24) {
    const t = Math.max(0, Math.min(1, (32 - r) / 8));
    return -0.08 + t * 0.42;
  }

  if (r > ISLAND_R + 2.4) return -0.42;
  if (r > ISLAND_R - 3.2) {
    const t = (ISLAND_R + 2.4 - r) / 5.6;
    return -0.08 + t * t * (3 - 2 * t) * 0.46;
  }

  const t = Math.max(0, 1 - r / (ISLAND_R - 2.4));
  const eased = t * t * (3 - 2 * t);
  let h = 0.38 + eased * 2.85;

  const cr = Math.hypot(x, z + 1.2);
  if (cr < 9) h += (1 - cr / 9) * 0.24;

  if (x < -4 && z > 2 && r < 36) {
    const k = Math.max(0, Math.min(1, (-x - 4) / 20));
    h += k * 0.36;
  }
  if (x > 2 && z < -6 && r < 30) h += 0.14;
  if (x > 12 && x < 22 && z > 16 && z < 24) h = Math.min(h, 0.55);

  h += n2(x, z) * 0.05;
  return Math.max(0.2, h);
}

function islandMesh() {
  const g = new THREE.Group();
  const segs = 140;
  const size = (ISLAND_R + 6) * 2;
  const geo = new THREE.PlaneGeometry(size, size, segs, segs);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = [];
  const cGrass = new THREE.Color(C.grass);
  const cGrassLit = new THREE.Color(C.grassLit);
  const cRock = new THREE.Color(C.rock);
  const cRockD = new THREE.Color(C.rockDark);
  const cSand = new THREE.Color(C.sand);
  const cDirt = new THREE.Color(C.dirt);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const r = Math.hypot(x, z);
    let y = heightAt(x, z);
    if (r > ISLAND_R + 4) y = -0.5;
    pos.setY(i, y);

    const beach = x > 10 && z > -4 && z < 24 && y < 0.55;
    if (r > ISLAND_R + 2.2) tmp.set(C.oceanDeep);
    else if (y < 0.22) tmp.copy(cSand);
    else if (beach) tmp.copy(cSand);
    else if (y < 0.55) tmp.lerpColors(cSand, cGrass, (y - 0.22) / 0.33);
    else if (y > 3.1) tmp.copy(cDirt);
    else tmp.lerpColors(cGrass, cGrassLit, (Math.sin(x * 0.3) + 1) * 0.35);
    colors.push(tmp.r, tmp.g, tmp.b);
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const land = new THREE.Mesh(
    geo,
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
  );
  land.receiveShadow = true;
  land.castShadow = true;
  g.add(land);

  // shoreline rocks only — hang off the water, never form inland walls
  for (let i = 0; i < 42; i++) {
    const a = (i / 42) * Math.PI * 2 + (i % 3) * 0.03;
    const r = ISLAND_R + 0.4 + (i % 4) * 0.35;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (x > 16 && z > 0 && z < 22) continue;
    const w = 1.6 + (i % 3) * 0.45;
    const d = 1.2 + ((i * 2) % 3) * 0.3;
    const h = 0.55 + (i % 4) * 0.18;
    const slab = mesh(new THREE.BoxGeometry(w, h, d), i % 2 ? C.rock : C.rockDark);
    slab.position.set(x, Math.max(0.02, heightAt(x, z) - 0.08), z);
    slab.rotation.y = a + 0.2;
    g.add(slab);
  }
  return g;
}

function grassTuft() {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const blade = mesh(new THREE.BoxGeometry(0.04, 0.28 + Math.random() * 0.18, 0.03), i % 2 ? C.grass : C.grassLit, false);
    blade.position.set((i - 2) * 0.07, 0.16, (i % 2) * 0.05);
    blade.rotation.z = (i - 2) * 0.12;
    g.add(blade);
  }
  return g;
}

function signPost(text) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.55, 5), C.woodDark);
  pole.position.y = 0.78;
  const board = mesh(new THREE.BoxGeometry(1.35, 0.48, 0.06), C.wood);
  board.position.set(0, 1.42, 0.04);
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#6a4528";
  ctx.fillRect(0, 0, 256, 96);
  ctx.fillStyle = "#f4efe4";
  ctx.font = "bold 28px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 48);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(1.28, 0.42),
    new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
  );
  face.position.set(0, 1.42, 0.08);
  g.add(pole, board, face);
  return g;
}

function giantBoot() {
  const g = new THREE.Group();
  const sole = mesh(new THREE.BoxGeometry(1.4, 0.22, 0.62), 0x3a2616);
  sole.position.y = 0.14;
  const vamp = mesh(new THREE.BoxGeometry(0.82, 0.55, 0.58), 0x5c3d24);
  vamp.position.set(-0.18, 0.48, 0);
  const toe = mesh(new THREE.BoxGeometry(0.48, 0.28, 0.56), 0x4a3220);
  toe.position.set(0.48, 0.28, 0);
  g.add(sole, vamp, toe);
  return g;
}

function hiddenToilet() {
  const g = new THREE.Group();
  const bowl = mesh(new THREE.CylinderGeometry(0.28, 0.22, 0.32, 8), C.white);
  bowl.position.y = 0.22;
  const tank = mesh(new THREE.BoxGeometry(0.32, 0.38, 0.16), C.white);
  tank.position.set(0, 0.52, -0.22);
  const seat = mesh(new THREE.TorusGeometry(0.22, 0.04, 6, 10), 0xd8ddd6);
  seat.rotation.x = Math.PI / 2;
  seat.position.y = 0.38;
  g.add(bowl, tank, seat);
  return g;
}

function tinyShrine() {
  const g = new THREE.Group();
  const slab = mesh(new THREE.BoxGeometry(0.9, 0.16, 0.7), C.rock);
  slab.position.y = 0.08;
  const pill = createPillMesh(0.42);
  pill.position.set(0, 0.48, 0.08);
  g.add(slab, pill);
  return g;
}

function washedUpPc() {
  const g = new THREE.Group();
  const body = mesh(new THREE.BoxGeometry(0.72, 0.42, 0.18), 0x2a2c2a);
  body.position.y = 0.24;
  const screen = mesh(new THREE.BoxGeometry(0.58, 0.3, 0.02), 0x6ed18a);
  screen.position.set(0, 0.26, 0.1);
  g.add(body, screen);
  return g;
}

function rubberDuck() {
  const g = new THREE.Group();
  const body = mesh(new THREE.SphereGeometry(0.22, 8, 6), 0xf0c36a);
  body.scale.set(1.15, 0.75, 1);
  body.position.y = 0.16;
  const head = mesh(new THREE.SphereGeometry(0.13, 7, 6), 0xf0c36a);
  head.position.set(0.14, 0.32, 0);
  const bill = mesh(new THREE.BoxGeometry(0.1, 0.04, 0.08), 0xe07a28);
  bill.position.set(0.26, 0.3, 0);
  g.add(body, head, bill);
  return g;
}

function flowerPatch() {
  const g = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const stem = mesh(new THREE.BoxGeometry(0.025, 0.22, 0.025), C.green, false);
    stem.position.set((i - 3) * 0.09, 0.11, (i % 3) * 0.06);
    const bloom = mesh(new THREE.SphereGeometry(0.05, 5, 4), i % 2 ? 0xe8c15a : 0xe4a0ff, false);
    bloom.position.set(stem.position.x, 0.24, stem.position.z);
    g.add(stem, bloom);
  }
  return g;
}

function boulder() {
  const g = new THREE.Group();
  const rock = mesh(new THREE.DodecahedronGeometry(0.55, 0), C.rock);
  rock.scale.set(1.2, 0.7, 1);
  rock.position.y = 0.22;
  g.add(rock);
  return g;
}

function campfire() {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const log = mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.55, 5), C.woodDark);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = a;
    log.position.set(Math.cos(a) * 0.12, 0.06, Math.sin(a) * 0.12);
    g.add(log);
  }
  const flame = mesh(new THREE.ConeGeometry(0.16, 0.38, 5), C.torch);
  flame.position.y = 0.32;
  flame.material.emissive = new THREE.Color(C.torch);
  flame.material.emissiveIntensity = 0.7;
  g.add(flame);
  return g;
}

function farIsland(kind) {
  const g = new THREE.Group();
  const land = mesh(new THREE.CylinderGeometry(kind === "tax" ? 6.4 : 5.2, 7.6, 1.6, 8), C.sand, false);
  land.position.y = 0.1;
  g.add(land);
  if (kind === "tax") {
    const hutA = hut(C.white);
    hutA.position.set(-1.4, 0.8, 0.4);
    hutA.scale.setScalar(1.4);
    const hutB = hut(C.green);
    hutB.position.set(1.8, 0.8, -0.6);
    hutB.scale.setScalar(1.1);
    const palmA = palm();
    palmA.position.set(3.2, 0.8, 1.4);
    g.add(hutA, hutB, palmA);
  } else {
    const tower = mesh(new THREE.CylinderGeometry(0.45, 0.7, 5.2, 6), C.white, false);
    tower.position.y = 3.2;
    const cap = mesh(new THREE.ConeGeometry(0.9, 1.1, 5), 0xc44a3a, false);
    cap.position.y = 6.1;
    g.add(tower, cap);
  }
  return g;
}

function billboard(text, w = 2.4) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.06, 0.07, 2.2, 5), C.woodDark);
  pole.position.y = 1.1;
  const board = mesh(new THREE.BoxGeometry(w, 0.7, 0.08), 0x16382a);
  board.position.set(0, 2.05, 0.04);
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#16382a";
  ctx.fillRect(0, 0, 384, 128);
  ctx.fillStyle = "#f4efe4";
  ctx.font = "bold 34px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 192, 64);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(w - 0.1, 0.58),
    new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
  );
  face.position.set(0, 2.05, 0.1);
  g.add(pole, board, face);
  return g;
}

function treasureChest() {
  const g = new THREE.Group();
  const box = mesh(new THREE.BoxGeometry(0.7, 0.38, 0.46), 0x6a4528);
  box.position.y = 0.2;
  const lid = mesh(new THREE.BoxGeometry(0.72, 0.12, 0.48), 0x8a5a2a);
  lid.position.set(0, 0.42, -0.04);
  lid.rotation.x = -0.35;
  const lock = mesh(new THREE.BoxGeometry(0.1, 0.1, 0.06), 0xe8c15a);
  lock.position.set(0, 0.28, 0.24);
  g.add(box, lid, lock);
  return g;
}

function crashedCrate() {
  const g = new THREE.Group();
  const a = crate();
  a.rotation.z = 0.4;
  a.rotation.x = 0.2;
  const b = crate();
  b.position.set(0.55, 0.05, 0.2);
  b.rotation.y = 0.8;
  g.add(a, b);
  return g;
}

function seagull() {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0xf4f6f2, flatShading: true });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.07, 0.32), mat);
  const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.03, 0.16), mat);
  wingL.position.set(-0.35, 0.02, 0);
  const wingR = wingL.clone();
  wingR.position.x = 0.35;
  g.add(body, wingL, wingR);
  g.userData.wings = [wingL, wingR];
  return g;
}

function pillMark(scale = 1) {
  return createPillMesh(scale);
}

function pillFlag() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.045, 0.055, 3.4, 5), C.woodDark);
  pole.position.y = 1.7;
  const cloth = mesh(new THREE.BoxGeometry(0.95, 1.25, 0.04), C.white);
  cloth.position.set(0.52, 2.55, 0);
  const p = pillMark(0.28);
  p.position.set(0.52, 2.55, 0.06);
  g.add(pole, cloth, p);
  return g;
}

function crate() {
  const g = new THREE.Group();
  const box = mesh(new THREE.BoxGeometry(0.95, 0.72, 0.72), C.wood);
  box.position.y = 0.36;
  const stripe = mesh(new THREE.BoxGeometry(0.97, 0.16, 0.74), C.green);
  stripe.position.y = 0.42;
  const p = pillMark(0.2);
  p.position.set(0, 0.52, 0.39);
  g.add(box, stripe, p);
  return g;
}

function pine(h = 4.4) {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.11, 0.16, h * 0.3, 5), C.woodDark);
  trunk.position.y = h * 0.15;
  g.add(trunk);
  for (let i = 0; i < 4; i++) {
    const s = 1 - i * 0.18;
    const cone = mesh(new THREE.ConeGeometry(1.05 * s, h * 0.38, 7), i % 2 ? C.greenDeep : C.green);
    cone.position.y = h * 0.28 + i * h * 0.2;
    g.add(cone);
  }
  return g;
}

function palm() {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.1, 0.16, 3.5, 6), 0x8a6a3a);
  trunk.position.y = 1.75;
  trunk.rotation.z = 0.1;
  g.add(trunk);
  const crown = mesh(new THREE.SphereGeometry(0.22, 6, 5), C.greenDeep);
  crown.position.set(0.18, 3.5, 0);
  g.add(crown);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const frond = mesh(new THREE.SphereGeometry(0.55, 6, 4), i % 2 ? C.green : C.greenDeep);
    frond.scale.set(1.6, 0.22, 0.55);
    frond.position.set(Math.cos(a) * 0.85 + 0.15, 3.42, Math.sin(a) * 0.85);
    frond.rotation.y = a;
    frond.rotation.z = -0.35;
    g.add(frond);
  }
  return g;
}

function hut(roof = C.green) {
  const g = new THREE.Group();
  for (const [x, z] of [
    [-0.95, -0.7],
    [0.95, -0.7],
    [-0.95, 0.7],
    [0.95, 0.7],
  ]) {
    const p = mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.7, 5), C.wood);
    p.position.set(x, 0.85, z);
    g.add(p);
  }
  const roofM = mesh(new THREE.ConeGeometry(1.75, 0.9, 4), roof);
  roofM.rotation.y = Math.PI / 4;
  roofM.position.y = 2.15;
  const deck = mesh(new THREE.BoxGeometry(2.2, 0.08, 1.8), C.wood);
  deck.position.y = 0.08;
  g.add(roofM, deck);
  return g;
}

function dock(len = 8, width = 1.7) {
  const g = new THREE.Group();
  const count = Math.max(3, Math.round(len / 0.85));
  for (let i = 0; i < count; i++) {
    const plank = mesh(new THREE.BoxGeometry(width, 0.1, 0.72), i % 2 ? C.wood : C.woodMid);
    plank.position.set(0, 0.42, -len / 2 + 0.4 + i * (len / count));
    g.add(plank);
  }
  const n = Math.max(2, Math.round(len / 2.1));
  for (let i = 0; i < n; i++) {
    const z = -len / 2 + 0.55 + i * (len / n);
    for (const x of [-width / 2 + 0.1, width / 2 - 0.1]) {
      const p = mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.35, 5), C.woodDark);
      p.position.set(x, -0.12, z);
      g.add(p);
    }
  }
  return g;
}

function boat() {
  const g = new THREE.Group();
  const hull = mesh(new THREE.BoxGeometry(1.15, 0.38, 2.7), C.woodDark);
  hull.position.y = 0.12;
  const bow = mesh(new THREE.BoxGeometry(0.72, 0.3, 0.7), C.wood);
  bow.position.set(0, 0.14, -1.5);
  const cabin = mesh(new THREE.BoxGeometry(0.68, 0.42, 0.68), C.white);
  cabin.position.set(0, 0.5, 0.35);
  g.add(hull, bow, cabin);
  return g;
}

function watchtower() {
  const g = new THREE.Group();
  for (const [x, z] of [
    [-0.75, -0.75],
    [0.75, -0.75],
    [-0.75, 0.75],
    [0.75, 0.75],
  ]) {
    const p = mesh(new THREE.CylinderGeometry(0.08, 0.1, 3.6, 5), C.woodDark);
    p.position.set(x, 1.8, z);
    g.add(p);
  }
  const deck = mesh(new THREE.BoxGeometry(2.05, 0.12, 2.05), C.wood);
  deck.position.y = 3.5;
  const roof = mesh(new THREE.ConeGeometry(1.55, 0.82, 4), C.green);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 4.25;
  const rail = mesh(new THREE.BoxGeometry(2.05, 0.35, 2.05), C.woodMid);
  rail.position.y = 3.72;
  g.add(deck, roof, rail);
  const mark = pillMark(0.24);
  mark.position.set(0, 3.92, 1.04);
  g.add(mark);
  return g;
}

function bench() {
  const g = new THREE.Group();
  const seat = mesh(new THREE.BoxGeometry(1.25, 0.09, 0.38), C.wood);
  seat.position.y = 0.4;
  const back = mesh(new THREE.BoxGeometry(1.25, 0.34, 0.08), C.wood);
  back.position.set(0, 0.6, -0.16);
  g.add(seat, back);
  return g;
}

function torch() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.7, 5), C.woodDark);
  pole.position.y = 0.85;
  const flame = mesh(new THREE.SphereGeometry(0.13, 5, 5), C.torch);
  flame.position.y = 1.75;
  flame.material.emissive = new THREE.Color(C.torch);
  flame.material.emissiveIntensity = 0.75;
  g.add(pole, flame);
  return g;
}

function fence(len = 4) {
  const g = new THREE.Group();
  const rail = mesh(new THREE.BoxGeometry(len, 0.07, 0.055), C.woodDark);
  rail.position.y = 0.58;
  g.add(rail);
  const n = Math.round(len / 1.05);
  for (let i = 0; i <= n; i++) {
    const p = mesh(new THREE.BoxGeometry(0.065, 0.72, 0.065), C.wood);
    p.position.set(-len / 2 + (i * len) / n, 0.36, 0);
    g.add(p);
  }
  return g;
}

function stairs(steps = 10, rise = 0.2, run = 0.42) {
  const g = new THREE.Group();
  for (let i = 0; i < steps; i++) {
    const step = mesh(new THREE.BoxGeometry(1.35, 0.12, run), C.wood);
    step.position.set(0, i * rise, i * run);
    g.add(step);
  }
  return g;
}

function lighthouse() {
  const g = new THREE.Group();
  g.name = "lighthouse";

  const base = mesh(new THREE.CylinderGeometry(2.55, 2.95, 1.55, 12), C.green);
  base.position.y = 0.78;
  const mid = mesh(new THREE.CylinderGeometry(1.95, 2.4, 5.6, 12), C.white);
  mid.position.y = 4.3;
  const band = mesh(new THREE.CylinderGeometry(2.05, 2.2, 1.05, 12), C.green);
  band.position.y = 5.85;
  const top = mesh(new THREE.CylinderGeometry(1.6, 1.95, 2.15, 12), C.white);
  top.position.y = 7.4;
  const lantern = mesh(new THREE.CylinderGeometry(1.18, 1.22, 1.25, 8), 0xe8eee4);
  lantern.position.y = 9.05;
  lantern.material.emissive = new THREE.Color(0xfff1c2);
  lantern.material.emissiveIntensity = 0.28;
  const cap = mesh(new THREE.ConeGeometry(1.5, 1.2, 8), C.green);
  cap.position.y = 10.15;
  const spike = mesh(new THREE.ConeGeometry(0.07, 0.5, 5), C.woodDark);
  spike.position.y = 10.9;

  const door = mesh(new THREE.BoxGeometry(0.72, 1.2, 0.12), C.woodDark);
  door.position.set(0, 0.9, 2.65);
  const balcony = mesh(new THREE.TorusGeometry(1.62, 0.065, 5, 14), C.woodDark);
  balcony.rotation.x = Math.PI / 2;
  balcony.position.y = 8.3;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const post = mesh(new THREE.BoxGeometry(0.055, 0.52, 0.055), C.woodDark);
    post.position.set(Math.cos(a) * 1.62, 8.55, Math.sin(a) * 1.62);
    g.add(post);
  }
  const walk = mesh(new THREE.CylinderGeometry(1.78, 1.78, 0.1, 12), C.woodDark);
  walk.position.y = 8.22;

  const mark = pillMark(1.05);
  mark.position.set(0, 4.78, 2.28);

  g.add(base, mid, band, top, lantern, cap, spike, door, balcony, walk, mark);
  return g;
}

function caveMouth() {
  const g = new THREE.Group();
  const lipL = mesh(new THREE.BoxGeometry(1.4, 2.8, 2.4), C.rockDark);
  lipL.position.set(-1.5, 1.1, 0);
  lipL.rotation.z = 0.25;
  const lipR = mesh(new THREE.BoxGeometry(1.4, 2.8, 2.4), C.rock);
  lipR.position.set(1.5, 1.1, 0);
  lipR.rotation.z = -0.25;
  const arch = mesh(new THREE.BoxGeometry(3.2, 1.1, 2.2), C.rockDark);
  arch.position.set(0, 2.35, 0);
  const hole = mesh(new THREE.BoxGeometry(1.9, 1.7, 2.6), 0x121210);
  hole.position.set(0, 0.95, 0.15);
  g.add(lipL, lipR, arch, hole);
  return g;
}

function place(root, obj, x, z, rot = 0, yOff = 0, solidR = 0) {
  obj.position.set(x, heightAt(x, z) + yOff, z);
  obj.rotation.y = rot;
  root.add(obj);
  if (solidR > 0) block(x, z, solidR);
}

function pathBoards(root) {
  for (let i = 0; i < 20; i++) {
    const z = 26.2 - i * 1.12;
    const x = 0.18;
    const y0 = heightAt(x, z);
    const y1 = heightAt(x, z - 1.12);
    const plank = mesh(new THREE.BoxGeometry(1.42, 0.08, 1.14), i % 2 ? C.dirt : 0x7a6540);
    plank.position.set(x, y0 + 0.04, z);
    plank.rotation.x = -Math.atan2(y1 - y0, 1.12);
    root.add(plank);
  }
}

export const ZONES = [
  { id: "MAIN_DOCK", label: "MAIN DOCK", hint: "Starter water", x: 1.6, z: 32, r: 11, fish: true },
  { id: "NORTH_DOCK", label: "NORTH DOCK", hint: "Token trout water", x: -24, z: 8, r: 8, fish: true },
  { id: "EAST_BEACH", label: "EAST BEACH", hint: "Sandy shallows", x: 28, z: 10, r: 10, fish: true },
  { id: "SOUTH_CLIFFS", label: "SOUTH CLIFFS", hint: "Need Cliff Rod", x: -18, z: 18, r: 8, fish: true },
  { id: "CAVES", label: "THE CAVES", hint: "Dark pool", x: 17, z: 20, r: 7, fish: true },
  { id: "OFFSHORE", label: "OFFSHORE", hint: "Need Offshore Rod", x: -30, z: 2, r: 7, fish: true },
  { id: "FOREST", label: "PINE WOODS", hint: "No fishing", x: 10, z: -14, r: 10, fish: false },
  { id: "LIGHTHOUSE", label: "LIGHTHOUSE", hint: "Shop + burns", x: 0, z: -1, r: 8, fish: false },
  { id: "VILLAGE", label: "HUT ROW", hint: "Redeem counter", x: 6, z: 22, r: 6, fish: false },
];

export function zoneAt(x, z) {
  let best = { id: "ISLAND", label: "ISLAND PATH", hint: "Walk the hill", fish: false, d: 99 };
  for (const zn of ZONES) {
    const d = Math.hypot(x - zn.x, z - zn.z);
    if (d < zn.r && d < best.d) best = { ...zn, d };
  }
  if (heightAt(x, z) < 0.12 && best.id === "ISLAND") {
    return { id: "OCEAN", label: "OPEN OCEAN", hint: "Swim / boat", fish: true, d: 0 };
  }
  return best;
}

export function createWorld(scene) {
  BLOCKS.length = 0;
  const root = new THREE.Group();
  root.name = "island";

  const ocean = createWater();
  root.add(ocean);
  const deep = mesh(new THREE.PlaneGeometry(1100, 1100), C.oceanDeep, false);
  deep.rotation.x = -Math.PI / 2;
  deep.position.y = -0.45;
  root.add(deep);

  root.add(islandMesh());

  const light = lighthouse();
  const peak = heightAt(0, -1.2);
  light.position.set(0, peak, -1.2);
  root.add(light);
  block(0, -1.2, 3.1);

  const climb = new THREE.Group();
  for (let i = 0; i < 14; i++) {
    const z = 5.8 - i * 0.38;
    const y = heightAt(0, z);
    const step = mesh(new THREE.BoxGeometry(1.4, 0.1, 0.4), C.wood);
    step.position.set(0, y + 0.05, z);
    climb.add(step);
  }
  root.add(climb);

  const mainDock = dock(12, 2.15);
  mainDock.position.set(1.6, 0.12, 31.4);
  root.add(mainDock);
  place(root, hut(C.white), -6.8, 22.4, 0.25, 0, 1.8);
  place(root, hut(C.green), 8.6, 21.6, -0.3, 0, 1.8);

  const northDock = dock(10.5, 1.7);
  northDock.position.set(-27.2, 0.12, 8.0);
  northDock.rotation.y = 1.2;
  root.add(northDock);
  place(root, hut(0xd2b36a), -19.2, 6.4, 0.4, 0, 1.7);
  const skiff = boat();
  skiff.position.set(-31, 0.18, 5.6);
  skiff.rotation.y = 0.45;
  root.add(skiff);

  place(root, watchtower(), -16.8, 17.6, 0.2, -0.1, 1.6);
  place(root, caveMouth(), 17.2, 20.6, 0.45, -0.35, 2.4);
  const caveDock = dock(4.4, 1.25);
  caveDock.position.set(18.8, 0.12, 24.2);
  caveDock.rotation.y = 0.4;
  root.add(caveDock);

  place(root, hut(C.green), 25.2, 8.8, -0.4, 0, 1.7);
  place(root, hut(0xd2b36a), 28.4, 12.4, -0.55, 0, 1.7);
  place(root, bench(), 23.6, 11.2, -0.7, 0, 0.7);

  for (const [x, z] of [
    [22, 6.2],
    [26.2, 4.8],
    [30, 8.4],
    [27.6, 15.5],
    [21.5, 14.2],
  ]) {
    place(root, palm(), x, z, 0, 0, 0.7);
  }

  for (const [x, z] of [
    [8, -15],
    [12.2, -17.4],
    [15.4, -12.6],
    [6.2, -19.5],
    [18.2, -15.8],
    [10.4, -10.6],
    [4.1, -14.8],
    [14.2, -20.6],
    [-3.4, -13.8],
    [1.2, -17.6],
    [7.4, -8.2],
  ]) {
    place(root, pine(3.8 + ((x + z) % 5) * 0.22), x, z, 0, 0, 0.85);
  }

  for (const [x, z, rot] of [
    [-7.4, 5.2, 0.15],
    [8.2, -5.4, 1.1],
    [16.4, 3.2, 0.05],
    [-11.5, -5.2, 0.7],
    [12.6, 11.4, -0.35],
    [-5.2, 14.6, 0.1],
    [20.4, -7.2, 0.5],
    [-17.2, 12.4, 0.3],
  ]) {
    place(root, pillFlag(), x, z, rot, 0, 0.28);
  }

  for (const [x, z] of [
    [-11.2, 13.4],
    [-9.1, 11.6],
    [9.4, -7.6],
    [11.6, -5.8],
    [14.8, 8.4],
    [-3.6, -7.4],
    [6.8, 10.2],
  ]) {
    place(root, crate(), x, z, x * 0.15, 0, 0.7);
  }

  const f1 = fence(11);
  place(root, f1, 7.4, -3.6, 0.45, 0, 0.45);
  const f2 = fence(8.5);
  place(root, f2, -5.6, -7.2, -0.5, 0, 0.45);

  place(root, torch(), -1.15, 8.4);
  place(root, torch(), 1.35, 8.4);

  pathBoards(root);

  for (const [x, z] of [
    [3.2, 18.4], [5.1, 14.2], [-4.4, 16.6], [2.2, 8.8], [-2.6, 11.4],
    [7.8, 6.2], [-8.2, 9.4], [4.6, -2.2], [-1.8, -6.4], [9.2, -9.6],
    [1.4, 20.2], [-5.6, 4.2], [11.2, 2.4], [-3.2, 19.5], [6.4, 12.8],
    [13.4, -6.2], [-10.2, 3.4], [8.8, 16.2], [-7.4, -4.8], [16.2, 7.4],
    [0.6, 14.6], [4.2, -11.4], [-12.6, 8.8], [19.4, 4.2], [-2.2, 22.4],
  ]) {
    place(root, grassTuft(), x, z);
  }
  for (const [x, z] of [
    [6.4, 18.8], [-5.2, 20.2], [10.8, 5.4], [-8.6, 14.2], [3.6, -8.4], [14.2, 13.6],
  ]) {
    place(root, flowerPatch(), x, z);
  }
  for (const [x, z] of [
    [4.8, -6.2], [-9.4, 2.2], [13.6, -3.4], [-4.2, -10.6], [18.2, 1.6],
  ]) {
    place(root, boulder(), x, z, x * 0.2, 0, 0.55);
  }
  place(root, campfire(), -14.8, 15.2, 0, 0, 0.6);

  place(root, signPost("NO RUGS"), 3.4, 28.6, 0.1, 0, 0.35);
  place(root, signPost("CAST HERE"), 4.8, 33.2, -0.2, 0, 0.35);
  place(root, signPost("BEWARE CHEF"), -4.2, 8.8, 0.4, 0, 0.35);
  place(root, billboard("DEV WALLET THIS WAY"), 9.6, 24.8, -0.5, 0, 0.4);
  place(root, billboard("LIQUIDITY POOL"), -10.4, 20.6, 0.6, 0, 0.4);
  place(root, giantBoot(), 29.6, 6.2, -0.6, 0, 0.7);
  place(root, hiddenToilet(), 19.4, 18.8, 0.8, 0.05, 0.45);
  place(root, tinyShrine(), -8.8, -8.4, 0.2, 0, 0.5);
  place(root, washedUpPc(), 26.8, 17.4, 0.5, 0, 0.4);
  place(root, treasureChest(), 21.2, 22.6, 0.3, 0, 0.45);
  place(root, crashedCrate(), -26.4, 12.2, 0.4, 0, 0.7);
  const duck = rubberDuck();
  duck.position.set(8.4, 0.18, 34.6);
  duck.userData.float = true;
  root.add(duck);

  const taxHaven = farIsland("tax");
  taxHaven.position.set(92, -0.2, -48);
  taxHaven.rotation.y = 0.4;
  root.add(taxHaven);
  const paperHands = farIsland("paper");
  paperHands.position.set(-86, -0.2, 54);
  paperHands.rotation.y = -0.7;
  root.add(paperHands);
  const taxSign = billboard("TAX HAVEN", 3.2);
  taxSign.position.set(86, 1.2, -42);
  taxSign.lookAt(0, 2, 0);
  root.add(taxSign);
  const paperSign = billboard("PAPER HANDS ATOLL", 3.6);
  paperSign.position.set(-80, 1.2, 48);
  paperSign.lookAt(0, 2, 0);
  root.add(paperSign);

  const birds = [];
  for (let i = 0; i < 5; i++) {
    const b = seagull();
    const a = (i / 5) * Math.PI * 2;
    b.position.set(Math.cos(a) * 22, 9 + (i % 3), Math.sin(a) * 22);
    b.userData.orbit = a;
    b.userData.rad = 18 + i * 3;
    b.userData.h = 8.5 + i * 0.7;
    root.add(b);
    birds.push(b);
  }

  const npcs = [
    { type: "TRADER", x: 5.4, z: 22.8, rot: Math.PI },
    { type: "FISHERMAN", x: -2.8, z: 30.4, rot: 0.4 },
    { type: "DEFAULT", x: -3.4, z: 27.8, rot: 0.5 },
    { type: "BEACHGOER", x: 24.8, z: 10.6, rot: -0.8 },
    { type: "SCOUT", x: 9.8, z: -12.2, rot: 0.4 },
    { type: "PIRATE", x: -23.4, z: 8.0, rot: 1.2 },
    { type: "HUNTER", x: -16.2, z: 16.8, rot: 0.25 },
    { type: "CHEF", x: -2.2, z: 7.2, rot: 2.5 },
    { type: "BUILDER", x: 6.6, z: -4.8, rot: -0.4 },
    { type: "HARVESTER", x: 12.6, z: -15.2, rot: 1.05 },
    { type: "DEFAULT", x: -6.2, z: 6.4, rot: 0.75 },
  ];
  const people = [];
  for (const n of npcs) {
    const c = createCharacter(n.type, { phase: n.x });
    c.position.set(n.x, heightAt(n.x, n.z), n.z);
    c.rotation.y = n.rot;
    c.userData.npc = true;
    root.add(c);
    block(n.x, n.z, 0.45);
    people.push(c);
  }

  scene.add(root);
  return { root, ocean, people, lighthouse: light, birds, duck };
}

export const INTERACTS = [
  { id: "shop", label: "E  Shop", x: 0, z: 3.8, r: 3.4 },
  { id: "board", label: "E  Log", x: 1.4, z: 8.2, r: 2.4 },
  { id: "redeem", label: "E  Redeem", x: 4.2, z: 24.4, r: 2.6 },
  { id: "boat", label: "E  Boat", x: -31, z: 5.6, r: 3 },
  { id: "boot", label: "E  Giant boot", x: 29.6, z: 6.2, r: 2.2 },
  { id: "loo", label: "E  Secret loo", x: 19.4, z: 18.8, r: 2 },
  { id: "shrine", label: "E  Pill shrine", x: -8.8, z: -8.4, r: 2 },
  { id: "pc", label: "E  Washed-up PC", x: 26.8, z: 17.4, r: 2 },
  { id: "duck", label: "E  Rubber duck", x: 8.4, z: 34.6, r: 2.2 },
  { id: "chest", label: "E  Chest", x: 21.2, z: 22.6, r: 2 },
  { id: "crash", label: "E  Airdrop", x: -26.4, z: 12.2, r: 2.2 },
];
