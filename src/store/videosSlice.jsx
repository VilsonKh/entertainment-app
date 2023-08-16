import { createSlice } from "@reduxjs/toolkit";
import { fetchContent, fetchCurrentItem, fetchReviews, fetchSearchContent, fetchTrendingVideos, fetchWishlistItems, lazyLoadContentThunk } from "./thunks.js";
import { fetchContentCases, fetchCurrentItemCases, fetchReviewsCases, fetchSearchContentCases, fetchTrendingVideosCases, fetchWishlistItemsCases, lazyLoadContentThunkCases } from "./extraReducers.js";

const initialState = {
	trendingVideo: [],
	trendingStatus: "idle",
	content: [],
	contentStatus: "idle",
	isEndOfList: false,
	lazyLoadStatus: "idle",
	isModalOpen: false,
	currentCard: {},
	searchContent: [],
	searchStatus: "idle",
	reviews: [],
	isSearchPopupOpen: false,
};

export const videosSlice = createSlice({
	name: "videos",
	initialState,
	reducers: {
		setModalState(state) {
			state.isModalOpen = !state.isModalOpen;
		},
		cleanSearchContent(state) {
			state.searchContent = [];
		},
		cleanCurrentItemContent(state) {
			state.currentCard = {};
		},
		setIsSearchPopupOpen(state, action) {
			state.isSearchPopupOpen = action.payload;
		},
		cleanContent(state) {
			state.content = []
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrendingVideos.fulfilled, fetchTrendingVideosCases.succeeded)
			.addCase(fetchTrendingVideos.pending, fetchTrendingVideosCases.loading)
			.addCase(fetchTrendingVideos.rejected, fetchTrendingVideosCases.rejected)
			.addCase(fetchContent.fulfilled, fetchContentCases.succeeded)
			.addCase(fetchContent.pending, fetchContentCases.loading)
			.addCase(fetchContent.rejected, fetchContentCases.rejected)
			.addCase(lazyLoadContentThunk.fulfilled, lazyLoadContentThunkCases.succeeded)
			.addCase(lazyLoadContentThunk.pending, lazyLoadContentThunkCases.loading)
			.addCase(lazyLoadContentThunk.rejected, lazyLoadContentThunkCases.rejected)
			.addCase(fetchWishlistItems.fulfilled, fetchWishlistItemsCases.succeeded)
			.addCase(fetchWishlistItems.pending, fetchWishlistItemsCases.loading)
			.addCase(fetchWishlistItems.rejected, fetchWishlistItemsCases.rejected)
			.addCase(fetchCurrentItem.fulfilled, fetchCurrentItemCases.succeeded)
			.addCase(fetchCurrentItem.pending, fetchCurrentItemCases.loading)
			.addCase(fetchCurrentItem.rejected, fetchCurrentItemCases.rejected)
			.addCase(fetchSearchContent.fulfilled, fetchSearchContentCases.succeeded)
			.addCase(fetchSearchContent.pending, fetchSearchContentCases.loading)
			.addCase(fetchSearchContent.rejected, fetchSearchContentCases.rejected)
			.addCase(fetchReviews.fulfilled, fetchReviewsCases.succeeded)
			
	},
});

export const { setModalState, 
							 cleanSearchContent, 
							 cleanCurrentItemContent, 
							 setIsSearchPopupOpen, 
							 cleanContent } = videosSlice.actions;
export const reviewsContetn = (state) => state.reviews;
export const searchContent = (state) => state.searchContent;
export const searchStatus = (state) => state.searchStatus;
export const currentCard = (state) => state.currentCard;
export const modalState = (state) => state.isModalOpen;
export const trendingVideo = (state) => state.trendingVideo;
export const trendingStatus = (state) => state.trendingStatus;
export const content = (state) => state.content;
export const contentStatus = (state) => state.contentStatus;
export const lazyStatus = (state) => state.lazyLoadStatus;
export const isEndOfList = (state) => state.isEndOfList;
export const searchPopupState = (state) => state.isSearchPopupOpen;
export default videosSlice.reducer;
