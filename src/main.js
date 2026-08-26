import * as THREE from "three";
import { C, SPAWN, ISLAND_R, ISLAND2 } from "./game/palette.js";
import { createWorld, heightAt, zoneAt, INTERACTS, resolveCollision } from "./game/world.js";
import { animateCharacter, createFirstPersonArms, poseFishingArms } from "./game/characters.js";
import { createEconomy, RODS, kindLabel, SHOP_SWAPS, SHOP_MERCH, SHOP_GEAR, tradeLine, CATCHES } from "./game/economy.js";
import { iconRod, iconSwap, iconMerch, iconFish, iconStat, iconBoat } from "./game/icons.js";
import { unlockAudio, startAmbience, sfx } from "./game/audio.js";
import { createSky, createBobber, createSplash, burstSplash, tickSplash, createCatchProp, waterHeight, createRipple, burstRipple, tickRipple, createWorldLine, createFightFish } from "./game/atmosphere.js";
import { createMinimap } from "./game/minimap.js";
import { questStatus } from "./game/quests.js";
import { createLife, tickLife, dayPhase } from "./game/life.js";
import { createEvents, tickEvents, currentEvent, EVENT_CATCHES } from "./game/events.js";
import { dressCatch } from "./game/catch-models.js";
import { SECRETS, secretAt, gateSecret } from "./game/secrets.js";

const canvas = document.getElementById("game");
const hud = document.getElementById("hud");
const boot = document.getElementById("boot");
const loader = document.getElementById("loader");
const loadFill = document.getElementById("load-fill");
const loadLine = document.getElementById("load-line");
const promptEl = document.getElementById("prompt");
const zoneEl = document.getElementById("zone-label");
const zoneHintEl = document.getElementById("zone-hint");
const areaNowEl = document.getElementById("area-now-label");
const areaNowHintEl = document.getElementById("area-now-hint");
const areaEnterEl = document.getElementById("area-enter");
let lastZoneId = "";
let areaEnterTimer = 0;
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
const tensionWrap = document.getElementById("tension-wrap");
const tensionFill = document.getElementById("tension-fill");
const catchCard = document.getElementById("catch-card");
const compassN = document.getElementById("compass-n");
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
let sailing = null;
const HOME_BOAT = { x: -31, z: 5.6 };
const EMBER_BOAT = { x: 112, z: 14 };
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
const lookSmoothed = { x: 0, y: 0 };
const mobile = matchMedia("(pointer: coarse)").matches;
const stick = { active: false, x: 0, y: 0, id: null };

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance",
  stencil: false,
  depth: true,
});
renderer.setPixelRatio(1);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = false;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
scene.background = new THREE.Color(C.sky);
scene.fog = new THREE.FogExp2(C.sky, 0.011);

const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 520);
camera.rotation.order = "YXZ";
camera.position.set(SPAWN.x, SPAWN.y, SPAWN.z);

const hemi = new THREE.HemisphereLight(0xc5dceb, 0x6a6550, 1.2);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff3d6, 0.85);
sun.position.set(-48, 62, 22);
scene.add(sun);

const world = createWorld(scene);
const sky = createSky();
scene.add(sky);
const life = createLife(world.root);
life.patrol = world.people.filter((p) => p.userData.path);
life.watcher = world.watcher;
const islandEvents = createEvents(world.root);
const bobber = createBobber();
scene.add(bobber);
const splash = createSplash();
scene.add(splash);
const ripple = createRipple();
scene.add(ripple);
const worldLine = createWorldLine();
scene.add(worldLine);
const fightFish = createFightFish();
scene.add(fightFish);
const catchProp = createCatchProp();
camera.add(catchProp);
catchProp.position.set(0.18, -0.12, -0.42);
refreshArms();
const mapCanvas = document.getElementById("minimap");
const minimap = mapCanvas ? createMinimap(mapCanvas) : null;

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
  paintQuests();
}

function paintQuests() {
  const el = document.getElementById("quest-list");
  if (!el) return;
  const rows = questStatus(econ.state);
  el.innerHTML = `<p>OBJECTIVES</p><ul>${rows
    .map((q) => `<li class="${q.done ? "done" : ""}"><i>${q.done ? "✓" : "○"}</i>${q.label}</li>`)
    .join("")}</ul>`;
}

function freeMouse() {
  if (document.pointerLockElement) document.exitPointerLock();
  pointerLocked = false;
}

function closePanel() {
  panelOpen = null;
  panel.classList.add("hidden");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = "";
}

function openPanel(kind) {
  freeMouse();
  panelOpen = kind;
  panel.classList.remove("hidden");
  panel.setAttribute("aria-hidden", "false");
  if (kind === "shop") renderShop();
  else if (kind === "inv") renderInv();
  else if (kind === "board") renderBoard();
  else if (kind === "book") renderBook();
  else if (kind === "redeem") renderInv(true);
}

