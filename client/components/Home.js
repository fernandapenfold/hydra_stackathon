import React from "react";
import { connect } from "react-redux";
import { Hydra } from "./Hydra";
import Oscillate from "./Oscillate";
import Pixelate from "./Pixelate";

export const Home = ({ synth }) => {
  const { oscillate, pixelate } = synth;
  // const [osc, setOsc] = useState([60.0, 0.1, 0.0]);
  // const [pix, setPix] = useState([1, 1]);
  // const [funcs, setFuncs] = useState([]);



  return (
    <div>
      <Oscillate />
      <Pixelate />
      <Hydra osc={oscillate} pix={pixelate} />
    </div>
  );
};

const mapState = ({ synth }) => ({
  synth,
});

export default connect(mapState)(Home);
