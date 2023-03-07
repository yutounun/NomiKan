import { render, screen } from "@testing-library/react";
import React from "react";
import BaseLayout from "./BaseLayout";

describe("BaseLayout", () => {
  it("renders correctly", () => {
    render(<BaseLayout>This is content</BaseLayout>);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  test("renders the component with the correct prop", () => {
    const textProp = "This is content";
    render(<BaseLayout>{textProp}</BaseLayout>);
    const textElement = screen.getByText(textProp);
    expect(textElement).toBeInTheDocument();
  });

  // it("takes a snapshot", () => {
  //   const { asFragment } = render(<BaseLayout />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
