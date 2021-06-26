import React from "react";
import { connect } from "react-redux";
import { handleRepeat } from "../store/synth";

export const Repeat = ({ handleSubmit, handleClick }) => {
  return (
    <div>
      <span>
        <form onSubmit={handleSubmit}>
          Repeat
          <div>
            <label htmlFor="repeatX">
              <small>X</small>
            </label>
            <input name="repeatX" type="text" />
          </div>
          <div>
            <label htmlFor="repeatY">
              <small>Y</small>
            </label>
            <input name="repeatY" type="text" />
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
    const x = parseFloat(e.target.repeatX.value);
    const y = parseFloat(e.target.repeatY.value);
    dispatch(handleRepeat([x, y]));
  },
  handleClick: () => {
    dispatch(handleRepeat([]));
  },
});

export default connect(null, mapDispatch)(Repeat);
