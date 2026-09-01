import { egyptianArtworks } from "./egyptian";
import { mesopotamiaArtworks } from "./mesopotamia";
import { precolumbianArtworks } from "./precolumbian";
import { greekArtworks } from "./greek";
import { celticArtworks } from "./celtic";
import { etruscanArtworks } from "./etruscan";
import { romanArtworks } from "./roman";
import { buddhistArtworks } from "./buddhist";

export const antiquityArtworks = [
  ...egyptianArtworks,
  ...mesopotamiaArtworks,
  ...precolumbianArtworks,
  ...greekArtworks,
  ...celticArtworks,
  ...etruscanArtworks,
  ...romanArtworks,
  ...buddhistArtworks,
].sort(() => Math.random() - 0.5);