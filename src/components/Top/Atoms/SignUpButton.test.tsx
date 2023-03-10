import { render, screen } from "@testing-library/react";
import React from "react";
import SignUpButton from "./SignUpButton";

describe("SignUpButton", () => {
  it("renders correctly", () => {
    render(<SignUpButton />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByText("会員登録")).toBeInTheDocument();
  });
  it("takes a snapshot", () => {
    const { asFragment } = render(<SignUpButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
