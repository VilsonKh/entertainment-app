import { collection, getDocs, addDoc, doc, query, where, updateDoc, getDoc } from "firebase/firestore";
import { db, storage } from "./config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, getAllSerials, getTrending, getWishlistItems } from "../store/videosSlice";
import { getDownloadURL, listAll, ref } from "firebase/storage";

// export const useQueryAllVideos = () => {

// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(changePendingState(true));
// 		const ref = doc(db, "videos/movies");
// 		getDocs(ref).then((snapshot) => {
// 			let results = [];
// 			if (snapshot.empty) {
// 				dispatch(changeErrorState("Cannot get movie/tv serial"));
// 				dispatch(changePendingState(false));
// 			} else {
// 				snapshot.docs.forEach((doc) => {
// 					results.push({ id: doc.id, ...doc.data() });
// 				});
// 				dispatch(changePendingState(false))
// 				dispatch(getAllMovies(results));
// 			}
// 		}).catch((error) => {
// 			dispatch(changeErrorState(error.message))
// 			dispatch(changePendingState(false ))
// 		});
// 	}, []);

// 	console.log("получил все фильмы");

// 	useEffect(() => {
// 		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
// 		getDocs(ref).then((snapshot) => {
// 			let results = [];
// 			snapshot.docs.forEach((doc) => {
// 				results.push({ id: doc.id, ...doc.data() });
// 			});
// 			dispatch(getAllSerials(results));
// 		});
// 	}, []);

// 	console.log("получил все сериалы");

// 	useEffect(() => {
// 		const ref = collection(db, "wishlist");
// 		getDocs(ref).then((snapshot) => {
// 			let results = [];
// 			snapshot.docs.forEach((doc) => {
// 				results.push({ id: doc.id, ...doc.data() });
// 			});
// 			dispatch(getWishlistItems(results));
// 		});
// 	}, []);
// };

// export const usePostCollection = (data, category) => {
// 	if (category === "movie") {
// 		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/movies");
// 		addDoc(ref, data);
// 	} else if (category === "serial") {
// 		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
// 		addDoc(ref, data);
// 	}
// };
// export const usePostWishlistItem = (data) => {
// 	const ref = doc(db, "wishlist");
// 	addDoc(ref, data);
// };

export const queryAllContent = async (filter) => {
	const ref = collection(db, `videos`);
	let queryRef = null;

	switch (filter) {
		case "isTrending":
			console.log("сработал isTrending");
			queryRef = query(ref, where(filter, "==", "true"));
			break;
		case "isBookmarked":
			console.log("сработал isBookmarked");
			queryRef = query(ref, where(filter, "==", "true"));
			break;
		case "movie":
			console.log("сработал movie");
			queryRef = query(ref, where("category", "==", filter));
			break;
		case "serial":
			console.log("сработал serial");
			queryRef = query(ref, where("category", "==", filter));
			break;
		default:
			console.log("сработал default");
			queryRef = ref;
	}


	// let result = [];
	const res = await getDocs(queryRef)
	// .then((docs) => {
	// 	const response = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	// 	result = [...response]
	// });
	console.log(res)

	return res;
};

export const queryWishlistItems = async () => {
	console.log("queryWishLIstItems");
	const ref = collection(db, "wishlist");
	const res = await getDocs(ref);
	return res;
};

export const updateBookmark = async (videoId, bookmarkValue) => {
	console.log("update bookmark");
	console.log(videoId);
	console.log(bookmarkValue);
	const ref = doc(db, `videos/${videoId}`);
	await updateDoc(ref, { isBookmarked: bookmarkValue });
};
