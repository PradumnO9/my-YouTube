import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        {/* based on routing of body the corisponding children will render here->outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