function walletChip() {
  const w = econ.state.wallet;
  return `<div class="shop-wallet">
    <div>
      <b>${w ? "Preview wallet" : "No wallet"}</b>
      <span>${w || "Local demo only"}</span>
    </div>
    <button type="button" data-act="connect">${w ? "LINKED" : "LINK"}</button>
  </div>`;
}

function renderShop() {
  const tab = shopTab;
  const rods = Object.values(RODS)
    .filter((r) => r.id !== "none")
    .map((r) => {
      const owned = econ.state.rods.includes(r.id);
      const on = econ.state.equipped === r.id;
      return `<article class="card">
        <div class="art">${iconRod(r.id)}</div>
        <div class="copy">
          <b>${r.name}</b>
          <span>${r.note}</span>
          <i class="tag token">BURN ${r.burn} TOKEN</i>
        </div>
        ${
          owned
            ? `<button type="button" data-act="equip" data-id="${r.id}" ${on ? "disabled" : ""}>${on ? "ON" : "EQUIP"}</button>`
            : `<button class="primary" type="button" data-act="burn" data-id="${r.id}">BURN</button>`
        }
      </article>`;
    })
    .join("");
  const swaps = SHOP_SWAPS.map(
    (o) => `<article class="card">
      <div class="art">${iconSwap(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="swap" data-id="${o.id}">SWAP</button>
    </article>`
  ).join("");
  const gear = SHOP_GEAR.map((o) => {
    const owned = o.id === "skiff" && econ.state.boat;
    return `<article class="card">
      <div class="art">${iconBoat()}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      ${owned ? `<em class="kept">OWNED</em>` : `<button class="primary" type="button" data-act="gear" data-id="${o.id}">BUY</button>`}
    </article>`;
  }).join("");
  const merch = SHOP_MERCH.map(
    (o) => `<article class="card">
      <div class="art">${iconMerch(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag merch">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="merch" data-id="${o.id}">BUY</button>
    </article>`
  ).join("");
  const locker = econ.state.merch.length
    ? `<div class="locker">${econ.state.merch.map((m) => `<span>${m.name}</span>`).join("")}</div>`
    : `<p class="sub">Locker empty.</p>`;
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">LIGHTHOUSE</p>
    <h2>Shop</h2>
    <div class="wallet-line">
      <span><em>${econ.state.credits}</em>CR</span>
      <span><em>${econ.state.tokens}</em>TOKEN</span>
      <span><em>${econ.state.previewSol.toFixed(2)}</em>SOL</span>
    </div>
    <div class="tabs">
      <button type="button" data-act="tab" data-id="rods" class="${tab === "rods" ? "on" : ""}">RODS</button>
      <button type="button" data-act="tab" data-id="gear" class="${tab === "gear" ? "on" : ""}">GEAR</button>
      <button type="button" data-act="tab" data-id="swap" class="${tab === "swap" ? "on" : ""}">SWAPS</button>
      <button type="button" data-act="tab" data-id="merch" class="${tab === "merch" ? "on" : ""}">MERCH</button>
    </div>
    ${tab === "rods" ? `${walletChip()}<div class="cards">${rods}</div><p class="sub">Burned ${econ.state.burned} TOKEN · preview only</p>` : ""}
    ${tab === "gear" ? `<div class="cards">${gear}</div><p class="sub">Buy the skiff, then E on the north dock boat. Local preview. Not a live fleet.</p>` : ""}
    ${tab === "swap" ? `<div class="cards">${swaps}</div><p class="sub">Credits → TOKEN or preview SOL. No chain.</p>` : ""}
    ${tab === "merch" ? `<div class="cards">${merch}</div>${locker}<p class="sub">Preview locker. Nothing ships.</p>` : ""}
  `;
}

function renderInv(redeemFocus = false) {
  const items = econ.state.inventory;
  const cards = items.length
    ? items
        .map(
          (it) => `<article class="card">
        <div class="art">${iconFish(it.id)}</div>
        <div class="copy">
          <b>${it.name}</b>
          <span>${it.blurb || tradeLine(it)}</span>
          <i class="tag ${it.kind}">${it.rarity} · ${kindLabel(it.kind)}</i>
        </div>
        ${
          it.status === "redeemable"
            ? `<button class="primary" type="button" data-act="redeem" data-id="${it.uid}">REDEEM</button>`
            : `<em class="kept">${it.status.toUpperCase()}</em>`
        }
      </article>`
        )
        .join("")
    : `<p class="empty-pack">Nothing in the pack. Fish the docks.</p>`;
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">${redeemFocus ? "COUNTER" : "PACK"}</p>
    <h2>${redeemFocus ? "Redeem" : "Catch pack"}</h2>
    <p class="sub">${redeemFocus ? "Preview claims. SOL and merch stay in this browser." : "Each catch shows what it trades for."}</p>
    <div class="cards">${cards}</div>
    <p class="sub">Preview SOL claimed: ${econ.state.previewSol.toFixed(2)}</p>
  `;
}

