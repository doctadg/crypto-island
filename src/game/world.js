import * as THREE from "three";
import { C, ISLAND_R } from "./palette.js";
import { createCharacter } from "./characters.js";

const lambert = (color, extras = {}) =>
  new THREE.MeshLambertMaterial({ color, flatShading: true, ...extras });

function mesh(geo, color, shadows = true) {
  const m = new THREE.Mesh(geo, lambert(color));
  if (shadows) {
    m.castShadow = true;
    m.receiveShadow = true;
  }
  return m;
}

function pillFlag() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.05, 0.06, 3.2, 5), C.woodDark);
  pole.position.y = 1.6;
  const cloth = mesh(new THREE.BoxGeometry(0.9, 1.15, 0.04), C.white);
  cloth.position.set(0.5, 2.45, 0);
  const pill = mesh(new THREE.CapsuleGeometry(0.14, 0.22, 3, 6), C.pillGreen);
  pill.rotation.z = Math.PI / 2;
  pill.position.set(0.5, 2.45, 0.04);
  g.add(pole, cloth, pill);
  return g;
}

function crate() {
  const g = new THREE.Group();
  const box = mesh(new THREE.BoxGeometry(0.9, 0.7, 0.7), C.wood);
  box.position.y = 0.35;
  const stripe = mesh(new THREE.BoxGeometry(0.92, 0.18, 0.72), C.green);
  stripe.position.y = 0.42;
  const p = mesh(new THREE.CapsuleGeometry(0.1, 0.16, 3, 6), C.white);
  p.rotation.z = Math.PI / 2;
  p.position.set(0, 0.55, 0.37);
  g.add(box, stripe, p);
  return g;
}

function pine(h = 4.2) {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.12, 0.16, h * 0.28, 5), C.woodDark);
  trunk.position.y = h * 0.14;
  g.add(trunk);
  const layers = 3;
  for (let i = 0; i < layers; i++) {
    const s = 1 - i * 0.22;
    const cone = mesh(new THREE.ConeGeometry(1.15 * s, h * 0.42, 6), i % 2 ? C.greenDeep : C.green);
    cone.position.y = h * 0.32 + i * h * 0.22;
    g.add(cone);
  }
  return g;
}

function palm() {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.1, 0.16, 3.4, 5), 0x8a6a3a);
  trunk.position.y = 1.7;
  trunk.rotation.z = 0.12;
  g.add(trunk);
  for (let i = 0; i < 6; i++) {
    const leaf = mesh(new THREE.BoxGeometry(1.6, 0.08, 0.35), C.green);
    leaf.position.set(Math.cos((i / 6) * Math.PI * 2) * 0.6, 3.35, Math.sin((i / 6) * Math.PI * 2) * 0.6);
    leaf.rotation.y = (i / 6) * Math.PI * 2;
    leaf.rotation.z = -0.45;
    g.add(leaf);
  }
  return g;
}

function hut(roof = C.green) {
  const g = new THREE.Group();
  const posts = [
    [-0.9, -0.7],
    [0.9, -0.7],
    [-0.9, 0.7],
    [0.9, 0.7],
  ];
  for (const [x, z] of posts) {
    const p = mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.6, 5), C.wood);
    p.position.set(x, 0.8, z);
    g.add(p);
  }
  const roofM = mesh(new THREE.ConeGeometry(1.7, 0.85, 4), roof);
  roofM.rotation.y = Math.PI / 4;
  roofM.position.y = 2.05;
  g.add(roofM);
  const deck = mesh(new THREE.BoxGeometry(2.1, 0.08, 1.7), C.wood);
  deck.position.y = 0.08;
  g.add(deck);
  return g;
}

function dock(len = 8, width = 1.6) {
  const g = new THREE.Group();
  const plank = mesh(new THREE.BoxGeometry(width, 0.16, len), C.wood);
  plank.position.y = 0.28;
  g.add(plank);
  const count = Math.max(2, Math.round(len / 2.2));
  for (let i = 0; i < count; i++) {
    const z = -len / 2 + 0.6 + i * (len / count);
    for (const x of [-width / 2 + 0.12, width / 2 - 0.12]) {
      const p = mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.1, 5), C.woodDark);
      p.position.set(x, -0.2, z);
      g.add(p);
    }
  }
  return g;
}

