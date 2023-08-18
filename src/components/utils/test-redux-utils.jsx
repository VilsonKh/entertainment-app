import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import videosReducer from "../../store/videosSlice";
import { MemoryRouter } from "react-router-dom";

export const renderWithProviders = (ui, { initialState, store = configureStore({ reducer: videosReducer, initialState }), ...renderOptions } = {}) => {
	const Wrapper = ({ children }) => {
		return (
			<MemoryRouter>
				<Provider store={store}>{children}</Provider>
			</MemoryRouter>
		);
	};

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
