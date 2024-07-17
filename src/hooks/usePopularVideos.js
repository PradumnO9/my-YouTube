import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../redux/videosSlice";

const usePopularVideos = () => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addPopularVideos(json?.items));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default usePopularVideos;
