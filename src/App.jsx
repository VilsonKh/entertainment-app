import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";
import Recommended from "./components/Recomended/Recommended";
import Home from "./pages/Home";
import { db } from "./firebase/config";
import store from "./store/videosSlice"
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Bookmarks from "./pages/Bookmarks";
import Wishlist from "./pages/Wishlist";

const App = () => {
	return (
			<Router>
				<>
					<Header></Header>
					<Search></Search>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/movies" element={<Movies/>}/>
						<Route path="/serials" element={<Serials/>}/>
						<Route path="/bookmarks" element={<Bookmarks/>}/>
						<Route path="/wishlist" element={<Wishlist/>}/>
					</Routes>	
					
				</>
			</Router>
	);
};
export default App;
