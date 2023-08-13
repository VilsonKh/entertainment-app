import React from "react";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import { useSelector } from "react-redux";
import Bookmark from "../components/UI/Bookmark";
import { useLoaderData } from "react-router-dom";

const Movies = () => {

	return (
		<div className="movies">
        <h1 className="section-heading">Movies</h1>
				<VideosGrid filter={'movie'}/>
		</div>
	);
};

export default Movies;
