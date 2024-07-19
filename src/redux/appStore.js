import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";
import liveChatSlice from "./liveChatSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        videos: videosSlice,
        chat: liveChatSlice,
        user: userSlice
    }
})

export default appStore;