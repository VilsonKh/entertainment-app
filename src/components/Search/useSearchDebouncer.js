import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearchContent } from "../../store/videosSlice";

export const useSearchDebouncer = (delay = 700) => {
	const [search, setSearch] = useState(null);
	const [query, setQuery] = useState(null);
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
