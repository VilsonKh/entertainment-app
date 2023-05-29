import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  serials: [],
  allVideos: [],
  wishlist: []
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getAllMovies(state, action) {
      state.movies = action.payload
      // state.allVideos.push(action.payload)
    },

    getAllSerials(state, action) {
      state.serials = action.payload;
      // state.allVideos.push(action.payload)
    },

    concatVideos(state, action) {
      state.allVideos = action.payload
    },

    changeIsBookmarked(state, action) {
      console.log('changeBookmark')
      state.allVideos = action.payload
    },

    getWishlistItems(state, action) {
      console.log("getWishlist")
      state.wishlist = action.payload
    }

  }
})

export const {getAllMovies, getAllSerials, concatVideos, changeIsBookmarked, getWishlistItems} = videosSlice.actions;

export default videosSlice.reducer
