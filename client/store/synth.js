export const handleOscillate = (payload) => ({
  type: "oscillate",
  payload,
});

export const handlePixelate = (payload) => ({
  type: "pixelate",
  payload,
});

const initialState = {
  oscillate: [60.0, 0.5, 15.0],
  pixelate: [2, 20],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "oscillate":
      return { ...state, oscillate: action.payload };
    case "pixelate":
      return { ...state, pixelate: action.payload };
    default:
      return state;
  }
}