function renderBoard() {
  const counts = {};
  for (const it of econ.state.inventory) counts[it.rarity] = (counts[it.rarity] || 0) + 1;
  const rares = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "???"]
    .map((r) => `<div class="stat-pill"><b>${counts[r] || 0}</b><span>${r}</span></div>`)
    .join("");
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">JOURNAL</p>
    <h2>Island log</h2>
    <p class="sub">Local preview. Room for a crowd — not a live 50-player server.</p>
    <div class="stat-grid">
      <div class="stat-card">${iconStat("fish")}<b>${econ.state.caught}</b><span>Landed</span></div>
      <div class="stat-card">${iconStat("burn")}<b>${econ.state.burned}</b><span>Burned</span></div>
      <div class="stat-card">${iconStat("credits")}<b>${econ.state.credits}</b><span>Credits</span></div>
    </div>
    <div class="rarity-row">${rares}</div>
    <p class="sub">Local record · biggest fish ${econ.state.biggest || 0} cm. Not a live server board.</p>
    <p class="mini">FOUND</p>
    <p class="sub">${Object.keys(econ.state.found || {}).length}/${SECRETS.length} secrets. No map pins. On purpose.</p>
    <div class="locker">${SECRETS.filter((s) => econ.state.found?.[s.id]).map((s) => `<span>${s.name}</span>`).join("") || "Nothing logged yet. Walk."}</div>
  `;
}

function renderBook() {
  const book = econ.state.book || {};
  const known = [...CATCHES, ...EVENT_CATCHES].filter((c) => book[c.id] || !c.hidden);
  const hiddenLeft = [...CATCHES, ...EVENT_CATCHES].filter((c) => c.hidden && !book[c.id]).length;
  const cards = known.map((c) => {
    const n = book[c.id] || 0;
    return `<article class="card">
      <div class="art">${n ? iconFish(c.id) : iconFish("old_boot")}</div>
      <div class="copy">
        <b>${n ? c.name : "???"}</b>
        <span>${n ? c.blurb : "Not logged yet."}</span>
        <i class="tag">${n ? `${c.rarity} · x${n}` : "UNKNOWN"}</i>
      </div>
    </article>`;
  }).join("");
  panel.innerHTML = `
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">FISH BOOK</p>
    <h2>What you landed</h2>
    <p class="sub">${Object.keys(book).length} logged · ${hiddenLeft} still unnamed · this browser only</p>
    <div class="cards">${cards}</div>
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
  if (act === "gear") {
    const res = econ.buyGear(btn.dataset.id);
    if (!res.ok) toast(res.reason);
    else {
      sfx.ui();
      toast("Island Skiff owned. E the north dock boat to sail.");
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
    if (!econ.state.boat) {
      toast("Buy the Island Skiff in Shop · GEAR first.");
      return;
    }
    startSail(EMBER_BOAT, "Great Saint Alon");
    return;
  }
  if (lastInteract.id === "emberdock") {
    startSail(HOME_BOAT, "Pump Island");
    return;
  }
  if (lastInteract.id === "boot") toast("Size 400. Someone lost the other one.");
  if (lastInteract.id === "loo") toast("Cave plumbing. Do not fish here.");
  if (lastInteract.id === "shrine") toast("The pill watches. Burn wisely.");
  if (lastInteract.id === "pc") toast("Still compiling. Since 2004.");
  if (lastInteract.id === "duck") toast("Quack. Not a fish. You cannot redeem this.");
  if (lastInteract.id === "chest") toast("Locked. The chef has the key. Obviously.");
  if (lastInteract.id === "crash") toast("Failed airdrop. Contents: sand.");
  if (lastInteract.id === "vending") toast("Sells warm soda and a key that fits nothing. Out of order since 2009.");
  if (lastInteract.id === "phone") toast(Math.random() < 0.5 ? "It rings. Nobody speaks. You hang up first." : "Dial tone. Then a splash. Then nothing.");
  if (lastInteract.id === "bunker") toast("Hatch is locked from below. Something knocks twice, then stops.");
  if (lastInteract.id === "chairman") toast("Been here 17 years. Says the fish come to him now. He has not moved.");
  if (lastInteract.id === "advice") toast("Cast when the water looks wet. Reel when it doesn’t. Good luck.");
  if (lastInteract.id === "drawings") toast("Scratched into the rock: a fish larger than the island. Dated tomorrow.");
  if (lastInteract.id === "drop") {
    econ.markDrop();
    paintHud();
    toast("The Drop. You can see it from day one. You cannot go there yet.");
  }
  const secretIds = new Set(SECRETS.map((s) => s.id));
  if (secretIds.has(lastInteract.id)) {
    const s = SECRETS.find((x) => x.id === lastInteract.id);
    const g = gateSecret(s, {
      boat: econ.state.boat,
      night: dayPhase(performance.now() / 1000).night,
      rodRank: { none: 0, basic: 1, advanced: 2, elite: 3 }[econ.state.equipped] || 0,
      storm: life.weather === "storm",
    });
    if (!g.ok) {
      toast(g.reason);
      return;
    }
    const first = econ.discover(s.id);
    toast(s.hint);
    if (first) {
      paintHud();
      toast(`LOGGED · ${s.name}`);
    }
  }
}

