import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from "./config";
import { useEffect } from "react";
import { useDispatch,  } from "react-redux";
import { getAllMovies, getAllSerials, getWishlistItems } from "../store/videosSlice";
import { changeErrorState, changePendingState } from "../store/stateSlice";

export const useQueryAllVideos = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changePendingState(true));
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/movies");
		getDocs(ref).then((snapshot) => {
			let results = [];
			if (snapshot.empty) {
				dispatch(changeErrorState("Cannot get movie/tv serial"));
				dispatch(changePendingState(false));
			} else {
				snapshot.docs.forEach((doc) => {
					results.push({ id: doc.id, ...doc.data() });
				});
				dispatch(changePendingState(false))
				dispatch(getAllMovies(results));
			}
		}).catch((error) => {
			dispatch(changeErrorState(error.message))
			dispatch(changePendingState(false ))
		});
	}, []);

	console.log("получил все фильмы");

	useEffect(() => {
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
			dispatch(getAllSerials(results));
		});
	}, []);

	console.log("получил все сериалы");

	useEffect(() => {
		const ref = collection(db, "wishlist");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
			dispatch(getWishlistItems(results));
		});
	}, []);
};

export const usePostCollection = (data, category) => {
	if (category === "movie") {
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/movies");
		addDoc(ref, data);
	} else if (category === "serial") {
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
		addDoc(ref, data);
	}
};

export const usePostWishlistItem = (data) => {
	const ref = doc(db, "wishlist");
	addDoc(ref, data);
};
