import byzantineArtworks from "./byzantine.json";
import islamicArtworks from "./islamic.json";
import anglosaxonArtworks from "./anglo-saxon.json";
import vikingArtworks from "./viking.json";
import romanesqueArtworks from "./romanesque.json";
import gothicArtworks from "./gothic.json";

export const medievalArtworks = [
  ...byzantineArtworks,
  ...islamicArtworks,
  ...anglosaxonArtworks,
  ...vikingArtworks,
  ...romanesqueArtworks,
  ...gothicArtworks,
].sort(() => Math.random() - 0.5);