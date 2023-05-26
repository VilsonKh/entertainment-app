import example1 from "../../assets/forrestGump.webp";
import example2 from "../../assets/movieThumb.webp";
import movieIcon from "../../assets/moviesTab.svg";
import { useSelector, useDispatch} from "react-redux";
import videosSlice from "../../store/videosSlice";


import "./RecommendedGrid.scss";

const RecommendedGrid = () => {

//  const dispatch = useDispatch()

  // useEffect
  // dispatch(videosSlice.actions.getAllVideos())


	return (
		<>
			<div className="row row-cols-3 row-cols-md-4 row-cols-xxl-5 g-4">
				<div className="col recommended__item">
					<div className="recommended__img-container">
						<img className="recommended__img" src={example1} alt="" />
					</div>
					<div className="recommended__caption">
						<div className="recommended__info">
							<p className="recommended__year">2019</p>
							<div className="recommended__category-container align-items-center">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
										fill="white"
									/>
								</svg>

								<p className="recommended__category">Movie</p>
							</div>
							<p className="caption__rating">9.0</p>
						</div>
						<div className="recommended__title">Forrest Gump</div>
					</div>
					<div className="trending__bookmark-container recommended-bookmark">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
							<path
								d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
								stroke="white"
								stroke-width="1.5"
							/>
						</svg>
					</div>
				</div>
        
			</div>
		</>
	);
};

export default RecommendedGrid;
