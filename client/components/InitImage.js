import React from "react";
import { connect } from "react-redux";
import { handleInitImage, handleOscillate } from "../store/synth";

export const InitImage = ({ handleSubmit, handleClick }) => (
  <div>
    <form onSubmit={handleSubmit}>
      Add an image
      <div>
        <label htmlFor="imageURL">
          <small>Image URL</small>
        </label>
        <input name="imageURL" type="text" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    <button onClick={(image) => handleClick(image)}>Remove</button>
  </div>
);

const mapDispatch = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(handleInitImage([e.target.imageURL.value]));
  },
  handleClick: () => {
    dispatch(handleOscillate([1, 1, 1]));
  },
});

export default connect(null, mapDispatch)(InitImage);
