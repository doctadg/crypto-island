import * as THREE from "three";
import { C } from "./palette.js";

export function createSky() {
  const g = new THREE.Group();
  g.name = "sky";
  const hemi = new THREE.Mesh(
    new THREE.SphereGeometry(280, 12, 8),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color(0x4e8fbf) },
        mid: { value: new THREE.Color(0x8eb8d4) },
        bot: { value: new THREE.Color(0xd7e6c8) },
      },
      vertexShader: `
        varying vec3 vP;
        void main() {
          vP = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vP;
        uniform vec3 top;
        uniform vec3 mid;
        uniform vec3 bot;
        void main() {
          float h = normalize(vP).y;
          vec3 col = mix(bot, mid, smoothstep(-0.15, 0.12, h));
          col = mix(col, top, smoothstep(0.08, 0.72, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
  );
  g.add(hemi);

  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(7.5, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xfff1c0 })
  );
  sun.position.set(-90, 58, 40);
  g.add(sun);
  const haze = new THREE.Mesh(
    new THREE.SphereGeometry(16, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffe6a0, transparent: true, opacity: 0.22, depthWrite: false })
  );
  haze.position.copy(sun.position);
  g.add(haze);

  for (let i = 0; i < 4; i++) {
    const cloud = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: 0xeef4f8, transparent: true, opacity: 0.7 });
    for (let k = 0; k < 3; k++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(4.2 + (k % 3), 5, 4), mat);
      p.position.set((k - 1.4) * 5.2, (k % 2) * 1.4, (k % 3) - 1);
      cloud.add(p);
    }
    const a = (i / 4) * Math.PI * 2;
    cloud.position.set(Math.cos(a) * 90, 28 + (i % 3) * 4, Math.sin(a) * 90);
    cloud.userData.spin = 0.012 + (i % 4) * 0.004;
    cloud.userData.base = a;
    g.add(cloud);
  }
  return g;
}

export function tickSky(sky, t) {
  if (!sky) return;
  for (const c of sky.children) {
    if (!c.userData.spin) continue;
    const a = c.userData.base + t * c.userData.spin;
    c.position.x = Math.cos(a) * 90;
    c.position.z = Math.sin(a) * 90;
  }
}

const WAVES = [
  { ax: 0.82, az: 0.57, amp: 0.22, len: 18, speed: 1.15, q: 0.42 },
  { ax: -0.35, az: 0.94, amp: 0.12, len: 9.5, speed: 1.55, q: 0.32 },
  { ax: 0.2, az: -0.98, amp: 0.07, len: 5.2, speed: 1.9, q: 0.28 },
  { ax: 0.95, az: 0.31, amp: 0.045, len: 3.1, speed: 2.4, q: 0.2 },
];

function shoreMix(x, z) {
  const rHome = Math.hypot(x, z);
  const rEmber = Math.hypot(x - 118, z + 8);
  const mHome = Math.max(0, Math.min(1, (rHome - 33.2) / 8.5));
  const mEmber = Math.max(0, Math.min(1, (rEmber - 22.5) / 7.5));
  return Math.min(mHome, mEmber);
}

export function waterHeight(x, z, t) {
  const mix = shoreMix(x, z);
  if (mix <= 0.02) return -0.06;
  let y = 0;
  for (const w of WAVES) {
    const k = (Math.PI * 2) / w.len;
    const phase = (x * w.ax + z * w.az) * k + t * w.speed;
    y += w.amp * Math.sin(phase);
  }
  return y * mix;
}

export function createWater() {
  const geo = new THREE.PlaneGeometry(720, 720, 72, 72);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uSun: { value: new THREE.Vector3(-0.55, 0.72, 0.28).normalize() },
      uDeep: { value: new THREE.Color(0x0e3f63) },
      uMid: { value: new THREE.Color(0x2f7ea8) },
      uShal: { value: new THREE.Color(0x8fd0dc) },
      uFoam: { value: new THREE.Color(0xf3fbff) },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vW;
      varying vec3 vN;
      varying float vMix;
      varying float vCrest;
      vec3 gerstner(vec3 p, vec2 d, float amp, float len, float spd, float q, inout vec3 nAcc) {
        float k = 6.283185 / len;
        float phase = dot(d, p.xz) * k + uTime * spd;
        float s = sin(phase);
        float c = cos(phase);
        p.x += q * amp * d.x * c;
        p.z += q * amp * d.y * c;
        p.y += amp * s;
        nAcc.x += -d.x * k * amp * c;
        nAcc.z += -d.y * k * amp * c;
        nAcc.y += 1.0 - q * k * amp * s;
        return p;
      }
      void main() {
        vec3 p = position;
        float r = length(p.xz);
        float r2 = length(p.xz - vec2(118.0, -8.0));
        float mixW = min(clamp((r - 33.2) / 8.5, 0.0, 1.0), clamp((r2 - 22.5) / 7.5, 0.0, 1.0));
        vec3 nAcc = vec3(0.0, 0.0, 0.0);
        p = gerstner(p, normalize(vec2(0.82, 0.57)), 0.22 * mixW, 18.0, 1.15, 0.42, nAcc);
        p = gerstner(p, normalize(vec2(-0.35, 0.94)), 0.12 * mixW, 9.5, 1.55, 0.32, nAcc);
        p = gerstner(p, normalize(vec2(0.2, -0.98)), 0.07 * mixW, 5.2, 1.9, 0.28, nAcc);
        p = gerstner(p, normalize(vec2(0.95, 0.31)), 0.045 * mixW, 3.1, 2.4, 0.2, nAcc);
        vCrest = p.y;
        vMix = mixW;
        vN = normalize(nAcc);
        vW = (modelMatrix * vec4(p, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uShal;
      uniform vec3 uFoam;
      uniform vec3 uSun;
      varying vec3 vW;
      varying vec3 vN;
      varying float vMix;
      varying float vCrest;
      void main() {
        vec3 n = normalize(vN);
        vec3 view = normalize(cameraPosition - vW);
        float ndv = max(0.0, dot(n, view));
        float fres = pow(1.0 - ndv, 3.2);
        float spec = pow(max(0.0, dot(reflect(-uSun, n), view)), 48.0);
        float shore = 1.0 - vMix;
        vec3 col = mix(uDeep, uMid, clamp(vCrest * 2.4 + 0.45, 0.0, 1.0));
        col = mix(col, uShal, shore * 0.85);
        col = mix(col, vec3(0.72, 0.88, 0.95), fres * 0.55);
        col += spec * 0.55 * vMix;
        float foam = smoothstep(0.12, 0.24, vCrest) * vMix;
        foam += pow(shore, 1.6) * 0.45;
        col = mix(col, uFoam, foam * 0.55);
        float alpha = mix(0.0, 0.94, smoothstep(0.02, 0.18, vMix));
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });
  const water = new THREE.Mesh(geo, mat);
  water.position.y = 0.0;
  water.name = "water";
  return water;
}

export function createBobber() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), new THREE.MeshLambertMaterial({ color: 0xd24a3a, flatShading: true }));
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshLambertMaterial({ color: C.white, flatShading: true }));
  cap.position.y = 0.07;
  g.add(body, cap);
  g.visible = false;
  return g;
}

export function createSplash() {
  const g = new THREE.Group();
  const drops = [];
  const mat = new THREE.MeshBasicMaterial({ color: 0xd8eef2, transparent: true, opacity: 0.8 });
  for (let i = 0; i < 18; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.035, 5, 5), mat.clone());
    g.add(m);
    drops.push(m);
  }
  g.visible = false;
  g.userData.drops = drops;
  g.userData.t = 0;
  g.userData.live = false;
  return g;
}

export function burstSplash(splash, x, y, z) {
  splash.position.set(x, y, z);
  splash.visible = true;
  splash.userData.t = 0;
  splash.userData.live = true;
  splash.userData.drops.forEach((d, i) => {
    const a = (i / 18) * Math.PI * 2;
    d.position.set(0, 0.02, 0);
    d.userData.v = new THREE.Vector3(Math.cos(a) * (0.8 + Math.random()), 1.6 + Math.random(), Math.sin(a) * (0.8 + Math.random()));
    d.material.opacity = 0.85;
  });
}

export function tickSplash(splash, dt) {
  if (!splash?.userData.live) return;
  splash.userData.t += dt;
  for (const d of splash.userData.drops) {
    d.userData.v.y -= 6 * dt;
    d.position.addScaledVector(d.userData.v, dt);
    d.material.opacity = Math.max(0, 0.85 - splash.userData.t * 1.6);
  }
  if (splash.userData.t > 0.7) {
    splash.visible = false;
    splash.userData.live = false;
  }
}

export function createCatchProp(kind = "fish") {
  const g = new THREE.Group();
  if (kind === "boot") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), new THREE.MeshLambertMaterial({ color: 0x3a2a18, flatShading: true })));
  } else if (kind === "crate") {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.22), new THREE.MeshLambertMaterial({ color: 0x6a4a2d, flatShading: true })));
  } else {
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.22, 3, 6), new THREE.MeshLambertMaterial({ color: 0x3d8fbf, flatShading: true }));
    body.rotation.z = Math.PI / 2;
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.12, 4), new THREE.MeshLambertMaterial({ color: 0x2a6a88, flatShading: true }));
    tail.rotation.z = -Math.PI / 2;
    tail.position.x = -0.2;
    g.add(body, tail);
  }
  g.visible = false;
  return g;
}
