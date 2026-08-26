import * as THREE from "three";
import { C } from "./palette.js";

export const EVENT_CATCHES = [
  { id: "whale_calf", name: "Sighted Calf", rarity: "Legendary", kind: "sol", value: 0.08, zones: ["OFFSHORE", "EVENT"], minRod: "basic", event: "whale", blurb: "Only while the whale is in the bay.", trade: "Redeems for 0.08 SOL (preview)." },
  { id: "shark_tooth", name: "Shark Tooth", rarity: "Rare", kind: "collectible", value: 0, zones: ["EAST_BEACH", "EVENT"], minRod: "basic", event: "shark", blurb: "Still warm. Do not ask.", trade: "Collectible." },
  { id: "meteor_koi", name: "Meteor Koi", rarity: "Epic", kind: "token", value: 40, zones: ["MAIN_DOCK", "EVENT"], minRod: "basic", event: "meteor", blurb: "Fell with the rocks. Still glowing.", trade: "Redeems for 40 TOKEN." },
  { id: "blood_eel", name: "Blood Eel", rarity: "Epic", kind: "credits", value: 220, zones: ["CAVES", "EVENT"], minRod: "basic", event: "blood_moon", blurb: "Only the red night. Put it back if you can.", trade: "Redeems for 220 credits." },
  { id: "storm_cod", name: "Storm Cod", rarity: "Rare", kind: "credits", value: 70, zones: ["MAIN_DOCK", "NORTH_DOCK", "EVENT"], minRod: "basic", event: "storm", blurb: "Came in with the ugly water.", trade: "Redeems for 70 credits." },
  { id: "wreck_lockbox", name: "Wreck Lockbox", rarity: "Epic", kind: "treasure", value: 0, zones: ["EAST_BEACH", "EVENT"], minRod: "basic", event: "wreck", blurb: "Washed off the cargo ship. Still sealed.", trade: "Treasure. Keep it." },
  { id: "gilt_snapper", name: "Gilt Snapper", rarity: "Legendary", kind: "sol", value: 0.06, zones: ["EAST_BEACH", "EVENT"], minRod: "basic", event: "golden", blurb: "The gold run. Ten minutes. Then gone.", trade: "Redeems for 0.06 SOL (preview)." },
  { id: "cave_lantern", name: "Lantern Fish", rarity: "Rare", kind: "credits", value: 90, zones: ["CAVES", "EVENT"], minRod: "basic", event: "glow_cave", blurb: "The cave opened a second mouth.", trade: "Redeems for 90 credits." },
  { id: "ufo_bass", name: "Unidentified Bass", rarity: "Mythic", kind: "collectible", value: 0, zones: ["OFFSHORE", "EVENT"], minRod: "basic", event: "ufo", blurb: "It looked at you first.", trade: "Collectible. Do not cook." },
  { id: "tide_relic", name: "Tide Relic", rarity: "Epic", kind: "collectible", value: 0, zones: ["SOUTH_CLIFFS", "EVENT"], minRod: "basic", event: "low_tide", blurb: "The sandbar only exists at this tide.", trade: "Collectible." },
  { id: "crate_tin", name: "Crate Tin", rarity: "Uncommon", kind: "credits", value: 36, zones: ["EAST_BEACH", "EVENT"], minRod: "basic", event: "crate", blurb: "Still cold. Label says 1998.", trade: "Redeems for 36 credits." },
];

