import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-redux-utils";
import "@testing-library/jest-dom";
import Trending from "./Trending";


// jest.mock('swiper/react', () => ({
//   __esModule: true,
//   Swiper: ({ children }) => <div>{children}</div>,
//   SwiperSlide: ({ children }) => <div>{children}</div>,
// }));

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}))

test('Компонент должен рендериться корректно', () => {
  

  renderWithProviders(<Trending/>)

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument()
})
