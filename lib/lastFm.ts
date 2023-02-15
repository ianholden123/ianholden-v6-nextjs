const url = "https://ws.audioscrobbler.com/2.0/";

export async function fetchTopAlbums() {
  const params = {
    method: "user.gettopalbums",
    user: process.env.LASTFM_USERNAME,
    api_key: process.env.LASTFM_API_KEY,
    format: "json",
    period: "1month",
    limit: "3",
  };
  const urlParams = new URLSearchParams(params).toString();

  const res = await fetch(`${url}?${urlParams}`);
  const data = await res.json();

  return data;
}