export const EVENTS = [
  { id: "whale", title: "WHALE SIGHTING", shout: "WHALE IN THE BAY", hint: "Offshore · exclusive calf pool", x: -30, z: 4, dur: 240, rare: true, weather: null, sky: 0x6aa3cc },
  { id: "shark", title: "SHARK RUN", shout: "SHARKS ON THE BEACH", hint: "East Beach · don’t swim stupid", x: 28, z: 10, dur: 180, rare: false, weather: null, sky: null },
  { id: "meteor", title: "METEOR SHOWER", shout: "ROCKS ARE FALLING", hint: "Dock water is glowing", x: 2, z: 32, dur: 200, rare: false, weather: null, sky: 0x1a1630 },
  { id: "blood_moon", title: "BLOOD MOON", shout: "THE MOON WENT WRONG", hint: "Cave pool is exclusive", x: 17, z: 20, dur: 300, rare: true, weather: "fog", sky: 0x4a1820 },
  { id: "storm", title: "TROPICAL STORM", shout: "GET OFF THE WATER", hint: "Storm cod on the docks", x: 1.6, z: 32, dur: 220, rare: false, weather: "storm", sky: 0x3a4650 },
  { id: "wreck", title: "CARGO WRECK", shout: "SHIP CAME APART", hint: "East Beach lockboxes", x: 28, z: 10, dur: 260, rare: false, weather: null, sky: null },
  { id: "treasure", title: "TREASURE BOAT", shout: "BOAT FULL OF JUNK GOLD", hint: "North dock · look offshore", x: -24, z: 8, dur: 210, rare: true, weather: null, sky: null },
  { id: "golden", title: "GOLDEN RUN", shout: "THE WATER WENT GOLD", hint: "East Beach exclusive gilt", x: 28, z: 10, dur: 180, rare: true, weather: null, sky: 0xc4a15a },
  { id: "glow_cave", title: "CAVE OPENING", shout: "THE CAVE GREW A MOUTH", hint: "Lantern fish inside", x: 17, z: 20, dur: 240, rare: false, weather: null, sky: null },
  { id: "ufo", title: "SOMETHING OVERHEAD", shout: "THAT IS NOT A PLANE", hint: "Offshore unidentified bass", x: 0, z: 8, dur: 200, rare: true, weather: null, sky: 0x142018 },
  { id: "lighthouse", title: "LIGHTHOUSE FAULT", shout: "THE LIGHT IS DRUNK", hint: "Beam is wrong. Fish don’t care.", x: 0, z: -1, dur: 180, rare: false, weather: null, sky: null },
  { id: "giant", title: "GIANT OFFSHORE", shout: "SOMETHING HUGE UNDER US", hint: "Stay on the skiff", x: -30, z: 2, dur: 200, rare: true, weather: null, sky: null },
  { id: "crate", title: "SUPPLY WASH", shout: "CRATES ON THE SAND", hint: "East Beach tins", x: 26, z: 8, dur: 200, rare: false, weather: null, sky: null },
  { id: "npc", title: "THE OTHER FISHERMAN", shout: "WHO IS THAT", hint: "He fishes. He does not talk.", x: 4, z: 30, dur: 240, rare: true, weather: null, sky: null },
  { id: "low_tide", title: "LOW TIDE", shout: "THE FLOOR CAME UP", hint: "South sandbar is real for a bit", x: -8, z: 22, dur: 280, rare: false, weather: null, sky: null },
];

const SHOUTS = [
  "RUN",
  "BOATS NOW",
  "I SAW IT",
  "NOT A DRILL",
  "LEAVE THE CHAIR",
  "JEFF IS INVOLVED",
  "GET THE ROD",
];

function mesh(geo, color) {
  return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color, flatShading: true }));
}

function makeMarker() {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.2, 5), 0xc44a3a);
  pole.position.y = 2.1;
  const flag = mesh(new THREE.BoxGeometry(1.6, 0.7, 0.05), 0xe8c15a);
  flag.position.set(0.8, 3.6, 0);
  g.add(pole, flag);
  g.visible = false;
  return g;
}

function makeUfo() {
  const g = new THREE.Group();
  const disc = mesh(new THREE.CylinderGeometry(1.8, 2.4, 0.35, 8), 0xc9d4c6);
  const dome = mesh(new THREE.SphereGeometry(0.7, 6, 4), 0x7de39a);
  dome.position.y = 0.4;
  g.add(disc, dome);
  g.visible = false;
  return g;
}

function makeWhale() {
  const g = new THREE.Group();
  const body = mesh(new THREE.CapsuleGeometry(1.1, 4.4, 3, 6), 0x4a5a68);
  body.rotation.z = Math.PI / 2;
  const tail = mesh(new THREE.BoxGeometry(0.2, 1.6, 1.1), 0x3a4a55);
  tail.position.x = -3.1;
  g.add(body, tail);
  g.visible = false;
  return g;
}

function makeCrate() {
  const b = mesh(new THREE.BoxGeometry(0.7, 0.55, 0.7), 0x6a4a2d);
  b.visible = false;
  return b;
}