function setCastUI(phase, label, fill) {
  if (!castMeter) return;
  castMeter.classList.remove("hidden", "bite", "reel", "snap");
  if (phase === "bite") castMeter.classList.add("bite");
  if (phase === "fight" || phase === "reel") castMeter.classList.add("reel");
  if (phase === "snap") castMeter.classList.add("snap");
  if (castPhaseEl) castPhaseEl.textContent = phase.toUpperCase();
  castLabel.textContent = label;
  castFill.style.width = `${Math.max(0, Math.min(100, fill))}%`;
  const fight = phase === "fight";
  tensionWrap?.classList.toggle("hidden", !fight);
  if (fight && tensionFill && fishing) tensionFill.style.width = `${Math.max(4, Math.min(100, fishing.tension * 100))}%`;
}

function endFishing(msg) {
  fishing = null;
  bobber.visible = false;
  worldLine.visible = false;
  fightFish.visible = false;
  castMeter.classList.add("hidden");
  tensionWrap?.classList.add("hidden");
  poseFishingArms(arms, "idle", 0);
  if (msg) toast(msg);
}

function updateWorldLine() {
  if (!fishing || !worldLine) return;
  const tip = new THREE.Vector3(0.18, -0.18, -1.35);
  camera.localToWorld(tip);
  const pos = worldLine.geometry.attributes.position;
  pos.setXYZ(0, tip.x, tip.y, tip.z);
  pos.setXYZ(1, fishing.bx, fishing.by, fishing.bz);
  pos.needsUpdate = true;
  worldLine.visible = fishing.phase !== "land";
}

function showCatch(item) {
  if (!catchCard) return;
  document.getElementById("catch-rarity").textContent = item.rarity.toUpperCase();
  document.getElementById("catch-name").textContent = item.name;
  const blurb = document.getElementById("catch-blurb");
  if (blurb) blurb.textContent = item.blurb || "";
  document.getElementById("catch-kind").textContent = kindLabel(item.kind);
  const trade = document.getElementById("catch-trade");
  if (trade) trade.textContent = `${tradeLine(item)}${item.size ? ` · ${item.size} cm` : ""}`;
  catchCard.classList.toggle("jackpot", item.rarity === "???" || item.rarity === "Mythic");
  catchCard.classList.remove("hidden");
  catchTimer = item.rarity === "???" ? 12 : 8;
  dressCatch(catchProp, item.id);
  catchProp.visible = true;
  const s = Math.max(0.7, Math.min(2.6, (item.size || 40) / 40));
  catchProp.scale.setScalar(s);
  freeMouse();
  const rare = item.rarity === "Legendary" || item.rarity === "Mythic" || item.rarity === "???" || item.rarity === "Epic";
  sfx.catch(rare);
  const where = (item.zone || "ISLAND").replaceAll("_", " ");
  if (rare) toast(`YOU caught ${item.name} at ${where}`);
  if (item.rarity === "???" || item.rarity === "Mythic") {
    const b = document.getElementById("event-banner");
    if (b && !islandEvents.active) {
      b.classList.remove("hidden");
      document.getElementById("event-title").textContent = "ISLAND CALL";
      document.getElementById("event-hint").textContent = `YOU caught ${item.name} at ${where} · local preview`;
      setTimeout(() => { if (!islandEvents.active) b.classList.add("hidden"); }, 8000);
    }
  }
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
    const sec = secretAt(x, z) || secretAt(camera.position.x, camera.position.z);
    if (sec?.fish && econ.state.found?.[sec.id]) return { ok: true, x, z, secret: sec };
    if (y < 1.4 && heightAt(x, z) < 0.35) return { ok: true, x, z };
  }
  return { ok: false };
}

