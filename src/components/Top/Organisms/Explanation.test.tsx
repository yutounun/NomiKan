import { render } from "@testing-library/react";
import React from "react";
import Explanation from "./Explanation";

describe("Explanation", () => {
  it("takes a snapshot", () => {
    const { asFragment } = render(<Explanation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
