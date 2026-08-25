import * as THREE from "three";
import { C, SPAWN } from "./game/palette.js";
import { createWorld, heightAt, zoneAt, INTERACTS } from "./game/world.js";
import { animateCharacter, createFirstPersonArms } from "./game/characters.js";
import { createEconomy, RODS, kindLabel } from "./game/economy.js";

const canvas = document.getElementById("game");
const hud = document.getElementById("hud");
const boot = document.getElementById("boot");
const promptEl = document.getElementById("prompt");
const zoneEl = document.getElementById("zone-label");
const tokenEl = document.getElementById("token-bal");
const creditEl = document.getElementById("credit-bal");
const catchEl = document.getElementById("catch-count");
const rodSlot = document.getElementById("rod-slot");
const panel = document.getElementById("panel");
const toastEl = document.getElementById("toast");
const castMeter = document.getElementById("cast-meter");
const castFill = document.getElementById("cast-fill");
const castLabel = document.getElementById("cast-label");
const touch = document.getElementById("touch");

const econ = createEconomy();
const keys = Object.create(null);
const look = { x: 0, y: 0 };
const vel = new THREE.Vector3();
const wish = new THREE.Vector3();
const tmp = new THREE.Vector3();

let pointerLocked = false;
let crouch = false;
let panelOpen = null;
let fishing = null;
let toastTimer = 0;
let arms = null;
let lastInteract = null;
const mobile = matchMedia("(pointer: coarse)").matches;
const stick = { active: false, x: 0, y: 0, id: null };

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
scene.background = new THREE.Color(C.sky);
scene.fog = new THREE.Fog(C.sky, 70, 210);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 400);
camera.rotation.order = "YXZ";
camera.position.set(SPAWN.x, SPAWN.y, SPAWN.z);

const hemi = new THREE.HemisphereLight(0xb9d4e8, 0x6a6048, 0.95);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff1d0, 0.85);
sun.position.set(-40, 55, 18);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -50;
sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50;
sun.shadow.camera.bottom = -50;
scene.add(sun);

const world = createWorld(scene);
refreshArms();

function refreshArms() {
  if (arms) camera.remove(arms);
  arms = createFirstPersonArms(econ.state.equipped !== "none");
  camera.add(arms);
  scene.add(camera);
}

function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove("hidden");
  toastTimer = 2.6;
}

function paintHud() {
  tokenEl.textContent = String(econ.state.tokens);
  creditEl.textContent = String(econ.state.credits);
  catchEl.textContent = String(econ.state.caught);
  const rod = RODS[econ.state.equipped];
  if (!rod || rod.id === "none") {
    rodSlot.textContent = "NO ROD";
    rodSlot.classList.add("empty");
  } else {
    rodSlot.textContent = rod.name.toUpperCase();
    rodSlot.classList.remove("empty");
  }
}

function closePanel() {
  panelOpen = null;
  panel.classList.add("hidden");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = "";
}

function openPanel(kind) {
  panelOpen = kind;
  panel.classList.remove("hidden");
  panel.setAttribute("aria-hidden", "false");
  if (kind === "shop") renderShop();
  else if (kind === "inv") renderInv();
  else if (kind === "board") renderBoard();
  else if (kind === "redeem") renderInv(true);
}

