import * as THREE from "three";
import { C } from "./palette.js";

const mat = (color, extras = {}) =>
  new THREE.MeshLambertMaterial({ color, flatShading: true, ...extras });

function box(w, h, d, color, y = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
  m.position.y = y;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function cyl(rTop, rBot, h, color, y = 0, seg = 6) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), mat(color));
  m.position.y = y;
  m.castShadow = true;
  return m;
}

function sphere(r, color, y = 0, seg = 6) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat(color));
  m.position.y = y;
  m.castShadow = true;
  return m;
}

function pillDecal(scale = 1) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.07 * scale, 0.12 * scale, 3, 6), mat(C.white));
  body.rotation.z = Math.PI / 2;
  const half = new THREE.Mesh(new THREE.SphereGeometry(0.072 * scale, 6, 6, 0, Math.PI), mat(C.pillGreen));
  half.rotation.z = Math.PI / 2;
  half.position.x = -0.06 * scale;
  g.add(body, half);
  return g;
}

export const ARCHETYPES = {
  DEFAULT: {
    hat: "cap",
    hatColor: C.clothBlack,
    shirt: C.white,
    pants: C.clothBlack,
    shoes: C.white,
    extra: "tee",
  },
  FISHERMAN: {
    hat: "bucket",
    hatColor: C.clothGreen,
    shirt: C.white,
    pants: C.clothGreen,
    shoes: C.clothGreen,
    extra: "overalls",
    prop: "rod",
  },
  HUNTER: {
    hat: "beanie",
    hatColor: C.clothBlack,
    shirt: C.clothBlack,
    pants: C.clothBlack,
    shoes: C.white,
    extra: "tee",
    prop: "gun",
  },
  HARVESTER: {
    hat: "cap",
    hatColor: C.white,
    shirt: C.white,
    pants: C.clothGreen,
    shoes: C.white,
    extra: "overalls",
    prop: "axe",
  },
  TRADER: {
    hat: "top",
    hatColor: C.clothGreen,
    shirt: C.clothGreen,
    pants: C.clothGreen,
    shoes: C.clothBlack,
    extra: "suit",
  },
  PIRATE: {
    hat: "tricorn",
    hatColor: C.clothBlack,
    shirt: C.white,
    pants: C.clothBlack,
    shoes: C.clothBlack,
    extra: "coat",
  },
  BUILDER: {
    hat: "hardhat",
    hatColor: C.white,
    shirt: C.clothBlack,
    pants: C.clothBlack,
    shoes: C.white,
    extra: "vest",
  },
  SCOUT: {
    hat: "cap",
    hatColor: C.clothGreen,
    shirt: C.clothGreen,
    pants: C.clothBlack,
    shoes: C.white,
    extra: "pack",
  },
  CHEF: {
    hat: "toque",
    hatColor: C.white,
    shirt: C.white,
    pants: C.clothBlack,
    shoes: C.clothBlack,
    extra: "apron",
    prop: "pan",
  },
  BEACHGOER: {
    hat: "straw",
    hatColor: C.hatStraw,
    shirt: 0x3f8f55,
    pants: C.clothGreen,
    shoes: 0x6b4a28,
    extra: "hawaii",
  },
};

function makeHat(kind, color) {
  const g = new THREE.Group();
  if (kind === "cap") {
    g.add(cyl(0.22, 0.24, 0.12, color, 0, 8));
    const brim = box(0.22, 0.03, 0.16, color);
    brim.position.set(0, -0.02, 0.16);
    g.add(brim);
  } else if (kind === "bucket") {
    g.add(cyl(0.26, 0.2, 0.16, color, 0, 8));
  } else if (kind === "beanie") {
    g.add(sphere(0.23, color, 0.02, 8));
  } else if (kind === "top") {
    g.add(cyl(0.2, 0.2, 0.22, color, 0.08, 8));
    g.add(cyl(0.3, 0.3, 0.04, color, -0.04, 8));
  } else if (kind === "tricorn") {
    const brim = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.1, 3), mat(color));
    brim.rotation.y = Math.PI / 6;
    brim.position.y = 0.02;
    g.add(brim);
    g.add(sphere(0.18, color, 0.08, 6));
  } else if (kind === "hardhat") {
    g.add(sphere(0.24, color, 0.02, 8));
    g.add(cyl(0.26, 0.26, 0.04, color, -0.06, 8));
  } else if (kind === "toque") {
    g.add(cyl(0.2, 0.22, 0.28, C.white, 0.1, 8));
    g.add(cyl(0.24, 0.24, 0.05, C.white, -0.06, 8));
  } else if (kind === "straw") {
    g.add(cyl(0.22, 0.22, 0.1, color, 0.04, 8));
    g.add(cyl(0.38, 0.38, 0.03, color, -0.04, 10));
    const band = cyl(0.23, 0.23, 0.04, C.clothBlack, 0, 8);
    g.add(band);
  }
  return g;
}

