import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.mostPopularVideos);
  if (!videos)
    return (
      <h1>
        <Shimmer />
      </h1>
    );

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
