export const RODS = {
  none: { id: "none", name: "No rod", burn: 0, luck: 0, zones: [] },
  basic: {
    id: "basic",
    name: "Dock Rod",
    burn: 80,
    luck: 0,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK"],
    note: "Docks and beach water.",
  },
  advanced: {
    id: "advanced",
    name: "Cliff Rod",
    burn: 180,
    luck: 8,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK", "SOUTH_CLIFFS", "CAVES"],
    note: "Opens cliffs and the cave pool.",
  },
  elite: {
    id: "elite",
    name: "Offshore Rod",
    burn: 360,
    luck: 18,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK", "SOUTH_CLIFFS", "CAVES", "OFFSHORE", "EMBER_SHORE", "EMBER_POOL"],
    note: "Opens the deep offshore pool and Great Saint Alon.",
  },
};

export const CATCHES = [
  { id: "blue_snapper", name: "Blue Snapper", rarity: "Common", kind: "credits", value: 12, zones: ["MAIN_DOCK", "EAST_BEACH"], minRod: "basic", blurb: "Everyday dock fish. Silver-blue, always hungry.", trade: "Redeems for 12 credits." },
  { id: "old_boot", name: "Old Boot", rarity: "Common", kind: "junk", value: 0, zones: ["MAIN_DOCK", "NORTH_DOCK"], minRod: "basic", blurb: "Somebody lost this in 2004. Keep it as a joke.", trade: "Cannot be traded. Trophy junk." },
  { id: "kelp_perch", name: "Kelp Perch", rarity: "Common", kind: "credits", value: 18, zones: ["EAST_BEACH", "NORTH_DOCK"], minRod: "basic", blurb: "Fat beach perch with kelp in its gills.", trade: "Redeems for 18 credits." },
  { id: "bottle_note", name: "Message in a Bottle", rarity: "Uncommon", kind: "collectible", value: 0, zones: ["EAST_BEACH", "CAVES"], minRod: "basic", blurb: "A corked bottle. The note is half-legible island lore.", trade: "Collectible. Stays in your pack." },
  { id: "token_trout", name: "Token Trout", rarity: "Uncommon", kind: "token", value: 14, zones: ["NORTH_DOCK", "MAIN_DOCK", "SOUTH_CLIFFS"], minRod: "basic", blurb: "Speckled trout with a mint-green stripe.", trade: "Redeems for 14 native TOKEN." },
  { id: "cave_eel", name: "Cave Eel", rarity: "Rare", kind: "credits", value: 55, zones: ["CAVES"], minRod: "advanced", blurb: "Blind, long, and mean. Lives in the black water.", trade: "Redeems for 55 credits." },
  { id: "locked_crate", name: "Locked Crate", rarity: "Rare", kind: "treasure", value: 0, zones: ["CAVES", "OFFSHORE"], minRod: "advanced", blurb: "Iron-banded crate. Something knocks inside.", trade: "Treasure. Keep it. No payout yet." },
  { id: "golden_tuna", name: "Golden Tuna", rarity: "Epic", kind: "sol", value: 0.04, zones: ["SOUTH_CLIFFS", "OFFSHORE"], minRod: "advanced", blurb: "Heavy gold-flank tuna. The island’s first real prize.", trade: "Redeems for 0.04 SOL (preview)." },
  { id: "crystal_angler", name: "Crystal Angler", rarity: "Epic", kind: "credits", value: 140, zones: ["CAVES", "OFFSHORE"], minRod: "advanced", blurb: "Glass-clear body, a lantern that never goes out.", trade: "Redeems for 140 credits." },
  { id: "merch_marlin", name: "Merch Marlin", rarity: "Legendary", kind: "merch", value: 1, merch: "Limited Marlin Tee", zones: ["OFFSHORE", "EAST_BEACH"], minRod: "elite", blurb: "A billfish wearing the island’s drop tag.", trade: "Redeems for a Limited Marlin Tee claim (preview)." },
  { id: "pump_pillfish", name: "Pump Pillfish", rarity: "Legendary", kind: "token", value: 90, zones: ["OFFSHORE", "SOUTH_CLIFFS"], minRod: "elite", blurb: "Shaped like the official pill. Extremely few exist.", trade: "Redeems for 90 native TOKEN." },
  { id: "moon_marlin", name: "Moon Marlin", rarity: "Mythic", kind: "sol", value: 0.18, zones: ["OFFSHORE"], minRod: "elite", blurb: "Night-silver marlin. Only the offshore black water.", trade: "Redeems for 0.18 SOL (preview)." },
  { id: "jackpot_leviathan", name: "Jackpot Leviathan", rarity: "Mythic", kind: "sol", value: 0.25, zones: ["OFFSHORE"], minRod: "elite", blurb: "The island’s jackpot. Almost nobody lands it.", trade: "Redeems for 0.25 SOL (preview)." },
  { id: "vault_whale", name: "Vault Whale", rarity: "Mythic", kind: "bundle", value: 1, zones: ["OFFSHORE"], minRod: "elite", blurb: "A pale whale calf with a vault lock on its tail.", trade: "Redeems for 200 credits + 40 TOKEN + 0.05 SOL (preview)." },
  { id: "cinder_bass", name: "Cinder Bass", rarity: "Uncommon", kind: "credits", value: 28, zones: ["EMBER_SHORE"], minRod: "basic", blurb: "Warm-water bass off Great Saint Alon.", trade: "Redeems for 28 credits." },
  { id: "ash_trout", name: "Ash Trout", rarity: "Rare", kind: "token", value: 22, zones: ["EMBER_SHORE", "EMBER_POOL"], minRod: "advanced", blurb: "Grey-speckled trout from the lava shelf.", trade: "Redeems for 22 native TOKEN." },
  { id: "ember_eel", name: "Ember Eel", rarity: "Epic", kind: "credits", value: 160, zones: ["EMBER_POOL"], minRod: "elite", blurb: "Glows in the black pool. Don’t drop it.", trade: "Redeems for 160 credits." },
];

