import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchContent } from "../../store/thunks";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../store/thunks", () => ({
  fetchSearchContent: jest.fn(),
}));

describe("Search", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
  });

  it("should render search input", () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("Search for movies or TV serials");

    expect(searchInput).toBeInTheDocument();
  });

  it("should call setQuery when input value changes", () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("Search for movies or TV serials");

    fireEvent.change(searchInput);

    expect(mockDispatch).toHaveBeenCalled();
  });


  it("should call fetchSearchContent when search query changes", async () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText("Search for movies or TV serials");

    fireEvent.change(searchInput, { target: { value: "Test search" } });

    await waitFor(() => {
      expect(fetchSearchContent).toHaveBeenCalledWith("Test search");
    });
  });
});
