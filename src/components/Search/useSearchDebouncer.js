import { useEffect, useState } from "react";

export const useSearchDebouncer = (delay = 700) => {
	const [search, setSearch] = useState(null);
	const [query, setQuery] = useState(null);

	useEffect(() => {
		const setDelay = setTimeout(() => setSearch(query), delay);
		return () => clearTimeout(setDelay);
	}, [query, delay]);

	return [search, setQuery];
};
