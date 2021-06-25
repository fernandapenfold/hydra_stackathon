import React from "react";
import { connect } from "react-redux";
import { handleOscillate } from '../store/synth';

export const Oscillate = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="frequency">
            <small>Frequency</small>
          </label>
          <input name="frequency" type="text" />
        </div>
        <div>
          <label htmlFor="sync">
            <small>Sync</small>
          </label>
          <input name="sync" type="text" />
        </div>
        <div>
          <label htmlFor="offset">
            <small>Offset</small>
          </label>
          <input name="offset" type="text" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

const mapDispatch = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const frequency = parseFloat(e.target.frequency.value);
    const sync = parseFloat(e.target.sync.value);
    const offset = parseFloat(e.target.offset.value);
    dispatch(handleOscillate([frequency, sync, offset]));
  }
});

export default connect(null, mapDispatch)(Oscillate);