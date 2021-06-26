import React, { useEffect } from "react";
const run = require("../../script/hydra");

export const Hydra = ({ img, vor, osc, pix, rep }) => {
  useEffect(() => {
    run(img, vor, osc, pix, rep);
  });
  return <></>;
};
