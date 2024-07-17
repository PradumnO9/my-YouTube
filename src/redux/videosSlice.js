import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    searchedVideos: null,
    videoComments: null,
    videoDetails: null,
    searchText: "",
  },
  reducers: {
    addSearchedVideos: (state, action) => {
      state.searchedVideos = action.payload;
    },
    addOneVideoComments: (state, action) => {
      state.videoComments = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  addSearchedVideos,
  addOneVideoComments,
  addVideoDetails,
  addSearchText,
} = videosSlice.actions;
export default videosSlice.reducer;
