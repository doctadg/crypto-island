const svg = (body, view = "0 0 80 80") =>
  `<svg class="thumb" viewBox="${view}" aria-hidden="true">${body}</svg>`;

export function iconRod(id) {
  if (id === "advanced") {
    return svg(`
      <rect x="36" y="8" width="6" height="64" rx="3" fill="#3a2616"/>
      <rect x="37" y="10" width="4" height="48" rx="2" fill="#6a4a28"/>
      <rect x="34" y="50" width="10" height="16" rx="3" fill="#1f5c30"/>
      <circle cx="48" cy="56" r="7" fill="#1a1c1a" stroke="#c9d4c6" stroke-width="2"/>
      <path d="M39 12 C58 18 62 36 54 48" fill="none" stroke="#dfe8e2" stroke-width="1.4"/>
    `);
  }
  if (id === "elite") {
    return svg(`
      <rect x="37" y="6" width="5" height="66" rx="2.5" fill="#16382a"/>
      <rect x="38" y="8" width="3" height="50" rx="1.5" fill="#6ed18a"/>
      <rect x="33" y="48" width="12" height="18" rx="3" fill="#f4f8f5"/>
      <circle cx="50" cy="54" r="8" fill="#16382a" stroke="#6ed18a" stroke-width="2"/>
      <path d="M40 10 C64 16 68 38 56 52" fill="none" stroke="#f4f8f5" stroke-width="1.5"/>
    `);
  }
  return svg(`
    <rect x="36" y="10" width="6" height="60" rx="3" fill="#5c3d24"/>
    <rect x="37" y="12" width="4" height="44" rx="2" fill="#c4a15a"/>
    <rect x="34" y="52" width="10" height="14" rx="3" fill="#7a5533"/>
    <circle cx="48" cy="58" r="6" fill="#2a2c2a"/>
    <path d="M39 14 C54 22 56 40 50 52" fill="none" stroke="#dfe8e2" stroke-width="1.3"/>
  `);
}

export function iconSwap(id) {
  if (id.startsWith("sol")) {
    return svg(`
      <circle cx="40" cy="40" r="26" fill="#14f195"/>
      <path d="M40 18 L28 38 H40 L32 62 L56 36 H42 Z" fill="#0b3b2a"/>
    `);
  }
  return svg(`
    <rect x="18" y="28" width="44" height="28" rx="14" fill="#6ed18a"/>
    <rect x="40" y="28" width="22" height="28" rx="14" fill="#f4f8f5"/>
    <rect x="16" y="26" width="48" height="32" rx="16" fill="none" stroke="#16382a" stroke-width="4"/>
  `);
}

export function iconMerch(id) {
  if (id === "hat") {
    return svg(`
      <ellipse cx="40" cy="52" rx="28" ry="8" fill="#f4f5f0"/>
      <path d="M22 50 Q22 28 40 24 Q58 28 58 50" fill="#2f8a48"/>
      <rect x="20" y="48" width="40" height="6" rx="3" fill="#16382a"/>
    `);
  }
  if (id === "hoodie") {
    return svg(`
      <path d="M26 26 Q40 16 54 26 L62 36 L56 40 L54 68 H26 L24 40 L18 36 Z" fill="#1f5c30"/>
      <path d="M32 26 Q40 22 48 26 L46 38 H34 Z" fill="#16382a"/>
      <rect x="36" y="44" width="8" height="10" rx="2" fill="#6ed18a"/>
    `);
  }
  if (id === "rodskin") {
    return svg(`
      <rect x="18" y="36" width="44" height="10" rx="5" fill="#6ed18a"/>
      <rect x="18" y="36" width="18" height="10" rx="5" fill="#f4f8f5"/>
      <rect x="16" y="34" width="48" height="14" rx="7" fill="none" stroke="#16382a" stroke-width="3"/>
    `);
  }
  return svg(`
    <path d="M26 24 H54 L58 70 H22 Z" fill="#f4f5f0"/>
    <path d="M26 24 H54 L52 32 H28 Z" fill="#2f8a48"/>
    <rect x="34" y="40" width="12" height="12" rx="6" fill="#6ed18a"/>
    <rect x="40" y="40" width="6" height="12" rx="3" fill="#f4f8f5"/>
  `);
}

export function iconFish(id) {
  const map = {
    blue_snapper: ["#4e96bc", "#2f6f96"],
    old_boot: ["#5c3d24", "#3a2616"],
    kelp_perch: ["#6f7d4c", "#2f8a48"],
    bottle_note: ["#8fd0ff", "#2f6f96"],
    token_trout: ["#6ed18a", "#16382a"],
    cave_eel: ["#3a3a48", "#1a1c1a"],
    locked_crate: ["#7a5533", "#3a2616"],
    golden_tuna: ["#e8c15a", "#8a6a20"],
    crystal_angler: ["#b8f0ff", "#4e96bc"],
    merch_marlin: ["#2f8a48", "#16382a"],
    pump_pillfish: ["#6ed18a", "#f4f8f5"],
    moon_marlin: ["#d5e6ee", "#6aa3cc"],
    jackpot_leviathan: ["#e4a0ff", "#4a2a68"],
    vault_whale: ["#f4f5f0", "#6aa3cc"],
  };
  const [a, b] = map[id] || ["#4e96bc", "#16382a"];
  if (id === "old_boot") {
    return svg(`<path d="M18 30 H48 V44 H62 Q70 44 70 54 H18 Z" fill="${a}"/><rect x="20" y="26" width="26" height="8" fill="${b}"/>`);
  }
  if (id === "locked_crate") {
    return svg(`<rect x="18" y="22" width="44" height="36" fill="${a}"/><rect x="18" y="36" width="44" height="8" fill="${b}"/><circle cx="40" cy="40" r="5" fill="#e8c15a"/>`);
  }
  if (id === "bottle_note") {
    return svg(`<rect x="34" y="14" width="12" height="10" fill="${b}"/><path d="M28 24 H52 L48 66 H32 Z" fill="${a}"/><rect x="32" y="34" width="16" height="18" fill="#f4f5f0"/>`);
  }
  return svg(`
    <ellipse cx="38" cy="40" rx="22" ry="12" fill="${a}"/>
    <path d="M58 40 L74 28 V52 Z" fill="${b}"/>
    <circle cx="26" cy="38" r="3" fill="#142018"/>
    <path d="M36 30 Q40 40 36 50" fill="none" stroke="${b}" stroke-width="2"/>
  `);
}

export function iconStat(kind) {
  if (kind === "fish") return svg(`<ellipse cx="40" cy="40" rx="22" ry="12" fill="#4e96bc"/><path d="M60 40 L74 28 V52 Z" fill="#2f6f96"/>`);
  if (kind === "burn") return svg(`<path d="M40 14 C28 34 28 46 40 66 C52 46 52 34 40 14 Z" fill="#e8c15a"/>`);
  return svg(`<rect x="22" y="28" width="36" height="24" rx="4" fill="#6ed18a"/><text x="40" y="46" text-anchor="middle" font-size="16" fill="#16382a" font-family="sans-serif">C</text>`);
}
