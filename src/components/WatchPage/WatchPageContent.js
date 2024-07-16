import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideVideoCard from "./SideVideoCards";
import Shimmer from "../../utils/Shimmer";

const WatchPageContent = () => {
  const videos = useSelector((store) => store.videos.mostPopularVideos);
  if (!videos)
    return (
      <h1>
        <Shimmer />
      </h1>
    );
  return (
    <div>
      {videos?.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <SideVideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default WatchPageContent;
