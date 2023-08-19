import { renderHook } from "@testing-library/react";
import { useSearchDebouncer } from "./useSearchDebouncer";
import { useDispatch } from "react-redux";


jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
}));

describe("useSearchDebouncer", () => {
	const mockDispatch = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		useDispatch.mockReturnValue(mockDispatch);
	});

	it("should return initial state", () => {
		const { result } = renderHook(() => useSearchDebouncer());

		const [search, setQuery] = result.current;

		expect(search).toBe("");
		expect(typeof setQuery).toBe("function");
	});
});
