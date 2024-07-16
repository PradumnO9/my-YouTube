import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchPageContent from "./WatchPageContent";
import useVideoComments from "../../utils/useVideoComments";
import Comments from "../Comments/Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useVideoComments(searchParams);

  return (
    <div className="flex my-5">
      <div className="ml-24">
        <div>
          <iframe
            className="rounded-xl"
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Comments />
      </div>
      <div className="ml-3 p-2">
        <WatchPageContent />
      </div>
    </div>
  );
};

export default WatchPage;
