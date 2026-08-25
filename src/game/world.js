import * as THREE from "three";
import { C, ISLAND_R } from "./palette.js";
import { createCharacter } from "./characters.js";

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
  if (r > ISLAND_R + 8) return -0.35;
  const ang = Math.atan2(x, z);

  // east beach shelf
  const beach = x > 10 && z > -4 && z < 22 && r < ISLAND_R + 4;
  if (beach && r > 28) return 0.18 + Math.max(0, (34 - r) * 0.05);

  if (r > ISLAND_R + 1.5) return -0.2;

  // rim drop
  let h = 1.15;
  if (r > 32) h = 0.35 + (ISLAND_R + 1.5 - r) * 0.22;
  else if (r > 22) h = 1.15 + (32 - r) * 0.08;
  else if (r > 10) h = 1.95 + (22 - r) * 0.12;
  else h = 3.35 + (10 - r) * 0.08;

  // south-west cliff mass
  if (x < -8 && z > 6 && r < 36) h += 1.35 + Math.max(0, -x - 10) * 0.06;
  // north-east forest rise
  if (x > 2 && z < -6 && r < 30) h += 0.45;
  // cave notch
  if (x > 12 && x < 22 && z > 16 && z < 24) h = Math.min(h, 0.85);

  h += n2(x, z) * 0.22;
  return Math.max(0.12, h);
}

function islandMesh() {
  const g = new THREE.Group();
  const segs = 96;
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
    if (r > ISLAND_R + 3) y = -0.4;
    pos.setY(i, y);

    const slope = r > 30 || y < 0.7;
    const beach = x > 12 && z > -2 && z < 22 && y < 1.1;
    if (r > ISLAND_R + 2) tmp.set(C.oceanDeep);
    else if (beach) tmp.copy(cSand);
    else if (slope && y < 2.2) tmp.lerpColors(cRock, cRockD, (Math.sin(x * 0.4 + z) + 1) * 0.5);
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

  // stacked slate slabs on the rim — the sheet's cliff language
  for (let i = 0; i < 70; i++) {
    const a = (i / 70) * Math.PI * 2 + (i % 3) * 0.04;
    const r = ISLAND_R - 1.2 - (i % 5) * 0.55;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    // skip the sandy east bite
    if (x > 18 && z > 2 && z < 20) continue;
    const y = heightAt(x, z);
    const w = 3.4 + (i % 4) * 0.7;
    const d = 2.4 + ((i * 3) % 4) * 0.45;
    const h = 1.3 + (i % 5) * 0.55 + (x < -6 && z > 4 ? 1.1 : 0);
    const slab = mesh(new THREE.BoxGeometry(w, h, d), i % 2 ? C.rock : C.rockDark);
    slab.position.set(x, y - h * 0.28, z);
    slab.rotation.y = a + 0.35;
    slab.rotation.z = ((i % 5) - 2) * 0.08;
    slab.rotation.x = ((i % 3) - 1) * 0.06;
    g.add(slab);
  }
  return g;
}

function pillMark(scale = 1) {
  const g = new THREE.Group();
  const body = mesh(new THREE.CapsuleGeometry(0.38 * scale, 0.72 * scale, 4, 8), C.green);
  body.rotation.z = Math.PI / 2;
  const cap = mesh(new THREE.SphereGeometry(0.39 * scale, 8, 6, 0, Math.PI), C.white);
  cap.rotation.z = Math.PI / 2;
  cap.position.x = 0.36 * scale;
  g.add(body, cap);
  return g;
}

function pillFlag() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.045, 0.055, 3.4, 5), C.woodDark);
  pole.position.y = 1.7;
  const cloth = mesh(new THREE.BoxGeometry(0.95, 1.25, 0.04), C.white);
  cloth.position.set(0.52, 2.55, 0);
  const p = pillMark(0.32);
  p.position.set(0.52, 2.55, 0.05);
  g.add(pole, cloth, p);
  return g;
}

