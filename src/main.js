import * as THREE from "three";
import { C, SPAWN } from "./game/palette.js";
import { createWorld, heightAt, zoneAt, INTERACTS, resolveCollision } from "./game/world.js";
import { animateCharacter, createFirstPersonArms, poseFishingArms } from "./game/characters.js";
import { createEconomy, RODS, kindLabel, SHOP_SWAPS, SHOP_MERCH, tradeLine } from "./game/economy.js";
import { unlockAudio, startAmbience, sfx } from "./game/audio.js";
import { createSky, tickSky, createBobber, createSplash, burstSplash, tickSplash, createCatchProp } from "./game/atmosphere.js";

const canvas = document.getElementById("game");
const hud = document.getElementById("hud");
const boot = document.getElementById("boot");
const loader = document.getElementById("loader");
const loadFill = document.getElementById("load-fill");
const loadLine = document.getElementById("load-line");
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
const castPhaseEl = document.getElementById("cast-phase");
const catchCard = document.getElementById("catch-card");
const compassN = document.getElementById("compass-n");
const touch = document.getElementById("touch");

const econ = createEconomy();
const keys = Object.create(null);
const look = { x: Math.PI, y: 0 };
const vel = new THREE.Vector3();
const wish = new THREE.Vector3();
const tmp = new THREE.Vector3();

let pointerLocked = false;
let crouch = false;
let panelOpen = null;
let fishing = null;
let toastTimer = 0;
let catchTimer = 0;
let arms = null;
let lastInteract = null;
let playing = false;
let bobT = 0;
let stepAcc = 0;
let wasGrounded = true;
let fovSmoothed = 72;
let shopTab = "rods";
const lookSmoothed = { x: Math.PI, y: 0 };
const mobile = matchMedia("(pointer: coarse)").matches;
const stick = { active: false, x: 0, y: 0, id: null };

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const scene = new THREE.Scene();
scene.background = new THREE.Color(C.sky);
scene.fog = new THREE.FogExp2(C.sky, 0.011);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 400);
camera.rotation.order = "YXZ";
camera.position.set(SPAWN.x, SPAWN.y, SPAWN.z);

const hemi = new THREE.HemisphereLight(0xc5dceb, 0x6a6550, 1.05);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff3d6, 1.05);
sun.position.set(-48, 62, 22);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -50;
sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50;
sun.shadow.camera.bottom = -50;
scene.add(sun);

const world = createWorld(scene);
const sky = createSky();
scene.add(sky);
const bobber = createBobber();
scene.add(bobber);
const splash = createSplash();
scene.add(splash);
const catchProp = createCatchProp();
camera.add(catchProp);
catchProp.position.set(0.18, -0.12, -0.42);
refreshArms();

