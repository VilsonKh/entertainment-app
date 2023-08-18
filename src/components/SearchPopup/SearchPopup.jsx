import { useDispatch, useSelector } from "react-redux";
import "./SearchPopup.scss";
import { useEffect } from "react";
import { cleanCurrentItemContent, searchContent, searchStatus, setIsSearchPopupOpen } from "../../store/videosSlice";
import { fetchSearchContent } from "../../store/thunks";
import ExternalImage from "../UI/ExternalImage";
import { useNavigate } from "react-router-dom";
import noResult from '../../assets/no-result.svg';
import { Skeleton } from "@mui/material";

const SearchPopup = ({ filter }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSearchContent(filter));
		// eslint-disable-next-line
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
			<div className="searchPopup__container" data-testid="searchPopup">
				<div className="searchPopup__heading">Search Result</div>
				{status === 'loading' ? [...Array(3)].map(() => <Skeleton variant="rounded" style={{ paddingTop: '50%',background: '#363f54', marginBottom: '20px'}}/>) : data.map((content, i) => {
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
				{!data.length && status === 'succeeded' ? <img className="no-result" src={noResult} alt='no-result'/> : null}
			</div>

	);
};

export default SearchPopup;