function beginCast() {
  if (fishing || panelOpen || !playing || sailing) return;
  if (catchCard && !catchCard.classList.contains("hidden")) return;
  const aim = lookingAtWater();
  if (!aim.ok) {
    toast("Look at the water to cast.");
    return;
  }
  const zone = zoneAt(aim.x, aim.z);
  const here = zoneAt(camera.position.x, camera.position.z);
  const sec = aim.secret || secretAt(camera.position.x, camera.position.z);
  const useZone = sec?.fish && econ.state.found?.[sec.id]
    ? { id: sec.fish, fish: true }
    : zone.fish ? zone : here;
  if (!sec?.fish && heightAt(aim.x, aim.z) >= 0.35) {
    toast("Look at the water to cast.");
    return;
  }
  const gate = econ.canFish(useZone.id);
  if (!gate.ok) {
    toast(gate.reason);
    return;
  }
  const from = camera.position.clone();
  fishing = {
    t: 0,
    phase: "cast",
    zone: useZone.id,
    window: 0.9 + Math.random() * 0.5,
    biteAt: 1.1 + Math.random() * 2.2,
    fromX: from.x,
    fromY: from.y - 0.2,
    fromZ: from.z,
    tx: aim.x,
    tz: aim.z,
    bx: from.x,
    by: from.y,
    bz: from.z,
    tension: 0.28,
    pull: 0.55 + Math.random() * 0.7,
    dir: Math.random() * Math.PI * 2,
    progress: 0,
    shake: 0,
    sizeHint: 0.7 + Math.random() * 1.6,
  };
  sfx.cast();
  setCastUI("cast", "F to Cast", 8);
}

function placeBobber(tNow) {
  if (!fishing) {
    bobber.visible = false;
    return;
  }
  const wy = waterHeight(fishing.bx, fishing.bz, tNow);
  if (fishing.phase === "cast") {
    const k = Math.min(1, fishing.t / 0.55);
    const ease = k * k * (3 - 2 * k);
    fishing.bx = fishing.fromX + (fishing.tx - fishing.fromX) * ease;
    fishing.bz = fishing.fromZ + (fishing.tz - fishing.fromZ) * ease;
    fishing.by = fishing.fromY + (wy - fishing.fromY) * ease + Math.sin(k * Math.PI) * 2.4;
    bobber.position.set(fishing.bx, fishing.by, fishing.bz);
    bobber.visible = k > 0.12;
  } else if (fishing.phase === "bite" || fishing.phase === "fight") {
    fishing.by = wy - (fishing.phase === "bite" ? 0.45 : 0.22 + fishing.tension * 0.3);
    bobber.position.set(fishing.bx, fishing.by, fishing.bz);
    bobber.visible = fishing.phase === "fight";
  } else if (fishing.phase === "land") {
    bobber.visible = false;
  } else {
    const bob = Math.sin(tNow * 3.2) * 0.05;
    fishing.by = wy + 0.08 + bob;
    bobber.position.set(fishing.bx, fishing.by, fishing.bz);
    bobber.rotation.z = Math.sin(tNow * 2.1) * 0.18;
    bobber.visible = true;
  }
}

