import { configureStore, combineReducers } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice"

// import {store} from './redux/store';


//не работает devtools, работает staorage
 export default configureStore({
  reducer: videosReducer,
});

//работает devtools, не работает storage
// export default configureStore({
//   reducer: {
//     videos: videosReducer
//   }
// })

//вообще не работает
// const reducers = combineReducers({
//   videos: videosReducer,
// });

// export default configureStore({
//   reducer: reducers,
//   devTools: process.env.NODE_ENV !== 'production',
// });
