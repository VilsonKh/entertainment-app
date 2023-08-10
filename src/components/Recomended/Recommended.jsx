import VideosGrid from "../VideosGrid/VideosGrid";
import "./Recommended.scss";

const Recommended = () => {

	return (
		<section className="recommended">
			<div className="recommended__container">
				<h1 className="section-heading">Recommended for you</h1>
				<VideosGrid filter={'isRecommended'} />
			</div>
		</section>
	);
};

export default Recommended;
