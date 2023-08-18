import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

test("Header рендерит корректное количество ссылок", () => {
	render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);

	const links = screen.getAllByRole("link");
	expect(links).toHaveLength(5);
});

