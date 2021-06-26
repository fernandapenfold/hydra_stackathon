import React from "react";
import { connect } from "react-redux";
import { handlePixelate } from "../store/synth";

export const Pixelate = ({ handleSubmit, handleClick }) => {
  return (
    <div>
      <span>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pixelX">
              <small>X</small>
            </label>
            <input name="pixelX" type="text" />
          </div>
          <div>
            <label htmlFor="pixelY">
              <small>Y</small>
            </label>
            <input name="pixelY" type="text" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <button onClick={() => handleClick()}>OFF</button>
      </span>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const x = parseFloat(e.target.pixelX.value);
    const y = parseFloat(e.target.pixelY.value);
    dispatch(handlePixelate([x, y]));
  },
  handleClick: () => {
    dispatch(handlePixelate([]));
  },
});

export default connect(null, mapDispatch)(Pixelate);
