import "./Search.scss";
import loupe from "../../assets/loupe.svg";
import { useSearchDebouncer } from "./useSearchDebouncer";

const Search = ({ setInputText, inputText }) => {


	
	return (
		<div className="search">
			<div className="search__input-container">
				<span className="search__input-icon" id="search">
					<img src={loupe} alt="seach icon" />
				</span>
				<input onChange={(e) => setInputText
				(e.target.value)} 
							 type="text" 
							 className="search__input" 
							 placeholder="Search for movies or TV serials"
							 />
			</div>
		</div>
	);
};

export default Search;
