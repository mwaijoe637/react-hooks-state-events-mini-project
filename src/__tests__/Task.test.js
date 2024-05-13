import React from "react";
import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task task={{ text: "text!", category: "category!" }} />);
  expect(screen.queryByText("text!")).toBeInTheDocument(); 
});

test("displays the task category", () => {
  render(<Task task={{ text: "text!", category: "category!" }} />);
  expect(screen.queryByText("category!")).toBeInTheDocument(); 
});
