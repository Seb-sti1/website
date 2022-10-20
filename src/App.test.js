import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

process.env.PUBLIC_URL = "http://localhost";

it("renders app without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});

it("nav bar links", () => {
  render(<App />);

  const homeLink = screen.getByText("Home");

  expect(homeLink).toBeInTheDocument();
  expect(homeLink.href).toEqual(process.env.PUBLIC_URL + "/");

  const projectsLink = screen.getByText("Projects");

  expect(projectsLink).toBeInTheDocument();
  expect(projectsLink.href).toEqual(process.env.PUBLIC_URL + "/projects");

  const aboutLink = screen.getByText("About");

  expect(aboutLink).toBeInTheDocument();
  expect(aboutLink.href).toEqual(process.env.PUBLIC_URL + "/about");
});
