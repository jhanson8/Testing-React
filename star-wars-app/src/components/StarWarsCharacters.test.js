/*jshint esversion: 9 */

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api";

jest.mock("../api");

test("render api list", async () => {
  const testData = {
    count: 80,
    next: "nextUrl",
    previous: "previousUrl",
    results: [{ name: "luke", url: "url" }]
  };
  mockGetData.mockResolvedValueOnce(testData);
  const { getByText } = render(<StarWarsCharacters />);
  const nextButton = getByText(/next/i);
  fireEvent.click(nextButton);
  await wait(() => {
    expect(getByText(/luke/i)).toBeTruthy();
    expect(mockGetData).toHaveBeenCalledTimes(1);
  });
});