export const SHOP_SWAPS = [
  { id: "tok20", name: "20 TOKEN", cost: 80, give: { tokens: 20 }, note: "Credits → native token. Preview." },
  { id: "tok60", name: "60 TOKEN", cost: 210, give: { tokens: 60 }, note: "Bulk token swap. Preview." },
  { id: "sol01", name: "0.01 SOL", cost: 160, give: { sol: 0.01 }, note: "Preview SOL. No chain." },
  { id: "sol05", name: "0.05 SOL", cost: 720, give: { sol: 0.05 }, note: "Bigger preview SOL claim." },
];

export const SHOP_MERCH = [
  { id: "hat", name: "Dock Hat", cost: 70, merch: "Dock Hat", note: "White brim. Preview fulfilment." },
  { id: "tee", name: "PUMPISLAND Tee", cost: 140, merch: "PUMPISLAND Tee", note: "Official pill print. Preview." },
  { id: "hoodie", name: "Island Hoodie", cost: 260, merch: "Island Hoodie", note: "Heavy cotton. Preview." },
  { id: "rodskin", name: "Mint Rod Wrap", cost: 190, merch: "Mint Rod Wrap", note: "Cosmetic wrap. Preview." },
];

export const SHOP_GEAR = [
  {
    id: "skiff",
    name: "Island Skiff",
    cost: 160,
    note: "Sail to Great Saint Alon. Preview boat. Local only.",
  },
];

const RARITY_WEIGHT = {
  Common: 50,
  Uncommon: 24,
  Rare: 12,
  Epic: 7,
  Legendary: 2.2,
  Mythic: 0.45,
};

const ROD_RANK = { basic: 1, advanced: 2, elite: 3 };

function emptyState() {
  return {
    wallet: null,
    tokens: 240,
    credits: 180,
    burned: 0,
    rods: ["basic"],
    equipped: "basic",
    inventory: [],
    claims: [],
    merch: [],
    boat: false,
    visitedEmber: false,
    caught: 0,
    previewSol: 0,
  };
}

