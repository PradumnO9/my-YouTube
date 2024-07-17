import { useEffect } from "react";
import { VIDEO_DETAILS_API } from "./constants";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../redux/videosSlice";

const useVideoDetails = (searchParams) => {
  const dispatch = useDispatch();
  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + searchParams.get("v"));
    const json = await data.json();
    dispatch(addVideoDetails(json?.items));
  };

  useEffect(() => {
    getVideoDetails();
  }, [searchParams]);
};

export default useVideoDetails;