function tickFishing(dt) {
  if (!fishing) {
    poseFishingArms(arms, "idle", 0);
    bobber.visible = false;
    worldLine.visible = false;
    return;
  }
  fishing.t += dt;
  const tNow = performance.now() / 1000;
  poseFishingArms(arms, fishing.phase, fishing.phase === "fight" ? fishing.tension : fishing.t);
  placeBobber(tNow);
  updateWorldLine();

  if (fishing.phase === "cast") {
    setCastUI("cast", "F to Cast", (fishing.t / 0.55) * 100);
    if (fishing.t >= 0.55) {
      fishing.phase = "wait";
      fishing.t = 0;
      fishing.bx = fishing.tx;
      fishing.bz = fishing.tz;
      burstSplash(splash, fishing.bx, 0.12, fishing.bz);
      burstRipple(ripple, fishing.bx, 0.04, fishing.bz);
      sfx.splash();
      setCastUI("wait", "F to Reel · waiting", 0);
    }
  } else if (fishing.phase === "wait") {
    if (fishing.t % 0.9 < dt) burstRipple(ripple, fishing.bx, 0.03, fishing.bz);
    setCastUI("wait", "F to Reel · waiting", (fishing.t / fishing.biteAt) * 100);
    if (fishing.t >= fishing.biteAt) {
      fishing.phase = "bite";
      fishing.t = 0;
      fishing.shake = 0.18;
      burstSplash(splash, fishing.bx, 0.12, fishing.bz);
      sfx.bite();
      setCastUI("bite", "F to Reel", 100);
      toast("F to Reel");
    }
  } else if (fishing.phase === "bite") {
    fishing.shake *= 0.92;
    setCastUI("bite", "F to Reel", (1 - fishing.t / fishing.window) * 100);
    if (fishing.t > fishing.window) {
      sfx.miss();
      endFishing("It got away.");
    }
  } else if (fishing.phase === "fight") {
    fishing.dir += (Math.random() - 0.5) * dt * 3.2;
    const holding = !!(keys.KeyF);
    if (holding) {
      fishing.progress += dt * (0.34 + (1 - fishing.tension) * 0.22);
      fishing.tension += dt * (0.18 + fishing.pull * 0.12);
    } else {
      fishing.tension -= dt * 0.22;
      fishing.progress -= dt * 0.05;
    }
    fishing.tension += Math.sin(tNow * 7) * dt * 0.08 * fishing.pull;
    fishing.tension = Math.max(0.08, Math.min(1.15, fishing.tension));
    const pull = fishing.pull * (0.4 + fishing.tension);
    vel.x += Math.cos(fishing.dir) * pull * dt * 3.4;
    vel.z += Math.sin(fishing.dir) * pull * dt * 3.4;
    fishing.shake = 0.06 + fishing.tension * 0.16;
    if (fishing.t % 0.35 < dt) burstRipple(ripple, fishing.bx, 0.03, fishing.bz);
    fightFish.visible = fishing.tension > 0.55;
    if (fightFish.visible) {
      fightFish.position.set(fishing.bx + Math.sin(tNow * 8) * 0.4, fishing.by - 0.15, fishing.bz + Math.cos(tNow * 6) * 0.4);
      fightFish.scale.setScalar(0.7 + fishing.sizeHint * 0.5);
      fightFish.rotation.y = tNow * 4;
    }
    setCastUI("fight", holding ? "HOLD F · don’t snap it" : "HOLD F to reel", fishing.progress * 100);
    if (fishing.tension > 1) {
      sfx.miss();
      endFishing("Line snapped.");
    } else if (fishing.progress >= 1) {
      startLand();
    }
  } else if (fishing.phase === "land") {
    const k = Math.min(1, fishing.t / 0.7);
    const wx = camera.position.x;
    const wz = camera.position.z;
    fishing.bx = fishing.tx + (wx - fishing.tx) * k;
    fishing.bz = fishing.tz + (wz - fishing.tz) * k;
    fishing.by = waterHeight(fishing.bx, fishing.bz, tNow) + Math.sin(k * Math.PI) * 2.1 + k * 0.6;
    fightFish.visible = true;
    fightFish.position.set(fishing.bx, fishing.by, fishing.bz);
    fightFish.rotation.z = -k * 1.2;
    setCastUI("land", "FISH ON", 100);
    if (k >= 1) finishCatch();
  }
}

function startLand() {
  fishing.phase = "land";
  fishing.t = 0;
  fishing.tx = fishing.bx;
  fishing.tz = fishing.bz;
  burstSplash(splash, fishing.bx, 0.2, fishing.bz);
  sfx.reel();
}

function finishCatch() {
  const zone = fishing.zone;
  const sizeHint = fishing.sizeHint;
  endFishing();
  const res = econ.rollCatch(zone, currentEvent()?.id);
  if (!res.ok) {
    toast(res.reason);
    return;
  }
  if (res.item && sizeHint) res.item.size = Math.max(res.item.size || 20, Math.round(sizeHint * 48));
  paintHud();
  showCatch(res.item);
  toast(`${res.item.rarity} · ${res.item.name}${res.item.size ? ` · ${res.item.size}cm` : ""}`);
}

function reel() {
  if (!playing) return;
  if (!fishing) {
    beginCast();
    return;
  }
  if (fishing.phase === "bite") {
    fishing.phase = "fight";
    fishing.t = 0;
    fishing.tension = 0.34;
    fishing.progress = 0;
    sfx.reel();
    setCastUI("fight", "HOLD F to reel", 0);
    burstSplash(splash, fishing.bx, 0.12, fishing.bz);
  }
}

function eyeHeight() {
  return crouch ? 1.05 : 1.62;
}

function setText(el, value) {
  if (el && el.textContent !== value) el.textContent = value;
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
  const hint = zone.hint || (zone.fish ? "Fish here" : "Explore");
  setText(zoneEl, zone.label);
  setText(zoneHintEl, hint);
  setText(areaNowEl, zone.label);
  setText(areaNowHintEl, hint);
  if (zone.id !== lastZoneId) {
    lastZoneId = zone.id;
    if (playing && areaEnterEl) {
      setText(areaEnterEl, `ENTERING  ${zone.label}`);
      areaEnterEl.classList.remove("hidden");
      areaEnterTimer = 2.4;
    }
  }
  if (sailing) {
    setText(promptEl, "Sailing…");
    return;
  }
  let next = "";
  if (!panelOpen) {
    if (fishing) {
      if (fishing.phase === "cast") next = "F to Cast";
      else if (fishing.phase === "fight") next = "HOLD F · let off if it screams";
      else if (fishing.phase === "land") next = "FISH ON";
      else next = "F to Reel";
    }
    else if (lastInteract) next = lastInteract.label;
    else if (lookingAtWater().ok && econ.state.equipped !== "none") next = "F to Cast";
  }
  setText(promptEl, next);
}

