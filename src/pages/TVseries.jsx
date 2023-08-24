import VideosGrid from "../components/VideosGrid/VideosGrid";

const TVseries = () => {
	return (
		<div className="serials">
			<h1 className="section-heading">TV Series</h1>
			<VideosGrid filter={"TV Series"} />
		</div>
	);
};

export default TVseries;