function boat() {
  const g = new THREE.Group();
  const hull = mesh(new THREE.BoxGeometry(1.1, 0.35, 2.6), C.woodDark);
  hull.position.y = 0.1;
  const bow = mesh(new THREE.BoxGeometry(0.7, 0.28, 0.7), C.wood);
  bow.position.set(0, 0.12, -1.45);
  const cabin = mesh(new THREE.BoxGeometry(0.7, 0.45, 0.7), C.white);
  cabin.position.set(0, 0.48, 0.35);
  g.add(hull, bow, cabin);
  return g;
}

function watchtower() {
  const g = new THREE.Group();
  for (const [x, z] of [
    [-0.7, -0.7],
    [0.7, -0.7],
    [-0.7, 0.7],
    [0.7, 0.7],
  ]) {
    const p = mesh(new THREE.CylinderGeometry(0.08, 0.1, 3.4, 5), C.woodDark);
    p.position.set(x, 1.7, z);
    g.add(p);
  }
  const deck = mesh(new THREE.BoxGeometry(2, 0.14, 2), C.wood);
  deck.position.y = 3.3;
  const roof = mesh(new THREE.ConeGeometry(1.5, 0.8, 4), C.green);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 4.05;
  g.add(deck, roof);
  return g;
}

function bench() {
  const g = new THREE.Group();
  const seat = mesh(new THREE.BoxGeometry(1.2, 0.1, 0.38), C.wood);
  seat.position.y = 0.38;
  const back = mesh(new THREE.BoxGeometry(1.2, 0.35, 0.08), C.wood);
  back.position.set(0, 0.58, -0.16);
  g.add(seat, back);
  return g;
}

function torch() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.6, 5), C.woodDark);
  pole.position.y = 0.8;
  const flame = mesh(new THREE.SphereGeometry(0.12, 5, 5), C.torch);
  flame.position.y = 1.65;
  flame.material.emissive = new THREE.Color(C.torch);
  flame.material.emissiveIntensity = 0.7;
  g.add(pole, flame);
  return g;
}

function fence(len = 4) {
  const g = new THREE.Group();
  const rail = mesh(new THREE.BoxGeometry(len, 0.08, 0.06), C.woodDark);
  rail.position.y = 0.55;
  g.add(rail);
  const n = Math.round(len / 1.1);
  for (let i = 0; i <= n; i++) {
    const p = mesh(new THREE.BoxGeometry(0.07, 0.7, 0.07), C.wood);
    p.position.set(-len / 2 + (i * len) / n, 0.35, 0);
    g.add(p);
  }
  return g;
}

