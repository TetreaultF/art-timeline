import { earlyNetherlandishArtworks } from "./early-netherlandish";
import { flemishRenaissanceArtworks } from "./flemish-renaissance";
import { germanRenaissanceArtworks } from "./german-renaissance";
import { italianRenaissanceArtworks } from "./italian-renaissance";
import { mannerismArtworks } from "./mannerism";

export const renaissanceArtworks = [
  ...earlyNetherlandishArtworks,
  ...flemishRenaissanceArtworks,
  ...germanRenaissanceArtworks,
  ...italianRenaissanceArtworks,
  ...mannerismArtworks,
].sort(() => Math.random() - 0.5);