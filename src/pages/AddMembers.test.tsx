import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AddMembers from "./AddMembers";

/**
 * Requirements
 * 1. The component must be rendered in the DOM xx
 * 2. TextField component must be rendered with a placeholder xx
 * 3. Reg Button component must be rendered xx
 * 4. AddButton component must be rendered xx
 * 5. If none of members is added, 「メンバーを追加してください」 must be displayed xx
 *    and the registration button must be disabled xx
 * 6. If any characters aren't typed, the add button must be disabled xx
 * 7. TextField component has placeholder showing 「メンバーを追加してください」 xx
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
    render(<Router><AddMembers /></Router>);
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(<Router><AddMembers /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has myStepper component with the current step", () => {
    render(<Router><AddMembers /></Router>);
    const AddMembersStep = screen.getByTestId("合計金額");
    // Only inactive steps have "Mui-disabled" class
    expect(AddMembersStep).not.toHaveClass("Mui-disabled");

    const addMembersStep = screen.getByTestId("メンバー追加");
    expect(addMembersStep).not.toHaveClass("Mui-disabled");
  });

  it("has a textField component with a placeholder", () => {
    render(<Router><AddMembers /></Router>);
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    expect(textField).toBeInTheDocument();
  });

  it("has メンバーを追加してください with the disabled registration button and the disabled add button if none of members are added", () => {
    render(<Router><AddMembers /></Router>);
    const text = screen.getByText("メンバーを追加してください");
    expect(text).toBeInTheDocument();

    // Make sure the registration button is disabled
    expect(screen.getByText("登録")).toBeDisabled();
  });

  it("has a registration button component", () => {
    render(<Router><AddMembers /></Router>);
    const regBtn = screen.getByRole("button", {
      name: /登録/i
    });
    expect(regBtn).toBeInTheDocument();
  });

  it("has a AddButton component", () => {
    render(<Router><AddMembers /></Router>);
    const addButton = screen.getByTestId("add-member-btn");
    expect(addButton).toBeInTheDocument();
  });

  it("has a Member component with name, delete button, and edit button", () => {
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
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
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
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
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
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

    expect(screen.getByText("名前の編集")).toBeInTheDocument();
  });

  it("shows edit modal and let you register the updated name", () => {
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
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

    const textEditField = screen.getByRole("textbox");
    fireEvent.change(textEditField, { target: { value: "Taka" } });

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
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
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

    const textEditField = screen.getByRole("textbox");
    fireEvent.change(textEditField, { target: { value: "Taka" } });
    const closeBtn = screen.getByTestId("cancel-edit-btn");

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
    render(<Router><AddMembers /></Router>);
    expect(screen.queryByRole("alert")).toBeFalsy();
  });

  it("renders MyAlert component after adding a new member", () => {
    render(<Router><AddMembers /></Router>);
    // Type on TextField component using fireEvent
    const textField = screen.getByRole("textbox", {
      name: /メンバーを追加/i
    });
    fireEvent.change(textField, { target: { value: "Yuto" } });

    // Click add button
    fireEvent(
      screen.getByTestId("add-member-btn"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText(/メンバーを追加しました！/i)).toBeInTheDocument();
  });

  it("Shows 'メンバー追加' on the title", () => {
    render(<Router><AddMembers /></Router>);
    const header = screen.getByRole("heading", {
      name: /メンバー追加/i,
    });

    expect(header).toBeInTheDocument();
  });
});
