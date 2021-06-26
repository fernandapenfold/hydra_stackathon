export const handleInitImage = (payload) => ({
    type: "image",
    payload
});

export const handleVoronoi = (payload) => ({
    type: "voronoi",
    payload
});

export const handleOscillate = (payload) => ({
  type: "oscillate",
  payload,
});

export const handlePixelate = (payload) => ({
  type: "pixelate",
  payload,
});

const initialState = {
  image: [],
  voronoi: [],
  oscillate: [2, 0.5, 3],
  pixelate: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "image": 
      return { ...state, voronoi: [], oscillate: [], image: action.payload };
    case "voronoi":
        return { ...state, image: [], oscillate: [], voronoi: action.payload };
    case "oscillate":
      return { ...state, image: [], voronoi: [], oscillate: action.payload };
    case "pixelate":
      return { ...state, pixelate: action.payload };
    default:
      return state;
  }
}
