import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-redux-utils";
import "@testing-library/jest-dom";
import SearchPopup from "./SearchPopup";

test('Компонент должен рендериться корректно', () => {
  renderWithProviders(<SearchPopup/>)

  const popup = screen.getByTestId('searchPopup');
  expect(popup).toBeInTheDocument()
})