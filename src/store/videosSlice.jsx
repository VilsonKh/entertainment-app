import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  serials: [],
  videos: [],
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getAllVideos(state) {
      state.videos.push('Forrest Gump')
    }
  }
})

const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
  }
})


export default store;