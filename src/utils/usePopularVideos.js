import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/videosSlice";

const usePopularVideos = () => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideo(json?.items));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default usePopularVideos;
