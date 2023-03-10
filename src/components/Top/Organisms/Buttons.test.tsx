import { render, screen } from "@testing-library/react";
import React from "react";
import Buttons from "./Buttons";

describe("Buttons", () => {
  it("renders correctly", () => {
    render(<Buttons />);
    expect(screen.getAllByTestId("button")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("button")[1]).toBeInTheDocument();
    expect(screen.getAllByTestId("button")[2]).toBeInTheDocument();
    expect(screen.getByText("はじめる")).toBeInTheDocument();
    expect(screen.getByText("会員登録")).toBeInTheDocument();
    expect(screen.getByText("ログイン")).toBeInTheDocument();
  });
  it("takes a snapshot", () => {
    const { asFragment } = render(<Buttons />);
    expect(asFragment()).toMatchSnapshot();
  });
});
