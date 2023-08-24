import { useDispatch, useSelector } from "react-redux";
import "./SearchPopup.scss";
import { cleanCurrentItemContent, currentCard, searchContent, searchStatus, setIsSearchPopupOpen } from "../../store/videosSlice";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate, useParams } from "react-router-dom";
import noResult from "../../assets/no-result.svg";
import { Skeleton } from "@mui/material";

//renders when search input isn't empty
const SearchPopup = () => {
	const dispatch = useDispatch();
	const currentCardData = useSelector(currentCard)
	const data = useSelector(searchContent);
	const status = useSelector(searchStatus);
	const params = useParams()

	const navigate = useNavigate();

	//cleans store state for current item and fetch new one based on user input
	const onItemClick = (id) => {
		if(currentCardData.id !== params.filmName) dispatch(cleanCurrentItemContent());
		navigate({
			pathname: `/card/${id}`,
		});
		dispatch(setIsSearchPopupOpen(false));
	};

	return (
		<div className="searchPopup__container" data-testid="searchPopup">
			<div className="searchPopup__heading">Search Result</div>
			{status === "loading"
				? [...Array(3)].map((item, i) => <Skeleton variant="rounded" style={{ paddingTop: "50%", background: "#363f54", marginBottom: "20px" }} key={i} />)
				: data.map((content, i) => {
						return (
							<div className="searchPopup__item" key={i} onClick={() => onItemClick(content.id)}>
								<div className="searchPopup__thumbnail">
									<ExternalImage thumbnail={content.thumbnail} />
								</div>
								<div className="searchPopup__info">
									<p className="searchPopup__title">{content.title}</p>
									<p className="searchPopup__rating" style={content.rating >= 9 ? { color: "#c4a876" } : null}>
										{content.rating}
									</p>
									<p className="searchPopup__category">{`${content.category}, ${content.year}`}</p>
								</div>
							</div>
						);
				  })}

			{status === "empty" && !data.length ? <img className="no-result" src={noResult} alt="no-result" /> : null}
		</div>
	);
};

export default SearchPopup;