function makeProp(kind) {
  const g = new THREE.Group();
  if (kind === "rod") {
    const pole = cyl(0.02, 0.025, 1.35, 0x3a2a18, 0, 5);
    pole.rotation.z = 0.35;
    pole.position.set(0.15, 0.35, 0.05);
    g.add(pole);
    const reel = sphere(0.05, C.clothBlack, 0);
    reel.position.set(0.08, -0.05, 0.06);
    g.add(reel);
  } else if (kind === "gun") {
    const stock = box(0.08, 0.08, 0.55, 0x3a3a38);
    stock.position.set(0.12, 0.05, 0.18);
    g.add(stock);
  } else if (kind === "axe") {
    const handle = cyl(0.025, 0.03, 0.7, 0x6a4a2d, 0, 5);
    handle.rotation.z = -0.6;
    handle.position.set(0.18, 0.2, 0.04);
    const head = box(0.22, 0.12, 0.06, 0x8a8d88);
    head.position.set(0.38, 0.48, 0.04);
    g.add(handle, head);
  } else if (kind === "pan") {
    const pan = cyl(0.16, 0.14, 0.04, C.clothBlack, 0, 8);
    pan.position.set(0.28, 0.02, 0.12);
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
  hips.position.y = 1.02;
  const torso = box(0.4, 0.58, 0.24, spec.shirt, 0.46);
  const pelvis = box(0.36, 0.16, 0.22, spec.pants, 0.06);
  hips.add(torso, pelvis);

  if (spec.extra === "overalls") {
    const bib = box(0.28, 0.34, 0.02, spec.pants);
    bib.position.set(0, 0.42, 0.15);
    hips.add(bib);
  }
  if (spec.extra === "suit") {
    const lapel = box(0.4, 0.5, 0.02, spec.shirt);
    lapel.position.set(0, 0.4, 0.15);
    hips.add(lapel);
  }
  if (spec.extra === "coat") {
    const coat = box(0.58, 0.85, 0.36, C.clothBlack, 0.28);
    hips.add(coat);
  }
  if (spec.extra === "apron") {
    const apron = box(0.34, 0.5, 0.02, C.white);
    apron.position.set(0, 0.18, 0.15);
    hips.add(apron);
  }
  if (spec.extra === "vest") {
    const vest = box(0.48, 0.36, 0.3, C.clothGreen, 0.38);
    hips.add(vest);
  }
  if (spec.extra === "pack") {
    const pack = box(0.3, 0.32, 0.14, 0x3a4a32);
    pack.position.set(0, 0.42, -0.22);
    hips.add(pack);
  }

  const decal = pillDecal(spec.extra === "tee" || spec.extra === "hawaii" ? 1.15 : 0.9);
  decal.position.set(0.08, 0.48, 0.16);
  hips.add(decal);

  const neck = cyl(0.07, 0.08, 0.2, C.skin, 0.86, 6);
  hips.add(neck);

  const head = new THREE.Group();
  head.position.y = 1.14;
  const skull = box(0.34, 0.5, 0.3, C.skin, 0.12);
  skull.scale.set(0.95, 1.22, 0.9);
  head.add(skull);
  const chin = box(0.2, 0.12, 0.16, C.skinShadow, -0.16);
  head.add(chin);

  const makeEye = (x) => {
    const eye = new THREE.Group();
    const white = sphere(0.11, C.white, 0, 8);
    const pupil = sphere(0.04, C.black, 0, 6);
    pupil.position.z = 0.085;
    eye.add(white, pupil);
    eye.position.set(x, 0.16, 0.18);
    return eye;
  };
  head.add(makeEye(-0.1), makeEye(0.1));

  const nose = box(0.06, 0.07, 0.08, C.skinShadow);
  nose.position.set(0, 0.04, 0.18);
  head.add(nose);
  const mouth = box(0.12, 0.025, 0.02, 0x5a4030);
  mouth.position.set(0, -0.06, 0.17);
  head.add(mouth);

  if (archetype === "TRADER") {
    const beard = box(0.16, 0.16, 0.08, 0x3a3024);
    beard.position.set(0, -0.18, 0.12);
    head.add(beard);
  }
  if (archetype === "PIRATE") {
    const beard = box(0.2, 0.12, 0.08, 0x4a4034);
    beard.position.set(0, -0.18, 0.12);
    head.add(beard);
  }
  if (archetype === "BEACHGOER") {
    const glasses = box(0.28, 0.06, 0.08, C.clothBlack);
    glasses.position.set(0, 0.14, 0.18);
    head.add(glasses);
  }

  const hat = makeHat(spec.hat, spec.hatColor);
  hat.position.y = 0.36;
  head.add(hat);
  hips.add(head);

  function limb(len, thick, color) {
    return box(thick, len, thick, color, -len / 2);
  }

  const lArm = new THREE.Group();
  lArm.position.set(-0.28, 0.66, 0);
  const lUpper = limb(0.46, 0.08, spec.extra === "suit" || spec.extra === "coat" ? spec.shirt : C.skin);
  const lFore = limb(0.42, 0.07, C.skin);
  lFore.position.y = -0.46;
  lArm.add(lUpper, lFore);
  const lHand = sphere(0.06, C.skin, -0.9, 5);
  lArm.add(lHand);

  const rArm = new THREE.Group();
  rArm.position.set(0.28, 0.66, 0);
  const rUpper = limb(0.46, 0.08, spec.extra === "suit" || spec.extra === "coat" ? spec.shirt : C.skin);
  const rFore = limb(0.42, 0.07, C.skin);
  rFore.position.y = -0.46;
  rArm.add(rUpper, rFore);
  const rHand = sphere(0.06, C.skin, -0.9, 5);
  rArm.add(rHand);

  if (spec.prop) {
    const prop = makeProp(spec.prop);
    rArm.add(prop);
  }

  hips.add(lArm, rArm);

  const lLeg = new THREE.Group();
  lLeg.position.set(-0.11, 0.02, 0);
  lLeg.add(limb(0.62, 0.11, spec.pants));
  const lShoe = box(0.13, 0.07, 0.22, spec.shoes);
  lShoe.position.set(0, -0.66, 0.03);
  lLeg.add(lShoe);

  const rLeg = new THREE.Group();
  rLeg.position.set(0.11, 0.02, 0);
  rLeg.add(limb(0.62, 0.11, spec.pants));
  const rShoe = box(0.13, 0.07, 0.22, spec.shoes);
  rShoe.position.set(0, -0.66, 0.03);
  rLeg.add(rShoe);

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
  const sway = moving ? 1 : 0.18;
  const step = Math.sin(t * 7 + ph) * 0.42 * sway;
  p.lLeg.rotation.x = step;
  p.rLeg.rotation.x = -step;
  p.lArm.rotation.x = -step * 0.8;
  p.rArm.rotation.x = fishing ? -1.15 + Math.sin(t * 3) * 0.12 : step * 0.8;
  p.head.rotation.y = Math.sin(t * 0.7 + ph) * 0.08;
  p.hips.position.y = 1.02 + Math.abs(Math.sin(t * 7 + ph)) * (moving ? 0.04 : 0.01);
}

export function createFirstPersonArms(rodEquipped) {
  const g = new THREE.Group();
  if (rodEquipped) {
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 0.12), mat(C.skin));
    grip.position.set(0.22, -0.18, -0.38);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 1.55, 5), mat(0x3a2a18));
    pole.position.set(0.28, -0.02, -0.82);
    pole.rotation.x = 1.18;
    pole.rotation.z = -0.22;
    const reel = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 5), mat(C.clothBlack));
    reel.position.set(0.24, -0.14, -0.46);
    g.add(grip, pole, reel);
  }
  g.name = "fp-arms";
  return g;
}
