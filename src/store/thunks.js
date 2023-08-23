import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentCard, getReviews, lazyLoad, queryAllContent, queryWishlistItems } from "../firebase/service";
import { initialLimit } from "./extraReducers";

export const fetchReviews = createAsyncThunk("reviews", async (docId) => {
	const res = await getReviews(docId);
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

export const fetchSearchContent = createAsyncThunk("searchItem", async (filter) => {
	const res = await queryAllContent(filter);
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

export const fetchCurrentItem = createAsyncThunk("currentCard", async (videoId) => {
	const res = await getCurrentCard(videoId);
	const result = { ...res.data(), id: res.id };
	return result;
});

export const fetchWishlistItems = createAsyncThunk("wishlist", async () => {
	const res = await queryWishlistItems();
	const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return result;
});

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

export const fetchTrendingVideos = createAsyncThunk("videos/fetchByTrending", async () => {
	try {
		const res = await queryAllContent("isTrending");
		const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return result;
	} catch (error) {
		throw new Error(error);
	}
});

export const fetchContent = createAsyncThunk("videos/fetchByRecommended", async (filter) => {
	try {
		const res = await queryAllContent(filter, initialLimit);

		const result = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		return result;
	} catch (error) {
		throw new Error(error);
	}
});
