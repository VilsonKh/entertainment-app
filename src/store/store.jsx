import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice"
// import {store} from './redux/store';

 export default configureStore({
  reducer: {
    videos: videosReducer,
  }
});

