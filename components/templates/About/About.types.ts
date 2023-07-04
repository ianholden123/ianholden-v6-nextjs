import { TTransformedAlbum } from "@/lib/Services/LastFM/LastFm.types";

type TAboutTemplateProps = {
  albums: TTransformedAlbum[];
};

export type TAboutTemplate = (props: TAboutTemplateProps) => JSX.Element;
