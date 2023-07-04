import { render, screen } from "@testing-library/react";
import { ErrorView } from "./ErrorView";

describe("ErrorView", () => {
  it("should render a title", () => {
    render(<ErrorView />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render a default message if another has not been provided", () => {
    render(<ErrorView />);
    expect(screen.getByText("Please try again later.")).toBeInTheDocument();
  });

  it("should render a custom message if one is provided", () => {
    render(<ErrorView errorMessage="Test custom error message." />);
    expect(screen.getByText("Test custom error message.")).toBeInTheDocument();
  });
});
