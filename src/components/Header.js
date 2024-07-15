import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleHamBurgerToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 my-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <RxHamburgerMenu
          onClick={handleHamBurgerToggle}
          className="cursor-pointer"
          size={35}
        />
        <div className="flex items-center mx-2">
          <FaYoutube color="red" size={35} />
          <h1 className="font-bold text-3xl mx-1">YouTube</h1>
        </div>
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full bg-gray-300 hover:bg-gray-200 p-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <FaUserCircle size={35} />
      </div>
    </div>
  );
};

export default Header;
