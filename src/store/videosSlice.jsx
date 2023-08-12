import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, limit, query, startAfter, where } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { getCurrentCard, lazyLoad, queryAllContent, queryWishlistItems } from "../firebase/service.jsx";

const initialState = {
	trendingVideo: [],
	trendingStatus: "idle",
	content: [],
	contentStatus: "idle",
	isBlockLoadButton: false,
	lazyLoadStatus: "idle",
	isModalOpen: false,
	currentCard: [],
};

let initialLimit = null;

if (window.screen.width > 1919) {
	initialLimit = 5;
}
if (window.screen.width < 1919) {
	initialLimit = 4;
}
if (window.screen.width < 1200) {
	initialLimit = 3;
}

export const fetchCurrentItem = createAsyncThunk("currentCard", async (videoId) => {
	console.log(videoId)
	const res = await getCurrentCard(videoId);
	const result = res.data();
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

export const fetchTrendingVideos = createAsyncThunk("videos/fetcByTrending", async () => {
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

export const videosSlice = createSlice({
	name: "videos",
	initialState,
	reducers: {
		setModalState(state) {
			state.isModalOpen = !state.isModalOpen;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrendingVideos.fulfilled, (state, action) => {
				state.trendingStatus = "succeeded";
				state.trendingVideo = [...action.payload];
			})
			.addCase(fetchTrendingVideos.pending, (state, action) => {
				state.trendingStatus = "loading";
			})
			.addCase(fetchTrendingVideos.rejected, (state, action) => {
				state.trendingStatus = "rejected";
			})
			.addCase(fetchContent.fulfilled, (state, action) => {
				state.contentStatus = "succeeded";
				state.isBlockLoadButton = false;
				state.content = [...action.payload];
			})
			.addCase(fetchContent.pending, (state, action) => {
				state.contentStatus = "loading";
				state.isBlockLoadButton = false;
			})
			.addCase(fetchContent.rejected, (state, action) => {
				state.contentStatus = "rejected";
			})
			.addCase(lazyLoadContentThunk.fulfilled, (state, action) => {
				state.content.push(...action.payload);
				action.payload.length < initialLimit ? (state.isBlockLoadButton = true) : (state.isBlockLoadButton = false);
				state.lazyLoadStatus = "succeeded";
			})
			.addCase(lazyLoadContentThunk.pending, (state, action) => {
				state.lazyLoadStatus = "loading";
			})
			.addCase(lazyLoadContentThunk.rejected, (state, action) => {
				state.lazyLoadStatus = "rejected";
			})
			.addCase(fetchWishlistItems.fulfilled, (state, action) => {
				state.contentStatus = "succeeded";
				state.content = [...action.payload];
			})
			.addCase(fetchWishlistItems.pending, (state, action) => {
				state.contentStatus = "loading";
			})
			.addCase(fetchWishlistItems.rejected, (state, action) => {
				state.contentStatus = "rejected";
			})
			.addCase(fetchCurrentItem.fulfilled, (state, action) => {
				state.contentStatus = "succeeded";
				state.currentCard = [action.payload];
			})
			.addCase(fetchCurrentItem.pending, (state, action) => {
				state.contentStatus = "loading";
			})
			.addCase(fetchCurrentItem.rejected, (state, action) => {
				state.contentStatus = "rejected";
			});
	},
});

export const { setModalState } = videosSlice.actions;
export const currentCard = (state) => state.currentCard;
export const modalState = (state) => state.isModalOpen;
export const trendingVideo = (state) => state.trendingVideo;
export const trendingStatus = (state) => state.trendingStatus;
export const content = (state) => state.content;
export const contentStatus = (state) => state.contentStatus;
export const lazyStatus = (state) => state.lazyLoadStatus;
export const isBlockLoadButton = (state) => state.isBlockLoadButton;
export default videosSlice.reducer;
