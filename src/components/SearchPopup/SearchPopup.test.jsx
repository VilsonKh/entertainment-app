import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPopup from "./SearchPopup";
import { useDispatch, useSelector } from "react-redux";
import { MemoryRouter } from "react-router";

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("SearchPopup", () => {
	const mockDispatch = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		useDispatch.mockReturnValue(mockDispatch);
		useSelector.mockReturnValue([]);
	});

	it("should render search results", () => {
		useSelector.mockReturnValue([
			{ id: 1, title: "Movie 1", thumbnail: "thumbnail1.jpg", rating: 8.5, category: "Action", year: 2023 },
			{ id: 2, title: "Movie 2", thumbnail: "thumbnail2.jpg", rating: 9.2, category: "Drama", year: 2022 },
		]);

		render(
			<MemoryRouter>
				<SearchPopup />
			</MemoryRouter>
		);

		expect(screen.getByText("Movie 1")).toBeInTheDocument();
		expect(screen.getByText("8.5")).toBeInTheDocument();
		expect(screen.getByText("Action, 2023")).toBeInTheDocument();
		expect(screen.getByText("Movie 2")).toBeInTheDocument();
		expect(screen.getByText("9.2")).toBeInTheDocument();
		expect(screen.getByText("Drama, 2022")).toBeInTheDocument();
	});

	it("should call onItemClick when item is clicked", () => {
	  useSelector.mockReturnValue([{ id: 1, title: "Movie 1", thumbnail: "thumbnail1.jpg", rating: 8.5, category: "Action", year: 2023 }]);
    render(
			<MemoryRouter>
				<SearchPopup />
			</MemoryRouter>
		);

	  fireEvent.click(screen.getByText("Movie 1"));

	  expect(mockDispatch).toHaveBeenCalledWith({ type: "videos/cleanCurrentItemContent" });
	  expect(mockDispatch).toHaveBeenCalledWith({ type: "videos/setIsSearchPopupOpen", payload: false });
	});

	it("should render 'no result' image when no data", () => {
	  useSelector.mockReturnValue([]);

    render(
			<MemoryRouter>
				<SearchPopup />
			</MemoryRouter>
		);

	  const noResultImage = screen.getByAltText("no-result");

	  expect(noResultImage).toBeInTheDocument();
	});
});
