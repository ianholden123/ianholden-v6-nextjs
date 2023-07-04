export type TLastFMArtist = {
  url: string;
  name: string;
  mbid: string;
};

export type TLastFMImage = {
  size: "small" | "medium" | "large" | "extralarge";
  "#text": string;
};

export type TLastFMAlbum = {
  artist: TLastFMArtist;
  image: TLastFMImage[];
  mbid: string;
  url: string;
  playcount: string;
  name: string;
};
