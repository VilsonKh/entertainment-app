import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Bookmarks from "./pages/Bookmarks";
import Wishlist from "./pages/Wishlist";
import { useQueryAllVideos } from "./firebase/service";
import SearchGrid from "./components/SearchGrid/SearchGrid";
import AddButton from "./components/UI/AddButton";
import AddForm from "./components/AddForm/AddForm";
import HeaderBig from "./components/Header/HeaderBig";

const App = () => {

  useQueryAllVideos()

	const [inputValue, setInputValue] = useState('')

	return (
			<Router>
				<div className="gridSys">
					{window.screen.width > "1440" ? <HeaderBig/> : <Header/>}
					<Search setInputValue={setInputValue} inputValue={inputValue}></Search>
					{inputValue ? <div className="container"><SearchGrid inputValue={inputValue}/></div> : <Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/movies" element={<Movies/>}/>
						<Route path="/serials" element={<Serials/>}/>
						<Route path="/bookmarks" element={<Bookmarks/>}/>
						<Route path="/wishlist" element={<Wishlist/>}/>
						<Route path="/add" element={<AddForm/>}/>
					</Routes>	}
						<AddButton />
				</div>
			</Router>
	);
};
export default App;
