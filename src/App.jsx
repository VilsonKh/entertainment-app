import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";

const App = () => {
	return (
		<Router>
			<Header></Header>
			<Search></Search>
		</Router>
	);
};
export default App;
