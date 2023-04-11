import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import InputPercentage from "pages/InputPercentage";

/**
 * Requirements
 * Renders a component in the DOM x
 * Renders MyStepper component with the current step x
 * Renders add button component x
 * Disable the registration button, if none of members's percentage is changed x
 * Renders name, percentage, and edit button on the Member component x
 * Opens Edit Member modal on clicking edit button x
 * Renders typed percentage on the DOM after editing on modal component works x
 * Disable the registration button, when the total percentage is more than 100%
 * Disable the registration button, if the amount of the total percentage is not 100%
 * Shows "割合入力" on the title x
 */

describe("InputPercentage page", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("renders correctly", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(
      <Router>
        <InputPercentage />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Shows 割合入力 on the title", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );

    const header = screen.getByRole("heading", {
      name: /ratio/i,
    });

    expect(header).toBeInTheDocument();
  });

  it("Renders MyStepper component with the current step", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );
    const totalAmountStep = screen.getByTestId("total amount");
    // Only inactive steps have "Mui-disabled" class
    expect(totalAmountStep).not.toHaveClass("Mui-disabled");

    const addMemberStep = screen.getByTestId("members");
    expect(addMemberStep).not.toHaveClass("Mui-disabled");

    const inputPercentage = screen.getByTestId("ratio");
    expect(inputPercentage).not.toHaveClass("Mui-disabled");
  });

  it("Renders add button component", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );
    const textField = screen.getByRole("button", {
      name: /Submit/i
    });
    expect(textField).toBeInTheDocument();
  });

  it("Disable the registration button initially", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );

    // Make sure the registration button is disabled
    expect(screen.getByText("Submit")).toBeDisabled();
  });

  it("has a registration button component", () => {
    render(
      <Router>
        <InputPercentage />
      </Router>
    );
    const regBtn = screen.getByRole("button", {
      name: /Submit/i
    });
    expect(regBtn).toBeInTheDocument();
  });

  // it("Renders name, percentage, and edit button on the Member component", () => {
  //   window.sessionStorage.setItem(
  //     "nomikan-storage",
  //     JSON.stringify({
  //       state: { cost: "100", members: [{ name: "Yuto", ratio: 0 }] },
  //       version: 0,
  //     })
  //   );

  // it("Renders name, percentage, and edit button on the Member component", () => {
  //   window.sessionStorage.setItem(
  //     "nomikan-storage",
  //     JSON.stringify({
  //       state: { cost: "100", members: [{ name: "Yuto", ratio: 0 }] },
  //       version: 0,
  //     })
  //   );

  //   render(
  //     <Router>
  //       <InputPercentage />
  //     </Router>
  //   );

  // screen.debug(undefined, Infinity);
  // render(
  //   <Router>
  //     <InputPercentage />
  //   </Router>
  // );
  // const memberName = screen.getByText("Yuto");
  // expect(memberName).toBeInTheDocument();
  // });

  // it("Opens Edit Member modal on clicking edit button", () => {
  //   sessionStorage.setItem(
  //     "nomikan-storage", '{"state":{"cost":"","members":["Yuto"]},"version":0}'
  //   );
  //   render(
  //   <Router>
  //     <InputPercentage />
  //   </Router>
  // );

  //   // Click add button
  //   fireEvent(
  //     screen.getByTestId("edit-btn"),
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     })
  //   );

  //   const editModalTitle = screen.getByText("編集");
  //   expect(editModalTitle).toBeInTheDocument();
  // });

  // it("Renders typed percentage on the DOM after editing on modal component works", () => {
  //   sessionStorage.setItem(
  // "nomikan-storage", '{"state":{"cost":"","members":["Yuto"]},"version":0}'
  // );
  //   render(
  //   <Router>
  //     <InputPercentage />
  //   </Router>
  // );

  //   // Click add button
  //   fireEvent(
  //     screen.getByTestId("edit-btn"),
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     })
  //   );

  //   screen.getByText("編集");

  //   // Type on TextField component using fireEvent
  //   const textField = screen.getByRole("textbox", {
  //     name: /%/i
  //   });
  //   fireEvent.change(textField, { target: { value: "40" } });

  //   // close the modal
  //   fireEvent(
  //     screen.getByTestId("complete-btn"),
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     })
  //   );

  //   screen.getByText("40%");
  // });
});
