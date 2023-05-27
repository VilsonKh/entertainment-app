import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  serials: null
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
    }
  }
})

export const {getAllMovies, getAllSerials} = videosSlice.actions;

export default videosSlice.reducer
