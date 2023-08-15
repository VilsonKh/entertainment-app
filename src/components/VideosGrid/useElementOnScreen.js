import React, { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (dependency) => {
	const targetElement = useRef(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(onIntersection, {});
		if (targetElement.current) observer.observe(targetElement.current);

		return () => {
			if (targetElement.current) observer.unobserve(targetElement.current);
		};
	}, [targetElement, dependency]);

	const onIntersection = (entries) => {
		const [entry] = entries;
		setIsInView(entry.isIntersecting);
	};
	return [targetElement, isInView];
};
