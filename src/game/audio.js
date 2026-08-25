const ctxRef = { ctx: null };

function ctx() {
  if (ctxRef.ctx) return ctxRef.ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctxRef.ctx = new AC();
  return ctxRef.ctx;
}

export function unlockAudio() {
  const c = ctx();
  if (c && c.state === "suspended") c.resume();
}

function envGain(c, start, peak, attack, hold, release) {
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(peak, start + attack);
  g.gain.setValueAtTime(peak, start + attack + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, start + attack + hold + release);
  return g;
}

export function playTone({ freq = 220, type = "sine", dur = 0.2, vol = 0.08, slide = 0 } = {}) {
  const c = ctx();
  if (!c) return;
  const t = c.currentTime;
  const o = c.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
  const g = envGain(c, t, vol, 0.012, dur * 0.35, dur * 0.6);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export function playNoise({ dur = 0.18, vol = 0.05, hp = 400, lp = 2400 } = {}) {
  const c = ctx();
  if (!c) return;
  const n = Math.floor(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const src = c.createBufferSource();
  src.buffer = buf;
  const hip = c.createBiquadFilter();
  hip.type = "highpass";
  hip.frequency.value = hp;
  const lop = c.createBiquadFilter();
  lop.type = "lowpass";
  lop.frequency.value = lp;
  const g = envGain(c, c.currentTime, vol, 0.005, dur * 0.2, dur * 0.75);
  src.connect(hip);
  hip.connect(lop);
  lop.connect(g);
  g.connect(c.destination);
  src.start();
}

export const sfx = {
  step: () => playNoise({ dur: 0.07, vol: 0.035, hp: 80, lp: 420 }),
  splash: () => {
    playNoise({ dur: 0.28, vol: 0.07, hp: 200, lp: 1800 });
    playTone({ freq: 180, type: "triangle", dur: 0.18, vol: 0.03, slide: -80 });
  },
  cast: () => playTone({ freq: 340, type: "triangle", dur: 0.16, vol: 0.05, slide: -120 }),
  bite: () => {
    playTone({ freq: 620, type: "square", dur: 0.08, vol: 0.045 });
    playTone({ freq: 180, type: "sawtooth", dur: 0.12, vol: 0.03, slide: -40 });
  },
  reel: () => playTone({ freq: 240, type: "triangle", dur: 0.09, vol: 0.03, slide: 70 }),
  catch: (rare = false) => {
    playTone({ freq: rare ? 520 : 360, type: "sine", dur: 0.16, vol: 0.06 });
    playTone({ freq: rare ? 780 : 480, type: "triangle", dur: 0.22, vol: 0.04, slide: 40 });
  },
  miss: () => playTone({ freq: 140, type: "sine", dur: 0.2, vol: 0.04, slide: -70 }),
  ui: () => playTone({ freq: 480, type: "sine", dur: 0.07, vol: 0.03 }),
  burn: () => {
    playNoise({ dur: 0.22, vol: 0.04, hp: 300, lp: 1600 });
    playTone({ freq: 260, type: "sawtooth", dur: 0.18, vol: 0.035, slide: 90 });
  },
  jump: () => playTone({ freq: 210, type: "triangle", dur: 0.1, vol: 0.035, slide: 80 }),
};

let windNode = null;
export function startAmbience() {
  const c = ctx();
  if (!c || windNode) return;
  const t = c.currentTime;
  const o1 = c.createOscillator();
  o1.type = "sine";
  o1.frequency.value = 72;
  const o2 = c.createOscillator();
  o2.type = "triangle";
  o2.frequency.value = 118;
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.018, t + 1.6);
  const lfo = c.createOscillator();
  lfo.frequency.value = 0.07;
  const lg = c.createGain();
  lg.gain.value = 0.006;
  lfo.connect(lg);
  lg.connect(g.gain);
  o1.connect(g);
  o2.connect(g);
  g.connect(c.destination);
  o1.start();
  o2.start();
  lfo.start();
  windNode = g;
}