function crate() {
  const g = new THREE.Group();
  const box = mesh(new THREE.BoxGeometry(0.95, 0.72, 0.72), C.wood);
  box.position.y = 0.36;
  const stripe = mesh(new THREE.BoxGeometry(0.97, 0.16, 0.74), C.green);
  stripe.position.y = 0.42;
  const p = pillMark(0.22);
  p.position.set(0, 0.55, 0.38);
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
  const trunk = mesh(new THREE.CylinderGeometry(0.09, 0.15, 3.6, 5), 0x8a6a3a);
  trunk.position.y = 1.8;
  trunk.rotation.z = 0.14;
  g.add(trunk);
  for (let i = 0; i < 8; i++) {
    const leaf = mesh(new THREE.BoxGeometry(2.1, 0.05, 0.42), i % 2 ? C.green : C.greenDeep);
    const a = (i / 8) * Math.PI * 2;
    leaf.position.set(Math.cos(a) * 0.85, 3.45, Math.sin(a) * 0.85);
    leaf.rotation.y = a;
    leaf.rotation.z = -0.85;
    leaf.rotation.x = 0.12;
    g.add(leaf);
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
  const mark = pillMark(0.28);
  mark.position.set(0, 3.95, 1.05);
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

  const mark = pillMark(1);
  mark.position.set(0, 4.45, 2.2);

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

function place(root, obj, x, z, rot = 0, yOff = 0) {
  obj.position.set(x, heightAt(x, z) + yOff, z);
  obj.rotation.y = rot;
  root.add(obj);
  return obj;
}

export const ZONES = [
  { id: "MAIN_DOCK", label: "MAIN DOCK", x: 1.5, z: 28, r: 8, fish: true },
  { id: "NORTH_DOCK", label: "NORTH DOCK", x: -24, z: 8, r: 8, fish: true },
  { id: "EAST_BEACH", label: "EAST BEACH", x: 28, z: 10, r: 10, fish: true },
  { id: "SOUTH_CLIFFS", label: "SOUTH CLIFFS", x: -18, z: 18, r: 8, fish: true },
  { id: "CAVES", label: "CAVES", x: 17, z: 20, r: 7, fish: true },
  { id: "OFFSHORE", label: "OFFSHORE", x: -30, z: 2, r: 7, fish: true },
  { id: "FOREST", label: "FOREST AREA", x: 10, z: -14, r: 10, fish: false },
  { id: "LIGHTHOUSE", label: "CENTRAL TOWER", x: 0, z: -1, r: 8, fish: false },
];

export function zoneAt(x, z) {
  let best = { id: "ISLAND", label: "ISLAND PATH", fish: false, d: 99 };
  for (const zn of ZONES) {
    const d = Math.hypot(x - zn.x, z - zn.z);
    if (d < zn.r && d < best.d) best = { ...zn, d };
  }
  return best;
}

export function createWorld(scene) {
  const root = new THREE.Group();
  root.name = "island";

  const ocean = mesh(new THREE.PlaneGeometry(520, 520, 1, 1), C.ocean, false);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = 0.04;
  ocean.material.transparent = true;
  ocean.material.opacity = 0.94;
  ocean.receiveShadow = true;
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

  const climb = stairs(12, 0.18, 0.4);
  climb.position.set(0, peak - 2.05, 3.4);
  root.add(climb);

  const mainDock = dock(12, 2.15);
  mainDock.position.set(1.6, 0.12, 31.4);
  root.add(mainDock);
  place(root, hut(C.white), -6.8, 22.4, 0.25);
  place(root, hut(C.green), 8.6, 21.6, -0.3);

  const northDock = dock(10.5, 1.7);
  northDock.position.set(-27.2, 0.12, 8.0);
  northDock.rotation.y = 1.2;
  root.add(northDock);
  place(root, hut(0xd2b36a), -19.2, 6.4, 0.4);
  const skiff = boat();
  skiff.position.set(-31, 0.18, 5.6);
  skiff.rotation.y = 0.45;
  root.add(skiff);

  place(root, watchtower(), -16.8, 17.6, 0.2, -0.1);
  place(root, caveMouth(), 17.2, 20.6, 0.45, -0.35);
  const caveDock = dock(4.4, 1.25);
  caveDock.position.set(18.8, 0.12, 24.2);
  caveDock.rotation.y = 0.4;
  root.add(caveDock);

  place(root, hut(C.green), 25.2, 8.8, -0.4);
  place(root, hut(0xd2b36a), 28.4, 12.4, -0.55);
  place(root, bench(), 23.6, 11.2, -0.7);

  for (const [x, z] of [
    [22, 6.2],
    [26.2, 4.8],
    [30, 8.4],
    [27.6, 15.5],
    [21.5, 14.2],
  ]) {
    place(root, palm(), x, z);
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
    place(root, pine(3.8 + ((x + z) % 5) * 0.22), x, z);
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
    place(root, pillFlag(), x, z, rot);
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
    place(root, crate(), x, z, x * 0.15);
  }

  const f1 = fence(11);
  place(root, f1, 7.4, -3.6, 0.45);
  const f2 = fence(8.5);
  place(root, f2, -5.6, -7.2, -0.5);

  place(root, torch(), -1.15, 8.4);
  place(root, torch(), 1.35, 8.4);

  const dirt = mesh(new THREE.BoxGeometry(1.7, 0.06, 14), C.dirt);
  dirt.position.set(0.15, heightAt(0.2, 12) + 0.02, 11.5);
  dirt.rotation.x = -0.08;
  root.add(dirt);

  const npcs = [
    { type: "TRADER", x: 5.4, z: 22.8, rot: Math.PI },
    { type: "FISHERMAN", x: 2.4, z: 33.6, rot: 0.15 },
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
    people.push(c);
  }

  scene.add(root);
  return { root, ocean, people, lighthouse: light };
}

export const INTERACTS = [
  { id: "shop", label: "E  Burn TOKEN for a rod", x: 0, z: 3.8, r: 3.4 },
  { id: "board", label: "E  Catch journal / leaderboard", x: 1.4, z: 8.2, r: 2.4 },
  { id: "redeem", label: "E  Redemption counter", x: 4.2, z: 24.4, r: 2.6 },
  { id: "boat", label: "E  Board skiff (offshore preview)", x: -31, z: 5.6, r: 3 },
];
