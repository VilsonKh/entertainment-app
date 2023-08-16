import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice"

 export default configureStore({
  reducer: videosReducer,
});