import React from "react";
import { connect } from "react-redux";

export const Pixelate = ({ handleSubmit }) => {
  return (
    <div>
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
    </div>
  );
};
