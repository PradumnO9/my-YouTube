import React from "react";
import { FaUserCircle } from "react-icons/fa";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-80">
      <img className="rounded-xl"src={thumbnails?.high?.url} alt={channelTitle} />
      <div className="flex">
      <FaUserCircle className="mt-2 mx-3" size={30} />
      <ul>
        <li className="font-bold text-md py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
      </div>
    </div>
  );
};

export default VideoCard;
