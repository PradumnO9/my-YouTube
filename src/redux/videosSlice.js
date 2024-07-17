import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: null,
    searchedVideos: null,
    videoComments: null,
    videoDetails: null,
    searchText: "",
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload
    },
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
  addPopularVideos,
  addSearchedVideos,
  addOneVideoComments,
  addVideoDetails,
  addSearchText,
} = videosSlice.actions;
export default videosSlice.reducer;
