import React, { useEffect } from "react";
const run = require("../../script/hydra");

export const Hydra = ({ osc, pix }) => {
  useEffect(() => {
    run(osc, pix);
  });
  return <></>;
};
