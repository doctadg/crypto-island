export function questStatus(state) {
  const emberCatch = (state.inventory || []).some(
    (i) => i.zone === "EMBER_SHORE" || i.zone === "EMBER_POOL"
  );
  return [
    { id: "cast", label: "Land a catch from the water", done: (state.caught || 0) > 0 },
    { id: "redeem", label: "Redeem a catch at the hut counter", done: (state.claims || []).length > 0 },
    { id: "skiff", label: "Buy the Island Skiff in Shop · GEAR", done: !!state.boat },
    { id: "sail", label: "Sail the skiff to Great Saint Alon", done: !!state.visitedEmber },
    { id: "ember", label: "Catch a fish on Great Saint Alon", done: emberCatch },
    { id: "book", label: "Open the Fish Book (J)", done: Object.keys(state.book || {}).length >= 3 },
    { id: "drop", label: "Look at The Drop from the south cliffs", done: !!state.sawDrop },
    { id: "secrets", label: `Log 5 secrets (${Object.keys(state.found || {}).length}/13)`, done: Object.keys(state.found || {}).length >= 5 },
  ];
}
