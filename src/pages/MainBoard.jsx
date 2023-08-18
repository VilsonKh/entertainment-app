import { Outlet } from "react-router-dom";
import Search from "../components/Search/Search";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import { searchPopupState } from "../store/videosSlice";
import { useSelector } from "react-redux";

const MainBoard = () => {
	const isSearchPopupActive = useSelector(searchPopupState);

	return (
		<div className="container">
			<Search />
			<Outlet />
			{isSearchPopupActive && <SearchPopup/>}
		</div>
	);
};

export default MainBoard;
