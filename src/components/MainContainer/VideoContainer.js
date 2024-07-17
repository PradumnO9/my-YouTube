import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";

const VideoContainer = () => {
  const searchedVideos = useSelector((store) => store.videos.searchedVideos);
  if (!searchedVideos)
    return (
      <h1>
        <Shimmer />
      </h1>
    );

  return (
    <div className="flex flex-wrap">
      {searchedVideos.map((video) => {
        return (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
