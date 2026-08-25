import * as THREE from "three";
import { C } from "./palette.js";

export function createSky() {
  const g = new THREE.Group();
  g.name = "sky";
  const hemi = new THREE.Mesh(
    new THREE.SphereGeometry(280, 24, 16),
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

  for (let i = 0; i < 9; i++) {
    const cloud = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color: 0xeef4f8, flatShading: true, transparent: true, opacity: 0.78 });
    for (let k = 0; k < 4; k++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(4.2 + (k % 3), 6, 5), mat);
      p.position.set((k - 1.4) * 5.2, (k % 2) * 1.4, (k % 3) - 1);
      cloud.add(p);
    }
    const a = (i / 9) * Math.PI * 2;
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

export function waterHeight(x, z, t) {
  const w1 = Math.sin(x * 0.18 + t * 1.55) * 0.22;
  const w2 = Math.cos(z * 0.14 + t * 1.1) * 0.16;
  const w3 = Math.sin((x + z) * 0.31 + t * 2.1) * 0.07;
  return 0.08 + w1 + w2 + w3;
}

export function createWater() {
  const geo = new THREE.PlaneGeometry(620, 620, 128, 128);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x1d5f86) },
      uMid: { value: new THREE.Color(0x3f8fb3) },
      uShal: { value: new THREE.Color(0x7ec6d4) },
      uFoam: { value: new THREE.Color(0xe8f6f2) },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vW;
      varying float vH;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.18 + uTime * 1.55) * 0.22;
        float w2 = cos(p.z * 0.14 + uTime * 1.1) * 0.16;
        float w3 = sin((p.x + p.z) * 0.31 + uTime * 2.1) * 0.07;
        p.y += w1 + w2 + w3;
        vH = p.y;
        vW = (modelMatrix * vec4(p, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uShal;
      uniform vec3 uFoam;
      uniform float uTime;
      varying vec3 vW;
      varying float vH;
      void main() {
        float r = length(vW.xz);
        float shore = smoothstep(46.0, 32.0, r);
        vec3 col = mix(uDeep, uMid, smoothstep(0.0, 0.18, vH));
        col = mix(col, uShal, shore);
        float crest = smoothstep(0.18, 0.38, vH);
        col = mix(col, uFoam, crest * 0.55);
        float foam = sin(r * 0.72 - uTime * 2.2) * 0.5 + 0.5;
        foam *= smoothstep(44.0, 36.0, r) * smoothstep(30.0, 37.0, r);
        col = mix(col, uFoam, foam * 0.5);
        float spark = pow(max(0.0, sin(vW.x * 0.85 + vW.z * 0.55 + uTime * 3.4)), 22.0);
        col += spark * 0.16;
        float alpha = mix(0.92, 0.78, shore);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });
  const water = new THREE.Mesh(geo, mat);
  water.position.y = 0.02;
  water.receiveShadow = true;
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
