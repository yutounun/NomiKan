import { render, screen } from "@testing-library/react";
import React from "react";
import MyHeader from "./MyHeader";

describe("MyHeader", () => {
  it("renders correctly", () => {
    render(<MyHeader />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("renders the component with the correct prop", () => {
    const textProp = "NomiKan";
    render(<MyHeader value={textProp} />);
    const textElement = screen.getByText(textProp);
    expect(textElement).toBeInTheDocument();
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<MyHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
