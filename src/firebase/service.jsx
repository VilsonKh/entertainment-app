import { collection, getDocs, addDoc, doc, query, where, updateDoc, getDoc, limit, startAfter, startAt, orderBy, endAt } from "firebase/firestore";
import { db, storage } from "./config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, getAllSerials, getTrending, getWishlistItems } from "../store/videosSlice";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const queryAllContent = async (filter, initialLimit) => {
	const ref = collection(db, `videos`);
	let queryRef = null;

	switch (filter) {
		case "isTrending":
			queryRef = query(ref, where(filter, "==", "true"));
			break;
		case "isBookmarked":
			queryRef = query(ref, where(filter, "==", "true"), limit(initialLimit));
			break;
			case "isRecommended":
				queryRef = query(ref, where(filter, "==", "true"), limit(initialLimit));
				break;
		case "movie":
			queryRef = query(ref, where("category", "==", filter),limit(initialLimit));
			break;
		case "serial":
			queryRef = query(ref, where("category", "==", filter), limit(initialLimit));
			break;
		default:
			queryRef = query(ref, orderBy('title'), startAt(filter), endAt(filter + '\uf8ff' ));
	}


	const res = await getDocs(queryRef);
	return res;
};

export const querySearch = async() => {
	const ref = collection(db, 'videos')
	const queryRef = query(ref, orderBy('title'), startAt('The'), endAt('The' + '\uf8ff' ))
	const result = await getDocs(queryRef)
	const con = result.docs.map((doc) => ({...doc.data()}))
	console.log(con)
}

export const lazyLoad = async (filter, initialLimit, counter) => {
	console.log(counter)
	let queryRef = null;
	const ref = collection(db, 'videos')
	switch (filter) {
		case "isRecommended":
			console.log('сработал isRecommended')
			queryRef = where(filter, "==", "true");
			break;
		case "movie":
			queryRef = where("category", "==", filter);
			break;
		case "serial":
			queryRef = where("category", "==", filter);
			break;
		case "isBookmarked":
			queryRef = where(filter, "==", "true");
			break;
		default:
			break;
	}

	const res = await getDocs(query(ref, queryRef, limit(counter)));
	const lastVisible = res.docs[res.docs.length - 1];
	const next = await getDocs(query(ref, queryRef, startAfter(lastVisible), limit(initialLimit)));


	return next
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
