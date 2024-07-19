import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchPageContent from "./WatchPageContent";
import useVideoComments from "../../hooks/useVideoComments";
import Comments from "../Comments/Comments";
import useVideoDetails from "../../hooks/useVideoDetails";
import { PiShareFatLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useVideoDetails(searchParams);
  useVideoComments(searchParams);

  const videoDetails = useSelector((store) => store.videos.videoDetails);
  if (!videoDetails) return <h1>Loading...</h1>;
  const { channelTitle, title, description } = videoDetails[0]?.snippet;

  return (
    <div className="md:flex my-5">
      <div className="ml-10 w-4/6">
        <div>
          <iframe
            className="rounded-xl md:w-[900px] md:h-[500px]"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-3">
          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="flex items-center py-2">
            <h1 className="font-bold text-md">{channelTitle}</h1>
            <button className="bg-black text-white px-3 py-2 rounded-3xl hover:bg-opacity-85 ml-3">
              Subscribe
            </button>
            <div className="flex ml-[51%] cursor-pointer p-2 bg-gray-300 rounded-3xl hover:bg-gray-200">
              <button className="px-2">
                <AiOutlineLike size={27} />
              </button>
              <button className="px-2">
                <AiOutlineDislike size={27} />
              </button>
            </div>
            <div className="flex ml-3 items-center p-2 bg-gray-300 rounded-3xl hover:bg-gray-200 cursor-pointer">
              <PiShareFatLight size={27} />
              <h1 className="px-1 font-bold">Share</h1>
            </div>
          </div>
          {description && (
            <p className="bg-gray-200 p-2 rounded-lg h-32 overflow-y-auto">
              {description}
            </p>
          )}
        </div>
        <div>
          <Comments />
        </div>
      </div>
      <div className="ml-3 p-2">
        <WatchPageContent />
      </div>
    </div>
  );
};

export default WatchPage;
