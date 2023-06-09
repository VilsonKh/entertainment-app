import "./TrendingSlider.scss";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import { useSelector } from "react-redux";
import Bookmark from "../UI/Bookmark";
import { useQueryAllVideos } from "../../firebase/service";
import Preloader from "../Preloader/Preloader";

const TrendingSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		draggable: true,
		swipe: true,
		arrows: false,
		variableWidth: true,
	};

	useQueryAllVideos();

	const movies = useSelector((state) => state.videos.movies);
	const serials = useSelector((state) => state.videos.serials);
	const allVideos = [...movies, ...serials];

	// const allVideos = useSelector((state) => state.videos.allVideos)
	const isPending = useSelector((state) => state.state.isPending);
	if (isPending) {
		return <Preloader />;
	}

	return (
		<Slider {...settings}>
			{allVideos.map((video) => {
				if (video.isTrending) {
					const { thumbnail, year, category, rating, title, id } = video;
					return (
						<div key={id} className="slider-item">
							<img className="movie-thumb" src={thumbnail} alt="" />
							<Bookmark isBookmarked={video.isBookmarked} videoId={video.id} category={video.category} />
							<div className="trending__caption">
								<div className="caption__info trending__info">
									<div className="caption__topInfo">
										<p className="caption__year">{year}</p>
										<div className="caption__category-container">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
													fill="white-"
												/>
											</svg>
											<p className="caption__category">{category}</p>
										</div>
									</div>
								</div>
								<div className="caption__title-container">
									<p className="caption__title">{title}</p>
									<p className="caption__rating">{rating}</p>
								</div>
							</div>
						</div>
					);
				}
				return false;
			})}
		</Slider>
	);
};

export default TrendingSlider;
