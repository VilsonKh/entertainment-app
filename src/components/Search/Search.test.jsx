import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-redux-utils";
import "@testing-library/jest-dom";
import Search from "./Search";

test('Компонент должен рендериться корректно', () => {
  renderWithProviders(<Search/>)

  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})