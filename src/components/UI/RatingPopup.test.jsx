import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import RatingPopup from "./RatingPopup";
import "@testing-library/jest-dom";

describe("RatingPopup", () => {

  it("should render the popup and allow rating selection", async () => {
    const setIsRatingPopupOpen = jest.fn();
   render(
      <RatingPopup
        thumbnail="thumbnail.jpg"
        title="Movie Title"
        setIsRatingPopupOpen={setIsRatingPopupOpen}
      />
    );

    const filmHeading = screen.getByText("Movie Title");
    const stars = screen.getAllByText("★");

    expect(filmHeading).toBeInTheDocument();

    fireEvent.mouseEnter(stars[3]); // Hover over the 4th star

    await waitFor(() => {
      const hoveredStars = screen.getAllByRole("button");
      expect(hoveredStars[3]).toHaveClass("star-on");
      //eslint-disable-next-line
      expect(hoveredStars[4]).toHaveClass("star-off");
    });

    fireEvent.click(stars[3]); // Click on the 4th star

    await waitFor(() => {
      const chosenMark = screen.getByText("4");
      expect(chosenMark).toBeInTheDocument();
    });
  });
});
