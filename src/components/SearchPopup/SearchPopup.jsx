import { useDispatch, useSelector } from "react-redux";
import "./SearchPopup.scss";
import { useEffect } from "react";
import { cleanCurrentItemContent, content, contentStatus, fetchSearchContent, searchContent, searchStatus, setIsSearchPopupOpen } from "../../store/videosSlice";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate } from "react-router-dom";

const SearchPopup = ({ filter }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSearchContent(filter));
	}, [filter]);

	let data = useSelector(searchContent);
  const status = useSelector(searchStatus)

  const navigate = useNavigate()

	const onItemClick = (id) => {
		dispatch(cleanCurrentItemContent())
		navigate(`/${id}`)
		dispatch(setIsSearchPopupOpen(false))
	}

	return (

			<div className="searchPopup__container">
				<div className="searchPopup__heading">Search Result</div>
				{data.map((content, i) => {
					return (
						<div className="searchPopup__item" key={i} onClick={() => onItemClick(content.id)}>
							<div className="searchPopup__thumbnail">
								<ExternalImage thumbnail={content.thumbnail} />
							</div>
							<div className='searchPopup__info'>
                <p className='searchPopup__title'>{content.title}</p>
                <p className='searchPopup__rating'  style={content.rating >= 9 ? {color: '#c4a876'} : null}>{content.rating}</p>
                <p className='searchPopup__category'>{`${content.category}, ${content.year}`}</p>
              </div>
						</div>
					);
				})}
			</div>

	);
};

export default SearchPopup;
