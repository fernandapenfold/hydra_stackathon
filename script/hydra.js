/* eslint-disable no-undef */

const Hydra = require("hydra-synth");

const hydra = new Hydra({ detectAudio: false, makeGlobal: true });
const { synth } = hydra;
const funcs = new Map();

let s;
const initImage = (imgURL) => {
  s0.initImage(imgURL);
  s = src(s0);
  return s;
};
const _voronoi = (vor) => {
  const [scale, speed, blending] = vor;
  s = voronoi(scale, speed, blending);
  return s;
};
const oscillate = (_osc) => {
  const [frequency, sync, offset] = _osc;
  s = osc(frequency, sync, offset);
  return s;
};
const pixelate = (pix) => {
  const [x, y] = pix;
  s = s.pixelate(x, y);
  return s;
};
const repeat = (rep) => {
  const [x, y] = rep;
  s = s.repeat(x, y);
  return s;
}
const reset = () => {
  s = synth;
  funcs.clear();
};

const run = (img, vor, _osc, pix, rep) => {

  funcs.set(initImage, img);
  funcs.set(_voronoi, vor);
  funcs.set(oscillate, _osc);
  funcs.set(pixelate, pix);
  funcs.set(repeat, rep);

  for (const [func, args] of funcs) {
    if (args.length) {
      func(args);
    }
  }

  s.out();
  reset();
};

module.exports = run;
