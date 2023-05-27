import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";
import Recommended from "./components/Recomended/Recommended";
import Home from "./pages/Home";
import { db } from "./firebase/config";
import { collection, doc, query, where, getDocs } from "firebase/firestore";
import store from "./store/videosSlice"


const App = () => {
	return (
			<Router>
				<>
					<Header></Header>
					<Search></Search>
					<Home></Home>
				</>
			</Router>
	);
};
export default App;
