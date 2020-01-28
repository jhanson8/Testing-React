/*jshint esversion: 9 */

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters.js";

// await wait(() => expect(getAllByText(/asdfas/gi)));

// jest.mock("../api")

test("Test Next and Previous buttons", async () => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  // Click button
  fireEvent.click(getByText("Next"));
  fireEvent.click(getByText("Previous"));
});

test("Test rendered list of characters", async () => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  //render a list of characters
});
