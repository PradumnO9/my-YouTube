import { useEffect } from "react";
import { YOUTUBE_SEARCH_USING_SEARCHQUERY_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchedVideos } from "../redux/videosSlice";

const useVideosUsingSearch = (searchText) => {
  const dispatch = useDispatch();
  const getVideosUsingSearchQuery = async () => {
    const data = await fetch(
      `${YOUTUBE_SEARCH_USING_SEARCHQUERY_API}${searchText}`
    );
    const json = await data.json();
    dispatch(addSearchedVideos(json.items));
  };

  useEffect(() => {
    getVideosUsingSearchQuery();
  }, [searchText]);
};

export default useVideosUsingSearch;
