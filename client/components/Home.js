import React, { useState } from "react";
import { connect } from "react-redux";
import { Hydra } from "./Hydra";
import Oscillate from "./Oscillate";
import { Pixelate } from "./Pixelate";

export const Home = () => {
  const [osc, setOsc] = useState([60.0, 0.1, 0.0]);
  const [pix, setPix] = useState([1, 1]);
  const [funcs, setFuncs] = useState([]);

  const handleOscillate = (e) => {
    e.preventDefault();
    let currFuncs;
    if (funcs.includes("oscillator")) {
      currFuncs = funcs.filter((func) => func !== "oscillator");
    } else {
      currFuncs = [...funcs, "oscillator"];
      const frequency = parseFloat(e.target.frequency.value);
      const sync = parseFloat(e.target.sync.value);
      const offset = parseFloat(e.target.offset.value);
      setOsc([frequency, sync, offset]);
    }
    setFuncs(currFuncs);
  };

  const handlePixelate = (e) => {
    const x = parseFloat(e.target.pixelX.value);
    const y = parseFloat(e.target.pixelY.value);
    setPix([x, y]);
  }

  return (
    <div>
      <Oscillate handleSubmit={handleOscillate} />
      <Pixelate handleSubmit={handlePixelate} />
      <Hydra osc={osc} pix={pix} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
