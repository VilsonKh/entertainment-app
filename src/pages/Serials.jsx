import React from "react";
import VideosGrid from "../components/VideosGrid/VideosGrid";

const Serials = () => {
	return (
		<div className="serials">
			<h1 className="section-heading">Serials</h1>
			<VideosGrid filter={"serial"} />
		</div>
	);
};

export default Serials;
