import { render, screen } from "@testing-library/react";
import { PageNotFoundTemplate } from "./";

describe("404", () => {
  it("should render a link back to the homepage", () => {
    render(<PageNotFoundTemplate />);
    expect(screen.getByRole("link"));
  });
});
