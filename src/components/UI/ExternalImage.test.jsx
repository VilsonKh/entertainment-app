import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ExternalImage from "./ExternalImage";
import "@testing-library/jest-dom";

describe("ExternalImage", () => {


  it("should render with opacity class", async () => {
    const {container} = render(<ExternalImage thumbnail="thumbnail.jpg" opacity={true} />);
    //eslint-disable-next-line
    const image = container.querySelector(".movie-thumb.opacity");
    expect(image).toBeInTheDocument();
  });
});
