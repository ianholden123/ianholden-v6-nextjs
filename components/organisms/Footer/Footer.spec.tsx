import { render, screen } from "@testing-library/react";
import MockDate from "mockdate";
import { Footer } from "./";

describe("Footer", () => {
  beforeEach(() => MockDate.set("2020-01-01"));
  afterEach(() => MockDate.reset());

  it('should render "Ian Holden" and the current year', () => {
    render(<Footer />);
    expect(screen.getByText(/ian holden 2020/i)).toBeInTheDocument();
  });
});
