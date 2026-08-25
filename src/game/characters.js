import * as THREE from "three";
import { C } from "./palette.js";
import { pillDecal } from "./pill.js";

const mat = (color, extras = {}) =>
  new THREE.MeshLambertMaterial({ color, flatShading: true, ...extras });

function box(w, h, d, color, y = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
  m.position.y = y;
  return m;
}

function cyl(rTop, rBot, h, color, y = 0, seg = 6) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), mat(color));
  m.position.y = y;
  return m;
}

function sphere(r, color, y = 0, seg = 6) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat(color));
  m.position.y = y;
  return m;
}

function capsule(r, len, color, y = 0) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 2, 6), mat(color));
  m.position.y = y;
  return m;
}

export const ARCHETYPES = {
  DEFAULT: { hat: "cap", hatColor: C.clothBlack, shirt: C.white, pants: C.clothBlack, shoes: C.white, extra: "tee" },
  FISHERMAN: { hat: "bucket", hatColor: C.clothGreen, shirt: C.white, pants: C.clothGreen, shoes: C.clothGreen, extra: "overalls", prop: "rod" },
  HUNTER: { hat: "beanie", hatColor: C.clothBlack, shirt: C.clothBlack, pants: C.clothBlack, shoes: C.white, extra: "tee", prop: "gun" },
  HARVESTER: { hat: "cap", hatColor: C.white, shirt: C.white, pants: C.clothGreen, shoes: C.white, extra: "overalls", prop: "axe" },
  TRADER: { hat: "top", hatColor: C.clothGreen, shirt: C.clothGreen, pants: C.clothGreen, shoes: C.clothBlack, extra: "suit" },
  PIRATE: { hat: "tricorn", hatColor: C.clothBlack, shirt: C.white, pants: C.clothBlack, shoes: C.clothBlack, extra: "coat" },
  BUILDER: { hat: "hardhat", hatColor: C.white, shirt: C.clothBlack, pants: C.clothBlack, shoes: C.white, extra: "vest" },
  SCOUT: { hat: "cap", hatColor: C.clothGreen, shirt: C.clothGreen, pants: C.clothBlack, shoes: C.white, extra: "pack" },
  CHEF: { hat: "toque", hatColor: C.white, shirt: C.white, pants: C.clothBlack, shoes: C.clothBlack, extra: "apron", prop: "pan" },
  BEACHGOER: { hat: "straw", hatColor: C.hatStraw, shirt: 0x3f8f55, pants: C.clothGreen, shoes: 0x6b4a28, extra: "hawaii" },
};

function makeHat(kind, color) {
  const g = new THREE.Group();
  if (kind === "cap") {
    g.add(cyl(0.2, 0.22, 0.1, color, 0.02, 8));
    const brim = box(0.2, 0.025, 0.14, color);
    brim.position.set(0, -0.01, 0.16);
    g.add(brim);
  } else if (kind === "bucket") {
    g.add(cyl(0.17, 0.22, 0.12, color, 0.05, 8));
    g.add(cyl(0.3, 0.3, 0.03, color, -0.02, 10));
  } else if (kind === "beanie") {
    g.add(sphere(0.21, color, 0.04, 8));
  } else if (kind === "top") {
    g.add(cyl(0.17, 0.17, 0.2, color, 0.12, 8));
    g.add(cyl(0.28, 0.28, 0.035, color, -0.02, 8));
  } else if (kind === "tricorn") {
    const brim = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.09, 3), mat(color));
    brim.rotation.y = Math.PI / 6;
    brim.position.y = 0.04;
    g.add(brim);
    g.add(sphere(0.16, color, 0.08, 6));
  } else if (kind === "hardhat") {
    g.add(sphere(0.22, color, 0.04, 8));
    g.add(cyl(0.24, 0.24, 0.035, color, -0.04, 8));
  } else if (kind === "toque") {
    g.add(cyl(0.18, 0.2, 0.26, C.white, 0.14, 8));
    g.add(cyl(0.22, 0.22, 0.045, C.white, -0.03, 8));
  } else if (kind === "straw") {
    g.add(cyl(0.2, 0.2, 0.09, color, 0.05, 8));
    g.add(cyl(0.36, 0.36, 0.025, color, -0.02, 10));
    g.add(cyl(0.21, 0.21, 0.03, C.clothBlack, 0.02, 8));
  }
  return g;
}

