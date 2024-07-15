import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        videos: videosSlice
    }
})

export default appStore;