import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddMembers from "./AddMembers";

/**
 * Requirements
 * 1. The component must be rendered in the DOM xx
 * 2. TextField component must be rendered with a placeholder xx
 * 3. Reg Button component must be rendered xx
 * 4. AddButton component must be rendered xx
 * 5. If none of members is added, 「メンバーを登録してください」 must be displayed xx
 *    and the registration button must be disabled xx
 * 6. If any characters aren't typed, the add button must be disabled xx
 * 7. TextField component has placeholder showing 「メンバーを登録してください」 xx
 * 8. If any member is added, list the member in the member-list component xx
 * 9. The Member component has name, delete button, and edit button xx
 * 10. Clicking edit button opens Edit Member modal xx
 * 11. Clicking delete button deletes the member from the list xx
 * 12. Editing on Member modal component works
 * 13. MyStepper component is rendered with the current step xx
 * 14. Renders MyAlert component after adding a new member xx
 * 15. Shows "メンバー追加" on the title
 */

describe("AddMembers page", () => {
  it("renders correctly", () => {
    render(<AddMembers />);
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<AddMembers />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has myStepper component with the current step", () => {
    render(<AddMembers />);
    const AddMembersStep = screen.getByTestId("合計金額");
    // Only inactive steps have "Mui-disabled" class
    expect(AddMembersStep).not.toHaveClass("Mui-disabled");

    const addMembersStep = screen.getByTestId("メンバー追加");
    expect(addMembersStep).not.toHaveClass("Mui-disabled");
  });

  it("has a textField component with a placeholder", () => {
    render(<AddMembers />);
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    expect(textField).toBeInTheDocument();
  });

  it("has メンバーを登録してください with the disabled registration button and the disabled add button if none of members is added", () => {
    render(<AddMembers />);
    const text = screen.getByText("メンバーを登録してください");
    expect(text).toBeInTheDocument();

    // Make sure the registration button is disabled
    expect(screen.getByRole("button", { name: /登録/i })).toBeDisabled();

    // Make sure the add button is disabled
    expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
  });

  it("has a button component", () => {
    render(<AddMembers />);
    const regBtn = screen.getByTestId("reg-btn");
    expect(regBtn).toBeInTheDocument();
  });

  it("has a AddButton component", () => {
    render(<AddMembers />);
    const addButton = screen.getByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });

  it("has a Member component with name, delete button, and edit button", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // Shows the member in the list
    const memberName = screen.getByText("Yuto");
    const deleteBtn = screen.getByTestId("delete-btn");
    const editBtn = screen.getByTestId("edit-btn");
    // Shows name in the line
    expect(memberName).toBeInTheDocument();
    // Shows delete button
    expect(deleteBtn).toBeInTheDocument();
    // Shows edit button
    expect(editBtn).toBeInTheDocument();
  });

  it("clicking delete button deletes the member from the list", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const deleteBtn = screen.getByTestId("delete-btn");

    // Remove the member from the list
    fireEvent(
      deleteBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    // The name of the added member is not displayed
    expect(screen.queryByText("Yuto")).not.toBeInTheDocument();
  });

  it("clicking edit button opens Edit Member modal with the member name", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const editBtn = screen.getByTestId("edit-btn");

    // Open Edit Member modal
    fireEvent(
      editBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByRole("modal")).toBeInTheDocument();
  });

  it("shows edit modal and let you register the updated name", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const editBtn = screen.getByTestId("edit-btn");

    // Open Edit Member modal
    fireEvent(
      editBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Yuto")).toBeInTheDocument();

    const textEditField = screen.getByPlaceholderText("メンバーを編集してください");
    fireEvent.change(textEditField, { target: { value: "Taka" } });
    expect(screen.getByText("Taka")).toBeInTheDocument();

    const submitEditBtn = screen.getByTestId("submit-edit-btn");

    // Close Edit Member modal
    fireEvent(
      submitEditBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Taka")).toBeInTheDocument();
  });

  it("close edit modal without updating", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    const editBtn = screen.getByTestId("edit-btn");

    // Open Edit Member modal
    fireEvent(
      editBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Yuto")).toBeInTheDocument();

    const textEditField = screen.getByPlaceholderText("メンバーを編集してください");
    fireEvent.change(textEditField, { target: { value: "Taka" } });
    expect(screen.getByText("Taka")).toBeInTheDocument();

    const closeBtn = screen.getByTestId("close-btn");

    // Close Edit Member modal
    fireEvent(
      closeBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Yuto")).toBeInTheDocument();
  });

  it("does not render alert at first", () => {
    render(<AddMembers />);
    expect(screen.queryByRole("alert")).toBeFalsy();
  });

  it("renders MyAlert component after adding a new member", () => {
    render(<AddMembers />);
    // Type on TextField component using fireEvent
    const textField = screen.getByPlaceholderText("メンバーを登録してください");
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /登録/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("メンバーを追加しました！")).toBeInTheDocument();
  });

  it("Shows 'メンバー追加' on the title", () => {
    render(<AddMembers />);
    const header = screen.getByRole("heading", {
      name: /メンバー追加/i,
    });

    expect(header).toBeInTheDocument();
  });
});
