import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideVideoCard from "./SideVideoCards";
import Shimmer from "../../utils/Shimmer";
import ButtonList from "../MainContainer/ButtonList";

const WatchPageContent = () => {
  const videos = useSelector((store) => store.videos.searchedVideos);
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
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <SideVideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default WatchPageContent;