export function createEconomy() {
  const raw = localStorage.getItem("pi-state-v3");
  const state = raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState();
  if (!Array.isArray(state.merch)) state.merch = [];
  if (typeof state.boat !== "boolean") state.boat = false;
  if (typeof state.visitedEmber !== "boolean") state.visitedEmber = false;
  if (!state.rods?.length) {
    state.rods = ["basic"];
    state.equipped = "basic";
  }

  function save() {
    localStorage.setItem("pi-state-v3", JSON.stringify(state));
  }

  function connectPreviewWallet() {
    if (!state.wallet) {
      const n = crypto.getRandomValues(new Uint8Array(4));
      const hex = [...n].map((b) => b.toString(16).padStart(2, "0")).join("");
      state.wallet = `preview${hex}…demo`;
      save();
    }
    return state.wallet;
  }

  function burnForRod(rodId) {
    const rod = RODS[rodId];
    if (!rod || rod.id === "none") return { ok: false, reason: "Unknown rod." };
    if (state.rods.includes(rodId)) return { ok: false, reason: "Already owned." };
    if (state.tokens < rod.burn) return { ok: false, reason: `Need ${rod.burn} TOKEN.` };
    state.tokens -= rod.burn;
    state.burned += rod.burn;
    state.rods.push(rodId);
    state.equipped = rodId;
    save();
    return { ok: true, rod };
  }

  function equip(rodId) {
    if (!state.rods.includes(rodId)) return false;
    state.equipped = rodId;
    save();
    return true;
  }

  function canFish(zone) {
    const rod = RODS[state.equipped] || RODS.none;
    if (rod.id === "none") return { ok: false, reason: "Burn TOKEN for a rod at the lighthouse." };
    if (!rod.zones.includes(zone)) return { ok: false, reason: `${rod.name} cannot fish ${zone.replaceAll("_", " ")}.` };
    return { ok: true, rod };
  }

  function rollCatch(zone) {
    const gate = canFish(zone);
    if (!gate.ok) return gate;
    const rod = gate.rod;
    const pool = CATCHES.filter((c) => c.zones.includes(zone) && ROD_RANK[rod.id] >= ROD_RANK[c.minRod]);
    if (!pool.length) return { ok: false, reason: "Nothing bites here." };
    const weighted = pool.map((c) => ({
      c,
      w: Math.max(0.12, RARITY_WEIGHT[c.rarity] + rod.luck * (c.rarity === "Common" ? -0.4 : 0.38)),
    }));
    const total = weighted.reduce((s, x) => s + x.w, 0);
    let r = Math.random() * total;
    let pick = weighted[0].c;
    for (const row of weighted) {
      r -= row.w;
      if (r <= 0) {
        pick = row.c;
        break;
      }
    }
    const keep = pick.kind === "collectible" || pick.kind === "junk" || pick.kind === "treasure";
    const item = {
      uid: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      ...pick,
      zone,
      at: Date.now(),
      status: keep ? "kept" : "redeemable",
    };
    state.inventory.unshift(item);
    state.caught += 1;
    save();
    return { ok: true, item };
  }

  function applyPayout(item) {
    if (item.kind === "credits") state.credits += item.value;
    if (item.kind === "token") state.tokens += item.value;
    if (item.kind === "sol") state.previewSol += item.value;
    if (item.kind === "merch") state.merch.unshift({ name: item.merch || item.name, at: Date.now() });
    if (item.kind === "bundle") {
      state.credits += 200;
      state.tokens += 40;
      state.previewSol += 0.05;
    }
  }

  function redeem(uid) {
    const item = state.inventory.find((i) => i.uid === uid);
    if (!item) return { ok: false, reason: "Not in inventory." };
    if (item.status !== "redeemable") return { ok: false, reason: "Not redeemable." };
    item.status = "locked";
    applyPayout(item);
    item.status = "redeemed";
    item.redeemedAt = Date.now();
    state.claims.unshift({
      uid: item.uid,
      name: item.name,
      kind: item.kind,
      value: item.value,
      note: item.kind === "sol" || item.kind === "merch" || item.kind === "bundle" ? "PREVIEW claim — no chain, no fulfilment" : "Applied locally",
    });
    save();
    return { ok: true, item };
  }

  function buySwap(id) {
    const offer = SHOP_SWAPS.find((o) => o.id === id);
    if (!offer) return { ok: false, reason: "Unknown swap." };
    if (state.credits < offer.cost) return { ok: false, reason: `Need ${offer.cost} credits.` };
    state.credits -= offer.cost;
    if (offer.give.tokens) state.tokens += offer.give.tokens;
    if (offer.give.sol) state.previewSol += offer.give.sol;
    save();
    return { ok: true, offer };
  }

  function buyMerch(id) {
    const offer = SHOP_MERCH.find((o) => o.id === id);
    if (!offer) return { ok: false, reason: "Unknown merch." };
    if (state.credits < offer.cost) return { ok: false, reason: `Need ${offer.cost} credits.` };
    state.credits -= offer.cost;
    state.merch.unshift({ name: offer.merch, at: Date.now() });
    save();
    return { ok: true, offer };
  }

  function buyGear(id) {
    const offer = SHOP_GEAR.find((o) => o.id === id);
    if (!offer) return { ok: false, reason: "Unknown gear." };
    if (id === "skiff") {
      if (state.boat) return { ok: false, reason: "You already own the skiff." };
      if (state.credits < offer.cost) return { ok: false, reason: `Need ${offer.cost} credits.` };
      state.credits -= offer.cost;
      state.boat = true;
      save();
      return { ok: true, offer };
    }
    return { ok: false, reason: "Unknown gear." };
  }

  return {
    state,
    save,
    connectPreviewWallet,
    burnForRod,
    equip,
    canFish,
    rollCatch,
    redeem,
    buySwap,
    buyMerch,
    buyGear,
    markEmber() {
      if (!state.visitedEmber) {
        state.visitedEmber = true;
        save();
      }
    },
  };
}

export function kindLabel(kind) {
  return {
    credits: "IN-GAME CREDITS",
    token: "NATIVE TOKEN",
    sol: "SOL (PREVIEW)",
    merch: "MERCH CLAIM (PREVIEW)",
    treasure: "TREASURE",
    collectible: "COLLECTIBLE",
    junk: "JUNK",
    bundle: "MIXED PAYOUT (PREVIEW)",
  }[kind] || kind;
}

export function tradeLine(item) {
  return item.trade || kindLabel(item.kind);
}
