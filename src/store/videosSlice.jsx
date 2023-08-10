import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, limit, query, startAfter, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

const initialState = {
	trendingVideo: [],
	trendingStatus: "idle",
	recommendedVideo: [],
	recommendedStatus: "idle",
	isBlockLoadButton: false,
	paginationStatus: 'idle'
};

let counter = null;
if(window.screen.width > 1919) {
	counter = 5
} 
 if (window.screen.width < 1919) {
	counter = 4
} 
 if (window.screen.width < 1200) {
	counter = 3
}

let initialLimit = null;
if(window.screen.width > 1919) {
	initialLimit = 5
} 
if (window.screen.width < 1919) {
	initialLimit = 4
} 
if (window.screen.width < 1200) {
	initialLimit = 3
}

export const fetchTrendingVideos = createAsyncThunk(
	"videos/fetcByTrending",
	async () => {
		try {
			const res = await getDocs(query(collection(db, `videos`), where("isTrending", "==", "true")));
			const result = [];
			res.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
);

export const fetchRecommendedVideos = createAsyncThunk(
	'videos/fetchByRecommended',
	async () => {
		try {
			const res = await getDocs(query(collection(db, `videos`), where("isRecommended", "==", "true"), limit(initialLimit)));
			const result = [];
			res.forEach((doc) => result.push({ ...doc.data(), id: doc.id }));
			return result
		} catch (error) {
			throw new Error(error)
		}
	}
)

export const paginateRecommendedVideos = createAsyncThunk(
	'videos/paginateRecommended',
	async () => {
		try{
			const res =  await getDocs(query(collection(db, `videos`), where("isRecommended", "==", "true"), limit(counter)));
			const lastVisible = res.docs[res.docs.length - 1]
			const next = await getDocs(query(collection(db, 'videos'), where('isRecommended', '==', 'true'), startAfter(lastVisible), limit(initialLimit)))
			const result = [];
			next.forEach((doc)=> result.push({...doc.data(), id: doc.id}))
			counter += initialLimit
			return result
	} catch (error) {

	}
}
)

export const videosSlice = createSlice({
	name: "videos",
	initialState,
	reducers: {
		getTrending(state, action) {
			state.trendingVideo.push(action.payload);
		},
		incrementLimit(state, action) {
			console.log('increment')
			state.loadingLimit = state.loadingLimit + 3
		}
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
			.addCase(fetchRecommendedVideos.fulfilled, (state, action) => {
				state.recommendedStatus = 'succeeded';
				state.recommendedVideo = [...action.payload];
			})
			.addCase(fetchRecommendedVideos.pending, (state, action) => {
				state.recommendedStatus = 'loading';
			})
			.addCase(fetchRecommendedVideos.rejected, (state, action) => {
				state.trendingStatus = 'rejected'
			})
			.addCase(paginateRecommendedVideos.fulfilled, (state, action) => {
				state.recommendedVideo.push(...action.payload)
				if(action.payload.length < initialLimit) state.isBlockLoadButton = true;
				state.paginationStatus = 'succeeded'
			})
			.addCase(paginateRecommendedVideos.pending, (state, action) => {
				state.paginationStatus = 'loading';
			})
			.addCase(paginateRecommendedVideos.rejected, (state, action) => {
				state.paginationStatus = 'rejected';
			})
	},
});

export const { getTrending, incrementLimit } = videosSlice.actions;
export const trendingContent = (state) => state.trendingVideo;
export const trendingStatus = (state) => state.trendingStatus;
export const recommendedContent = (state) => state.recommendedVideo;
export const recommenedeStatus = (state) => state.recommendedStatus;
export const paginationStatus = (state) => state.paginationStatus;
export const isBlockLoadButton = (state) => state.isBlockLoadButton
export default videosSlice.reducer;
