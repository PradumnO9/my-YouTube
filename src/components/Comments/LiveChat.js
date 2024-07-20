import React from "react";
import LiveChatContainer from "./LiveChatContainer";

const LiveChat = () => {
  return (
    <div className="md:flex w-full ml-2">
      <iframe
        className="rounded-xl w-[98%] h-[300px] md:w-[900px] md:h-[500px]"
        src={`https://www.youtube.com/embed/o5r1oxkofu0?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <LiveChatContainer />
    </div>
  );
};

export default LiveChat;
