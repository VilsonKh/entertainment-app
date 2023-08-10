import { useLoaderData } from "react-router-dom";
import TrendingSlider from "../TrendingSlider/TrendingSlider";
import "./Trending.scss";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Trending = () => {
	return (
		<div className="trending">
			<div className="trending__container">
				<h1 className="section-heading">Trending</h1>
				<TrendingSlider />
			</div>
		</div>
	);
};

export default Trending;
