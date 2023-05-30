import VideosGrid from "../VideosGrid/VideosGrid";
import "./Recommended.scss";

const Recommended = () => {

	return (
		<section className="recommended">
			<div className="container">
				<h1 className="recommended__heading">Recommended for you</h1>
				<VideosGrid />
			</div>
		</section>
	);
};

export default Recommended;
