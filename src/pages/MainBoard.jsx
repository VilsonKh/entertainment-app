import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import Search from "../components/Search/Search";
import { useSearchDebouncer } from "../components/Search/useSearchDebouncer";
import SearchPopup from "../components/SearchPopup/SearchPopup";

const MainBoard = () => {
	const [search, setQuery] = useSearchDebouncer();

	return (
		<div className="container">
			<Search setInputText={setQuery} />
      <Outlet /> 
			{search && <SearchPopup filter={search}/>}
		</div>
	);
  // return (
  //   <div className="container">
  //     <Search setInputText={setQuery}/>
  //     <Outlet/>
  //   </div>
  // )
};

export default MainBoard;
