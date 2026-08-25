import { ISLAND_R, ISLAND2 } from "./palette.js";
import { heightAt } from "./world.js";

const RANGE = 160;
const SIZE = 212;
const N = 80;

function worldToMap(x, z, w, h) {
  return {
    x: ((x + RANGE) / (RANGE * 2)) * w,
    y: ((RANGE - z) / (RANGE * 2)) * h,
  };
}

export function createMinimap(canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const w = SIZE;
  const h = SIZE;

  const bg = document.createElement("canvas");
  bg.width = w;
  bg.height = h;
  const b = bg.getContext("2d");

  b.fillStyle = "#1c5a78";
  b.fillRect(0, 0, w, h);

  const img = b.createImageData(N, N);
  const data = img.data;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const x = -RANGE + ((i + 0.5) / N) * RANGE * 2;
      const z = RANGE - ((j + 0.5) / N) * RANGE * 2;
      const y = heightAt(x, z);
      const r = Math.hypot(x, z);
      const r2 = Math.hypot(x - ISLAND2.x, z - ISLAND2.z);
      let cr;
      let cg;
      let cb;
      if (r2 < ISLAND2.r + 2 && y > 0.08) {
        if (y < 0.3) { cr = 201; cg = 160; cb = 106; }
        else if (Math.hypot(x - ISLAND2.x + 2, z - ISLAND2.z - 1) < 6) { cr = 196; cg = 74; cb = 58; }
        else { cr = 106; cg = 83; cb = 68; }
      } else if (y < 0.08 || r > ISLAND_R + 3.4) {
        const deep = Math.min(1, Math.max(0, Math.min(r, r2) / 40));
        cr = 28 + deep * 8;
        cg = 88 - deep * 18;
        cb = 118 - deep * 10;
      } else if (y < 0.28 || (x > 10 && z > -4 && z < 24 && y < 0.62)) {
        cr = 210;
        cg = 190;
        cb = 145;
      } else if (x > 2 && z < -6 && r < 30) {
        cr = 72;
        cg = 92;
        cb = 52;
      } else if (y > 2.8) {
        cr = 138;
        cg = 116;
        cb = 72;
      } else {
        const lit = (Math.sin(x * 0.28) + 1) * 10;
        cr = 98 + lit;
        cg = 118 + lit * 0.6;
        cb = 62;
      }
      const o = (j * N + i) * 4;
      data[o] = cr;
      data[o + 1] = cg;
      data[o + 2] = cb;
      data[o + 3] = 255;
    }
  }
  const tile = document.createElement("canvas");
  tile.width = N;
  tile.height = N;
  tile.getContext("2d").putImageData(img, 0, 0);
  b.imageSmoothingEnabled = false;
  b.drawImage(tile, 0, 0, w, h);

  function mark(x, z, draw) {
    const p = worldToMap(x, z, w, h);
    b.save();
    b.translate(p.x, p.y);
    draw(b);
    b.restore();
  }

  // main dock
  mark(1.6, 31.4, (c) => {
    c.fillStyle = "#6a4524";
    c.fillRect(-4, -16, 8, 22);
    c.fillStyle = "#8a5a2a";
    c.fillRect(-3.2, -15, 6.4, 20);
  });
  // north dock
  mark(-27.2, 8, (c) => {
    c.rotate(-1.2);
    c.fillStyle = "#6a4524";
    c.fillRect(-3.2, -12, 6.4, 18);
  });
  // cave dock
  mark(18.8, 24.2, (c) => {
    c.rotate(-0.4);
    c.fillStyle = "#6a4524";
    c.fillRect(-2.4, -6, 4.8, 10);
  });
  // lighthouse
  mark(0, -1.2, (c) => {
    c.fillStyle = "#f4f5f0";
    c.beginPath();
    c.arc(0, 0, 4.2, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#c44a3a";
    c.beginPath();
    c.moveTo(0, -7);
    c.lineTo(3.2, -1);
    c.lineTo(-3.2, -1);
    c.closePath();
    c.fill();
  });
  // huts
  for (const [x, z] of [
    [-6.8, 22.4],
    [8.6, 21.6],
    [-19.2, 6.4],
    [25.2, 8.8],
    [28.4, 12.4],
  ]) {
    mark(x, z, (c) => {
      c.fillStyle = "#2f8a48";
      c.beginPath();
      c.moveTo(0, -4);
      c.lineTo(4, 2);
      c.lineTo(-4, 2);
      c.closePath();
      c.fill();
    });
  }
  // cave mouth
  mark(17.2, 20.6, (c) => {
    c.fillStyle = "#2a2c2a";
    c.beginPath();
    c.ellipse(0, 0, 5, 3.4, 0, 0, Math.PI * 2);
    c.fill();
  });
  // boat
  mark(-31, 5.6, (c) => {
    c.fillStyle = "#3a2616";
    c.beginPath();
    c.ellipse(0, 0, 3.4, 1.6, 0.45, 0, Math.PI * 2);
    c.fill();
  });
  const a = worldToMap(-31, 5.6, w, h);
  const b2 = worldToMap(ISLAND2.x - 6, ISLAND2.z + 22, w, h);
  b.strokeStyle = "rgba(244,247,242,0.35)";
  b.setLineDash([4, 4]);
  b.beginPath();
  b.moveTo(a.x, a.y);
  b.lineTo(b2.x, b2.y);
  b.stroke();
  b.setLineDash([]);

  const labels = [
    { t: "HOME", x: 0, z: 8, fill: "#f4f7f2" },
    { t: "DOCK", x: 8, z: 36, fill: "#f4f7f2" },
    { t: "ST ALON", x: ISLAND2.x, z: ISLAND2.z, fill: "#ffd0c0" },
  ];
  b.font = "700 9px ui-monospace, SFMono-Regular, Menlo, monospace";
  b.textAlign = "center";
  b.textBaseline = "middle";
  for (const lb of labels) {
    const p = worldToMap(lb.x, lb.z, w, h);
    b.fillStyle = "rgba(8,14,12,0.62)";
    b.fillRect(p.x - 16, p.y - 6, 32, 12);
    b.fillStyle = lb.fill;
    b.fillText(lb.t, p.x, p.y);
  }

  b.strokeStyle = "rgba(244,247,242,0.18)";
  b.lineWidth = 2;
  b.strokeRect(1, 1, w - 2, h - 2);

  function draw(px, pz, yaw) {
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(bg, 0, 0);
    const p = worldToMap(px, pz, w, h);
    ctx.save();
    ctx.translate(p.x, p.y);
    // look.x = 0 faces -Z. On this chart -Z is down (toward TOWER).
    ctx.rotate(yaw);
    ctx.beginPath();
    ctx.moveTo(0, 11);
    ctx.lineTo(6, -6);
    ctx.lineTo(0, -2);
    ctx.lineTo(-6, -6);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#102018";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  return { draw };
}
