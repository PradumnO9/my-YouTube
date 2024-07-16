import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopularVideos: null,
    videoComments: null
  },
  reducers: {
    addVideo: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
    addOneVideoComments: (state, action) => {
      state.videoComments = action.payload
    }
  },
});

export const { addVideo, addOneVideoComments } = videosSlice.actions;
export default videosSlice.reducer;
