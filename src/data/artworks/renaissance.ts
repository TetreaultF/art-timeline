import earlyNetherlandishArtworks from "./early-netherlandish.json";
import flemishRenaissanceArtworks from "./flemish-renaissance.json";
import germanRenaissanceArtworks from "./german-renaissance.json";
import italianRenaissanceArtworks from "./italian-renaissance.json";
import mannerismArtworks from "./mannerism.json";

export const renaissanceArtworks = [
  ...earlyNetherlandishArtworks,
  ...flemishRenaissanceArtworks,
  ...germanRenaissanceArtworks,
  ...italianRenaissanceArtworks,
  ...mannerismArtworks,
].sort(() => Math.random() - 0.5);