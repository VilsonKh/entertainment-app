import TrendingSlider from "../TrendingSlider/TrendingSlider";
import "./Trending.scss";

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
