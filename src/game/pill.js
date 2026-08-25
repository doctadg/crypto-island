import * as THREE from "three";

let tex = null;
export function pillTexture() {
  if (!tex) {
    tex = new THREE.TextureLoader().load("./pump-pill.png");
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  return tex;
}

export function pillSprite(scale = 1) {
  const mat = new THREE.SpriteMaterial({
    map: pillTexture(),
    transparent: true,
    depthWrite: false,
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(0.92 * scale, 0.9 * scale, 1);
  s.center.set(0.5, 0.5);
  return s;
}

export function pillDecal(scale = 1) {
  const s = pillSprite(scale * 0.28);
  return s;
}
