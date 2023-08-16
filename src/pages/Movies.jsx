import React from "react";
import VideosGrid from "../components/VideosGrid/VideosGrid";

const Movies = () => {
	return (
		<div className="movies">
			<h1 className="section-heading">Movies</h1>
			<VideosGrid filter={"movie"} />
		</div>
	);
};

export default Movies;
