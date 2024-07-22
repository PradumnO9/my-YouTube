import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <Header />
      {onlineStatus ? (
        <div className="flex">
          <SideBar />
          {/* based on routing of body the corisponding children will render here->outlet */}
          <Outlet />
        </div>
      ) : (
        <h1 className="font-bold text-2xl text-center mt-40">
          You are offline, Please check your internet connection
        </h1>
      )}
    </div>
  );
};

export default Body;
