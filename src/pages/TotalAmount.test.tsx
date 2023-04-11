import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
  afterEach(() => cleanup());

  it("doesn't allow user to click Button when Input is empty", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    expect(screen.getByRole("button", { name: /Submit/i })).toBeDisabled();
  });

  it("renders correctly", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
  });

  it("takes a snapshot", () => {
    const { asFragment } = render(
      <Router>
        <TotalAmount />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders all steps in the Stepper component", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    expect(screen.getByTestId("total amount")).toBeInTheDocument();
    expect(screen.getByTestId("members")).toBeInTheDocument();
    expect(screen.getByTestId("ratio")).toBeInTheDocument();
    expect(screen.getByTestId("result")).toBeInTheDocument();
  });

  it("renders an Input component with a placeholder", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    const inputElem = screen.getByLabelText("Enter the total cost");
    expect(inputElem).toBeInTheDocument();
  });

  it("does not render alert at first", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    expect(screen.queryByRole("alert")).toBeFalsy();
  });

  it("renders an Alert component after registration", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );

    // Type cost in the textbox field
    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: /Enter the total cost/i,
      }),
      { target: { value: "500" } }
    );

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /Submit/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Successfully completed registration!!")).toBeInTheDocument();
  });

  it("renders a Button component", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    const buttonElem = screen.getByRole("spinbutton", {
      name: /Enter the total cost/i,
    });
    expect(buttonElem).toBeInTheDocument();
  });

  it("sets the Active step on Stepper to be 0", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );
    const stepperElem = screen.getByTestId("total amount");

    // Only inactive steps have "Mui-disabled" class
    expect(stepperElem).not.toHaveClass("Mui-disabled");
  });

  it("saves cost on session storage when Button is clicked", () => {
    render(
      <Router>
        <TotalAmount />
      </Router>
    );

    // Type cost in the textbox field
    fireEvent.change(
      screen.getByRole("spinbutton", {
        name: /Enter the total cost/i,
      }),
      { target: { value: "500" } }
    );

    // Click registration button
    fireEvent(
      screen.getByRole("button", { name: /Submit/i }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(window.sessionStorage.getItem("nomikan-storage")).toEqual(
      "{\"state\":{\"cost\":\"500\",\"members\":[]},\"version\":0}"
    );
  });
});