function lighthouse() {
  const g = new THREE.Group();
  g.name = "lighthouse";

  const base = mesh(new THREE.CylinderGeometry(2.35, 2.7, 1.4, 10), C.green);
  base.position.y = 0.7;
  const mid = mesh(new THREE.CylinderGeometry(1.85, 2.2, 5.4, 10), C.white);
  mid.position.y = 4.1;
  const band = mesh(new THREE.CylinderGeometry(1.95, 2.05, 1.15, 10), C.green);
  band.position.y = 5.55;
  const top = mesh(new THREE.CylinderGeometry(1.55, 1.85, 2.2, 10), C.white);
  top.position.y = 7.2;
  const lantern = mesh(new THREE.CylinderGeometry(1.15, 1.2, 1.3, 8), 0xdfe8e0);
  lantern.position.y = 8.85;
  lantern.material.emissive = new THREE.Color(0xfff1c2);
  lantern.material.emissiveIntensity = 0.25;
  const cap = mesh(new THREE.ConeGeometry(1.45, 1.15, 8), C.green);
  cap.position.y = 9.95;
  const spike = mesh(new THREE.ConeGeometry(0.08, 0.55, 5), C.woodDark);
  spike.position.y = 10.7;

  const door = mesh(new THREE.BoxGeometry(0.7, 1.15, 0.12), C.woodDark);
  door.position.set(0, 0.85, 2.45);
  const balcony = mesh(new THREE.TorusGeometry(1.55, 0.07, 5, 12), C.woodDark);
  balcony.rotation.x = Math.PI / 2;
  balcony.position.y = 8.15;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const post = mesh(new THREE.BoxGeometry(0.06, 0.55, 0.06), C.woodDark);
    post.position.set(Math.cos(a) * 1.55, 8.4, Math.sin(a) * 1.55);
    g.add(post);
  }

  const pill = new THREE.Group();
  const pillBody = mesh(new THREE.CapsuleGeometry(0.42, 0.85, 4, 8), C.white);
  pillBody.rotation.z = Math.PI / 2;
  const pillCap = mesh(new THREE.SphereGeometry(0.43, 8, 6, 0, Math.PI), C.green);
  pillCap.rotation.z = Math.PI / 2;
  pillCap.position.x = -0.42;
  pill.add(pillBody, pillCap);
  pill.position.set(0, 4.35, 2.12);

  const walk = mesh(new THREE.BoxGeometry(1.6, 0.16, 3.4), C.wood);
  walk.position.set(0, 0.22, 3.6);
  const railL = fence(3.2);
  railL.position.set(-0.75, 0.1, 3.6);
  railL.rotation.y = Math.PI / 2;
  const railR = fence(3.2);
  railR.position.set(0.75, 0.1, 3.6);
  railR.rotation.y = Math.PI / 2;

  const stairs = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const step = mesh(new THREE.BoxGeometry(1.2, 0.14, 0.42), C.wood);
    step.position.set(0, 0.12 + i * 0.18, 5.4 + i * 0.32);
    stairs.add(step);
  }

  g.add(base, mid, band, top, lantern, cap, spike, door, balcony, pill, walk, railL, railR, stairs);
  return g;
}

function rockChunk(w, h, d, color) {
  const geo = new THREE.DodecahedronGeometry(1, 0);
  geo.scale(w * 0.55, h * 0.55, d * 0.55);
  return mesh(geo, color);
}

function rockRing() {
  const g = new THREE.Group();
  const pts = 34;
  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const r = ISLAND_R * (0.8 + (i % 7) * 0.012);
    const h = 1.8 + (i % 5) * 0.55;
    const w = 3.2 + (i % 4) * 0.6;
    const d = 2.8 + ((i * 2) % 3) * 0.5;
    const rock = rockChunk(w, h, d, i % 2 ? C.rock : C.rockDark);
    rock.position.set(Math.cos(a) * r, h * 0.22, Math.sin(a) * r);
    rock.rotation.set(0.15 * (i % 3), a + 0.3, 0.08 * ((i % 4) - 2));
    g.add(rock);
  }
  for (const [x, z, s] of [
    [-18, 16, 1.15],
    [-22, 8, 1],
    [-20, 22, 0.9],
    [8, -22, 1.05],
    [16, -18, 0.85],
    [-14, 20, 0.8],
  ]) {
    const b = rockChunk(6.2 * s, 3.4 * s, 5.2 * s, C.rockDark);
    b.position.set(x, 1.1 * s, z);
    b.rotation.y = 0.5;
    g.add(b);
  }
  return g;
}

function ground() {
  const g = new THREE.Group();
  const dirt = mesh(new THREE.CylinderGeometry(ISLAND_R * 0.86, ISLAND_R * 0.9, 2.4, 12), 0x5a5344);
  dirt.position.y = -0.6;
  const grass = mesh(new THREE.CylinderGeometry(ISLAND_R * 0.74, ISLAND_R * 0.78, 0.55, 12), C.grass);
  grass.position.y = 0.72;
  const inner = mesh(new THREE.CylinderGeometry(ISLAND_R * 0.42, ISLAND_R * 0.5, 0.4, 10), C.grassDry);
  inner.position.y = 1.05;
  g.add(dirt, grass, inner);

  for (const [x, z, s] of [
    [-7, 9, 0.7],
    [6, 7, 0.55],
    [-4, -3, 0.8],
    [11, 3, 0.6],
    [-9, -2, 0.5],
    [3, -8, 0.7],
    [8, 14, 0.45],
  ]) {
    const bush = mesh(new THREE.DodecahedronGeometry(0.7 * s, 0), x + z > 0 ? C.green : C.grass);
    bush.position.set(x, 1.05, z);
    g.add(bush);
  }

  const beach = mesh(new THREE.BoxGeometry(22, 0.35, 10), C.sand);
  beach.position.set(22, 0.18, 6);
  beach.rotation.y = -0.35;
  const beach2 = mesh(new THREE.BoxGeometry(16, 0.28, 8), C.sandWet);
  beach2.position.set(26, 0.05, 14);
  beach2.rotation.y = -0.5;
  g.add(beach, beach2);
  return g;
}

