import { render } from "@testing-library/react";
import React from "react";
import InputPercentage from "pages/InputPercentage";

/**
 * Requirements
 * Renders a component in the DOM
 * Renders MyStepper component with the current step
 * Renders add button component
 * Hide the registration button, if none of members's percentage is changed
 * Renders name, percentage, and edit button on the Member component
 * Opens Edit Member modal on clicking edit button
 * Renders typed percentage on the DOM after editing on modal component works
 * Renders MyAlert component when the total percentage is more than 100%
 * Shows "割合入力" on the title
 */

describe("InputPercentage page", () => {
  it("renders correctly", () => {
    render(<InputPercentage />);
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<InputPercentage />);
    expect(asFragment()).toMatchSnapshot();
  });

  //   it("has myStepper component with the current step", () => {
  //     render(<InputPercentage />);
  //     const InputPercentageStep = screen.getByTestId("合計金額");
  //     // Only inactive steps have "Mui-disabled" class
  //     expect(InputPercentageStep).not.toHaveClass("Mui-disabled");

  //     const InputPercentageStep = screen.getByTestId("メンバー追加");
  //     expect(InputPercentageStep).not.toHaveClass("Mui-disabled");
  //   });

  //   it("has a textField component with a placeholder", () => {
  //     render(<InputPercentage />);
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     expect(textField).toBeInTheDocument();
  //   });

  //   it("has メンバーを追加してください with the disabled registration button and the disabled add button if none of members are added", () => {
  //     render(<InputPercentage />);
  //     const text = screen.getByText("メンバーを追加してください");
  //     expect(text).toBeInTheDocument();

  //     // Make sure the registration button is disabled
  //     expect(screen.getByText("登録")).toBeDisabled();
  //   });

  //   it("has a registration button component", () => {
  //     render(<InputPercentage />);
  //     const regBtn = screen.getByTestId("reg-btn");
  //     expect(regBtn).toBeInTheDocument();
  //   });

  //   it("has a AddButton component", () => {
  //     render(<InputPercentage />);
  //     const addButton = screen.getByTestId("add-member-btn");
  //     expect(addButton).toBeInTheDocument();
  //   });

  //   it("has a Member component with name, delete button, and edit button", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     // Shows the member in the list
  //     const memberName = screen.getByText("Yuto");
  //     const deleteBtn = screen.getByTestId("delete-btn");
  //     const editBtn = screen.getByTestId("edit-btn");
  //     // Shows name in the line
  //     expect(memberName).toBeInTheDocument();
  //     // Shows delete button
  //     expect(deleteBtn).toBeInTheDocument();
  //     // Shows edit button
  //     expect(editBtn).toBeInTheDocument();
  //   });

  //   it("clicking delete button deletes the member from the list", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     const deleteBtn = screen.getByTestId("delete-btn");

  //     // Remove the member from the list
  //     fireEvent(
  //       deleteBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     // The name of the added member is not displayed
  //     expect(screen.queryByText("Yuto")).not.toBeInTheDocument();
  //   });

  //   it("clicking edit button opens Edit Member modal with the member name", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     const editBtn = screen.getByTestId("edit-btn");

  //     // Open Edit Member modal
  //     fireEvent(
  //       editBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     expect(screen.getByText("名前の編集")).toBeInTheDocument();
  //   });

  //   it("shows edit modal and let you register the updated name", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     const editBtn = screen.getByTestId("edit-btn");

  //     // Open Edit Member modal
  //     fireEvent(
  //       editBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     expect(screen.getByText("Yuto")).toBeInTheDocument();

  //     const textEditField = screen.getByRole("textbox");
  //     fireEvent.change(textEditField, { target: { value: "Taka" } });

  //     const submitEditBtn = screen.getByTestId("submit-edit-btn");

  //     // Close Edit Member modal
  //     fireEvent(
  //       submitEditBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     expect(screen.getByText("Taka")).toBeInTheDocument();
  //   });

  //   it("close edit modal without updating", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     const editBtn = screen.getByTestId("edit-btn");

  //     // Open Edit Member modal
  //     fireEvent(
  //       editBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     const textEditField = screen.getByRole("textbox");
  //     fireEvent.change(textEditField, { target: { value: "Taka" } });
  //     const closeBtn = screen.getByTestId("cancel-edit-btn");

  //     // Close Edit Member modal
  //     fireEvent(
  //       closeBtn,
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     expect(screen.getByText("Yuto")).toBeInTheDocument();
  //   });

  //   it("does not render alert at first", () => {
  //     render(<InputPercentage />);
  //     expect(screen.queryByRole("alert")).toBeFalsy();
  //   });

  //   it("renders MyAlert component after adding a new member", () => {
  //     render(<InputPercentage />);
  //     // Type on TextField component using fireEvent
  //     const textField = screen.getByRole("textbox", {
  //       name: /メンバーを追加/i
  //     });
  //     fireEvent.change(textField, { target: { value: "Yuto" } });

  //     // Click add button
  //     fireEvent(
  //       screen.getByTestId("add-member-btn"),
  //       new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );

  //     expect(screen.getByText(/メンバーを追加しました！/i)).toBeInTheDocument();
  //   });

  //   it("Shows 'メンバー追加' on the title", () => {
  //     render(<InputPercentage />);
  //     const header = screen.getByRole("heading", {
  //       name: /メンバー追加/i,
  //     });

//     expect(header).toBeInTheDocument();
//   });
});
