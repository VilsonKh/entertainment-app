import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Bookmark from "./Bookmark";
import { updateBookmark } from "../../firebase/service";
import "@testing-library/jest-dom";

jest.mock("../../firebase/service", () => ({
  updateBookmark: jest.fn(),
}));

describe("Bookmark", () => {
  it("should render the bookmark icon", () => {
    render(<Bookmark isBookmarked="true" videoId="1" />);
    const bookmarkIcon = screen.getByTestId("bookmark-icon");
    expect(bookmarkIcon).toBeInTheDocument();
  });

  it("should call updateBookmark and change state on click", () => {
    render(<Bookmark isBookmarked="false" videoId="2" />);
    const bookmarkContainer = screen.getByTestId("bookmark-container");

    fireEvent.click(bookmarkContainer);

    expect(updateBookmark).toHaveBeenCalledWith("2", "true");
    expect(bookmarkContainer).toBeInTheDocument();
  });
});
