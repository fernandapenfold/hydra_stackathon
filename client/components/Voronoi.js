import React from "react";
import { connect } from "react-redux";
import { handleVoronoi, handleOscillate } from "../store/synth";

export const Voronoi = ({ handleSubmit, handleClick }) => (
  <div>
    <form onSubmit={handleSubmit}>
      Voronoi
      <div>
        <label htmlFor="scale">
          <small>Scale</small>
        </label>
        <input name="scale" type="text" />
      </div>
      <div>
        <label htmlFor="speed">
          <small>Speed</small>
        </label>
        <input name="speed" type="text" />
      </div>
      <div>
        <label htmlFor="blending">
          <small>Blending</small>
        </label>
        <input name="blending" type="text" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    <button onClick={() => handleClick()}>OFF</button>
  </div>
);

const mapDispatch = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const scale = parseFloat(e.target.scale.value);
    const speed = parseFloat(e.target.speed.value);
    const blending = parseFloat(e.target.blending.value);
    dispatch(handleVoronoi([scale, speed, blending]));
  },
  handleClick: () => {
    dispatch(handleOscillate[(1, 1, 1)]);
  },
});

export default connect(null, mapDispatch)(Voronoi);