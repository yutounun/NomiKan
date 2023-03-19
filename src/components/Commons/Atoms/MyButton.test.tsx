import { render, screen } from "@testing-library/react";
import React from "react";
import MyButton from "./MyButton";

describe("MyButton", () => {
  it("renders correctly", () => {
    render(<MyButton dataTestid="button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
  it("takes a snapshot", () => {
    const { asFragment } = render(<MyButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
