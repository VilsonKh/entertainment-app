import { screen } from "@testing-library/react";
import Recommended from "./Recommended";
import { renderWithProviders } from "../utils/test-redux-utils";
import "@testing-library/jest-dom";

test("Компонент Recommended рендерится корректно", () => {
	const observe = jest.fn();
	const unobserve = jest.fn();

	window.IntersectionObserver = jest.fn(() => ({
		observe,
		unobserve,
	}));

	renderWithProviders(<Recommended />);

	const heading = screen.getByRole("heading");
	expect(heading).toBeInTheDocument();
});
