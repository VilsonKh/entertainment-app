import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Bookmarks from "./pages/Bookmarks";
import Wishlist from "./pages/Wishlist";
// import { useQueryAllVideos } from "./firebase/service";
import SearchGrid from "./components/SearchGrid/SearchGrid";
import AddButton from "./components/UI/AddButton";
import AddForm from "./components/AddForm/AddForm";
import HeaderBig from "./components/Header/HeaderBig";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { queryAllContent, queryWishlistItems } from "./firebase/service";
import Trending from "./components/Trending/Trending";
import Recommended from "./components/Recomended/Recommended";
import { Provider } from "react-redux";

const App = () => {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			// errorElement: <ErrorPage/>,
			
			children: [
				{
					path: '/', 
					element: <Home/>,
					// loader:  () => queryAllContent(),
				},
				{ 
					path: "movies", 
					element: <Movies />, 
					// loader: () => queryAllContent('movie') 
				},
				{ 
					path: "serials", 
					element: <Serials />,
					// loader: () => queryAllContent('serial')
				 },
				{ 
					path: "bookmarks", 
					element: <Bookmarks />, 
					// loader: () => queryAllContent('isBookmarked')
				},
				{
					path: 'wishlist',
					element: <Wishlist/>,
					// loader: () => queryWishlistItems()
				}
			],
		},
	]);

	return ( 

			<RouterProvider router={router} />

		
	);
};
export default App;
