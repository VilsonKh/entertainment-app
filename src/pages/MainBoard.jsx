import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search/Search";
import { useSearchDebouncer } from "../components/Search/useSearchDebouncer";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import { searchPopupState, setIsSearchPopupOpen } from "../store/videosSlice";
import { useDispatch, useSelector } from "react-redux";

const MainBoard = () => {
	const [search, setQuery] = useSearchDebouncer();
	const dispatch = useDispatch();
	const isSearchPopupActive = useSelector(searchPopupState);
	useEffect(() => {
		dispatch(search ? setIsSearchPopupOpen(true) : setIsSearchPopupOpen(false));
		// eslint-disable-next-line
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
