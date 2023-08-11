import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { useCallback, useMemo, useState } from "react";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import MainBoard from "./MainBoard";
import AddButton from "../components/UI/AddButton";
import { useSelector } from "react-redux";
import { modalState } from "../store/videosSlice";
import AddForm from "../components/AddForm/AddForm";

const RootLayout = () => {
	const isModalOpen = useSelector(modalState)
	return (
		<>
			<Header/>
			<MainBoard/>
			<AddButton/>
			{isModalOpen && <AddForm/>}
		</>
	);
};

export default RootLayout;
