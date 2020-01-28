import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api";

test("Test Next and Previous buttons", async () => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  // Click button
  fireEvent.click(getByText("Next"));
  fireEvent.click(getByText("Previous"));
});

test("Test Next and Previous buttons", async () => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  // Click button
  fireEvent.click(getByText("Next"));
  fireEvent.click(getByText("Previous"));
});

test("render list", () => {
  const { getByText, getByDisplayValue } = render(<StarWarsCharacters />);

  const one = getByDisplayValue(character.name);

  // const one = getByText(/Luke Skywalker/i);
  const two = getByText(/C-3PO/i);
  const three = getByText(/R2-D2/i);
  const four = getByText(/Darth Vader/i);
  const five = getByText(/Leia Organa/i);
  const six = getByText(/Owen Lars/i);
  const seven = getByText(/Beru Whitesun/i);
  const eight = getByText(/R5-D4/i);
  const nine = getByText(/Biggs Darklighter/i);
  const ten = getByText(/Obi-Wan Kenobi/i);
});
