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
  const text = screen.getByLabelText(/text/i);
  const password = screen.getByLabelText(/password/i);
  const btnSubmit = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(text, "Holaaaaa");
  userEvent.type(password, "test123");
  expect(btnSubmit).toBeEnabled();
});
