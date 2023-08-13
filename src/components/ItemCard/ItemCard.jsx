import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentCard, fetchCurrentItem, fetchReviews, reviewsContetn } from "../../store/videosSlice";
import { useLocation } from "react-router-dom";
import ExternalImage from "../UI/ExternalImage";
import "./ItemCard.scss";
import RatingPopup from "../UI/RatingPopup";
const ItemCard = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const data = useSelector(currentCard);
	const reviewsData = useSelector(reviewsContetn);

	useEffect(() => {
		dispatch(fetchCurrentItem(location.pathname.slice(1)));
		dispatch(fetchReviews(location.pathname.slice(1)));
	}, [dispatch]);

  const [isRatingPopupOpen, setIsRatingPopupOpen] = useState(false)
  console.log(isRatingPopupOpen)
	return (
		<div className="container">
			<h1 className="itemCard__heading">{`${data.title} (${data.year})`}</h1>
			<div className="itemCard__thumbnail">
				<ExternalImage thumbnail={data.thumbnail} />
			</div>
			<p className="itemCard__description">{data.description}</p>
			<div className="itemCard__rating">
				<p className="itemCard__rating-number">{data.rating}</p>
				<p className="itemCard__total-rating">{`${data.totalRating} feedbacks`}</p>
				<button className="itemCard__addFeedback" onClick={() => setIsRatingPopupOpen(true)}>LEAVE A FEEDBACK</button>
			</div>
			<div className="reviews">
				{reviewsData.map((review, i) => {
					return (
						<div className="review__item" key={i}>
							<p className="review__name">{review.name}</p>
							<p className="review__text">{review.message}</p>
						</div>
					);
				})}
			</div>
      {isRatingPopupOpen && <RatingPopup thumbnail={data.thumbnail} title={data.title} setIsRatingPopupOpen={setIsRatingPopupOpen}/>}
		</div>
	);
};

export default ItemCard;
