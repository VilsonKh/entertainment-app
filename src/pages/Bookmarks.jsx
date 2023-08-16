import VideosGrid from "../components/VideosGrid/VideosGrid";

const Bookmarks = () => {
	return (
		<div className="bookmarks">
			<h1 className="section-heading">Bookmarked</h1>
			<VideosGrid filter={"isBookmarked"} />
		</div>
	);
};

export default Bookmarks;
