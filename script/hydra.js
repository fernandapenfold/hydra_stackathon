const Hydra = require("hydra-synth");

const hydra = new Hydra({ detectAudio: false, makeGlobal: false });
const { synth } = hydra;
const funcs = new Map();

let s = synth;
const oscillate = (_osc) => {
  const [frequency, sync, offset] = _osc;
  s = s.osc(frequency, sync, offset);
  return s;
};
const pixelate = (pix) => {
  const [x, y] = pix;
  s = s.pixelate(x, y);
  return s;
};
const reset = () => {
  s = synth;
  funcs.clear();
};

const run = (_osc, pix) => {
  funcs.set(oscillate, _osc);
  funcs.set(pixelate, pix);

  for (const [func, args] of funcs) {
    if (args.length) {
      func(args);
    }
  }

  s.out();

  // reconcile global namespace 
  // s0.initImage('https://upload.wikimedia.org/wikipedia/commons/5/5b/Cantillon.jpg');
  // s.src(s0).out()
  reset();
};

module.exports = run;
