import { rest } from "msw";
import { mockTopThreeAlbums } from "./LastFm.mocks";

export const lastFmHandlers = [
  rest.get("https://ws.audioscrobbler.com", (req, res, ctx) => {
    switch (req.url.searchParams.get("method")) {
      case "user.gettopalbums":
        return res(ctx.json(mockTopThreeAlbums));
      default:
        return res(ctx.json({}));
    }
  }),
];
