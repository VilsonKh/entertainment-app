import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  serials: [],
  allVideos: []
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getAllMovies(state, action) {
      state.movies = action.payload
    },

    getAllSerials(state, action) {
      state.serials = action.payload
    },

    concatVideos(state) {
      state.allVideos = [...state.movies,...state.serials]
    }
  }
})

export const {getAllMovies, getAllSerials, concatVideos} = videosSlice.actions;

export default videosSlice.reducer
