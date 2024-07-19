import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full md:w-4/5">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
