import "./Search.scss";
import loupe from "../../assets/loupe.svg";
import { searchStatus, setIsSearchPopupOpen } from "../../store/videosSlice";
import { useDispatch, useSelector } from "react-redux";
import preloader from "../../assets/preloader.gif";
import { useSearchDebouncer } from "./useSearchDebouncer";
import { useEffect } from "react";
import { fetchSearchContent } from "../../store/thunks";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
	const dispatch = useDispatch();
	const [search, setQuery] = useSearchDebouncer();
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const searchQuery = searchParams.get('search')

	useEffect(() => {
		if(searchQuery) setQuery(searchQuery)
		//eslint-disable-next-line
	},[])
	

	useEffect(() => {
		dispatch(search ? setIsSearchPopupOpen(true) : setIsSearchPopupOpen(false));
		if(search.length === 0 ) return;
		dispatch(fetchSearchContent(search));
		navigate({
			search: `search=${search}`
		})
		// eslint-disable-next-line
	}, [search]);

	useEffect(() => {
		const handleSearchExit = (e) => {
			const target = e.target;
			console.log(target.className === 'search__input')
			if (target.closest(".searchPopup__container") || target.className === 'search__input') return;
			dispatch(setIsSearchPopupOpen(false));
		};

		window.addEventListener("click", handleSearchExit);

		return () => {
			window.removeEventListener("click", handleSearchExit);
		};
		//eslint-disable-next-line
	}, []);

	const status = useSelector(searchStatus);
	return (
		<div className="search">
			<div className="search__input-container">
				<span className="search__input-icon" id="search">
					{status === "loading" ? <img className="search__icon" src={preloader} alt="spinner" /> : <img className="search__icon" src={loupe} alt="seach icon" />}
				</span>
				<input
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					style={search?.length > 0 ? { borderBottom: "1px solid #5A698F" } : null}
					className="search__input"
					placeholder="Search for movies or TV serials"
					defaultValue={searchQuery}
				/>
			</div>
		</div>
	);
};

export default Search;
