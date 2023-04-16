type TAlbumProps = {
  artist: string;
  imageHeight: number;
  imageAlt: string;
  imageSrc: string;
  imageWidth: number;
  name: string;
};

export type TAlbum = (props: TAlbumProps) => JSX.Element;
