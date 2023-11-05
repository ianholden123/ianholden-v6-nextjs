import { render, screen } from "@testing-library/react";
import { Album } from "./Album";

describe("Album", () => {
  it("should render an image", () => {
    render(
      <Album
        artist="Artist"
        name="Album name"
        imageSrc="/some-album-image-src"
      />
    );
    expect(
      screen.getByAltText("Album name by Artist album cover")
    ).toBeInTheDocument();
  });
});
