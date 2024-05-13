import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("adds a new item to the list when the form is submitted", () => {
  const mockOnTaskFormSubmit = jest.fn();
  render(<NewTaskForm categories={["Code"]} onTaskFormSubmit={mockOnTaskFormSubmit} />);

  const textInput = screen.getByLabelText("Details");
  const categoryInput = screen.getByLabelText("Category");
  const addButton = screen.getByText("Add task");

  fireEvent.change(textInput, { target: { value: "Pass the tests" } });
  fireEvent.change(categoryInput, { target: { value: "Code" } });
  fireEvent.click(addButton);

  expect(mockOnTaskFormSubmit).toHaveBeenCalledWith({ text: "Pass the tests", category: "Code" });
});