export function createEvents(root) {
  const sys = {
    active: null,
    nextIn: 22,
    marker: makeMarker(),
    ufo: makeUfo(),
    whale: makeWhale(),
    crate: makeCrate(),
    sandbar: mesh(new THREE.CylinderGeometry(6, 7.4, 0.5, 8), C.sand),
    mets: [],
    shoutT: 0,
  };
  sys.sandbar.position.set(-8, -0.4, 24);
  sys.sandbar.visible = false;
  root.add(sys.marker, sys.ufo, sys.whale, sys.crate, sys.sandbar);
  for (let i = 0; i < 10; i++) {
    const m = mesh(new THREE.SphereGeometry(0.12, 5, 4), 0xffe6a0);
    m.visible = false;
    m.userData.live = false;
    root.add(m);
    sys.mets.push(m);
  }
  return sys;
}

export function currentEvent() {
  return _active;
}

let _active = null;

export function tickEvents(sys, ctx) {
  const { dt, t, toast, people, onStart, onEnd } = ctx;
  if (sys.active) {
    sys.active.left -= dt;
    sys.shoutT -= dt;
    if (sys.shoutT <= 0) {
      sys.shoutT = 7 + Math.random() * 6;
      const line = SHOUTS[(Math.random() * SHOUTS.length) | 0];
      toast(`${sys.active.shout} · “${line}”`);
    }
    animateEvent(sys, t);
    if (sys.active.left <= 0) {
      const ended = sys.active;
      hideEvent(sys);
      sys.active = null;
      _active = null;
      sys.nextIn = 70 + Math.random() * 90;
      toast(`${ended.title} ended. Water is ordinary again.`);
      onEnd?.(ended);
    }
    return sys.active;
  }
  sys.nextIn -= dt;
  if (sys.nextIn <= 0) startEvent(sys, toast, people, onStart);
  return null;
}

function startEvent(sys, toast, people, onStart) {
  const ev = EVENTS[(Math.random() * EVENTS.length) | 0];
  sys.active = { ...ev, left: ev.dur };
  _active = sys.active;
  sys.shoutT = 1.2;
  sys.marker.position.set(ev.x, 0.2, ev.z);
  sys.marker.visible = true;
  sys.ufo.visible = ev.id === "ufo";
  sys.whale.visible = ev.id === "whale" || ev.id === "giant";
  sys.crate.visible = ev.id === "crate" || ev.id === "wreck";
  sys.crate.position.set(26.4, 0.28, 8.2);
  sys.sandbar.visible = ev.id === "low_tide";
  if (sys.sandbar.visible) sys.sandbar.position.y = 0.12;
  if (people) {
    for (const p of people) {
      if (p.userData.sit || p.userData.watcher) continue;
      p.userData.eventRun = true;
      p.userData.path = [
        [p.position.x, p.position.z],
        [ev.x + (Math.random() - 0.5) * 4, ev.z + (Math.random() - 0.5) * 4],
      ];
      p.userData.u = 0;
    }
  }
  toast(`EVENT · ${ev.title} · ${Math.round(ev.dur / 60)} min`);
  onStart?.(sys.active);
}

function hideEvent(sys) {
  sys.marker.visible = false;
  sys.ufo.visible = false;
  sys.whale.visible = false;
  sys.crate.visible = false;
  sys.sandbar.visible = false;
  for (const m of sys.mets) m.visible = false;
}

function animateEvent(sys, t) {
  const ev = sys.active;
  if (!ev) return;
  sys.marker.rotation.y = t * 0.8;
  if (sys.whale.visible) {
    sys.whale.position.set(ev.x + Math.sin(t * 0.3) * 8, 0.4 + Math.sin(t) * 0.4, ev.z + Math.cos(t * 0.25) * 6);
    sys.whale.rotation.y = t * 0.25;
  }
  if (sys.ufo.visible) {
    sys.ufo.position.set(Math.cos(t * 0.4) * 22, 18 + Math.sin(t) * 2, Math.sin(t * 0.4) * 22);
    sys.ufo.rotation.y = t;
  }
  if (ev.id === "meteor") {
    for (const m of sys.mets) {
      if (!m.userData.live && Math.random() < 0.04) {
        m.userData.live = true;
        m.visible = true;
        m.position.set((Math.random() - 0.5) * 40, 22, (Math.random() - 0.5) * 40);
        m.userData.v = { x: -8 - Math.random() * 6, y: -14, z: -4 };
      }
      if (m.userData.live) {
        m.position.x += m.userData.v.x * 0.016;
        m.position.y += m.userData.v.y * 0.016;
        m.position.z += m.userData.v.z * 0.016;
        if (m.position.y < 0.4) {
          m.userData.live = false;
          m.visible = false;
        }
      }
    }
  }
}
