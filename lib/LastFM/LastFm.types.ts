export type TAlbum = {
  artist: string;
  image: {
    "#text": string;
    size: "small" | "medium" | "large" | "extralarge";
  }[];
  name: string;
};

export type TTransformTopAlbums = (albums: Record<string, any>[]) => TAlbum[];
