import React from "react";
import { connect } from "react-redux";
import { Hydra } from "./Hydra";
import InitImage from "./InitImage";
import Voronoi from "./Voronoi";
import Oscillate from "./Oscillate";
import Pixelate from "./Pixelate";
import Repeat from "./Repeat";

export const Home = ({ synth }) => {
  const { image, voronoi, oscillate, pixelate, repeat } = synth;

  return (
    <div>
      <InitImage />
      <Voronoi />
      <Oscillate />
      <Pixelate />
      <Repeat />
      <Hydra img={image} vor={voronoi} osc={oscillate} pix={pixelate} rep={repeat} />
    </div>
  );
};

const mapState = ({ synth }) => ({
  synth,
});

export default connect(mapState)(Home);
