# PUMPISLAND

Playable Phase 1 prototype of the isolated low-poly fishing island.

Style is locked to the supplied island / character sheet: green-and-white lighthouse, washed early-2000s Lambert shading, lanky big-eye classes.

## What is real in this build

- First-person walk, look, sprint, jump, crouch, swim-slow in water
- Island zones from the sheet: lighthouse, main dock, north dock, east beach, south cliffs, caves, forest, offshore skiff
- Ten character classes standing on the island
- Local preview economy: burn TOKEN → rod → fish → inventory → redeem
- Server-shaped catch tables live in `src/game/economy.js` (client preview only)

## What is not real

Wallet link, token burn, SOL payouts and merch claims are **local preview**. No mainnet, no treasury key, no fulfilment. Do not present this URL as a live crypto product.

## Run

```bash
npm install
npm run dev
```

Open the printed local URL. Desktop: click Enter, then click the canvas for mouse look.
Mobile: on-screen stick + USE / CAST / JUMP.
