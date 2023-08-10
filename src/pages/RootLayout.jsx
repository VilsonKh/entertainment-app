import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const RootLayout = () => {

	return (
		<>
			<Header />
			<div className="container">
				<Search />
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
