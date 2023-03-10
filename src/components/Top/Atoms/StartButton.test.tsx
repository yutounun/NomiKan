import { render, screen } from "@testing-library/react";
import React from "react";
import StartButton from "./StartButton";

describe("StartButton", () => {
  it("renders correctly", () => {
    render(<StartButton />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByText("はじめる")).toBeInTheDocument();
  });
  it("takes a snapshot", () => {
    const { asFragment } = render(<StartButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
