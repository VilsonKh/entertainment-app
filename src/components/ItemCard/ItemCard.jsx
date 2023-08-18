import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentStatus, currentCard, reviewsContetn } from "../../store/videosSlice";
import {fetchCurrentItem, fetchReviews} from '../../store/thunks.js';
import { useLocation, useParams } from "react-router-dom";
import ExternalImage from "../UI/ExternalImage";
import "./ItemCard.scss";
import RatingPopup from "../UI/RatingPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import CollapseText from "./CollapseText";
import NewReviewForm from "./NewReviewForm";
import AcceptPopup from "../UI/AcceptPopup";
import bookmark from "../../assets/bookmarkTab.svg";
import bookmarkWhite from "../../assets/bookmarkTab-white.svg";
import star from "../../assets/icon-star.svg";
import { updateBookmark } from "../../firebase/service";
import { Skeleton } from "@mui/material";


const ItemCard = () => {
	const dispatch = useDispatch();
	const data = useSelector(currentCard);
	const status = useSelector(contentStatus)
	const reviewsData = useSelector(reviewsContetn);
	const {filmName} = useParams()

	const [isMessageOpen, setIsMessageOpen] = useState();
	const [isCurrentBookmarked, setIsCurrentBookmarked] = useState(data.isBookmarked);
	const [isRatingPopupOpen, setIsRatingPopupOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchCurrentItem(filmName));
		dispatch(fetchReviews(filmName));
	}, [dispatch, filmName]);


	useEffect(() => {
		setIsCurrentBookmarked(data.isBookmarked);
	}, [data]);


	const onBookmarkClick = async () => {
		//data receives as string
		setIsCurrentBookmarked(isCurrentBookmarked === 'true' ? 'false' : 'true')
		await updateBookmark(data.id, isCurrentBookmarked === 'true' ? 'false' : 'true')
	}

	return (
			<div className="itemCard__container">
				<div className="itemCard__thumbnail">
					<ExternalImage thumbnail={data.thumbnail} />
				</div>
				<>
					<div className="itemCard__heading">
						{status === 'loading' ? <Skeleton variant="rounded" style={{ background: '#363f54'}} height={30}/> : <h1 className="itemCard__heading">{`${data.title} (${data.year})`}</h1>}
					</div>
					<div className="tools">
						<div className="tools__item" onClick={() => setIsRatingPopupOpen(true)}>
							<button className="tools__rate-button" type="button"  >
								<img className="tools__rate-icon" src={star} alt="star icon" />
							</button>
							<p className="tools__rate-text">RATE</p>
						</div>
						<div className="tools__item" onClick={onBookmarkClick}>
							<button className="tools__bookmark-button" type="button">
								{isCurrentBookmarked === 'true' ? (
									<img className="tools__bookmark-icon" src={bookmarkWhite} alt="bookmark" />
								) : (
									<img className="tools__bookmark-icon" src={bookmark} alt="bookmark" />
								)}
							</button>
							<p className="tools__rate-text">WILL WATCH</p>
						</div>
					</div>
					<div className="itemCard__aboutFilm">
	          {status === 'loading' ? [...Array(10)].map(() => <Skeleton variant="rounded" style={{ background: '#363f54', marginBottom: '20px'}} height={30}/>) : 
						<>
							<h2 className="itemCard__subheading">About</h2>
							{data && data.info && Object.keys(data.info[0]).sort().map((key, i) => {
									return (
										<div className="itemCard__row" key={i}>
											<p className="itemCard__infoItem">{key}</p>
											<p className="itemCard__infoData">{data.info[0][key]}</p>
										</div>
									);
								})
							}
						</>
							}
					</div>
					<div className="itemCard__description">
						{status === 'loading' ? <Skeleton variant="rounded" style={{ background: '#363f54'}} height={150} /> : <p className="itemCard__description">{data.description}</p>}
					</div>
					<h2 className="itemCard__subheading itemCard__ratingHeading">RATING</h2>
					 
					<div className="itemCard__rating">
						{status === 'loading' ? <Skeleton variant="rounded" style={{ background: '#363f54'}} height={150}/> : <>
							<p className="itemCard__rating-number">{data.rating}</p>
							<p className="itemCard__total-rating">{`${data.totalRating} rates`}</p>
							<button className="reviewForm__addFeedback" onClick={() => setIsRatingPopupOpen(true)}>
								LEAVE A RATE
							</button>
						</>}
					</div>
					<div className="itemCard__reviewsSlider">
					  <h2 className="itemCard__subheading">COMMENTS</h2>
	  				{status === 'loading' ? <Skeleton variant="rounded" style={{ background: '#363f54'}} height={150}/> : <Swiper sildesPerView={1} 
	                  simulateTouch={true} 
	                  spaceBetween={20}
	                  breakpoints={{
	                    1439: {
	                      slidesPerView: 2
	                    }
	                  }}>
	  					{reviewsData.map((review, i) => {
	  						return (
	  							<SwiperSlide key={i}>
	  								<CollapseText name={review.name} message={review.message} />
	  							</SwiperSlide>
	  						);
	  					})}
	  				</Swiper>}
					</div>
					<NewReviewForm currentLocation={filmName} setIsMessageOpen={setIsMessageOpen} />
				</>
				{isMessageOpen && <AcceptPopup text={"review"} />}
				{isRatingPopupOpen && <RatingPopup thumbnail={data.thumbnail} title={data.title} setIsRatingPopupOpen={setIsRatingPopupOpen} />}
			</div>
	);
};

export default ItemCard;