function caveMouth() {
  const g = new THREE.Group();
  const lip = mesh(new THREE.BoxGeometry(4.4, 2.6, 2.2), C.rockDark);
  lip.position.y = 1.1;
  const hole = mesh(new THREE.BoxGeometry(2.2, 1.6, 2.4), 0x161614);
  hole.position.set(0, 0.95, 0.2);
  const pier = dock(4.2, 1.2);
  pier.position.set(0, -0.15, 3.1);
  g.add(lip, hole, pier);
  return g;
}

export const ZONES = [
  { id: "MAIN_DOCK", label: "MAIN DOCK", x: 2, z: 24, r: 9, fish: true },
  { id: "NORTH_DOCK", label: "NORTH DOCK", x: -22, z: 10, r: 8, fish: true },
  { id: "EAST_BEACH", label: "EAST BEACH", x: 26, z: 10, r: 10, fish: true },
  { id: "SOUTH_CLIFFS", label: "SOUTH CLIFFS", x: -18, z: 20, r: 8, fish: true },
  { id: "CAVES", label: "CAVES", x: 16, z: 22, r: 7, fish: true },
  { id: "OFFSHORE", label: "OFFSHORE", x: -28, z: 2, r: 7, fish: true },
  { id: "FOREST", label: "FOREST AREA", x: 10, z: -14, r: 10, fish: false },
  { id: "LIGHTHOUSE", label: "CENTRAL TOWER", x: 0, z: 0, r: 8, fish: false },
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

  const ocean = mesh(new THREE.PlaneGeometry(420, 420, 1, 1), C.ocean, false);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = 0.02;
  ocean.material.transparent = true;
  ocean.material.opacity = 0.92;
  ocean.receiveShadow = true;
  root.add(ocean);

  const deep = mesh(new THREE.PlaneGeometry(900, 900), C.oceanDeep, false);
  deep.rotation.x = -Math.PI / 2;
  deep.position.y = -0.4;
  root.add(deep);

  root.add(ground());
  root.add(rockRing());

  const light = lighthouse();
  light.position.set(0, 1.05, -2);
  root.add(light);

  const mainDock = dock(11, 2.1);
  mainDock.position.set(2.2, 0.15, 24);
  root.add(mainDock);
  const umbrella = hut(C.white);
  umbrella.position.set(0.2, 0.9, 21.2);
  root.add(umbrella);
  const traderHut = hut(C.green);
  traderHut.position.set(4.4, 0.9, 20.6);
  root.add(traderHut);

  const north = dock(10, 1.7);
  north.rotation.y = 1.15;
  north.position.set(-24, 0.1, 9);
  root.add(north);
  const northHut = hut(0xd2b36a);
  northHut.position.set(-18.5, 1.15, 6.5);
  root.add(northHut);
  const skiff = boat();
  skiff.position.set(-29, 0.15, 6.2);
  skiff.rotation.y = 0.4;
  root.add(skiff);

  const tower = watchtower();
  tower.position.set(-16.5, 1.6, 18.5);
  root.add(tower);

  const cave = caveMouth();
  cave.position.set(16.5, 0.35, 22);
  cave.rotation.y = 0.4;
  root.add(cave);

  const beachHut = hut(C.green);
  beachHut.position.set(24, 0.35, 8.5);
  root.add(beachHut);
  const beachHut2 = hut(0xd2b36a);
  beachHut2.position.set(27.5, 0.3, 12.2);
  root.add(beachHut2);
  const b1 = bench();
  b1.position.set(22.4, 0.25, 11.4);
  b1.rotation.y = -0.6;
  root.add(b1);

  for (const [x, z] of [
    [21, 6],
    [25, 4.5],
    [29, 8],
    [27, 15],
  ]) {
    const p = palm();
    p.position.set(x, 0.2, z);
    root.add(p);
  }

  for (const [x, z] of [
    [8, -16],
    [12, -18],
    [15, -13],
    [6, -20],
    [18, -16],
    [10, -11],
    [4, -15],
    [14, -21],
    [-4, -14],
    [1, -18],
  ]) {
    const t = pine(3.6 + ((x + z) % 5) * 0.25);
    t.position.set(x, 0.95, z);
    root.add(t);
  }

  for (const [x, z, rot] of [
    [-8, 4, 0.2],
    [7, -6, 1.2],
    [18, 2, 0],
    [-12, -6, 0.7],
    [12, 10, -0.4],
    [-6, 14, 0.1],
    [20, -8, 0.5],
  ]) {
    const f = pillFlag();
    f.position.set(x, 0.95, z);
    f.rotation.y = rot;
    root.add(f);
  }

  for (const [x, z] of [
    [-10, 12],
    [-8, 10],
    [9, -8],
    [11, -6],
    [14, 8],
    [-4, -8],
  ]) {
    const c = crate();
    c.position.set(x, 0.95, z);
    c.rotation.y = x * 0.2;
    root.add(c);
  }

  const f1 = fence(10);
  f1.position.set(8, 1.0, -4);
  f1.rotation.y = 0.4;
  const f2 = fence(8);
  f2.position.set(-6, 1.0, -8);
  f2.rotation.y = -0.5;
  root.add(f1, f2);

  const tL = torch();
  tL.position.set(-1.2, 1.0, 8);
  const tR = torch();
  tR.position.set(1.4, 1.0, 8);
  root.add(tL, tR);

  for (let i = 0; i < 9; i++) {
    const plank = mesh(new THREE.BoxGeometry(1.55, 0.08, 1.4), i % 2 ? 0xc4a56a : 0xb48d55);
    plank.position.set(0.1, 1.14, 3.6 + i * 1.55);
    root.add(plank);
  }

  const npcs = [
    { type: "TRADER", x: 3.6, z: 20.2, rot: Math.PI },
    { type: "FISHERMAN", x: 1.2, z: 26.4, rot: 0.2 },
    { type: "BEACHGOER", x: 23.5, z: 10.2, rot: -0.8 },
    { type: "SCOUT", x: 9.5, z: -12, rot: 0.4 },
    { type: "PIRATE", x: -23, z: 8.5, rot: 1.2 },
    { type: "HUNTER", x: -15.6, z: 17.8, rot: 0.3 },
    { type: "CHEF", x: -1.8, z: 6.4, rot: 2.6 },
    { type: "BUILDER", x: 6.8, z: -5.2, rot: -0.5 },
    { type: "HARVESTER", x: 12.4, z: -15.5, rot: 1.1 },
    { type: "DEFAULT", x: -6.5, z: 5.5, rot: 0.8 },
  ];
  const people = [];
  for (const n of npcs) {
    const c = createCharacter(n.type, { phase: n.x });
    c.position.set(n.x, 0.95, n.z);
    c.rotation.y = n.rot;
    c.userData.npc = true;
    root.add(c);
    people.push(c);
  }

  scene.add(root);
  return { root, ocean, people, lighthouse: light };
}

export function heightAt(x, z) {
  const r = Math.hypot(x, z);
  if (r > ISLAND_R + 6) return -0.2;
  if (r > ISLAND_R * 0.92) return 0.15;
  // beach shelf
  if (x > 16 && z > 0 && z < 20) return 0.35;
  if (r < 8) return 1.15;
  return 0.95;
}

export const INTERACTS = [
  { id: "shop", label: "E  Burn TOKEN for a rod", x: 0, z: 4.2, r: 3.2 },
  { id: "board", label: "E  Catch journal / leaderboard", x: 1.6, z: 7.6, r: 2.4 },
  { id: "redeem", label: "E  Redemption counter", x: 3.8, z: 20.4, r: 2.6 },
  { id: "boat", label: "E  Board skiff (offshore preview)", x: -29, z: 6.2, r: 3 },
];
