import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 md:w-[287px] hover:scale-105 ease-out duration-150">
      <img
        className="rounded-xl"
        src={thumbnails?.high?.url}
        alt={channelTitle}
      />
      <div className="flex">
        <img
          className="w-8 h-8 mt-2 mx-2"
          alt="channel-logo"
          src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png"
        />
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
