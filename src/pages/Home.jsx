import React from "react";
import Trending from "../components/Trending/Trending";
import Recommended from "../components/Recomended/Recommended";
import Search from "../components/Search/Search";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Trending />
			<Recommended />
		</>
	);
};

export default Home;
