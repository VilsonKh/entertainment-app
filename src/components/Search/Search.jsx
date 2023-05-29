import "./Search.scss";
import loupe from "../../assets/loupe.svg";
import { useState } from "react";

const Search = ({setInputValue, inputValue}) => {

	//Остановился здесь

	const onChangeInput = (e) => {
		let value = e.target.value
		setInputValue(value)
		
	}
	return (
		<div className="searchPanel">
			<div className="container">
				<div className="input-group">
					<span className="input-group-text" id="search">
						<img src={loupe} alt="" />
					</span>
					<input onChange={(e) => onChangeInput(e)} type="text" className="form-control" placeholder="Search for movies or TV serials" aria-label="Username" aria-describedby="search" />
				</div>
			</div>
		</div>
	);
};

export default Search;
