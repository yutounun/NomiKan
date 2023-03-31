import { render, screen } from "@testing-library/react";
import React from "react";
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
  it("renders correctly", () => {
    render(<InputPercentage />);
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<InputPercentage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Shows 割合入力 on the title", () => {
    render(<InputPercentage />);

    const header = screen.getByRole("heading", {
      name: /割合入力/i,
    });

    expect(header).toBeInTheDocument();
  });

  it("Renders MyStepper component with the current step", () => {
    render(<InputPercentage />);
    const totalAmountStep = screen.getByTestId("合計金額");
    // Only inactive steps have "Mui-disabled" class
    expect(totalAmountStep).not.toHaveClass("Mui-disabled");

    const addMemberStep = screen.getByTestId("メンバー追加");
    expect(addMemberStep).not.toHaveClass("Mui-disabled");

    const inputPercentage = screen.getByTestId("割合入力");
    expect(inputPercentage).not.toHaveClass("Mui-disabled");
  });

  //   it("Renders add button component", () => {
  //     render(<InputPercentage />);
  //     const textField = screen.getByRole("button", {
  //       name: /登録/i
  //     });
  //     expect(textField).toBeInTheDocument();
  //   });

  //   it("Disable the registration button initially", () => {
  //     render(<InputPercentage />);

  //     // Make sure the registration button is disabled
  //     expect(screen.getByText("登録")).toBeDisabled();
  //   });

  // it("has a registration button component", () => {
  //   render(<InputPercentage />);
  //   const regBtn = screen.getByTestId("reg-btn");
  //   expect(regBtn).toBeInTheDocument();
  // });

  // it("Renders name, percentage, and edit button on the Member component", () => {
  // sessionStorage.setItem(
  // "nomikan-storage", '{"state":{"cost":"","members":["Yuto"]},"version":0}'
  // );

  // screen.debug(undefined, Infinity);
  // render(<InputPercentage />);
  // const memberName = screen.getByText("Yuto");
  // expect(memberName).toBeInTheDocument();
  // });

  // it("Opens Edit Member modal on clicking edit button", () => {
  //   sessionStorage.setItem(
  //     "nomikan-storage", '{"state":{"cost":"","members":["Yuto"]},"version":0}'
  //   );
  //   render(<InputPercentage />);

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
  //   render(<InputPercentage />);

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
