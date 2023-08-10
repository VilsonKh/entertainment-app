import "./Search.scss";
import loupe from "../../assets/loupe.svg";

const Search = ({ setInputValue, inputValue }) => {

	const onChangeInput = (e) => {
		let value = e.target.value;
		setInputValue(value);
	};
	return (
		<div className="search">
			<div className="search__input-container">
				<span className="search__input-icon" id="search">
					<img src={loupe} alt="seach icon" />
				</span>
				<input onChange={(e) => onChangeInput(e)} 
							 type="text" 
							 className="search__input" 
							 placeholder="Search for movies or TV serials" />
			</div>
		</div>
	);
};

export default Search;
