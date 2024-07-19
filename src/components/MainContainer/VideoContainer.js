import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";
import usePopularVideos from "../../hooks/usePopularVideos";

const VideoContainer = () => {
  const data = useSelector((store) => store.videos);

  const { searchedVideos, popularVideos, searchText } = data;

  usePopularVideos();

  if (!popularVideos)
    return (
      <h1>
        <Shimmer />
      </h1>
    );

  return (
    <div>
      {searchText.length === 0 ? (
        <div className="flex flex-wrap">
          {popularVideos.map((video) => {
            return (
              <Link key={video.id} to={`/watch?v=${video.id}`}>
                <VideoCard info={video} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap">
          {searchedVideos?.map((video) => {
            return (
              <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                <VideoCard info={video} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
