import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CollapseText from "./CollapseText";

describe("CollapseText", () => {
  const name = "John Doe";
  const longComment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque dolorem, necessitatibus sint sed libero, quisquam dicta et omnis temporibus dolore dolor repellat accusamus blanditiis vel mollitia culpa ipsa ad.Recusandae, reprehenderit maxime. Corrupti, tempore? Deleniti harum ipsum nesciunt doloribus excepturi repellat fuga repudiandae saepe eius quam ad, maiores nam exercitationem obcaecati omnis. Eligendi rerum perferendis nam quisquam mollitia facilis? Ex, aspernatur ducimus accusamus esse assumenda vitae fugit id repellat reprehenderit qui provident dolorum sunt in architecto nemo ab voluptates nihil, ullam explicabo fugiat porro at eligendi voluptatem dicta. Eum! Quod at quo qui voluptates nulla modi iure, officiis mollitia quae aperiam nostrum atque facere consectetur beatae nemo quas sint laborum, eius autem voluptas quisquam odit delectus saepe tenetur. Exercitationem."

  const shortComment = "Short comment.";

  it("should render name and short comment without 'Show more' button", () => {
    render(<CollapseText name={name} commentText={shortComment} />);
    
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(shortComment)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render name and long comment with 'Show more' button", () => {
    render(<CollapseText name={name} commentText={longComment} />);
    
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(longComment)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });


  it("should have 'open' class on collapse icon when text is expanded", () => {
    render(<CollapseText name={name} commentText={longComment} />);
    const showMoreButton = screen.getByText("Show more");
    const collapseIcon = screen.getByText("˅");
    
    fireEvent.click(showMoreButton);
    expect(collapseIcon).toHaveClass("open");
    
    fireEvent.click(showMoreButton);
    expect(collapseIcon).not.toHaveClass("open");
  });
});
