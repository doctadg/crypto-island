import * as THREE from "three";
import { C, ISLAND_R } from "./palette.js";
import { heightAt } from "./world.js";
import { waterHeight } from "./atmosphere.js";

const DAY_LEN = 420;

function lambert(color) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true });
}

function seagull() {
  const g = new THREE.Group();
  const mat = lambert(0xf4f6f2);
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.07, 0.32), mat);
  const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.03, 0.16), mat);
  wingL.position.set(-0.35, 0.02, 0);
  const wingR = wingL.clone();
  wingR.position.x = 0.35;
  g.add(body, wingL, wingR);
  g.userData.wings = [wingL, wingR];
  return g;
}

function crab() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.16), lambert(0xb24a32));
  body.position.y = 0.06;
  const clawL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.12), lambert(0x8a3222));
  clawL.position.set(-0.16, 0.06, 0.08);
  const clawR = clawL.clone();
  clawR.position.x = 0.16;
  g.add(body, clawL, clawR);
  return g;
}

function jumpFish(sunglasses = false) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.22, 2, 5), lambert(sunglasses ? 0x2a2c2a : 0x3d8fbf));
  body.rotation.z = Math.PI / 2;
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.12, 4), lambert(0x2a6a88));
  tail.rotation.z = -Math.PI / 2;
  tail.position.x = -0.2;
  g.add(body, tail);
  if (sunglasses) {
    const glasses = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.04), lambert(0x1a1c1a));
    glasses.position.set(0.08, 0.04, 0);
    g.add(glasses);
  }
  g.visible = false;
  return g;
}

function hullBoat(color = C.woodDark, long = 2.7) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.38, long), lambert(color));
  hull.position.y = 0.12;
  const bow = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.3, 0.7), lambert(C.wood));
  bow.position.set(0, 0.14, -long * 0.55);
  g.add(hull, bow);
  return g;
}

function cargoShip() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.1, 14), lambert(0x4a4e47));
  hull.position.y = 0.4;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.6, 4.2), lambert(0xc44a3a));
  deck.position.set(0, 1.4, 3.4);
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 2.2, 6), lambert(0x2a2c2a));
  stack.position.set(0, 2.8, 3.6);
  g.add(hull, deck, stack);
  return g;
}

function plane() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 2.4), lambert(0xf4f5f0));
  const wing = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.08, 0.55), lambert(0xc44a3a));
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.4), lambert(0xc44a3a));
  tail.position.set(0, 0.35, 1.05);
  g.add(body, wing, tail);
  return g;
}

function rainDrop() {
  return new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.04), new THREE.MeshBasicMaterial({ color: 0xc5e4f0, transparent: true, opacity: 0.45 }));
}

export function dayPhase(t) {
  const u = ((t / DAY_LEN) % 1 + 1) % 1;
  // 0 dawn, 0.25 noon, 0.5 dusk, 0.75 night
  const ang = u * Math.PI * 2;
  const elev = Math.sin(u * Math.PI * 2);
  const night = elev < 0;
  return { u, ang, elev, night, dusk: u > 0.42 && u < 0.58, dawn: u < 0.12 || u > 0.92 };
}

export function createLife(root) {
  const life = {
    birds: [],
    crabs: [],
    jumpers: [],
    boats: [],
    ships: [],
    planes: [],
    rain: [],
    patrol: [],
    beam: null,
    fog: null,
    ghostBoat: null,
    leviathan: null,
    watcher: null,
    chairIsle: null,
    weather: "clear",
    weatherT: 18,
    eventT: 40,
    stealT: 22,
  };

  for (let i = 0; i < 8; i++) {
    const b = seagull();
    const a = (i / 8) * Math.PI * 2;
    b.userData.orbit = a;
    b.userData.rad = 16 + (i % 5) * 3.2;
    b.userData.h = 7.4 + (i % 4) * 0.8;
    b.userData.cx = i % 2 ? 2 : 26;
    b.userData.cz = i % 2 ? 30 : 10;
    root.add(b);
    life.birds.push(b);
  }

  const crabSpots = [
    [26, 8], [28, 12], [24, 6], [22, 14], [30, 9],
  ];
  for (const [x, z] of crabSpots) {
    const c = crab();
    c.position.set(x, 0.04, z);
    c.userData.ox = x;
    c.userData.oz = z;
    c.userData.ph = Math.random() * 6;
    root.add(c);
    life.crabs.push(c);
  }

  for (let i = 0; i < 5; i++) {
    const f = jumpFish(i === 3);
    f.userData.cool = 2 + i * 1.4;
    f.userData.sunglass = i === 3;
    root.add(f);
    life.jumpers.push(f);
  }

  for (let i = 0; i < 3; i++) {
    const b = hullBoat();
    b.userData.a = i * 2.1;
    b.userData.rad = 58 + i * 8;
    b.userData.speed = 0.05 + i * 0.012;
    root.add(b);
    life.boats.push(b);
  }

  const ship = cargoShip();
  ship.userData.t = 0;
  ship.userData.live = false;
  ship.visible = false;
  root.add(ship);
  life.ships.push(ship);

  const p = plane();
  p.visible = false;
  p.userData.live = false;
  root.add(p);
  life.planes.push(p);

  const ghost = hullBoat(0x3a2616, 3.2);
  ghost.visible = false;
  ghost.userData.live = false;
  root.add(ghost);
  life.ghostBoat = ghost;

  const lev = new THREE.Mesh(new THREE.CapsuleGeometry(1.8, 7.5, 3, 6), new THREE.MeshLambertMaterial({ color: 0x142028, flatShading: true, transparent: true, opacity: 0.55 }));
  lev.rotation.z = Math.PI / 2;
  lev.visible = false;
  lev.userData.live = false;
  root.add(lev);
  life.leviathan = lev;

  for (let i = 0; i < 28; i++) {
    const d = rainDrop();
    d.visible = false;
    d.userData.vy = 12 + Math.random() * 8;
    root.add(d);
    life.rain.push(d);
  }

  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.35, 48),
    new THREE.MeshBasicMaterial({ color: 0xfff1c0, transparent: true, opacity: 0.18, depthWrite: false })
  );
  beam.position.set(0, 10.2, -1.2);
  beam.visible = false;
  root.add(beam);
  life.beam = beam;

  const fog = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshBasicMaterial({ color: 0xcdd8d0, transparent: true, opacity: 0, depthWrite: false })
  );
  fog.rotation.x = -Math.PI / 2;
  fog.position.y = 1.4;
  root.add(fog);
  life.fog = fog;

  return life;
}