function makeProp(kind) {
  const g = new THREE.Group();
  if (kind === "rod") {
    const pole = cyl(0.015, 0.02, 1.45, 0x3a2a18, 0, 5);
    pole.rotation.z = 0.42;
    pole.position.set(0.18, 0.42, 0.04);
    g.add(pole);
    const reel = sphere(0.045, C.clothBlack);
    reel.position.set(0.1, -0.02, 0.05);
    g.add(reel);
  } else if (kind === "gun") {
    const stock = box(0.07, 0.07, 0.58, 0x3a3a38);
    stock.position.set(0.1, 0.02, 0.2);
    g.add(stock);
  } else if (kind === "axe") {
    const handle = cyl(0.02, 0.025, 0.72, 0x6a4a2d, 0, 5);
    handle.rotation.z = -0.55;
    handle.position.set(0.16, 0.22, 0.03);
    const head = box(0.2, 0.11, 0.05, 0x8a8d88);
    head.position.set(0.36, 0.5, 0.03);
    g.add(handle, head);
  } else if (kind === "pan") {
    const pan = cyl(0.15, 0.13, 0.035, C.clothBlack, 0, 8);
    pan.position.set(0.26, 0.0, 0.1);
    g.add(pan);
  }
  return g;
}

export function createCharacter(archetype = "DEFAULT", opts = {}) {
  const spec = ARCHETYPES[archetype] || ARCHETYPES.DEFAULT;
  const root = new THREE.Group();
  root.name = `char-${archetype}`;
  root.userData.archetype = archetype;

  const hips = new THREE.Group();
  hips.position.y = 0.56;

  const torso = capsule(0.16, 0.38, spec.shirt, 0.48);
  torso.scale.set(1.15, 1, 0.85);
  const pelvis = box(0.32, 0.14, 0.2, spec.pants, 0.08);
  hips.add(torso, pelvis);

  if (spec.extra === "overalls") {
    const bib = box(0.22, 0.28, 0.02, spec.pants);
    bib.position.set(0, 0.46, 0.15);
    hips.add(bib);
    const strapL = box(0.035, 0.28, 0.02, spec.pants);
    strapL.position.set(-0.09, 0.58, 0.15);
    const strapR = strapL.clone();
    strapR.position.x = 0.09;
    hips.add(strapL, strapR);
  }
  if (spec.extra === "suit") {
    const jacket = box(0.4, 0.48, 0.26, spec.shirt, 0.42);
    hips.add(jacket);
    const tie = box(0.04, 0.16, 0.02, C.white);
    tie.position.set(0, 0.5, 0.14);
    hips.add(tie);
  }
  if (spec.extra === "coat") {
    const coat = box(0.5, 0.82, 0.32, C.clothBlack, 0.28);
    hips.add(coat);
    const shirt = box(0.22, 0.22, 0.04, C.white);
    shirt.position.set(0, 0.52, 0.17);
    hips.add(shirt);
  }
  if (spec.extra === "apron") {
    const apron = box(0.28, 0.48, 0.02, C.white);
    apron.position.set(0, 0.22, 0.15);
    hips.add(apron);
  }
  if (spec.extra === "vest") {
    const vest = box(0.4, 0.3, 0.26, C.clothGreen, 0.42);
    hips.add(vest);
    const belt = box(0.28, 0.08, 0.14, 0x4a3a22);
    belt.position.set(0, 0.22, 0.12);
    hips.add(belt);
  }
  if (spec.extra === "pack") {
    const pack = box(0.26, 0.28, 0.12, 0x3a4a32);
    pack.position.set(0, 0.46, -0.2);
    hips.add(pack);
  }
  if (spec.extra === "hawaii") {
    for (let i = 0; i < 5; i++) {
      const flower = sphere(0.03, i % 2 ? 0xe8d36a : 0xf2f4ee, 0);
      flower.position.set(-0.1 + (i % 3) * 0.1, 0.42 + (i % 2) * 0.1, 0.15);
      hips.add(flower);
    }
  }

  const decal = pillDecal(spec.extra === "tee" || spec.extra === "hawaii" ? 1.15 : 0.8);
  decal.position.set(0.0, 0.48, 0.17);
  hips.add(decal);

  const neck = cyl(0.055, 0.06, 0.16, C.skin, 0.78, 6);
  hips.add(neck);

  const head = new THREE.Group();
  head.position.y = 1.02;
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 7), mat(C.skin));
  skull.scale.set(0.95, 1.22, 0.92);
  skull.position.y = 0.1;
  skull.castShadow = true;
  head.add(skull);
  const jaw = sphere(0.12, C.skinShadow, -0.08, 7);
  jaw.scale.set(1.05, 0.7, 0.9);
  head.add(jaw);

  const makeEye = (x) => {
    const eye = new THREE.Group();
    const white = sphere(0.092, C.white, 0, 8);
    white.scale.set(1, 1.08, 0.88);
    const pupil = sphere(0.034, C.black, 0, 6);
    pupil.position.z = 0.07;
    eye.add(white, pupil);
    eye.position.set(x, 0.13, 0.175);
    return eye;
  };
  head.add(makeEye(-0.075), makeEye(0.075));

  const brow = box(0.22, 0.025, 0.04, C.skinShadow);
  brow.position.set(0, 0.2, 0.14);
  head.add(brow);
  const nose = box(0.045, 0.055, 0.06, C.skinShadow);
  nose.position.set(0, 0.05, 0.175);
  head.add(nose);
  const mouth = box(0.09, 0.018, 0.02, 0x5a4030);
  mouth.position.set(0, -0.03, 0.165);
  head.add(mouth);

  if (archetype === "TRADER") {
    const beard = box(0.12, 0.14, 0.06, 0x3a3024);
    beard.position.set(0, -0.14, 0.1);
    head.add(beard);
  }
  if (archetype === "PIRATE") {
    const beard = box(0.16, 0.1, 0.06, 0x4a4034);
    beard.position.set(0, -0.14, 0.1);
    head.add(beard);
  }
  if (archetype === "BEACHGOER") {
    const glasses = box(0.24, 0.05, 0.07, C.clothBlack);
    glasses.position.set(0, 0.12, 0.17);
    head.add(glasses);
  }

  const hat = makeHat(spec.hat, spec.hatColor);
  hat.position.y = 0.3;
  head.add(hat);
  hips.add(head);

  function arm(side) {
    const g = new THREE.Group();
    g.position.set(side * 0.22, 0.64, 0);
    const sleeveColor = spec.extra === "suit" || spec.extra === "coat" ? spec.shirt : C.skin;
    const upper = capsule(0.045, 0.28, sleeveColor, -0.18);
    const fore = capsule(0.04, 0.26, C.skin, -0.5);
    const hand = sphere(0.05, C.skin, -0.7, 6);
    g.add(upper, fore, hand);
    return g;
  }
  const lArm = arm(-1);
  const rArm = arm(1);
  if (spec.prop) rArm.add(makeProp(spec.prop));
  hips.add(lArm, rArm);

  function leg(side) {
    const g = new THREE.Group();
    g.position.set(side * 0.09, 0.04, 0);
    g.add(capsule(0.055, 0.42, spec.pants, -0.28));
    const shoe = box(0.11, 0.06, 0.2, spec.shoes);
    shoe.position.set(0, -0.56, 0.03);
    const sole = box(0.12, 0.02, 0.21, C.clothBlack);
    sole.position.set(0, -0.6, 0.03);
    g.add(shoe, sole);
    return g;
  }
  const lLeg = leg(-1);
  const rLeg = leg(1);
  hips.add(lLeg, rLeg);
  root.add(hips);

  root.userData.parts = { hips, head, lArm, rArm, lLeg, rLeg };
  root.userData.phase = opts.phase || Math.random() * Math.PI * 2;
  if (opts.scale) root.scale.setScalar(opts.scale);
  return root;
}

