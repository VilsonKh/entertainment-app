import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentCard, fetchCurrentItem, fetchReviews, reviewsContetn } from "../../store/videosSlice";
import { useLocation } from "react-router-dom";
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

const ItemCard = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const data = useSelector(currentCard);
	const reviewsData = useSelector(reviewsContetn);
	const currentLocation = location.pathname.slice(1);
	const [isMessageOpen, setIsMessageOpen] = useState();

	const [isCurrentBookmarked, setIsCurrentBookmarked] = useState(data.isBookmarked);



	useEffect(() => {
		dispatch(fetchCurrentItem(currentLocation));
		dispatch(fetchReviews(currentLocation));
	}, [dispatch, currentLocation]);

	const [isRatingPopupOpen, setIsRatingPopupOpen] = useState(false);

	useEffect(() => {
		setIsCurrentBookmarked(data.isBookmarked);
	}, [data]);


	return (
		<>
			<div className="itemCard__container">
				<div className="itemCard__thumbnail">
					<ExternalImage thumbnail={data.thumbnail} />
				</div>

				<h1 className="itemCard__heading">{`${data.title} (${data.year})`}</h1>
				<div className="tools">
					<div className="tools__item" onClick={() => setIsRatingPopupOpen(true)}>
						<button className="tools__rate-button" type="button">
							<img className="tools__rate-icon" src={star} alt="star icon" />
						</button>
						<p className="tools__rate-text">RATE</p>
					</div>
					<div className="tools__item">
						<button className="tools__bookmark-button" type="button">
							{isCurrentBookmarked === "true" ? (
								<img className="tools__bookmark-icon" src={bookmarkWhite} alt="bookmark" />
							) : (
								<img className="tools__bookmark-icon" src={bookmark} alt="bookmark" />
							)}
						</button>
						<p className="tools__rate-text">WILL WATCH</p>
					</div>
				</div>
				<div className="itemCard__aboutFilm">
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
				</div>
				<p className="itemCard__description">{data.description}</p>
				<h2 className="itemCard__subheading itemCard__ratingHeading">RATING</h2>
				<div className="itemCard__rating">
					<p className="itemCard__rating-number">{data.rating}</p>
					<p className="itemCard__total-rating">{`${data.totalRating} feedbacks`}</p>
					<button className="reviewForm__addFeedback" onClick={() => setIsRatingPopupOpen(true)}>
						LEAVE A FEEDBACK
					</button>
				</div>
				<div className="itemCard__reviewsSlider">
				  <h2 className="itemCard__subheading">REVIEWS</h2>
  				<Swiper sildesPerView={1} 
                  simulateTouch={true} 
                  spaceBetween={20}
                  breakpoints={{
                    1439: {
                      slidesperview: 2
                    }
                  }}>
  					{reviewsData.map((review, i) => {
  						return (
  							<SwiperSlide key={i}>
  								<CollapseText name={review.name} message={review.message} />
  							</SwiperSlide>
  						);
  					})}
  				</Swiper>
				</div>
				<NewReviewForm currentLocation={currentLocation} setIsMessageOpen={setIsMessageOpen} />
				{isMessageOpen && <AcceptPopup text={"review"} />}
				{isRatingPopupOpen && <RatingPopup thumbnail={data.thumbnail} title={data.title} setIsRatingPopupOpen={setIsRatingPopupOpen} />}
			</div>
		</>
	);
};

export default ItemCard;
