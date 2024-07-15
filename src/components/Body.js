import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* based on routing of body the corisponding children will render here->outlet */}
      <Outlet />
    </div>
  );
};

export default Body;
