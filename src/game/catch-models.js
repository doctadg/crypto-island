import * as THREE from "three";

function mat(color, extra = {}) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra });
}

function fish(color, tail = color, extra = []) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.26, 2, 5), mat(color));
  body.rotation.z = Math.PI / 2;
  const fin = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.14, 4), mat(tail));
  fin.rotation.z = -Math.PI / 2;
  fin.position.x = -0.24;
  g.add(body, fin, ...extra);
  return g;
}

export function catchModel(id) {
  const g = new THREE.Group();
  if (id === "old_boot") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), mat(0x3a2a18)));
  } else if (id === "locked_crate" || id === "wreck_lockbox") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.22), mat(0x6a4a2d)));
  } else if (id === "golden_tuna" || id === "gilt_snapper") {
    g.add(fish(0xe8c15a, 0xc4a15a));
  } else if (id === "pump_pillfish") {
    const pill = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.18, 3, 8), mat(0x6ed18a));
    pill.rotation.z = Math.PI / 2;
    g.add(pill);
  } else if (id === "jeff") {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.16), mat(0xf2d2b6));
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.02), mat(0xe8c15a));
    tag.position.set(0, -0.12, 0.08);
    g.add(head, tag);
  } else if (id === "lost_wallet") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.12), mat(0x2a1810)));
  } else if (id === "secret_key") {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.28, 5), mat(0xe8c15a));
    shaft.rotation.z = Math.PI / 2;
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 5, 8), mat(0xe8c15a));
    bow.position.x = 0.16;
    g.add(shaft, bow);
  } else if (id === "mystery_ticket") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.01, 0.12), mat(0xc44a3a)));
  } else if (id === "boat_part") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.06, 0.1), mat(0x3a2616)));
  } else if (id === "ancient_coil") {
    g.add(new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 5, 10), mat(0x8a7a4a)));
  } else if (id === "mutant_snapper") {
    const extra = new THREE.Mesh(new THREE.SphereGeometry(0.05, 5, 4), mat(0x7de39a));
    extra.position.set(0.12, 0.08, 0);
    g.add(fish(0x4a8a38, 0x2a5a28, [extra]));
  } else if (id === "jackpot_box") {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), mat(0x1a1a14));
    const lock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.04), mat(0xe8c15a));
    lock.position.z = 0.12;
    g.add(box, lock);
  } else if (id === "moon_marlin" || id === "merch_marlin") {
    g.add(fish(id === "moon_marlin" ? 0xd8e8f2 : 0x3d8fbf, 0x8aa0b0));
  } else if (id === "vault_whale" || id === "whale_calf") {
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.32, 2, 5), mat(0xc9d4c6));
    body.rotation.z = Math.PI / 2;
    g.add(body);
  } else if (id === "ufo_bass") {
    g.add(fish(0x7de39a, 0xc9d4c6));
  } else {
    g.add(fish(0x3d8fbf, 0x2a6a88));
  }
  return g;
}

export function dressCatch(root, id) {
  while (root.children.length) root.remove(root.children[0]);
  const m = catchModel(id);
  root.add(m);
  return root;
}