function applyLook(dx, dy) {
  look.x -= dx * 0.00225;
  look.y -= dy * 0.00225;
  look.y = Math.max(-1.2, Math.min(1.2, look.y));
  camera.rotation.y = look.x;
  camera.rotation.x = look.y;
  if (fishing?.shake) {
    camera.rotation.x += (Math.random() - 0.5) * fishing.shake;
    camera.rotation.y += (Math.random() - 0.5) * fishing.shake * 0.6;
  }
}

function startSail(dest, label) {
  if (sailing || fishing) return;
  sailing = {
    t: 0,
    dur: 7.2,
    fromX: camera.position.x,
    fromZ: camera.position.z,
    toX: dest.x,
    toZ: dest.z,
    label,
  };
  look.x = Math.atan2(dest.x - camera.position.x, -(dest.z - camera.position.z));
  camera.rotation.y = look.x;
  toast(`Sailing to ${label}`);
}

function stepSail(dt) {
  sailing.t += dt;
  const k = Math.min(1, sailing.t / sailing.dur);
  const e = k * k * (3 - 2 * k);
  camera.position.x = sailing.fromX + (sailing.toX - sailing.fromX) * e;
  camera.position.z = sailing.fromZ + (sailing.toZ - sailing.fromZ) * e;
  const tSec = performance.now() / 1000;
  camera.position.y = waterHeight(camera.position.x, camera.position.z, tSec) + 1.42;
  if (k >= 1) {
    const name = sailing.label;
    sailing = null;
    if (name === "Great Saint Alon") econ.markEmber();
    toast(`Landed · ${name}`);
    paintHud();
  }
}

