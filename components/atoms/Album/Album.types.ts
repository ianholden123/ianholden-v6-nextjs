type TAlbumProps = {
  artist: string;
  imageSrc: string;
  name: string;
};

export type TAlbum = (props: TAlbumProps) => JSX.Element;
