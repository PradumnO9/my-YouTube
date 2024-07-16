import { useEffect } from "react";
import { YOUTUBE_COMMENT_API } from "./constants";
import { useDispatch } from "react-redux";
import { addOneVideoComments } from "../redux/videosSlice";

const useVideoComments = (searchParams) => {
  const dispatch = useDispatch();
  const getComments = async () => {
    const data = await fetch(`${YOUTUBE_COMMENT_API}${searchParams.get("v")}`);
    const json = await data.json();
    dispatch(addOneVideoComments(json?.items));
  };

  useEffect(() => {
    getComments();
  }, [searchParams]);
};

export default useVideoComments;
