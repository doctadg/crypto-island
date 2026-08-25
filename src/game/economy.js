export const RODS = {
  none: { id: "none", name: "No rod", burn: 0, luck: 0, zones: [] },
  basic: {
    id: "basic",
    name: "Basic Rod",
    burn: 80,
    luck: 0,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK"],
    note: "Dock and beach water.",
  },
  advanced: {
    id: "advanced",
    name: "Advanced Rod",
    burn: 180,
    luck: 8,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK", "SOUTH_CLIFFS", "CAVES"],
    note: "Cliffs and cave water.",
  },
  elite: {
    id: "elite",
    name: "Elite Rod",
    burn: 360,
    luck: 18,
    zones: ["MAIN_DOCK", "EAST_BEACH", "NORTH_DOCK", "SOUTH_CLIFFS", "CAVES", "OFFSHORE"],
    note: "Opens the offshore pool.",
  },
};

export const CATCHES = [
  { id: "blue_snapper", name: "Blue Snapper", rarity: "Common", kind: "credits", value: 12, zones: ["MAIN_DOCK", "EAST_BEACH"], minRod: "basic" },
  { id: "old_boot", name: "Old Boot", rarity: "Common", kind: "junk", value: 0, zones: ["MAIN_DOCK", "NORTH_DOCK"], minRod: "basic" },
  { id: "kelp_perch", name: "Kelp Perch", rarity: "Common", kind: "credits", value: 18, zones: ["EAST_BEACH", "NORTH_DOCK"], minRod: "basic" },
  { id: "bottle_note", name: "Message in a Bottle", rarity: "Uncommon", kind: "collectible", value: 0, zones: ["EAST_BEACH", "CAVES"], minRod: "basic" },
  { id: "token_trout", name: "Token Trout", rarity: "Uncommon", kind: "token", value: 14, zones: ["NORTH_DOCK", "MAIN_DOCK", "SOUTH_CLIFFS"], minRod: "basic" },
  { id: "cave_eel", name: "Cave Eel", rarity: "Rare", kind: "credits", value: 55, zones: ["CAVES"], minRod: "advanced" },
  { id: "locked_crate", name: "Locked Crate", rarity: "Rare", kind: "treasure", value: 0, zones: ["CAVES", "OFFSHORE"], minRod: "advanced" },
  { id: "golden_tuna", name: "Golden Tuna", rarity: "Epic", kind: "sol", value: 0.04, zones: ["SOUTH_CLIFFS", "OFFSHORE"], minRod: "advanced" },
  { id: "merch_marlin", name: "Merch Marlin", rarity: "Legendary", kind: "merch", value: 1, zones: ["OFFSHORE", "EAST_BEACH"], minRod: "elite" },
  { id: "jackpot_leviathan", name: "Jackpot Leviathan", rarity: "Mythic", kind: "sol", value: 0.25, zones: ["OFFSHORE"], minRod: "elite" },
];

const RARITY_WEIGHT = {
  Common: 52,
  Uncommon: 26,
  Rare: 13,
  Epic: 6,
  Legendary: 2.4,
  Mythic: 0.6,
};

const ROD_RANK = { basic: 1, advanced: 2, elite: 3 };

export function createEconomy() {
  const raw = localStorage.getItem("ci-state-v1");
  const state = raw
    ? JSON.parse(raw)
    : {
        wallet: null,
        tokens: 240,
        credits: 0,
        burned: 0,
        rods: [],
        equipped: "none",
        inventory: [],
        claims: [],
        caught: 0,
        previewSol: 0,
      };

  function save() {
    localStorage.setItem("ci-state-v1", JSON.stringify(state));
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
      w: Math.max(0.2, RARITY_WEIGHT[c.rarity] + rod.luck * (c.rarity === "Common" ? -0.4 : 0.35)),
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
    const item = {
      uid: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      ...pick,
      zone,
      at: Date.now(),
      status: pick.kind === "collectible" || pick.kind === "junk" ? "kept" : "redeemable",
    };
    state.inventory.unshift(item);
    state.caught += 1;
    save();
    return { ok: true, item };
  }

  function redeem(uid) {
    const item = state.inventory.find((i) => i.uid === uid);
    if (!item) return { ok: false, reason: "Not in inventory." };
    if (item.status !== "redeemable") return { ok: false, reason: "Not redeemable." };
    item.status = "locked";
    save();
    if (item.kind === "credits") state.credits += item.value;
    if (item.kind === "token") state.tokens += item.value;
    if (item.kind === "sol") state.previewSol += item.value;
    item.status = "redeemed";
    item.redeemedAt = Date.now();
    state.claims.unshift({
      uid: item.uid,
      name: item.name,
      kind: item.kind,
      value: item.value,
      note: item.kind === "sol" || item.kind === "merch" ? "PREVIEW claim — no chain, no fulfilment" : "Applied locally",
    });
    save();
    return { ok: true, item };
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
  }[kind] || kind;
}
