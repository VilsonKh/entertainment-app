import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import Search from "../components/Search/Search";
import { useSearchDebouncer } from "../components/Search/useSearchDebouncer";

const MainBoard = () => {
	const [search, setQuery] = useSearchDebouncer();

	return (
		<div className="container">
			<Search setInputText={setQuery} />
			{search === null || search.length === 0 ? <Outlet /> : <VideosGrid filter={search} />}
		</div>
	);
};

export default MainBoard;
