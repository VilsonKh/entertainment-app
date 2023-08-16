import { collection, getDocs, addDoc, doc, query, where, updateDoc, getDoc, limit, startAfter, startAt, orderBy, endAt } from "firebase/firestore";
import { db } from "./config";

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

	export const postNewWishlistItem = async (data) => {
		const ref = collection(db, 'wishlist');
		await addDoc(ref, data)
	}

export const lazyLoad = async (filter, initialLimit, counter) => {
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
	const ref = collection(db, "wishlist");
	const res = await getDocs(ref);
	return res;
};

export const updateBookmark = async (videoId, bookmarkValue) => {
	console.log(videoId, bookmarkValue)
	const ref = doc(db, `videos/${videoId}`);
	await updateDoc(ref, { isBookmarked: bookmarkValue });
};

export const getCurrentCard = async (videoId) => {
	const ref = doc(db, `videos/${videoId}`);
	const res = await getDoc(ref)
	
	return res
}

export const getReviews = async(docId) => {
	const ref = collection(db, `videos/${docId}/reviews`)
	const res = await getDocs(ref)
	return res
}

export const postNewReview = async(docId, data) => {
	const ref = collection(db, `videos/${docId}/reviews`)
	await addDoc(ref, data);
}
