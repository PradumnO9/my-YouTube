import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopularVideos: null,
  },
  reducers: {
    addVideo: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
  },
});

export const { addVideo } = videosSlice.actions;
export default videosSlice.reducer;
