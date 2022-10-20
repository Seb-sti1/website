import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

it("renders home page", () => {
  const div = document.createElement("div");
  render(<Home />, div);
});
