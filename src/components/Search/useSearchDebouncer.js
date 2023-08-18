import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchContent } from "../../store/videosSlice";

/** function debounce updating value on input. Receives a number of delay. Default is 700ms */
export const useSearchDebouncer = (delay = 700) => {
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const setDelay = setTimeout(() => {
			setSearch(query);
			dispatch(cleanSearchContent());
		}, delay);
		return () => clearTimeout(setDelay);
		// eslint-disable-next-line
	}, [query, delay]);

	return [search, setQuery];
};
