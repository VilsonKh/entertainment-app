import { collection, getDocs, addDoc, doc, query, where, updateDoc, getDoc, limit, startAfter, startAt, orderBy, endAt } from "firebase/firestore";
import { db } from "./config";
/** Function get content from firestore filtered with passed props
 * @param {string} filter - filter arg to pass in 'where' firestore method
 * @param {number} initialLimit - number of items to get for the first time
 * @returns Promise
 */
export const queryAllContent = async (filter, initialLimit) => {
	const ref = collection(db, `videos`);
	let queryRef = null;

	//configurates query based on passed args
	//by default accepts search bar input value
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
			queryRef = query(ref, where("category", "==", filter), limit(initialLimit));
			break;
		case "serial":
			queryRef = query(ref, where("category", "==", filter), limit(initialLimit));
			break;
		default:
			//get from firestore items, which STARTS with search bar input value. Each firestore method required
			queryRef = query(ref, orderBy("title"), startAt(filter), endAt(filter + "\uf8ff"));
	}

	const res = await getDocs(queryRef);
	return res;
};
/** Function post a new wish list to the firestore
 * @param {object} data -  data from form
 * @returns {void} nothing
 */
export const postNewWishlistItem = async (data) => {
	const ref = collection(db, "wishlist");
	await addDoc(ref, data);
};

/** Function loads piece of new items data from firestore 
 * @param {string} filter - filter arg to pass in 'where' firestore method
 * @param {number} initialLimit - number of items to get for the first time
 * @param {number} counter - number of currently loaded items
*/
export const lazyLoad = async (filter, initialLimit, counter) => {
	let queryRef = null;
	const ref = collection(db, "videos");

	//configurates query
	switch (filter) {
		case "isRecommended":
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

	return next;
};

/** Function gets wish list items from firestore
 * @return {Promise} Promise
 */
export const queryWishlistItems = async () => {
	const ref = query(collection(db, 'wishlist'), orderBy('timestamp'));
	const res = await getDocs(ref);
	return res;
};

/** Function updates isBookmarked property of document in firestore
 * @param {string} videoId - Firestore document id of item
 * @param {boolean} bookmarkValue - current bookmark state of item
 * @return {Promise} Promise
 */
export const updateBookmark = async (videoId, bookmarkValue) => {
	const ref = doc(db, `videos/${videoId}`);
	await updateDoc(ref, { isBookmarked: bookmarkValue });
};

/** Function gets one document from firestore
 * @param {string} videoId - Firestore document id of item
 * @returns {Promise}
 */
export const getCurrentCard = async (videoId) => {
	const ref = doc(db, `videos/${videoId}`);
	const res = await getDoc(ref);

	return res;
};

/** Function gets reviews from certain firestore document 
 * @param {string} docId - Firestore document id of item
 * @returns {Promise} - Promise
 */
export const getReviews = async (docId) => {
	const ref = collection(db, `videos/${docId}/reviews`);
	const res = await getDocs(ref);
	return res;
};

/** Function post new comment to the firestore
 * @param {string} docId - Firestore document id of item
 * @param {object} data - data from form
 * @returns {Promise} Promise
 */
export const postNewReview = async (docId, data) => {
	const ref = collection(db, `videos/${docId}/reviews`);
	await addDoc(ref, data);
};


