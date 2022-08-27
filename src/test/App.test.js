import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, createMemoryHistory } from "react-router-dom";

test("integral test App", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const titleHome = screen.getByRole("heading", {
    name: /challenge de jonathan ruiz/i,
  });

  expect(titleHome).toBeInTheDocument();

  const routeTable = screen.getByRole("link", { name: /tabla/i });

  userEvent.click(routeTable);

  const tableRows = screen.getAllByRole("row");

  expect(tableRows).toHaveLength(4);

  const routeForm = screen.getByRole("link", {
    name: /formulario/i,
  });

  userEvent.click(routeForm);

  const studentField = screen.getByRole("textbox", {
    name: /estudiante/i,
  });

  userEvent.type(studentField, "Jonathan");

  expect(studentField).toHaveValue("Jonathan");

  // const ageField = screen.getByRole("spinbutton", {
  //   name: /edad/i,
  // });

  // userEvent.type(ageField, "26");

  // expect(ageField.value).toBe("26");

  const careerField = screen.getByRole("textbox", {
    name: /carrera/i,
  });
  userEvent.type(careerField, "Frontend");

  expect(careerField).toHaveValue("Frontend");

  const hobbieField = screen.getByRole("textbox", {
    name: /hobbie/i,
  });
  userEvent.type(hobbieField, "LoL");

  expect(hobbieField).toHaveValue("LoL");

  const submit = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.click(submit);

  expect(tableRows).toHaveLength(5);
});
