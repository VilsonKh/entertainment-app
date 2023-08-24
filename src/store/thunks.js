import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentCard, getReviews, lazyLoad, queryAllContent, queryWishlistItems } from "../firebase/service";
import { initialLimit } from "./extraReducers";

/** Function gets comments from certain firestore document
 * @param {string} docId - Firestore document id of item
 * @returns {array} result
 */
export const fetchReviews = createAsyncThunk("reviews", async (docId) => {
	const res = await getReviews(docId);
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

/** Function gets  firestore documents filtered by search input value
 * @param {string} filter - search input value
 * @returns {array} result
 */
export const fetchSearchContent = createAsyncThunk("searchItem", async (filter) => {
	const res = await queryAllContent(filter);
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

/** Function gets single firestore document
 * @param {string} videoId - Firestore document id of item
 * @returns {array} result
 */
export const fetchCurrentItem = createAsyncThunk("currentCard", async (videoId) => {
	const res = await getCurrentCard(videoId);
	const result = { ...res.data(), id: res.id };
	return result;
});

/** Function gets all documents from wishlist firestore collection
 * @returns {array} result
 */
export const fetchWishlistItems = createAsyncThunk("wishlist", async () => {
	const res = await queryWishlistItems();
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

/** Function loads piece of new items data from firestore
 * @param {string} filter - search input value
 * @param {function} getState - Redux method retrieves store. Needs to get lenth of loaded data
 * @returns {array} result
 */
export const lazyLoadContentThunk = createAsyncThunk("videos/paginateRecommended", async (filter, { getState }) => {
	const content = getState();
	try {
		const next = await lazyLoad(filter, initialLimit, content.content.length);
		const result = next.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return result;
	} catch (error) {
		throw new Error(error);
	}
});

/** Function gets firestore documents where property isTrending = true
 * @returns {array} result
 */
export const fetchTrendingVideos = createAsyncThunk("videos/fetchByTrending", async () => {
	try {
		const res = await queryAllContent("isTrending");
		const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return result;
	} catch (error) {
		throw new Error(error);
	}
});

/** Function get content from firestore filtered with passed props
 * @param {string} filter - filter arg to pass in 'where' firestore method
 * @returns {array} result
 */
export const fetchContent = createAsyncThunk("videos/fetchByRecommended", async (filter) => {
	try {
		const res = await queryAllContent(filter, initialLimit);

		const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return result;
	} catch (error) {
		throw new Error(error);
	}
});
