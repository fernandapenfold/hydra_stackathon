const Hydra = require("hydra-synth");

const hydra = new Hydra({ detectAudio: false, makeGlobal: false });
const { synth } = hydra;

const run = (osc, pix) => {
  const [frequency, sync, offset] = osc;
  // const [x, y] = pix;
  console.log('pix in run =', pix)
  synth.osc(frequency, sync, offset).pixelate(20, 20).out();
  // synth.osc(frequency, sync, offset).thresh(1).pixelate(20, 20).out();
  // methodChainer('oscillateAndPixelate')
};

module.exports = run;
