import "./TrendingSlider.scss";
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Bookmark from "../UI/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { cleanCurrentItemContent, trendingStatus, trendingVideo } from "../../store/videosSlice";
import { fetchTrendingVideos } from "../../store/thunks";
import { useEffect } from "react";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate } from "react-router-dom";
import movieTab from "../../assets/moviesTab.svg";
import serialTab from "../../assets/serialsTab-white.svg";
import { Skeleton } from "@mui/material";

const TrendingSlider = () => {
	SwiperCore.use([Autoplay])
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTrendingVideos());
	}, [dispatch]);

	const data = useSelector(trendingVideo);
	const queryStatus = useSelector(trendingStatus);

	const navigate = useNavigate();

	const onItemClick = (e, id) => {
		if (e.target.className === "movie-thumb opacity") {
			navigate(`/card/${id}`);
			dispatch(cleanCurrentItemContent());
		}
	};

	const sliderItems = data.map((content, i) => {
		const { year, category, rating, title, id, isBookmarked, thumbnail } = content ?? {};
		return (
			<SwiperSlide key={i} className="trending__slide" onClick={(e) => onItemClick(e, id)}>
				{queryStatus === 'loading' ? <Skeleton variant="rounded" style={{paddingTop: '140%', background: '#363f54'}}/> :
					<>
						<ExternalImage thumbnail={thumbnail} opacity={true} />
						<Bookmark isBookmarked={isBookmarked} videoId={id} />
						<div className="trending__caption">
							<div className="caption__info trending__info">
								<div className="caption__topInfo">
									<p className="caption__year">{year}</p>
									<div className="caption__category-container">
										{category === "movie" ? <img src={movieTab} alt="movie icon" /> : <img src={serialTab} alt="" />}
										<p className="caption__category">{category}</p>
									</div>
								</div>
							</div>
							<div className="caption__title-container">
								<p className="caption__title">{title}</p>
								<p className="caption__rating" style={rating >= 9 ? { color: "#c4a876" } : null}>
									{rating}
								</p>
							</div>
						</div>
					</>
				}
			</SwiperSlide>
		);
	});

	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={2}
			autoplay={{delay: 2000, 
								 disableOnInteraction: false, 
								 pauseOnMouseEnter: true}}
			breakpoints={{
				767: {
					slidesPerView: 4,
				},
				1439: {
					slidesPerView: 5,
				},
			}}
		>
			{sliderItems}
		</Swiper>
	);
};

export default TrendingSlider;
