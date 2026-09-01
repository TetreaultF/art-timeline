import { byzantineArtworks } from "./byzantine";
import { islamicArtworks } from "./islamic";
import { anglosaxonArtworks } from "./anglo-saxon";
import { vikingArtworks } from "./viking";
import { romanesqueArtworks } from "./romanesque";
import { gothicArtworks } from "./gothic";

export const medievalArtworks = [
  ...byzantineArtworks,
  ...islamicArtworks,
  ...anglosaxonArtworks,
  ...vikingArtworks,
  ...romanesqueArtworks,
  ...gothicArtworks,
].sort(() => Math.random() - 0.5);