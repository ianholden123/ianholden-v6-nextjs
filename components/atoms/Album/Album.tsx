import Image from "next/image";
import { TAlbum } from "./Album.types";

export const Album: TAlbum = ({
  artist,
  imageHeight,
  imageAlt,
  imageSrc,
  imageWidth,
  name,
}) => (
  <div data-testid="album">
    <Image
      alt={imageAlt}
      height={imageHeight}
      src={imageSrc}
      width={imageWidth}
    />
    <p>
      {name} - {artist}
    </p>
  </div>
);
