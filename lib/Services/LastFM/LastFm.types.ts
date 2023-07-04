import {
  TLastFMAlbum,
  TLastFMImage,
  TLastFMArtist,
} from "@/types/lastFm.types";

export type TTransformedAlbum = {
  artist: TLastFMArtist["name"];
  image: TLastFMImage[];
  name: TLastFMAlbum["name"];
};

export type TTransformAlbums = (albums: TLastFMAlbum[]) => TTransformedAlbum[];

export type TFetchAlbums = (
  args: Record<string, unknown>
) => Promise<TTransformedAlbum[]>;
