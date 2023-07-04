import { TTransformAlbums, TFetchAlbums } from "./LastFm.types";
import constants from "@/lib/Constants";

const transformAlbums: TTransformAlbums = (albums) =>
  albums?.map((album) => ({
    artist: album?.artist?.name,
    image: album?.image,
    name: album?.name,
  }));

export const fetchAlbums: TFetchAlbums = async ({ ...args }) => {
  try {
    const params = {
      method: "user.gettopalbums",
      user: process.env.LASTFM_USERNAME,
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      ...args,
    };
    const urlParams = new URLSearchParams(params).toString();

    const res = await fetch(`${constants.LAST_FM_URL}?${urlParams}`);
    const data = await res.json();

    return transformAlbums(data?.topalbums?.album);
  } catch (e) {
    throw new Error(`Couldn't fetch album information`);
  }
};
