import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
//1.wrapear form con provider

//2.Renderizar app en vez de solo form

test("render app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const titleHome = screen.getByRole("heading", {
    name: /challenge de jonathan ruiz/i,
  });

  const routeForm = screen.getByRole("link", {
    name: /formulario/i,
  });

  expect(titleHome).toBeInTheDocument();
});

//render(<FormPage />);
// const student = screen.getByPlaceholderText(/inserte estudiante/i);
// const age = screen.getByPlaceholderText(/ingrese edad/i);
// const career = screen.getByPlaceholderText(/inserte carrera/i);
// const hobbie = screen.getByPlaceholderText(/inserte hobbie/i);
// const btnSubmit = screen.getByRole("button", {
//   name: /submit/i,
// });
// userEvent.type(student, "Jonathan");
// userEvent.type(age, 20);
// userEvent.type(career, "Frontend");
// userEvent.type(hobbie, "LoL");
// userEvent.click(btnSubmit);
