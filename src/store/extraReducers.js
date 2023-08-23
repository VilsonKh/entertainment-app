export let initialLimit = null;

if (window.screen.width > 1919) {
	initialLimit = 10;
}
if (window.screen.width < 1919) {
	initialLimit = 8;
}
if (window.screen.width < 1200) {
	initialLimit = 6;
}
if (window.screen.width < 500) {
	initialLimit = 4;
}

export const fetchTrendingVideosCases = {
	succeeded: (state, action) => {
		state.trendingStatus = "succeeded";
		state.trendingVideo = [...action.payload];
	},

	loading: (state, action) => {
		state.trendingStatus = "loading";
	},

	rejected: (state, action) => {
		state.trendingStatus = "rejected";
	},
};

export const fetchContentCases = {
	succeeded: (state, action) => {
		state.contentStatus = "succeeded";
		state.isEndOfList = false;
		state.content = [...action.payload];
	},
	loading: (state, action) => {
		state.contentStatus = "loading";
		state.isEndOfList = false;
	},
	rejected: (state, action) => {
		state.contentStatus = "rejected";
	},
};

export const lazyLoadContentThunkCases = {
	succeeded: (state, action) => {
		state.content.push(...action.payload);
		action.payload.length < initialLimit ? (state.isEndOfList = true) : (state.isEndOfList = false);
		state.lazyLoadStatus = "succeeded";
	},
	loading: (state, action) => {
		state.lazyLoadStatus = "loading";
	},
	rejected: (state, action) => {
		state.lazyLoadStatus = "rejected";
	},
};

export const fetchWishlistItemsCases = {
	succeeded: (state, action) => {
		state.contentStatus = "succeeded";
		state.content = [...action.payload];
	},
	loading: (state, action) => {
		state.contentStatus = "loading";
	},
	rejected: (state, action) => {
		state.contentStatus = "rejected";
	},
};

export const fetchCurrentItemCases = {
	succeeded: (state, action) => {
		state.contentStatus = "succeeded";
		state.currentCard = { ...action.payload };
	},
	loading: (state, action) => {
		state.contentStatus = "loading";
	},
	rejected: (state, action) => {
		state.contentStatus = "rejected";
	},
};

export const fetchSearchContentCases = {
	succeeded: (state, action) => {
		if (action.payload.length < 1) {
			state.searchStatus = "empty";
		} else {
			state.searchStatus = "succeeded";
		}
		state.searchContent = [...action.payload];
	},
	loading: (state, action) => {
		state.searchStatus = "loading";
	},
	rejected: (state, action) => {
		state.searchStatus = "rejected";
	},
};

export const fetchReviewsCases = {
	succeeded: (state, action) => {
		state.reviews = [...action.payload];
	},
};