function renderShop() {
  const w = econ.state.wallet || "not linked";
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <h2>Lighthouse shop</h2>
    <p class="sub">Preview burn. Tokens leave this local wallet only. No chain write.</p>
    <div class="row"><div><b>Preview wallet</b><span>${w}</span></div>
      <button type="button" data-act="connect">${econ.state.wallet ? "LINKED" : "LINK"}</button></div>
    ${Object.values(RODS)
      .filter((r) => r.id !== "none")
      .map((r) => {
        const owned = econ.state.rods.includes(r.id);
        return `<div class="row">
          <div>
            <b>${r.name}</b>
            <span>Burn ${r.burn} TOKEN · ${r.note}</span>
          </div>
          ${
            owned
              ? `<button type="button" data-act="equip" data-id="${r.id}" ${econ.state.equipped === r.id ? "disabled" : ""}>${econ.state.equipped === r.id ? "EQUIPPED" : "EQUIP"}</button>`
              : `<button class="primary" type="button" data-act="burn" data-id="${r.id}">BURN ${r.burn}</button>`
          }
        </div>`;
      })
      .join("")}
    <p class="sub">Burned this preview: ${econ.state.burned} TOKEN</p>
  `;
}

function renderInv(redeemFocus = false) {
  const items = econ.state.inventory;
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <h2>${redeemFocus ? "Redemption counter" : "Inventory"}</h2>
    <p class="sub">${redeemFocus ? "Preview claims only. SOL and merch do not leave this browser." : "Catches stay on this machine until you redeem them."}</p>
    ${
      items.length
        ? items
            .map(
              (it) => `<div class="row">
          <div>
            <b>${it.name}</b>
            <span>${it.rarity} · ${it.zone.replaceAll("_", " ")}</span>
            <i class="tag ${it.kind}">${kindLabel(it.kind)}</i>
          </div>
          ${
            it.status === "redeemable"
              ? `<button class="primary" type="button" data-act="redeem" data-id="${it.uid}">REDEEM</button>`
              : `<span>${it.status.toUpperCase()}</span>`
          }
        </div>`
            )
            .join("")
        : `<p class="sub">Empty. Fish the docks.</p>`
    }
    <p class="sub">Preview SOL claimed: ${econ.state.previewSol.toFixed(2)}</p>
  `;
}

