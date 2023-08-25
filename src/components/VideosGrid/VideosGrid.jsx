import { useSelector, useDispatch } from "react-redux";
import { content, contentStatus, lazyStatus, cleanCurrentItemContent, isEndOfList } from "../../store/videosSlice";
import { lazyLoadContentThunk, fetchContent } from "../../store/thunks";
import preloader from '../../assets/preloader.svg';
import "./VideosGrid.scss";
import Bookmark from "../UI/Bookmark";
import React, { useEffect } from "react";
import dot from "../../assets/oval.svg";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate } from "react-router-dom";
import { useElementOnScreen } from "./useElementOnScreen";
import movieTab from '../../assets/moviesTab.svg';
import serialTab from '../../assets/serialsTab-white.svg';
import { Skeleton } from "@mui/material";

//component renders content in grid layout of different categories
//receives a key like 'isBookmarked' to get filtered data from firestore
const VideosGrid = ({ filter }) => {
	const dispatch = useDispatch();
	const data = useSelector(content);
	const status = useSelector(contentStatus);
	const isStopLoad = useSelector(isEndOfList);
	const lazyLoadStatus = useSelector(lazyStatus);
	const navigate = useNavigate();

	//observes visibility of elements for lazy load
	const [targetElement, isInView] = useElementOnScreen(data);

	useEffect(() => {
		dispatch(fetchContent(filter));
		//eslint-disable-next-line
	}, [filter]);

	useEffect(() => {
		if (isInView && !isStopLoad) dispatch(lazyLoadContentThunk(filter));
				//eslint-disable-next-line
	}, [isInView]);

	const onItemClick = (e, id) => {
		if (e.target.className === "movie-thumb") {
			navigate(`/card/${id}`);
			dispatch(cleanCurrentItemContent());
			window.scrollTo(0,0)
		}
	};

	return (
		<>
			<div className="videoGrid__gridContainer">
				{status === 'loading' ? [...Array(10)].map((item, i ) => <Skeleton variant="rounded" style={{paddingTop: '140%', background: '#363f54'}} key={i}/>) :
					data.map((video, i) => {
						const { thumbnail, year, category, rating, title, isBookmarked, id } = video;
						return (
							<div key={i}  className="videoGrid__item" onClick={(e) => onItemClick(e, id)}>
								<div className="videoGrid__img-container">
									<ExternalImage thumbnail={thumbnail} />
								</div>
								<div className="videoGrid__caption" ref={targetElement}>
									<div className="videoGrid__info">
										<p className="videoGrid__year">{year}</p>
										<img src={dot} alt="dot" />
										<div className="videoGrid__category-container">
										{category === 'movie' ? <img src={movieTab} alt="movie icon"/> : <img src={serialTab} alt=""/>}

											<p className="videoGrid__category">{category}</p>
										</div>
										<img src={dot} alt="dot" />
										<p className="caption__rating" style={rating >= 9 ? { color: "#c4a876" } : null}>
											{rating}
										</p>
									</div>
									<div className="videoGrid__title">{title}</div>
								</div>
								<Bookmark isBookmarked={isBookmarked} videoId={id} />
							</div>
						);
					})
				}
			</div>
			<p className="videoGrid__end">{isStopLoad ? 'There are all videos' : null}</p>
			{lazyLoadStatus === 'loading' && <img className='videoGrid__preloader' src={preloader} alt='preloader'/>}
		</>
	);
};

export default VideosGrid;
