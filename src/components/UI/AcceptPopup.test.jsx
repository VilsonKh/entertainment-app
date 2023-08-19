import React from "react";
import { render, screen } from "@testing-library/react";
import AcceptPopup from "./AcceptPopup";
import "@testing-library/jest-dom";

describe("AcceptPopup", () => {
  it("should render the message correctly", () => {
    render(<AcceptPopup text="review" />);
    const messageElement = screen.getByText("Your review was submited!");
    expect(messageElement).toBeInTheDocument();
  });

  it("should render the icon", () => {
    render(<AcceptPopup text="comment" />);
    const iconElement = screen.getByAltText("accept-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
