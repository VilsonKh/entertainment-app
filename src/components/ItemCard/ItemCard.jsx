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

const ItemCard = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const data = useSelector(currentCard);
	const reviewsData = useSelector(reviewsContetn);
  const currentLocation = location.pathname.slice(1);
  const [isMessageOpen, setIsMessageOpen] = useState();

	useEffect(() => {
		dispatch(fetchCurrentItem(location.pathname.slice(1)));
		dispatch(fetchReviews(currentLocation));
	}, [dispatch]);

	const [isRatingPopupOpen, setIsRatingPopupOpen] = useState(false);
	console.log(isRatingPopupOpen);
	return (
		<>
			<h1 className="itemCard__heading">{`${data.title} (${data.year})`}</h1>
			<div className="itemCard__thumbnail">
				<ExternalImage thumbnail={data.thumbnail} />
			</div>
			<p className="itemCard__description">{data.description}</p>
			<h2 className="itemCard__subheading">RATING</h2>
			<div className="itemCard__rating">
				<p className="itemCard__rating-number">{data.rating}</p>
				<p className="itemCard__total-rating">{`${data.totalRating} feedbacks`}</p>
				<button className="itemCard__addFeedback" onClick={() => setIsRatingPopupOpen(true)}>
					LEAVE A FEEDBACK
				</button>
			</div>
			<h2 className="itemCard__subheading">REVIEWS</h2>
			<Swiper sildesPerView={1} simulateTouch={true} spaceBetween={20}>
				{reviewsData.map((review, i) => {
					return (
						<SwiperSlide key={i}>
							<CollapseText name={review.name} message={review.message}/>
						</SwiperSlide>
					);
				})}
			</Swiper>
      <NewReviewForm currentLocation={currentLocation} setIsMessageOpen={setIsMessageOpen}/>
      {isMessageOpen && <AcceptPopup/>}
			{isRatingPopupOpen && <RatingPopup thumbnail={data.thumbnail} title={data.title} setIsRatingPopupOpen={setIsRatingPopupOpen} />}
		</>
	);
};

export default ItemCard;