let lastShoreToast = 0;
function stepPlayer(dt) {
  if (sailing) {
    stepSail(dt);
    return;
  }
  const tSec = performance.now() / 1000;
  const landY = heightAt(camera.position.x, camera.position.z);
  const waveY = waterHeight(camera.position.x, camera.position.z, tSec);
  const onWater = landY < 0.12;
  const waterSurface = Math.max(waveY, 0.02);
  const groundedY = onWater ? waterSurface : landY;
  const sprint = !!(keys.ShiftLeft || keys.ShiftRight);
  const speed = (sprint ? 8.4 : 5.1) * (crouch ? 0.42 : 1) * (onWater ? 0.55 : 1) * (fishing ? 0.32 : 1);

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
  vel.y -= (onWater ? 9 : 20) * dt;

  let nx = camera.position.x + vel.x * dt;
  let nz = camera.position.z + vel.z * dt;
  if (!econ.state.boat) {
    const rHome = Math.hypot(nx, nz);
    const shore = ISLAND_R + 1.6;
    if (rHome > shore) {
      const k = shore / rHome;
      nx *= k;
      nz *= k;
      vel.x *= 0.15;
      vel.z *= 0.15;
      const now = performance.now();
      if (now - lastShoreToast > 2200) {
        lastShoreToast = now;
        toast("Need the Island Skiff to leave Pump Island.");
      }
    }
  } else {
    const rHome = Math.hypot(nx, nz);
    const rEmber = Math.hypot(nx - ISLAND2.x, nz - ISLAND2.z);
    const maxR = 210;
    if (rHome > maxR && rEmber > ISLAND2.r + 18) {
      if (rHome < rEmber) {
        const k = maxR / rHome;
        nx *= k;
        nz *= k;
      }
      vel.x *= 0.2;
      vel.z *= 0.2;
    }
    if (nz < -88) {
      nz = -88;
      vel.z *= 0.1;
    }
  }
  const hit = resolveCollision(nx, nz);
  if (hit.x !== nx || hit.z !== nz) {
    vel.x *= 0.2;
    vel.z *= 0.2;
  }
  camera.position.x = hit.x;
  camera.position.z = hit.z;
  camera.position.y += vel.y * dt;

  const landFloor = heightAt(camera.position.x, camera.position.z);
  const wet = landFloor < 0.12;
  const wave = waterHeight(camera.position.x, camera.position.z, tSec);
  const floor = (wet ? Math.max(wave, 0.02) : landFloor) + eyeHeight();
  const grounded = camera.position.y <= floor + 0.12;
  const rise = floor - camera.position.y;
  if (wet && vel.y <= 1.2) {
    camera.position.y += rise * Math.min(1, dt * 6.5);
    vel.y *= 0.72;
  } else if (rise > 0 && rise < 0.42 && vel.y <= 0.6) {
    camera.position.y += Math.min(rise, dt * 8.5);
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
  if (fishing?.shake) {
    camera.rotation.x += (Math.random() - 0.5) * fishing.shake;
    camera.rotation.y += (Math.random() - 0.5) * fishing.shake * 0.55;
  }

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
    if (!fishing) poseFishingArms(arms, "idle", tSec);
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
  if (e.code === "KeyJ") (panelOpen === "book" ? closePanel() : openPanel("book"));
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
  if (hot === "book") (panelOpen === "book" ? closePanel() : openPanel("book"));
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
let hudAcc = 0;
let mapAcc = 0;
let npcAcc = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (playing) {
    stepPlayer(dt);
    tickFishing(dt);
    hudAcc += dt;
    mapAcc += dt;
    if (hudAcc > 0.08) {
      hudAcc = 0;
      updatePrompt();
    }
    if (minimap && mapAcc > 0.05) {
      mapAcc = 0;
      minimap.draw(camera.position.x, camera.position.z, look.x);
    }
  }
  npcAcc += dt;
  if (npcAcc > 0.12) {
    npcAcc = 0;
    const t = now / 1000;
    for (const p of world.people) {
      const dx = p.position.x - camera.position.x;
      const dz = p.position.z - camera.position.z;
      if (dx * dx + dz * dz < 900) animateCharacter(p, t, !!p.userData.moving, p.userData.archetype === "FISHERMAN");
    }
  }
  const tSec = now / 1000;
  const day = dayPhase(tSec);
  const raining = life.weather === "rain" || life.weather === "storm" || currentEvent()?.weather === "storm";
  const foggy = life.weather === "fog" || life.weather === "storm" || currentEvent()?.weather === "fog";
  const rough = life.weather === "storm" || currentEvent()?.id === "storm";
  tickLife(life, { dt, t: tSec, camera, toast, night: day.night || currentEvent()?.id === "blood_moon", rough, raining, foggy });
  tickEvents(islandEvents, {
    dt,
    t: tSec,
    toast,
    people: world.people,
    onStart: (ev) => {
      life.patrol = world.people.filter((p) => p.userData.path);
      if (ev.weather) life.weather = ev.weather;
      const b = document.getElementById("event-banner");
      if (b) {
        b.classList.remove("hidden");
        document.getElementById("event-title").textContent = ev.title;
        document.getElementById("event-hint").textContent = `${ev.hint} · local preview`;
      }
    },
    onEnd: () => {
      document.getElementById("event-banner")?.classList.add("hidden");
    },
  });
  if (islandEvents.active) {
    const left = Math.max(0, islandEvents.active.left);
    const hint = document.getElementById("event-hint");
    if (hint) hint.textContent = `${islandEvents.active.hint} · ${Math.ceil(left / 60)}m left · local`;
  }
  const elev = day.elev;
  const dusk = day.dusk;
  const evSky = currentEvent()?.sky;
  const skyCol = evSky || (dusk ? 0xc47a4a : day.night ? 0x152033 : 0x6aa3cc);
  scene.background.setHex(skyCol);
  scene.fog.color.setHex(skyCol);
  scene.fog.density = foggy ? 0.028 : day.night ? 0.016 : 0.011;
  hemi.intensity = day.night ? 0.28 : dusk ? 0.7 : 1.2;
  sun.intensity = day.night ? 0.08 : dusk ? 0.7 : 0.85;
  sun.position.set(Math.cos(day.ang) * 70, Math.max(-12, elev * 62), Math.sin(day.ang) * 40);
  if (world.ocean?.material?.uniforms?.uAmp) world.ocean.material.uniforms.uAmp.value = rough ? 2.15 : 1;
  if (world.lighthouse) {
    const lantern = world.lighthouse.children.find((c) => c.material?.emissive);
    if (lantern?.material) lantern.material.emissiveIntensity = day.night ? 1.4 : 0.22;
  }
  tickSplash(splash, dt);
  tickRipple(ripple, dt);
  if (world.ocean?.material?.uniforms?.uTime) world.ocean.material.uniforms.uTime.value = tSec;
  if (world.duck) {
    world.duck.position.y = waterHeight(world.duck.position.x, world.duck.position.z, tSec) + 0.1;
    world.duck.rotation.z = Math.sin(tSec * 1.7) * 0.2;
  }
  if (catchProp.visible) {
    catchProp.rotation.y += dt * 1.6;
    catchProp.position.y = -0.12 + Math.sin(now / 220) * 0.02;
  }
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) toastEl.classList.add("hidden");
  }
  if (areaEnterTimer > 0) {
    areaEnterTimer -= dt;
    if (areaEnterTimer <= 0) areaEnterEl?.classList.add("hidden");
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