export function animateCharacter(root, t, moving = false, fishing = false) {
  const p = root.userData.parts;
  if (!p) return;
  const ph = root.userData.phase || 0;
  const sway = moving ? 1 : 0.16;
  const step = Math.sin(t * 6.5 + ph) * 0.38 * sway;
  p.lLeg.rotation.x = step;
  p.rLeg.rotation.x = -step;
  p.lArm.rotation.x = -step * 0.75;
  p.rArm.rotation.x = fishing ? -1.05 + Math.sin(t * 2.6) * 0.1 : step * 0.75;
  p.head.rotation.y = Math.sin(t * 0.6 + ph) * 0.1;
  p.hips.position.y = 0.56 + Math.abs(Math.sin(t * 6.5 + ph)) * (moving ? 0.035 : 0.01);
}

function alongZ(mesh) {
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function makeHand(skinMat, side = 1) {
  const h = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.022, 0.05), skinMat);
  palm.position.set(0, -0.006, 0);
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.042, 8), skinMat);
  wrap.rotation.x = Math.PI / 2;
  wrap.position.y = -0.002;
  const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.028), skinMat);
  thumb.position.set(side * -0.02, 0.01, 0.004);
  thumb.rotation.z = side * 0.85;
  h.add(palm, wrap, thumb);
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.01, 0.026), skinMat);
    f.position.set(side * (-0.012 + i * 0.009), 0.01, 0.02);
    f.rotation.x = 0.7;
    h.add(f);
  }
  return h;
}

