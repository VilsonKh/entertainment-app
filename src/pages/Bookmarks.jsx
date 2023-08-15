import React from "react";
import { useSelector } from "react-redux";
import Bookmark from "../components/UI/Bookmark";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import { useLoaderData } from "react-router-dom";

const Bookmarks = () => {
	return (
		<div className="bookmarks">
			<h1 className="section-heading">Bookmarked</h1>
			<VideosGrid filter={"isBookmarked"} />
		</div>
	);
};

export default Bookmarks;
