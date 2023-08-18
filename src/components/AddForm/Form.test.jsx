import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";
import {renderWithProviders} from '../utils/test-redux-utils'

const mockLogin = jest.fn((email, title, category, genre, year) => {
	return Promise.resolve({ email, title, category, genre, year });
});

it("should display required error when value is invalid", async () => {
  renderWithProviders(<Form/>)

	fireEvent.submit(screen.getByRole("button"));

	expect(await screen.findAllByRole("alert")).toHaveLength(3);
	expect(mockLogin).not.toBeCalled();
});

it("should display matching error when email is invalid", async () => {
  renderWithProviders(<Form/>)

  fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
    target: {
      value: "test@test.ru"
    }
  });

  // fireEvent.input(screen.getByRole('textbox', {name: /title/i}), {
  //   target: {
  //     value: 'testTitle'
  //   }
  // });

  // fireEvent.input(screen.getByRole('textbox', {name: /year/i}), {
  //   target: {
  //     value: '2023'
  //   }
  // })

  fireEvent.submit(screen.getByRole("button"));

  expect(await screen.findAllByRole("alert")).toHaveLength(1);
  expect(mockLogin).not.toBeCalled();
  expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("test");
  // expect(screen.getByRole('textbox', {name: /title/i})).toHaveValue("testTitle");
  // expect(screen.getByRole('spinbutton', {name: /year/i})).toHaveValue("2023");
});

// it("should display min length error when password is invalid", async () => {
//   render(<App login={mockLogin} />);

//   fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
//     target: {
//       value: "test@mail.com"
//     }
//   });

//   fireEvent.input(screen.getByLabelText("password"), {
//     target: {
//       value: "pass"
//     }
//   });

//   fireEvent.submit(screen.getByRole("button"));

//   expect(await screen.findAllByRole("alert")).toHaveLength(1);
//   expect(mockLogin).not.toBeCalled();
//   expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue(
//     "test@mail.com"
//   );
//   expect(screen.getByLabelText("password")).toHaveValue("pass");
// });

// it("should not display error when value is valid", async () => {
//   render(<App login={mockLogin} />);

//   fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
//     target: {
//       value: "test@mail.com"
//     }
//   });

//   fireEvent.input(screen.getByLabelText("password"), {
//     target: {
//       value: "password"
//     }
//   });

//   fireEvent.submit(screen.getByRole("button"));

//   await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
//   expect(mockLogin).toBeCalledWith("test@mail.com", "password");
//   expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("");
//   expect(screen.getByLabelText("password")).toHaveValue("");
// });