export function createFirstPersonArms(rodEquipped) {
  const g = new THREE.Group();
  g.name = "fp-arms";
  const skin = mat(C.skin);
  const cloth = mat(0xe8ebe4);
  const wood = mat(0x3a2818);
  const cork = mat(0xb07a3a);
  const dark = mat(0x1a1612);
  const mint = mat(0x6ed18a);

  const rig = new THREE.Group();
  rig.name = "rod-rig";
  rig.position.set(0.18, -0.24, -0.32);
  rig.rotation.set(0.62, 0.18, -0.12);

  const rFore = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.015, 0.08, 7), cloth));
  rFore.position.set(0.05, -0.02, 0.22);
  rFore.visible = false;
  const rHand = makeHand(skin, 1);
  rHand.position.set(0.0, -0.02, -0.02);
  rHand.rotation.z = 0.2;

  const lFore = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.014, 0.07, 7), cloth));
  lFore.position.set(-0.05, 0.0, -0.12);
  lFore.visible = false;
  const lHand = makeHand(skin, -1);
  lHand.position.set(0.0, -0.018, -0.14);
  lHand.rotation.z = -0.15;

  g.userData.lArm = lFore;
  g.userData.rArm = rFore;
  g.userData.pole = null;
  g.userData.line = null;
  g.userData.reel = null;
  g.userData.rod = rig;

  if (rodEquipped) {
    const butt = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.017, 0.045, 8), dark));
    butt.position.z = 0.08;
    const handle = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.017, 0.16, 10), cork));
    handle.position.z = -0.04;
    const seat = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.015, 0.035, 8), dark));
    seat.position.z = -0.14;
    const blank = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.012, 1.05, 8), wood));
    blank.position.z = -0.68;
    const tip = alongZ(new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.004, 0.2, 6), mint));
    tip.position.z = -1.3;
    const guide = new THREE.Mesh(new THREE.TorusGeometry(0.009, 0.002, 5, 8), dark);
    guide.position.z = -1.18;

    const reel = new THREE.Group();
    const housing = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.016, 10), dark);
    housing.rotation.z = Math.PI / 2;
    const spool = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.005, 6, 10), mint);
    spool.rotation.y = Math.PI / 2;
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.008, 0.032), dark);
    foot.position.y = 0.016;
    reel.add(housing, spool, foot);
    reel.position.set(0.0, -0.032, -0.05);

    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -1.4),
      new THREE.Vector3(0.01, -0.06, -2.3),
    ]);
    const line = new THREE.Line(
      lineGeo,
      new THREE.LineBasicMaterial({ color: 0xe8f2ec, transparent: true, opacity: 0.65 })
    );
    line.visible = false;

    rig.add(butt, handle, seat, blank, tip, guide, reel, line);
    g.userData.pole = blank;
    g.userData.reel = reel;
    g.userData.line = line;
  }

  rig.add(rFore, rHand, lFore, lHand);
  g.add(rig);
  return g;
}

export function poseFishingArms(arms, phase, t) {
  if (!arms) return;
  const rig = arms.userData.rod;
  const line = arms.userData.line;
  const reel = arms.userData.reel;
  if (!rig) return;
  const base = { x: 0.62, y: 0.18, z: -0.12 };
  if (phase === "cast") {
    const k = Math.min(1, t / 0.38);
    rig.rotation.x = base.x - 0.85 * k;
    rig.rotation.z = base.z - 0.12 * k;
    if (line) line.visible = k > 0.62;
  } else if (phase === "wait") {
    rig.rotation.x = base.x + Math.sin(t * 1.6) * 0.03;
    rig.rotation.z = base.z;
    if (line) {
      line.visible = true;
      const pos = line.geometry.attributes.position;
      pos.setY(1, -0.08 + Math.sin(t * 2.4) * 0.07);
      pos.needsUpdate = true;
    }
  } else if (phase === "bite") {
    const shake = Math.sin(t * 24) * 0.07;
    rig.rotation.x = base.x - 0.12 + shake;
    rig.rotation.z = base.z + shake * 0.4;
    if (line) line.visible = true;
  } else if (phase === "reel") {
    rig.rotation.x = base.x - 0.28 + Math.sin(t * 13) * 0.05;
    if (reel) reel.rotation.x = t * 14;
    if (line) line.visible = true;
  } else {
    rig.rotation.x = base.x + Math.sin(t * 1.3) * 0.018;
    rig.rotation.y = base.y;
    rig.rotation.z = base.z;
    if (line) line.visible = false;
    if (reel) reel.rotation.x = 0;
  }
}
