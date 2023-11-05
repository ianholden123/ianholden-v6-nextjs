import Image from "next/image";
import { TAlbum } from "./Album.types";

export const Album: TAlbum = ({ artist, imageSrc, name }) => (
  <div data-testid="album">
    <Image
      alt={`${name} by ${artist} album cover`}
      height={300}
      src={imageSrc}
      width={300}
    />
    <p>
      {name} - {artist}
    </p>
  </div>
);
