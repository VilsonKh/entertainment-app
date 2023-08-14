import { useState } from "react";
import "./RatingPupup.scss";
import AcceptPopup from "./AcceptPopup";

const RatingPopup = ({ thumbnail, title, setIsRatingPopupOpen }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [isMessageOpen, setIsMessageOpen] = useState(false);
	let chosenMarkColor = null;
	// console.log(rating < 5)

	if (rating > 6) {
		chosenMarkColor = "ratingPopup__chosenMark-high";
	} else if (rating > 4) {
		chosenMarkColor = "ratingPopup__chosenMark-middle";
	} else if (rating < 5 && rating > 0) {
		chosenMarkColor = "ratingPopup__chosenMark-low";
	} else {
		chosenMarkColor = null;
	}

	const onOverlayClick = (e) => {
		if (e.target.className === "ratingPopup") setIsRatingPopupOpen(false);
	};

	const onSubmit = () => {
		setIsMessageOpen(true);
		setTimeout(() => {
			setIsRatingPopupOpen(false);
		}, 2000);
		setTimeout(() => {
			setIsMessageOpen(false);
		}, 2000);
	};

	return 	(!isMessageOpen ? <div className="ratingPopup" onClick={(e) => onOverlayClick(e)}>
			<div className="ratingPopup__container">
				<div className="ratingPopup__filmBox">
					<img className="ratingPopup__thumbnail" src={thumbnail} alt="filmImg" />
					<p>{title}</p>
				</div>
				<div className={`ratingPopup__chosenMark ${chosenMarkColor}`}>
					{rating === 0 ? <p className="ratingPopup__placeholder">SET A MARK</p> : <p className="ratingPopup__rate">{rating}</p>}
				</div>
				<div className="ratingPopup__starsBox">
					{[...Array(10)].map((star, i) => {
						i += 1;
						return (
							<button
								type="button"
								key={i}
								className={i <= (hover || rating) ? "star-button star-on" : "star-button star-off"}
								onClick={() => setRating(i)}
								onMouseEnter={() => setHover(i)}
								onMouseLeave={() => setHover(rating)}
							>
								<span>&#9733;</span>
							</button>
						);
					})}
				</div>
				<div className="ratingPopup__buttonGroup">
					<button className="ratingPopup__cancelButton" onClick={() => setIsRatingPopupOpen(false)}>
						CANCEL
					</button>
					{rating > 0 && (
						<button className="ratingPopup__submit" onClick={onSubmit}>
							SUBMIT
						</button>
					)}
				</div>
			</div>
		</div> : <AcceptPopup text={'rate'}/>)
	
};

export default RatingPopup;
