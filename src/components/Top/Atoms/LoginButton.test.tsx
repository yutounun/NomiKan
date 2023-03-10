import { render, screen } from "@testing-library/react";
import React from "react";
import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  it("renders correctly", () => {
    render(<LoginButton />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByText("ログイン")).toBeInTheDocument();
  });
  it("takes a snapshot", () => {
    const { asFragment } = render(<LoginButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