export function tickLife(life, ctx) {
  const { dt, t, camera, toast, night, rough, raining, foggy } = ctx;
  const px = camera.position.x;
  const pz = camera.position.z;

  for (const b of life.birds) {
    b.userData.orbit += dt * 0.28;
    const a = b.userData.orbit;
    b.position.set(
      b.userData.cx + Math.cos(a) * b.userData.rad,
      b.userData.h + Math.sin(t * 1.4 + a) * 0.5,
      b.userData.cz + Math.sin(a) * b.userData.rad
    );
    b.rotation.y = -a + Math.PI / 2;
    if (b.userData.wings) {
      const flap = Math.sin(t * 9 + a) * 0.5;
      b.userData.wings[0].rotation.z = flap;
      b.userData.wings[1].rotation.z = -flap;
    }
  }

  life.stealT -= dt;
  if (life.stealT <= 0) {
    life.stealT = 28 + Math.random() * 24;
    if (Math.hypot(px, pz - 32) < 18) toast("A gull took a fish. Not yours. Allegedly.");
  }

  for (const c of life.crabs) {
    const a = t * 0.7 + c.userData.ph;
    const x = c.userData.ox + Math.sin(a) * 1.6;
    const z = c.userData.oz + Math.cos(a * 0.8) * 1.1;
    c.position.set(x, Math.max(0.03, heightAt(x, z) + 0.02), z);
    c.rotation.y = a;
  }

  for (const f of life.jumpers) {
    f.userData.cool -= dt;
    if (!f.visible && f.userData.cool <= 0) {
      const ang = Math.random() * Math.PI * 2;
      const rad = 36 + Math.random() * 10;
      f.userData.x = Math.cos(ang) * rad;
      f.userData.z = Math.sin(ang) * rad;
      f.userData.jump = 0;
      f.visible = true;
      f.userData.cool = 6 + Math.random() * 8;
    }
    if (f.visible) {
      f.userData.jump += dt;
      const k = f.userData.jump;
      const y = waterHeight(f.userData.x, f.userData.z, t) + Math.sin(k * 4.2) * 1.35;
      f.position.set(f.userData.x + k * 0.8, y, f.userData.z);
      f.rotation.z = 0.4 - k;
      if (k > 1.15) f.visible = false;
    }
  }

  for (const b of life.boats) {
    b.userData.a += dt * b.userData.speed;
    const a = b.userData.a;
    const x = Math.cos(a) * b.userData.rad;
    const z = Math.sin(a) * b.userData.rad;
    b.position.set(x, waterHeight(x, z, t) + 0.08, z);
    b.rotation.y = -a + Math.PI / 2;
    b.rotation.z = Math.sin(t * 1.2 + a) * 0.08 * (rough ? 2.2 : 1);
  }

  const ship = life.ships[0];
  if (ship) {
    if (!ship.userData.live) {
      ship.userData.cool = (ship.userData.cool ?? 20) - dt;
      if (ship.userData.cool <= 0) {
        ship.userData.live = true;
        ship.visible = true;
        ship.userData.x = -90;
        ship.userData.z = 70;
      }
    } else {
      ship.userData.x += dt * 4.2;
      const x = ship.userData.x;
      const z = ship.userData.z;
      ship.position.set(x, waterHeight(x, z, t) + 0.2, z);
      ship.rotation.y = Math.PI / 2;
      if (x > 110) {
        ship.userData.live = false;
        ship.visible = false;
        ship.userData.cool = 55 + Math.random() * 40;
      }
    }
  }

  const pl = life.planes[0];
  if (pl) {
    if (!pl.userData.live) {
      pl.userData.cool = (pl.userData.cool ?? 35) - dt;
      if (pl.userData.cool <= 0) {
        pl.userData.live = true;
        pl.visible = true;
        pl.userData.x = -80;
        pl.userData.z = -40;
      }
    } else {
      pl.userData.x += dt * 22;
      pl.userData.z += dt * 6;
      pl.position.set(pl.userData.x, 28, pl.userData.z);
      pl.rotation.y = Math.PI / 2.4;
      if (pl.userData.x > 120) {
        pl.userData.live = false;
        pl.visible = false;
        pl.userData.cool = 50 + Math.random() * 50;
      }
    }
  }

  const ghost = life.ghostBoat;
  if (ghost) {
    if (!ghost.userData.live) {
      ghost.userData.cool = (ghost.userData.cool ?? 26) - dt;
      if (ghost.userData.cool <= 0) {
        ghost.userData.live = true;
        ghost.visible = true;
        ghost.userData.x = 48;
        ghost.userData.z = -36;
      }
    } else {
      ghost.userData.x -= dt * 3.4;
      const x = ghost.userData.x;
      const z = ghost.userData.z;
      ghost.position.set(x, waterHeight(x, z, t) + 0.1, z);
      ghost.rotation.y = -Math.PI / 2;
      if (x < -70) {
        ghost.userData.live = false;
        ghost.visible = false;
        ghost.userData.cool = 40 + Math.random() * 50;
      }
    }
  }

  const lev = life.leviathan;
  if (lev) {
    if (!lev.userData.live) {
      lev.userData.cool = (lev.userData.cool ?? 18) - dt;
      const offshore = heightAt(px, pz) < 0.1 && Math.hypot(px, pz) > ISLAND_R - 2;
      if (offshore && lev.userData.cool <= 0) {
        lev.userData.live = true;
        lev.visible = true;
        lev.userData.k = 0;
        lev.userData.x = px + 8;
        lev.userData.z = pz - 4;
      }
    } else {
      lev.userData.k += dt;
      lev.userData.x -= dt * 7;
      lev.position.set(lev.userData.x, -1.4, lev.userData.z);
      if (lev.userData.k > 2.4) {
        lev.visible = false;
        lev.userData.live = false;
        lev.userData.cool = 48 + Math.random() * 30;
      }
    }
  }

  if (life.watcher) {
    const d = Math.hypot(px - life.watcher.position.x, pz - life.watcher.position.z);
    if (d < 11) {
      life.watcher.visible = false;
      life.watcher.userData.hide = t;
    } else if (!life.watcher.visible && t - (life.watcher.userData.hide || 0) > 16) {
      life.watcher.visible = true;
    }
  }

  if (life.beam) {
    life.beam.visible = night;
    if (night) {
      life.beam.rotation.y = t * 0.35;
      life.beam.material.opacity = 0.16 + Math.sin(t * 2) * 0.04;
    }
  }

  if (life.fog) {
    const op = foggy ? 0.22 : 0;
    life.fog.material.opacity += (op - life.fog.material.opacity) * Math.min(1, dt * 1.6);
    life.fog.position.set(px, 1.5, pz);
  }

  for (const d of life.rain) {
    if (!raining) {
      d.visible = false;
      continue;
    }
    d.visible = true;
    d.position.y -= d.userData.vy * dt;
    if (d.position.y < 0.2 || !d.userData.set) {
      d.position.set(px + (Math.random() - 0.5) * 28, 8 + Math.random() * 10, pz + (Math.random() - 0.5) * 28);
      d.userData.set = true;
    }
  }

  for (const n of life.patrol) {
    const path = n.userData.path;
    if (!path) continue;
    n.userData.u = (n.userData.u || 0) + dt * 0.08;
    const u = n.userData.u % 1;
    const i = Math.floor(u * path.length);
    const j = (i + 1) % path.length;
    const f = u * path.length - i;
    const x = path[i][0] + (path[j][0] - path[i][0]) * f;
    const z = path[i][1] + (path[j][1] - path[i][1]) * f;
    n.position.set(x, heightAt(x, z), z);
    n.rotation.y = Math.atan2(path[j][0] - path[i][0], path[j][1] - path[i][1]);
    n.userData.moving = true;
  }

  life.weatherT -= dt;
  if (life.weatherT <= 0) {
    const roll = Math.random();
    life.weather = roll < 0.55 ? "clear" : roll < 0.75 ? "rain" : roll < 0.9 ? "fog" : "storm";
    life.weatherT = 22 + Math.random() * 28;
    if (life.weather === "storm") toast("The sea got ugly. Stay on the dock if you like your hat.");
    if (life.weather === "fog") toast("Fog came in sideways. The lighthouse is doing its best.");
  }
  life.eventT -= dt;
  if (life.eventT <= 0) {
    life.eventT = 50 + Math.random() * 40;
    const roll = Math.random();
    if (roll < 0.25) toast("The water went still. Then it didn’t.");
    else if (roll < 0.5) toast("Something huge moved under the drop. You weren’t meant to see that.");
    else if (roll < 0.75) toast("A plane nobody scheduled crossed the island.");
    else toast("Jeff was spotted. That’s the whole report.");
  }
}