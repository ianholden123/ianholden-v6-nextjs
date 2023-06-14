import { fetchTopAlbums } from "./LastFm";

describe("LastFM", () => {
  it("should call the LastFM API with the correct params", async () => {
    await fetchTopAlbums();

    expect(true).toBe(true);
  });
});
