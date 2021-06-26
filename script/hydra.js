/* eslint-disable no-undef */

const Hydra = require("hydra-synth");

const hydra = new Hydra({ detectAudio: false, makeGlobal: true });
const { synth } = hydra;
const funcs = new Map();

// let s = synth;
let s;
const initImage = (imgURL) => {
  s0.initImage(imgURL);
  s = src(s0);
  console.log('s in initImage', s)
  return s;
};
const _voronoi = (vor) => {
  const [scale, speed, blending] = vor;
  s = voronoi(scale, speed, blending);
  return s;
};
const oscillate = (_osc) => {
  console.log('_osc params in oscillate', _osc)
  const [frequency, sync, offset] = _osc;
  console.log('frequency, sync and offset in oscillate', frequency, sync, offset)
  s = osc(frequency, sync, offset);
  console.log('s in oscillate', s)
  return s;
};
const pixelate = (pix) => {
  const [x, y] = pix;
  s = s.pixelate(x, y);
  console.log('s in pixelate', s)
  return s;
};
const reset = () => {
  s = synth;
  funcs.clear();
};

const run = (img, vor, _osc, pix) => {
  console.log('img =', img)
  console.log('vor =', vor)
  console.log('_osc =', osc)
  console.log('pix =', pix)

  funcs.set(initImage, img);
  funcs.set(_voronoi, vor);
  funcs.set(oscillate, _osc);
  funcs.set(pixelate, pix);

  console.log('in run, before for...of')

  for (const [func, args] of funcs) {
    if (args.length) {
      func(args);
    }
  }
  console.log('in run, after for...of')
  console.log('s after for...of', s)
  s.out();
  console.log('in run, after s.out()')
  // s.repeat(3, 3).mult(osc(1, 0.5, 3)).out();

  reset();
};

module.exports = run;
