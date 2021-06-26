import React, { useEffect } from "react";
const run = require("../../script/hydra");

export const Hydra = ({ img, vor, osc, pix }) => {
  useEffect(() => {
    run(img, vor, osc, pix);
  });
  return <></>;
};
