import { render, screen } from "@testing-library/react";

import { ErrorBoundary } from "./ErrorBoundary";

const defaultFallback = <div>Oops, something went wrong.</div>;
const ThrowError = () => {
  throw new Error("Test");
};

describe("ErrorBoundary", () => {
  it("should render children if no error is thrown", () => {
    render(
      <ErrorBoundary fallback={defaultFallback}>
        <div>Child content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText(/child content/i)).toBeInTheDocument();
  });

  it("should render error if an error is thrown", () => {
    render(
      <ErrorBoundary fallback={defaultFallback}>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(/oops, something went wrong./i)
    ).toBeInTheDocument();
  });
});
