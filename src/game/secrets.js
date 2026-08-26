export const SECRETS = [
  { id: "hut", name: "Abandoned hut", hint: "Someone left the stove on in 2006.", x: 14.6, z: -18.4, r: 2.4 },
  { id: "sewer", name: "Drain tunnel", hint: "It smells like bait and regret.", x: 8.2, z: 16.4, r: 2.2, fish: "DRAIN" },
  { id: "wreck", name: "Shipwreck", hint: "The hull still ticks.", x: 36.4, z: 4.2, r: 3.2, need: "boat", fish: "WRECK" },
  { id: "secret_beach", name: "Quiet cove", hint: "Not on any chart.", x: 22.4, z: -6.8, r: 2.6, fish: "COVE" },
  { id: "cliff_path", name: "Goat path", hint: "One wrong step. Then fish.", x: -22.4, z: 22.6, r: 2.2, need: "advanced" },
  { id: "carving", name: "Rock carving", hint: "DO NOT FEED WHAT LIVES UNDER.", x: -12.6, z: -6.4, r: 2 },
  { id: "station", name: "Research shack", hint: "Clipboard dated tomorrow.", x: -6.8, z: -18.2, r: 2.4, need: "night" },
  { id: "map", name: "Soggy chart", hint: "X is not where you think.", x: 32.2, z: 16.8, r: 2 },
  { id: "buried", name: "Buried tin", hint: "The sand was hiding it badly.", x: 27.2, z: 4.8, r: 2, need: "night" },
  { id: "tunnel", name: "Underwater pipe", hint: "You can hear a generator.", x: -34.2, z: 14.6, r: 3, need: "boat" },
  { id: "west_cave", name: "Second mouth", hint: "The cave the map forgot.", x: -16.4, z: 4.2, r: 2.4 },
  { id: "isle_chair", name: "Chair island", hint: "The other chair. Empty.", x: -62, z: -38, r: 4, need: "boat" },
  { id: "hole", name: "Black hole water", hint: "Cliff Rod water. No sign.", x: -20.8, z: 12.4, r: 2.4, need: "advanced", fish: "HOLE" },
];

export function secretAt(x, z) {
  let best = null;
  for (const s of SECRETS) {
    const d = Math.hypot(x - s.x, z - s.z);
    if (d < s.r && (!best || d < best.d)) best = { ...s, d };
  }
  return best;
}

export function gateSecret(s, ctx) {
  if (!s?.need) return { ok: true };
  if (s.need === "boat" && !ctx.boat) return { ok: false, reason: "Need the skiff. Or a worse idea." };
  if (s.need === "night" && !ctx.night) return { ok: false, reason: "Come back when the lighthouse is working." };
  if (s.need === "advanced" && (ctx.rodRank || 0) < 2) return { ok: false, reason: "Cliff Rod. Then maybe." };
  if (s.need === "storm" && !ctx.storm) return { ok: false, reason: "Wait for ugly weather." };
  return { ok: true };
}