const fill = new THREE.DirectionalLight(0xb7d4e8, 0.28);
fill.position.set(30, 18, -40);
scene.add(fill);

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
  const tab = shopTab;
  const rods = Object.values(RODS)
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
    .join("");
  const swaps = SHOP_SWAPS.map(
    (o) => `<div class="row">
      <div><b>${o.name}</b><span>${o.cost} credits · ${o.note}</span></div>
      <button class="primary" type="button" data-act="swap" data-id="${o.id}">SWAP</button>
    </div>`
  ).join("");
  const merch = SHOP_MERCH.map(
    (o) => `<div class="row">
      <div><b>${o.name}</b><span>${o.cost} credits · ${o.note}</span></div>
      <button class="primary" type="button" data-act="merch" data-id="${o.id}">BUY</button>
    </div>`
  ).join("");
  const locker = econ.state.merch.length
    ? econ.state.merch.map((m) => `<div class="row"><div><b>${m.name}</b><span>preview locker</span></div></div>`).join("")
    : `<p class="sub">No merch claims yet.</p>`;
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <h2>Lighthouse shop</h2>
    <p class="sub">${econ.state.credits} credits · ${econ.state.tokens} TOKEN · ${econ.state.previewSol.toFixed(2)} preview SOL · ${w}</p>
    <div class="tabs">
      <button type="button" data-act="tab" data-id="rods" class="${tab === "rods" ? "on" : ""}">RODS</button>
      <button type="button" data-act="tab" data-id="swap" class="${tab === "swap" ? "on" : ""}">SWAPS</button>
      <button type="button" data-act="tab" data-id="merch" class="${tab === "merch" ? "on" : ""}">MERCH</button>
    </div>
    ${tab === "rods" ? `<div class="row"><div><b>Preview wallet</b><span>${w}</span></div>
      <button type="button" data-act="connect">${econ.state.wallet ? "LINKED" : "LINK"}</button></div>${rods}<p class="sub">Burned this preview: ${econ.state.burned} TOKEN</p>` : ""}
    ${tab === "swap" ? `${swaps}<p class="sub">Credits swap into TOKEN or preview SOL. No chain write.</p>` : ""}
    ${tab === "merch" ? `${merch}${locker}<p class="sub">Merch is a preview locker claim. Nothing ships.</p>` : ""}
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
            <span>${it.rarity} · ${tradeLine(it)}</span>
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
    sfx.ui();
    toast("Preview wallet linked. No real keys.");
    renderShop();
    return;
  }
  if (act === "burn") {
    const res = econ.burnForRod(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else {
      sfx.burn();
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
    return;
  }
  if (act === "tab") {
    shopTab = btn.dataset.id;
    renderShop();
    return;
  }
  if (act === "swap") {
    const res = econ.buySwap(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else {
      sfx.ui();
      toast(`Swapped credits for ${res.offer.name}`);
    }
    paintHud();
    renderShop();
    return;
  }
  if (act === "merch") {
    const res = econ.buyMerch(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else {
      sfx.ui();
      toast(`Claimed ${res.offer.name} (preview locker)`);
    }
    paintHud();
    renderShop();
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

function setCastUI(phase, label, fill) {
  if (!castMeter) return;
  castMeter.classList.remove("hidden", "bite", "reel");
  if (phase === "bite") castMeter.classList.add("bite");
  if (phase === "reel") castMeter.classList.add("reel");
  if (castPhaseEl) castPhaseEl.textContent = phase.toUpperCase();
  castLabel.textContent = label;
  castFill.style.width = `${Math.max(0, Math.min(100, fill))}%`;
}

function castPoint() {
  const dir = new THREE.Vector3(0, -0.18, -1).applyEuler(camera.rotation);
  return {
    x: camera.position.x + dir.x * 6.2,
    y: 0.12,
    z: camera.position.z + dir.z * 6.2,
  };
}

function lookingAtWater() {
  const dir = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation);
  for (const dist of [3.2, 5.4, 8.2, 11]) {
    const x = camera.position.x + dir.x * dist;
    const z = camera.position.z + dir.z * dist;
    const y = camera.position.y + dir.y * dist;
    if (y < 1.4 && heightAt(x, z) < 0.35) return { ok: true, x, z };
  }
  return { ok: false };
}

function showCatch(item) {
  if (!catchCard) return;
  document.getElementById("catch-rarity").textContent = item.rarity.toUpperCase();
  document.getElementById("catch-name").textContent = item.name;
  const blurb = document.getElementById("catch-blurb");
  if (blurb) blurb.textContent = item.blurb || "";
  document.getElementById("catch-kind").textContent = kindLabel(item.kind);
  const trade = document.getElementById("catch-trade");
  if (trade) trade.textContent = tradeLine(item);
  catchCard.classList.remove("hidden");
  catchTimer = 8;
  catchProp.visible = true;
  sfx.catch(item.rarity === "Legendary" || item.rarity === "Mythic" || item.rarity === "Epic");
}

function beginCast() {
  if (fishing || panelOpen || !playing) return;
  if (catchCard && !catchCard.classList.contains("hidden")) return;
  const aim = lookingAtWater();
  if (!aim.ok) {
    toast("Look at the water to cast.");
    return;
  }
  const zone = zoneAt(aim.x, aim.z);
  const here = zoneAt(camera.position.x, camera.position.z);
  const useZone = zone.fish ? zone : here;
  const waterNear = heightAt(aim.x, aim.z) < 0.35;
  if (!waterNear) {
    toast("Look at the water to cast.");
    return;
  }
  const gate = econ.canFish(useZone.id);
  if (!gate.ok) {
    toast(gate.reason);
    return;
  }
  fishing = {
    t: 0,
    phase: "cast",
    zone: useZone.id,
    window: 0.85 + Math.random() * 0.45,
    biteAt: 1.25 + Math.random() * 1.7,
    bx: aim.x,
    bz: aim.z,
  };
  sfx.cast();
  setCastUI("cast", "THROWING LINE", 12);
}

function placeBobber(t) {
  if (!fishing) {
    bobber.visible = false;
    return;
  }
  const bob = Math.sin(t * 3.2) * 0.05;
  bobber.position.set(fishing.bx, 0.14 + bob, fishing.bz);
  bobber.visible = fishing.phase !== "cast" || fishing.t > 0.28;
}

function tickFishing(dt) {
  if (!fishing) {
    poseFishingArms(arms, "idle", 0);
    bobber.visible = false;
    return;
  }
  fishing.t += dt;
  poseFishingArms(arms, fishing.phase, fishing.t);
  placeBobber(performance.now() / 1000);
  if (fishing.phase === "cast") {
    setCastUI("cast", "THROWING LINE", (fishing.t / 0.42) * 100);
    if (fishing.t >= 0.42) {
      fishing.phase = "wait";
      fishing.t = 0;
      burstSplash(splash, fishing.bx, 0.12, fishing.bz);
      sfx.splash();
      setCastUI("wait", "WAITING FOR A BITE", 0);
    }
  } else if (fishing.phase === "wait") {
    setCastUI("wait", "WAITING FOR A BITE", (fishing.t / fishing.biteAt) * 100);
    if (fishing.t >= fishing.biteAt) {
      fishing.phase = "bite";
      fishing.t = 0;
      burstSplash(splash, fishing.bx, 0.12, fishing.bz);
      sfx.bite();
      setCastUI("bite", "BITE · CLICK / F", 100);
      toast("Bite! Reel now.");
    }
  } else if (fishing.phase === "bite") {
    setCastUI("bite", "BITE · CLICK / F", (1 - fishing.t / fishing.window) * 100);
    if (fishing.t > fishing.window) {
      fishing = null;
      bobber.visible = false;
      castMeter.classList.add("hidden");
      poseFishingArms(arms, "idle", 0);
      sfx.miss();
      toast("It got away.");
    }
  } else if (fishing.phase === "reel") {
    setCastUI("reel", "REELING", (fishing.t / 0.55) * 100);
    if (fishing.t >= 0.55) {
      const zone = fishing.zone;
      fishing = null;
      bobber.visible = false;
      castMeter.classList.add("hidden");
      poseFishingArms(arms, "idle", 0);
      const res = econ.rollCatch(zone);
      if (!res.ok) toast(res.reason);
      else {
        paintHud();
        showCatch(res.item);
        toast(`${res.item.rarity} · ${res.item.name}`);
      }
    }
  }
}

function reel() {
  if (!playing) return;
  if (!fishing) {
    beginCast();
    return;
  }
  if (fishing.phase === "bite") {
    fishing.phase = "reel";
    fishing.t = 0;
    sfx.reel();
    setCastUI("reel", "REELING", 0);
  }
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
  else if (lookingAtWater().ok && econ.state.equipped !== "none") promptEl.textContent = "Cast";
  else promptEl.textContent = "";
}

function applyLook(dx, dy) {
  look.x -= dx * 0.00225;
  look.y -= dy * 0.00225;
  look.y = Math.max(-1.2, Math.min(1.2, look.y));
}

function stepPlayer(dt) {
  const groundedY = heightAt(camera.position.x, camera.position.z);
  const onWater = groundedY < 0.22;
  const sprint = !!(keys.ShiftLeft || keys.ShiftRight);
  const speed = (sprint ? 8.4 : 5.1) * (crouch ? 0.42 : 1) * (onWater ? 0.48 : 1) * (fishing ? 0.32 : 1);

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
  const accel = onWater ? 9 : 11;
  vel.x += (wish.x * speed - vel.x) * Math.min(1, dt * accel);
  vel.z += (wish.z * speed - vel.z) * Math.min(1, dt * accel);

  if (keys._jump) {
    if (camera.position.y <= groundedY + eyeHeight() + 0.1) {
      vel.y = onWater ? 4.2 : 6.4;
      sfx.jump();
    }
    keys._jump = false;
  }
  vel.y -= (onWater ? 12 : 20) * dt;

  let nx = camera.position.x + vel.x * dt;
  let nz = camera.position.z + vel.z * dt;
  const hit = resolveCollision(nx, nz);
  if (hit.x !== nx || hit.z !== nz) {
    vel.x *= 0.2;
    vel.z *= 0.2;
  }
  camera.position.x = hit.x;
  camera.position.z = hit.z;
  camera.position.y += vel.y * dt;

  const floor = heightAt(camera.position.x, camera.position.z) + eyeHeight();
  const grounded = camera.position.y <= floor + 0.08;
  const rise = floor - camera.position.y;
  if (rise > 0 && rise < 1.35 && vel.y <= 1.2) {
    camera.position.y += Math.min(rise, dt * 5.4);
    vel.y = Math.max(vel.y, 0);
  } else if (camera.position.y < floor) {
    camera.position.y = floor;
    vel.y = 0;
  }
  if (grounded && !wasGrounded && onWater) {
    burstSplash(splash, camera.position.x, 0.1, camera.position.z);
    sfx.splash();
  }
  wasGrounded = grounded;

  lookSmoothed.x = look.x;
  lookSmoothed.y = look.y;
  camera.rotation.y = look.x;
  camera.rotation.x = look.y;

  const moving = Math.hypot(vel.x, vel.z) > 0.4 && grounded;
  if (moving) {
    bobT += dt * (sprint ? 12 : 8.2);
    stepAcc += dt;
    if (stepAcc > (sprint ? 0.32 : 0.44)) {
      stepAcc = 0;
      if (onWater) sfx.splash();
      else sfx.step();
    }
  }
  const bob = moving ? Math.sin(bobT) * 0.032 : 0;
  const sway = moving ? Math.cos(bobT * 0.5) * 0.014 : 0;
  if (arms) {
    arms.position.set(sway, bob - (crouch ? 0.08 : 0), 0);
    if (!fishing) poseFishingArms(arms, "idle", 0);
  }

  const wantFov = sprint && moving ? 80 : 72;
  fovSmoothed += (wantFov - fovSmoothed) * Math.min(1, dt * 6);
  if (Math.abs(camera.fov - fovSmoothed) > 0.05) {
    camera.fov = fovSmoothed;
    camera.updateProjectionMatrix();
  }
  if (compassN) compassN.style.transform = `rotate(${-look.x}rad)`;
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
  if (!playing || panelOpen) return;
  if (catchCard && !catchCard.classList.contains("hidden")) return;
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

document.getElementById("catch-keep")?.addEventListener("click", () => {
  catchCard.classList.add("hidden");
  catchProp.visible = false;
  catchTimer = 0;
  sfx.ui();
});

document.getElementById("enter-btn").addEventListener("click", () => {
  boot.classList.add("hidden");
  hud.classList.remove("hidden");
  playing = true;
  unlockAudio();
  startAmbience();
  sfx.ui();
  if (mobile) touch.classList.remove("hidden");
  paintHud();
  if (!mobile) canvas.requestPointerLock();
});

document.querySelector(".hotbar")?.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const hot = b.dataset.hot;
  if (hot === "shop") (panelOpen === "shop" ? closePanel() : openPanel("shop"));
  if (hot === "inv") (panelOpen === "inv" ? closePanel() : openPanel("inv"));
  if (hot === "board") (panelOpen === "board" ? closePanel() : openPanel("board"));
});

function finishLoad() {
  loader.classList.add("hidden");
  boot.classList.remove("hidden");
}

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  finishLoad();
} else {
  const loadLines = [
    "Waking the lighthouse…",
    "Stretching lanky fishermen…",
    "Tuning the catch tables…",
    "Preview wallet standing by…",
    "Island is ready.",
  ];
  let loadStep = 0;
  const loadTimer = setInterval(() => {
    loadStep += 1;
    const p = Math.min(100, loadStep * 22);
    if (loadFill) loadFill.style.width = `${p}%`;
    if (loadLine) loadLine.textContent = loadLines[Math.min(loadLines.length - 1, loadStep - 1)];
    if (p >= 100) {
      clearInterval(loadTimer);
      setTimeout(finishLoad, 280);
    }
  }, 220);
}

bindStick();
paintHud();

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (playing) {
    stepPlayer(dt);
    tickFishing(dt);
    updatePrompt();
  }
  for (const p of world.people) {
    animateCharacter(p, now / 1000, false, p.userData.archetype === "FISHERMAN");
  }
  if (world.birds) {
    for (const b of world.birds) {
      b.userData.orbit += dt * 0.22;
      b.position.set(
        Math.cos(b.userData.orbit) * b.userData.rad,
        b.userData.h + Math.sin(now / 700 + b.userData.orbit) * 0.4,
        Math.sin(b.userData.orbit) * b.userData.rad
      );
      b.lookAt(0, b.position.y, 0);
      const flap = Math.sin(now / 140 + b.userData.orbit) * 0.45;
      if (b.userData.wings) {
        b.userData.wings[0].rotation.z = flap;
        b.userData.wings[1].rotation.z = -flap;
      }
    }
  }
  tickSky(sky, now / 1000);
  tickSplash(splash, dt);
  if (world.ocean?.material?.uniforms?.uTime) world.ocean.material.uniforms.uTime.value = now / 1000;
  if (catchProp.visible) {
    catchProp.rotation.y += dt * 1.6;
    catchProp.position.y = -0.12 + Math.sin(now / 220) * 0.02;
  }
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) toastEl.classList.add("hidden");
  }
  if (catchTimer > 0) {
    catchTimer -= dt;
    if (catchTimer <= 0) {
      catchCard?.classList.add("hidden");
      catchProp.visible = false;
    }
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
