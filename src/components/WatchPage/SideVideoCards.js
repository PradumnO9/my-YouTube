import React from "react";

const SideVideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 md:m-2 w-full h-40 hover:scale-105 ease-out duration-150 flex">
      <img
        className="rounded-xl"
        src={thumbnails?.high?.url}
        alt={channelTitle}
      />
      <div className="px-2">
        <ul>
          <li className="font-bold text-md py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
      <img
        className="w-10 h-10 mt-[4px]"
        alt="dots"
        src="https://static.thenounproject.com/png/3560972-200.png"
      />
    </div>
  );
};

export default SideVideoCards;
