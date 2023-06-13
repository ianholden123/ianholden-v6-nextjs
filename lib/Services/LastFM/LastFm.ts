import { TTransformTopAlbums } from "./LastFm.types";
import constants from "@/lib/Constants";

const transformTopAlbums: TTransformTopAlbums = (albums) =>
  albums?.map((album) => ({
    artist: album?.artist?.name,
    image: album?.image,
    name: album?.name,
  }));

export async function fetchTopAlbums() {
  try {
    const params = {
      method: "user.gettopalbums",
      user: process.env.LASTFM_USERNAME,
      api_key: process.env.LASTFM_API_KEY,
      format: "json",
      period: "1month",
      limit: "3",
    };
    const urlParams = new URLSearchParams(params).toString();

    const res = await fetch(`${constants.LAST_FM_URL}?${urlParams}`);
    const data = await res.json();

    return transformTopAlbums(data?.topalbums?.album);
  } catch (e) {
    throw new Error(`Couldn't fetch top 3 album information`);
  }
}
