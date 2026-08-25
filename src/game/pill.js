import * as THREE from "three";

function drawOfficialPill(size = 256) {
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const len = size * 0.62;
  const r = size * 0.22;
  const rot = -0.48;

  ctx.translate(cx, cy);
  ctx.rotate(rot);

  const capsule = () => {
    ctx.beginPath();
    ctx.moveTo(-len / 2, -r);
    ctx.lineTo(len / 2, -r);
    ctx.arc(len / 2, 0, r, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(-len / 2, r);
    ctx.arc(-len / 2, 0, r, Math.PI / 2, -Math.PI / 2);
    ctx.closePath();
  };

  ctx.save();
  capsule();
  ctx.fillStyle = "#16382a";
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.rect(-len, -size, len, size * 2);
  ctx.clip();
  capsule();
  ctx.fillStyle = "#6ed18a";
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, -size, len, size * 2);
  ctx.clip();
  capsule();
  ctx.fillStyle = "#f4f8f5";
  ctx.fill();
  ctx.restore();

  ctx.lineJoin = "round";
  ctx.lineWidth = size * 0.055;
  capsule();
  ctx.strokeStyle = "#16382a";
  ctx.stroke();

  return c;
}

let tex = null;
function pillMap() {
  if (tex) return tex;
  tex = new THREE.CanvasTexture(drawOfficialPill(256));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Official Pump.fun pill as a flat wall plate. Faces +Z. */
export function createPillMesh(scale = 1) {
  const g = new THREE.Group();
  g.name = "pump-pill";
  const mat = new THREE.MeshBasicMaterial({
    map: pillMap(),
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.15 * scale, 1.15 * scale), mat);
  g.add(plate);
  return g;
}

export function pillDecal(scale = 1) {
  return createPillMesh(scale * 0.28);
}

export function pillSprite(scale = 1) {
  return createPillMesh(scale);
}
