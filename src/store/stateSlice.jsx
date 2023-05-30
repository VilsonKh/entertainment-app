import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  error: null
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changePendingState(state, action) {
      state.isPending = action.payload
      // state.allVideos.push(action.payload)
    },

    changeErrorState(state, action) {
      state.error = action.payload
    }

  }
})

export const {changePendingState, changeErrorState} = stateSlice.actions;

export default stateSlice.reducer
