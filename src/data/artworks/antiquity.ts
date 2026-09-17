import egyptianArtworks from "./egyptian.json";
import mesopotamiaArtworks from "./mesopotamia.json";
import precolumbianArtworks from "./precolumbian.json";
import greekArtworks from "./greek.json";
import celticArtworks from "./celtic.json";
import etruscanArtworks from "./etruscan.json";
import romanArtworks from "./roman.json";
import buddhistArtworks from "./buddhist.json";

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