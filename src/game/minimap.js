import { ISLAND_R } from "./palette.js";
import { ZONES } from "./world.js";

const RANGE = 52;
const SIZE = 188;

const FISH = {
  MAIN_DOCK: "#6ed18a",
  NORTH_DOCK: "#7ec6d4",
  EAST_BEACH: "#e8c15a",
  SOUTH_CLIFFS: "#c9a06a",
  CAVES: "#8a7ad4",
  OFFSHORE: "#4e96bc",
};
const LAND = {
  FOREST: "#5c7040",
  LIGHTHOUSE: "#dfe6d8",
  VILLAGE: "#c4a15a",
};

const SHORT = {
  MAIN_DOCK: "DOCK",
  NORTH_DOCK: "NORTH",
  EAST_BEACH: "BEACH",
  SOUTH_CLIFFS: "CLIFF",
  CAVES: "CAVE",
  OFFSHORE: "OFF",
  FOREST: "WOODS",
  LIGHTHOUSE: "TOWER",
  VILLAGE: "HUTS",
};

const LABEL_OFF = {
  MAIN_DOCK: { x: 0, y: -12 },
  NORTH_DOCK: { x: -16, y: 0 },
  EAST_BEACH: { x: 16, y: 2 },
  SOUTH_CLIFFS: { x: -14, y: -8 },
  CAVES: { x: 14, y: -8 },
  OFFSHORE: { x: -18, y: 10 },
  FOREST: { x: 10, y: 14 },
  LIGHTHOUSE: { x: 0, y: 0 },
  VILLAGE: { x: 8, y: -10 },
};

function worldToMap(x, z, w, h) {
  return {
    x: ((x + RANGE) / (RANGE * 2)) * w,
    y: ((RANGE - z) / (RANGE * 2)) * h,
  };
}

export function createMinimap(canvas) {
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  canvas.width = SIZE * dpr;
  canvas.height = SIZE * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = SIZE;
  const h = SIZE;

  function paintBase() {
    ctx.fillStyle = "#14384c";
    ctx.fillRect(0, 0, w, h);

    const island = worldToMap(0, 0, w, h);
    const ir = (ISLAND_R / (RANGE * 2)) * w;
    ctx.beginPath();
    ctx.arc(island.x, island.y, ir, 0, Math.PI * 2);
    ctx.fillStyle = "#617044";
    ctx.fill();
    ctx.strokeStyle = "rgba(244,247,242,0.22)";
    ctx.lineWidth = 1;
    ctx.stroke();

    for (const zn of ZONES) {
      const p = worldToMap(zn.x, zn.z, w, h);
      const pr = (zn.r / (RANGE * 2)) * w;
      ctx.beginPath();
      ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
      ctx.fillStyle = zn.fish ? FISH[zn.id] || "#7de39a" : LAND[zn.id] || "#9eae9c";
      ctx.globalAlpha = zn.fish ? 0.42 : 0.28;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = zn.fish ? "rgba(244,247,242,0.35)" : "rgba(244,247,242,0.16)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function draw(px, pz, yaw, zoneId) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    paintBase();

    if (zoneId) {
      const zn = ZONES.find((z) => z.id === zoneId);
      if (zn) {
        const p = worldToMap(zn.x, zn.z, w, h);
        const pr = (zn.r / (RANGE * 2)) * w;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pr + 2, 0, Math.PI * 2);
        ctx.strokeStyle = "#f4f7f2";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    ctx.font = "700 8px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (const zn of ZONES) {
      const p = worldToMap(zn.x, zn.z, w, h);
      const off = LABEL_OFF[zn.id] || { x: 0, y: 0 };
      const tx = p.x + off.x;
      const ty = p.y + off.y;
      const label = SHORT[zn.id] || zn.label;
      ctx.fillStyle = "rgba(8,14,12,0.78)";
      ctx.fillRect(tx - 16, ty - 6, 32, 12);
      ctx.fillStyle = zoneId === zn.id ? "#7de39a" : "#f4f7f2";
      ctx.fillText(label, tx, ty);
    }

    const p = worldToMap(px, pz, w, h);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(-yaw);
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(5.5, 7);
    ctx.lineTo(0, 3.5);
    ctx.lineTo(-5.5, 7);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#16382a";
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  return { draw };
}
