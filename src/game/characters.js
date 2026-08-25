import * as THREE from "three";
import { C } from "./palette.js";
import { pillDecal } from "./pill.js";

const mat = (color, extras = {}) =>
  new THREE.MeshLambertMaterial({ color, flatShading: true, ...extras });

function box(w, h, d, color, y = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
  m.position.y = y;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function cyl(rTop, rBot, h, color, y = 0, seg = 7) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), mat(color));
  m.position.y = y;
  m.castShadow = true;
  return m;
}

function sphere(r, color, y = 0, seg = 8) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat(color));
  m.position.y = y;
  m.castShadow = true;
  return m;
}

function capsule(r, len, color, y = 0) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, 7), mat(color));
  m.position.y = y;
  m.castShadow = true;
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

export function createFirstPersonArms(rodEquipped) {
  const g = new THREE.Group();
  g.name = "fp-arms";
  const skin = mat(C.skin);
  const cloth = mat(C.white);

  const lArm = new THREE.Group();
  const lSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.28), cloth);
  lSleeve.position.set(-0.18, -0.34, -0.38);
  lSleeve.rotation.x = 1.05;
  lSleeve.rotation.z = 0.22;
  const lHand = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.05, 0.07), skin);
  lHand.position.set(-0.1, -0.26, -0.52);
  lArm.add(lSleeve, lHand);

  const rArm = new THREE.Group();
  const rSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.075, 0.3), cloth);
  rSleeve.position.set(0.2, -0.36, -0.34);
  rSleeve.rotation.x = 1.18;
  rSleeve.rotation.z = -0.28;
  const rHand = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.055, 0.08), skin);
  rHand.position.set(0.16, -0.26, -0.5);
  rArm.add(rSleeve, rHand);

  g.add(lArm, rArm);
  g.userData.lArm = lArm;
  g.userData.rArm = rArm;
  g.userData.pole = null;
  g.userData.line = null;
  g.userData.reel = null;
  g.userData.rod = null;

  if (rodEquipped) {
    const rod = new THREE.Group();
    rod.name = "held-rod";

    const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.18, 8), mat(0x8a5a2a));
    cork.rotation.x = 1.22;
    cork.position.set(0.16, -0.24, -0.5);

    const butt = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.02, 0.07, 8), mat(0x2a1a10));
    butt.rotation.x = 1.22;
    butt.position.set(0.14, -0.3, -0.42);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.018, 1.55, 8), mat(0x3a2616));
    pole.position.set(0.22, 0.18, -1.12);
    pole.rotation.x = 1.18;
    pole.rotation.z = -0.18;

    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.006, 0.22, 6), mat(0x6ed18a));
    tip.position.set(0.28, 0.62, -1.68);
    tip.rotation.x = 1.18;
    tip.rotation.z = -0.18;

    const reel = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.022, 10), mat(C.clothBlack));
    reel.rotation.z = Math.PI / 2;
    reel.position.set(0.12, -0.2, -0.48);
    const spool = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.006, 6, 10), mat(0x6ed18a));
    spool.rotation.y = Math.PI / 2;
    spool.position.copy(reel.position);

    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.3, 0.7, -1.78),
      new THREE.Vector3(0.36, -0.02, -3.2),
    ]);
    const line = new THREE.Line(
      lineGeo,
      new THREE.LineBasicMaterial({ color: 0xe8f2ec, transparent: true, opacity: 0.7 })
    );
    line.visible = false;

    rod.add(cork, butt, pole, tip, reel, spool, line);
    g.add(rod);
    g.userData.rod = rod;
    g.userData.pole = pole;
    g.userData.reel = reel;
    g.userData.line = line;
  }
  return g;
}

export function poseFishingArms(arms, phase, t) {
  if (!arms) return;
  const r = arms.userData.rArm;
  const l = arms.userData.lArm;
  const rod = arms.userData.rod;
  const line = arms.userData.line;
  if (!r) return;
  if (phase === "cast") {
    const k = Math.min(1, t / 0.38);
    r.rotation.x = -1.35 * k;
    l.rotation.x = -0.45 * k;
    if (rod) rod.rotation.x = -0.95 * k;
    if (line) line.visible = k > 0.65;
  } else if (phase === "wait") {
    r.rotation.x = -0.18 + Math.sin(t * 1.8) * 0.03;
    l.rotation.x = -0.1;
    if (rod) rod.rotation.x = -0.08 + Math.sin(t * 1.8) * 0.02;
    if (line) {
      line.visible = true;
      const pos = line.geometry.attributes.position;
      pos.setY(1, -0.08 + Math.sin(t * 2.6) * 0.1);
      pos.needsUpdate = true;
    }
  } else if (phase === "bite") {
    const shake = Math.sin(t * 26) * 0.1;
    r.rotation.x = -0.35 + shake;
    if (rod) rod.rotation.x = -0.18 + shake;
    if (line) line.visible = true;
  } else if (phase === "reel") {
    r.rotation.x = -0.55 + Math.sin(t * 14) * 0.14;
    l.rotation.x = -0.3 + Math.sin(t * 14) * 0.08;
    if (rod) rod.rotation.x = -0.22;
    if (line) line.visible = true;
  } else {
    r.rotation.x = 0.04 + Math.sin(t * 1.4) * 0.02;
    l.rotation.x = 0.02;
    if (rod) rod.rotation.x = 0.05 + Math.sin(t * 1.4) * 0.015;
    if (line) line.visible = false;
  }
}
