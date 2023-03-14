import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TotalAmount from "./TotalAmount";

/**
 * Requirements
 * 1. The component must be rendered in the DOM
 * 2. Stepper component must be rendered and have all the steps
 * 3. Input component must be rendered with a placeholder
 * 4. Alert component must be rendered and have a message after the completion of registration
 * 5. Button component must be rendered
 * 6. Button must not be clicked when the input is empty
 * 7. Active step on Stepper must be 0
 * 8. Cost must be saved on Session storage, when the button is clicked
 */

describe("TotalAmount", () => {
  it("renders correctly", () => {
    render(<TotalAmount />);
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<TotalAmount />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders all steps in the Stepper component", () => {
    render(<TotalAmount />);
    expect(screen.getByTestId("合計金額")).toBeInTheDocument();
    expect(screen.getByTestId("メンバー追加")).toBeInTheDocument();
    expect(screen.getByTestId("割合入力")).toBeInTheDocument();
    expect(screen.getByTestId("結果")).toBeInTheDocument();
  });

  it("renders an Input component with a placeholder", () => {
    render(<TotalAmount />);
    const inputElem = screen.getByLabelText("金額を入力してね");
    expect(inputElem).toBeInTheDocument();
  });

  it("does not render alert at first", () => {
    render(<TotalAmount />);
    expect(screen.queryByRole("alert")).toBeFalsy();
  });

  it("renders an Alert component after registration", () => {
    render(<TotalAmount />);

    // Type cost in the textbox field
    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: /金額を入力してね/i,
      }),
      { target: { value: "500" } }
    );

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("登録が完了しました！")).toBeInTheDocument();
  });

  it("renders a Button component", () => {
    render(<TotalAmount />);
    const buttonElem = screen.getByRole("spinbutton", {
      name: /金額を入力してね/i,
    });
    expect(buttonElem).toBeInTheDocument();
  });

  it("doesn't allow user to click Button when Input is empty", () => {
    render(<TotalAmount />);
    expect(screen.getByRole("button", { name: /登録/i })).toBeDisabled();
  });

  it("sets the Active step on Stepper to be 0", () => {
    render(<TotalAmount />);
    const stepperElem = screen.getByTestId("合計金額");

    // Only inactive steps have "Mui-disabled" class
    expect(stepperElem).not.toHaveClass("Mui-disabled");
  });

  it("saves cost on session storage when Button is clicked", () => {
    render(<TotalAmount />);

    // Type cost in the textbox field
    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: /金額を入力してね/i,
      }),
      { target: { value: "500" } }
    );

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(window.sessionStorage.getItem("cost-storage")).toEqual(
      '{"state":{"cost":"500"},"version":0}'
    );
  });
});
