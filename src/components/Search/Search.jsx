import "./Search.scss";
import loupe from "../../assets/loupe.svg";

const Search = () => {
	return (
		<div className="searchPanel">
			<div className="container">
				<div class="input-group">
					<span class="input-group-text" id="search">
						<img src={loupe} alt="" />
					</span>
					<input type="text" class="form-control" placeholder="Search for movies or TV serials" aria-label="Username" aria-describedby="search" />
				</div>
			</div>
		</div>
	);
};

export default Search;
