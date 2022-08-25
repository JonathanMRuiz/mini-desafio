import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Form from "../components/Form";
import userEvent from "@testing-library/user-event";

test("render content", () => {
  render(<Form />);
  console.log("El formulario se renderiza correctamente");
});

test("llenando campos del formulario", () => {
  render(<Form />);
  const student = screen.getByPlaceholderText(/inserte estudiante/i);
  const career = screen.getByPlaceholderText(/inserte carrera/i);
  const hobbie = screen.getByPlaceholderText(/inserte hobbie/i);
  const btnSubmit = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(student, "Jonathan");
  userEvent.type(career, "Frontend");
  userEvent.type(hobbie, "LoL");
  userEvent.click(btnSubmit);

  expect(student).toBeInTheDocument();
  expect(career).toBeInTheDocument();
  expect(hobbie).toBeInTheDocument();
});
