import movieIcon from "../../assets/moviesTab.svg";
import { useSelector, useDispatch } from "react-redux";
import { isBlockLoadButton, content, contentStatus, lazyLoadContentThunk, fetchContent, lazyStatus, cleanCurrentItemContent, isEndOfList } from "../../store/videosSlice";
import preloader from '../../assets/preloader.gif';
import "./VideosGrid.scss";
import Bookmark from "../UI/Bookmark";
import React, { useEffect, useRef, useState } from "react";
import dot from "../../assets/oval.svg";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate } from "react-router-dom";
import { useElementOnScreen } from "./useElementOnScreen";

const VideosGrid = ({ filter }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContent(filter));
	}, [filter]);

	const data = useSelector(content);
	const status = useSelector(contentStatus);
	const isStopLoad = useSelector(isEndOfList);
	const lazyLoadStatus = useSelector(lazyStatus);

	const [targetElement, isInView] = useElementOnScreen(data);

	useEffect(() => {
		if (isInView && !isStopLoad) dispatch(lazyLoadContentThunk(filter));
	}, [isInView]);

	const navigate = useNavigate();

	const onItemClick = (e, id) => {
		if (e.target.className === "movie-thumb") {
			navigate(`/${id}`);
			dispatch(cleanCurrentItemContent());
		}
	};

	console.log(isInView);

	return (
		<>
			<div className="recommended__gridContainer">
				{status === "succeeded" ? (
					data.map((video, i) => {
						const { thumbnail, year, category, rating, title, isBookmarked, id } = video;
						return (
							<div key={i}  className="recommended__item" onClick={(e) => onItemClick(e, id)}>
								<div className="recommended__img-container">
									<ExternalImage thumbnail={thumbnail} />
								</div>
								<div className="recommended__caption" ref={targetElement}>
									<div className="recommended__info">
										<p className="recommended__year">{year}</p>
										<img src={dot} alt="dot" />
										<div className="recommended__category-container">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
													fill="white"
												/>
											</svg>

											<p className="recommended__category">{category}</p>
										</div>
										<img src={dot} alt="dot" />
										<p className="caption__rating" style={rating >= 9 ? { color: "#c4a876" } : null}>
											{rating}
										</p>
									</div>
									<div className="recommended__title">{title}</div>
								</div>
								<Bookmark isBookmarked={isBookmarked} videoId={id} />
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</div>
			<p className="recommended__end">{isStopLoad ? 'There are all videos' : null}</p>
			{lazyLoadStatus === 'loading' && <img className='recommended__preloader' src={preloader} alt='preloader'/>}
		</>
	);
};

export default VideosGrid;
