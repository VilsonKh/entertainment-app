import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import Search from "../components/Search/Search";
import { useSearchDebouncer } from "../components/Search/useSearchDebouncer";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import { useForm } from "react-hook-form";
import { searchPopupState, setIsSearchPopupOpen } from "../store/videosSlice";
import { useDispatch, useSelector } from "react-redux";

const MainBoard = () => {
	const [search, setQuery] = useSearchDebouncer();
	const dispatch = useDispatch();
	const isSearchPopupActive = useSelector(searchPopupState);
	useEffect(() => {
		dispatch(search ? setIsSearchPopupOpen(true) : setIsSearchPopupOpen(false));
	}, [search]);
	return (
		<div className="container">
			<Search setInputText={setQuery} />
			<Outlet />
			{isSearchPopupActive && <SearchPopup filter={search} />}
		</div>
	);
};

export default MainBoard;
