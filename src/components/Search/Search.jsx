import "./Search.scss";
import loupe from "../../assets/loupe.svg";
import { searchStatus } from "../../store/videosSlice";
import { useSelector } from "react-redux";
import preloader from '../../assets/preloader.gif';

const Search = ({ setInputText, inputValue }) => {
	const status = useSelector(searchStatus)
	return (
		<div className="search">
			<div className="search__input-container">
				<span className="search__input-icon" id="search">
				{status === 'loading' ? <img className='search__icon' src={preloader} alt='spinner'/> : <img className='search__icon' src={loupe} alt="seach icon" />}
				</span>
				<input onChange={(e) => setInputText
				(e.target.value)} 
							 type="text"
							 style={inputValue.length > 0 ? {borderBottom: '1px solid #5A698F'} : null}
							 className="search__input" 
							 placeholder="Search for movies or TV serials"
							 
							 />
				
			</div>
		</div>
	);
};

export default Search;
