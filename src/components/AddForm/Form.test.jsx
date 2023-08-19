import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/test-redux-utils";


it("should display matching error when email is invalid", async () => {
	renderWithProviders(<Form />);

	fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
		target: {
			value: "test",
		},
	});

	fireEvent.input(screen.getByRole("textbox", { name: /title/i }), {
		target: {
			value: "testTitle",
		},
	});

	fireEvent.input(screen.getByRole("spinbutton", { name: /year/i }), {
		target: {
			value: 2023,
		},
	});

	fireEvent.submit(screen.getByRole("button"));

	expect(await screen.findAllByText("invalid email")).toHaveLength(1);
	expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("test");
	expect(screen.getByRole("textbox", { name: /title/i })).toHaveValue("testTitle");
	expect(screen.getByRole("spinbutton", { name: /year/i })).toHaveValue(2023);
});

it("should not display error when value is valid", async () => {
	renderWithProviders(<Form />);

	fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
		target: {
			value: "test@mail.com",
		},
	});

	fireEvent.input(screen.getByRole("textbox", { name: /title/i }), {
		target: {
			value: "testTitle",
		},
	});

	fireEvent.input(screen.getByRole("spinbutton", { name: /year/i }), {
		target: {
			value: 2023,
		},
	});

	fireEvent.submit(screen.getByRole("button"));

	await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
});
