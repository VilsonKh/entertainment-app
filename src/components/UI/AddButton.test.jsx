import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import AddButton from "./AddButton";
import "@testing-library/jest-dom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("AddButton", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
  });

  it("should render the button correctly", () => {
    render(<AddButton />);
    const addButton = screen.getByText("+");
    expect(addButton).toBeInTheDocument();
  });

  it("should dispatch setModalState action on click", () => {
    render(<AddButton />);
    const addButton = screen.getByText("+");

    fireEvent.click(addButton);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
