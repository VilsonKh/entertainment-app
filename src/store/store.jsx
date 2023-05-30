import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice"
import stateReducer from './stateSlice'
// import {store} from './redux/store';

 export default configureStore({
  reducer: {
    videos: videosReducer,
    state: stateReducer
  }
});