function renderBoard() {
  const counts = {};
  for (const it of econ.state.inventory) counts[it.rarity] = (counts[it.rarity] || 0) + 1;
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <h2>Island journal</h2>
    <p class="sub">Local session stats. Not a live network.</p>
    <div class="row"><div><b>Fish landed</b><span>this browser</span></div><b>${econ.state.caught}</b></div>
    <div class="row"><div><b>Tokens burned</b><span>preview</span></div><b>${econ.state.burned}</b></div>
    <div class="row"><div><b>Credits</b><span>cosmetics / boats later</span></div><b>${econ.state.credits}</b></div>
    ${["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"]
      .map((r) => `<div class="row"><div><b>${r}</b></div><span>${counts[r] || 0}</span></div>`)
      .join("")}
  `;
}

panel.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const act = btn.dataset.act;
  if (act === "close") {
    closePanel();
    return;
  }
  if (act === "connect") {
    econ.connectPreviewWallet();
    toast("Preview wallet linked. No real keys.");
    renderShop();
    return;
  }
  if (act === "burn") {
    const res = econ.burnForRod(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else {
      toast(`Burned ${res.rod.burn} TOKEN · ${res.rod.name} unlocked`);
      refreshArms();
    }
    paintHud();
    renderShop();
    return;
  }
  if (act === "equip") {
    econ.equip(btn.dataset.id);
    refreshArms();
    paintHud();
    renderShop();
    return;
  }
  if (act === "redeem") {
    const res = econ.redeem(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else toast(`Redeemed ${res.item.name} · ${kindLabel(res.item.kind)}`);
    paintHud();
    renderInv(panelOpen === "redeem");
  }
});

function tryInteract() {
  if (panelOpen) {
    closePanel();
    return;
  }
  if (!lastInteract) return;
  if (lastInteract.id === "shop") openPanel("shop");
  if (lastInteract.id === "board") openPanel("board");
  if (lastInteract.id === "redeem") openPanel("redeem");
  if (lastInteract.id === "boat") {
    camera.position.set(-28, 1.4, 4.2);
    toast("Skiff ride · offshore water is live. Cast from here with Elite.");
  }
}

function beginCast() {
  if (fishing || panelOpen) return;
  const zone = zoneAt(camera.position.x, camera.position.z);
  const waterNear = heightAt(camera.position.x, camera.position.z) < 0.5 || zone.fish;
  if (!waterNear) {
    toast("Walk to a fishing spot.");
    return;
  }
  const gate = econ.canFish(zone.id);
  if (!gate.ok) {
    toast(gate.reason);
    return;
  }
  fishing = { t: 0, phase: "wait", zone: zone.id, window: 0.7 + Math.random() * 0.5, biteAt: 1.1 + Math.random() * 1.6 };
  castMeter.classList.remove("hidden");
  castLabel.textContent = "WAITING…";
  castFill.style.width = "0%";
}

function tickFishing(dt) {
  if (!fishing) return;
  fishing.t += dt;
  if (fishing.phase === "wait") {
    const p = Math.min(1, fishing.t / fishing.biteAt);
    castFill.style.width = `${p * 100}%`;
    if (fishing.t >= fishing.biteAt) {
      fishing.phase = "bite";
      fishing.t = 0;
      castLabel.textContent = "BITE · CLICK / F";
      toast("Bite! Reel now.");
    }
  } else if (fishing.phase === "bite") {
    const p = 1 - fishing.t / fishing.window;
    castFill.style.width = `${Math.max(0, p) * 100}%`;
    if (fishing.t > fishing.window) {
      fishing = null;
      castMeter.classList.add("hidden");
      toast("It got away.");
    }
  }
}

function reel() {
  if (!fishing) {
    beginCast();
    return;
  }
  if (fishing.phase !== "bite") return;
  const zone = fishing.zone;
  fishing = null;
  castMeter.classList.add("hidden");
  const res = econ.rollCatch(zone);
  if (!res.ok) {
    toast(res.reason);
    return;
  }
  paintHud();
  toast(`${res.item.rarity} · ${res.item.name}`);
}

function eyeHeight() {
  return crouch ? 1.05 : 1.62;
}

function updatePrompt() {
  const p = camera.position;
  lastInteract = null;
  let best = 99;
  for (const it of INTERACTS) {
    const d = Math.hypot(p.x - it.x, p.z - it.z);
    if (d < it.r && d < best) {
      best = d;
      lastInteract = it;
    }
  }
  const zone = zoneAt(p.x, p.z);
  zoneEl.textContent = zone.label;
  if (panelOpen) {
    promptEl.textContent = "";
    return;
  }
  if (lastInteract) promptEl.textContent = lastInteract.label;
  else if (zone.fish) promptEl.textContent = econ.state.equipped === "none" ? "Need a rod · E at the lighthouse" : "F / click to cast";
  else promptEl.textContent = "";
}

function applyLook(dx, dy) {
  look.x -= dx * 0.0022;
  look.y -= dy * 0.0022;
  look.y = Math.max(-1.2, Math.min(1.2, look.y));
  camera.rotation.y = look.x;
  camera.rotation.x = look.y;
}

function stepPlayer(dt) {
  const groundedY = heightAt(camera.position.x, camera.position.z);
  const onWater = groundedY < 0.2;
  const speed = (keys.ShiftLeft || keys.ShiftRight ? 9.2 : 5.4) * (crouch ? 0.45 : 1) * (onWater ? 0.55 : 1);

  wish.set(0, 0, 0);
  if (keys.KeyW || keys.ArrowUp) wish.z -= 1;
  if (keys.KeyS || keys.ArrowDown) wish.z += 1;
  if (keys.KeyA || keys.ArrowLeft) wish.x -= 1;
  if (keys.KeyD || keys.ArrowRight) wish.x += 1;
  if (mobile) {
    wish.x += stick.x;
    wish.z += stick.y;
  }
  if (wish.lengthSq() > 1) wish.normalize();
  wish.applyAxisAngle(tmp.set(0, 1, 0), look.x);
  vel.x += (wish.x * speed - vel.x) * Math.min(1, dt * 10);
  vel.z += (wish.z * speed - vel.z) * Math.min(1, dt * 10);

  if (keys._jump) {
    if (camera.position.y <= groundedY + eyeHeight() + 0.08) vel.y = 6.2;
    keys._jump = false;
  }
  vel.y -= 18 * dt;

  camera.position.x += vel.x * dt;
  camera.position.z += vel.z * dt;
  camera.position.y += vel.y * dt;

  const floor = heightAt(camera.position.x, camera.position.z) + eyeHeight();
  if (camera.position.y < floor) {
    camera.position.y = floor;
    vel.y = 0;
  }

  if (arms) {
    const bob = Math.hypot(vel.x, vel.z) > 0.4 ? Math.sin(performance.now() * 0.01) * 0.012 : 0;
    arms.position.set(0, bob, 0);
    if (fishing) arms.rotation.x = -0.25;
    else arms.rotation.x = 0;
  }
}

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

addEventListener("keydown", (e) => {
  keys[e.code] = true;
  if (e.code === "KeyC") crouch = true;
  if (e.code === "Space") {
    e.preventDefault();
    keys._jump = true;
  }
  if (e.code === "KeyE") tryInteract();
  if (e.code === "KeyF") reel();
  if (e.code === "KeyI") (panelOpen === "inv" ? closePanel() : openPanel("inv"));
  if (e.code === "KeyB") (panelOpen === "shop" ? closePanel() : openPanel("shop"));
  if (e.code === "Tab") {
    e.preventDefault();
    panelOpen === "board" ? closePanel() : openPanel("board");
  }
  if (e.code === "Escape") {
    closePanel();
    document.exitPointerLock?.();
  }
});
addEventListener("keyup", (e) => {
  keys[e.code] = false;
  if (e.code === "KeyC") crouch = false;
});

document.addEventListener("mousemove", (e) => {
  if (!pointerLocked || panelOpen) return;
  applyLook(e.movementX, e.movementY);
});
canvas.addEventListener("click", () => {
  if (boot && !boot.classList.contains("hidden")) return;
  if (panelOpen) return;
  if (!pointerLocked && !mobile) canvas.requestPointerLock();
  else reel();
});
document.addEventListener("pointerlockchange", () => {
  pointerLocked = document.pointerLockElement === canvas;
});

function bindStick() {
  const el = document.getElementById("stick");
  const nub = el.querySelector("i");
  const set = (cx, cy) => {
    const rect = el.getBoundingClientRect();
    const dx = cx - (rect.left + rect.width / 2);
    const dy = cy - (rect.top + rect.height / 2);
    const max = 40;
    const len = Math.hypot(dx, dy) || 1;
    const k = Math.min(1, len / max);
    stick.x = (dx / len) * k;
    stick.y = (dy / len) * k;
    nub.style.transform = `translate(${stick.x * max}px, ${stick.y * max}px)`;
  };
  el.addEventListener("pointerdown", (e) => {
    stick.active = true;
    stick.id = e.pointerId;
    el.setPointerCapture(e.pointerId);
    set(e.clientX, e.clientY);
  });
  el.addEventListener("pointermove", (e) => {
    if (!stick.active || e.pointerId !== stick.id) return;
    set(e.clientX, e.clientY);
  });
  const end = () => {
    stick.active = false;
    stick.x = 0;
    stick.y = 0;
    nub.style.transform = "";
  };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);

  touch.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.act === "jump") keys._jump = true;
    if (b.dataset.act === "use") tryInteract();
    if (b.dataset.act === "cast") reel();
  });

  let lx = 0;
  let ly = 0;
  canvas.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    if (t.clientX < innerWidth * 0.42) return;
    lx = t.clientX;
    ly = t.clientY;
  }, { passive: true });
  canvas.addEventListener("touchmove", (e) => {
    const t = e.changedTouches[0];
    if (t.clientX < innerWidth * 0.42) return;
    applyLook(t.clientX - lx, t.clientY - ly);
    lx = t.clientX;
    ly = t.clientY;
  }, { passive: true });
}

document.getElementById("enter-btn").addEventListener("click", () => {
  boot.classList.add("hidden");
  hud.classList.remove("hidden");
  if (mobile) touch.classList.remove("hidden");
  paintHud();
  if (!mobile) canvas.requestPointerLock();
});

bindStick();
paintHud();

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (boot.classList.contains("hidden")) {
    stepPlayer(dt);
    tickFishing(dt);
    updatePrompt();
  }
  for (const p of world.people) {
    const moving = false;
    animateCharacter(p, now / 1000, moving, p.userData.archetype === "FISHERMAN");
  }
  world.ocean.position.y = 0.02 + Math.sin(now / 900) * 0.04;
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) toastEl.classList.add("hidden");
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
