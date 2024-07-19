import React from "react";

import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { PiMusicNoteLight } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { SiLivechat } from "react-icons/si";
import { FaRegComments } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const hamBurgerToggle = useSelector((store) => store.app.hamBurgerToggle);
  const currentUser = useSelector((store) => store.user.currentUser);

  // Early Return pattern
  if (!hamBurgerToggle) return null;

  return (
    <>
      {currentUser && (
        <div className="p-5 shadow-lg w-[15%] hidden md:block">
          <ul className="mb-3">
            <li className="flex items-center p-2 hover:bg-gray-100">
              <MdHomeFilled size={20} />
              <Link to={"/"}>
                <h1 className="ml-5">Home</h1>
              </Link>
            </li>
            <li className="flex items-center p-2">
              <SiYoutubeshorts size={20} />
              <h1 className="ml-5">Shorts</h1>
            </li>
            <li className="flex items-center p-2">
              <MdOutlineSubscriptions size={20} />
              <h1 className="ml-5">Subscriptions</h1>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <SiLivechat size={20} />
              <Link to={"/live-chat"}>
                <h1 className="ml-5">Live Chat</h1>
              </Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <FaRegComments size={20} />
              <Link to={"/nested-comments"}>
                <h1 className="ml-5">Nested Comments</h1>
              </Link>
            </li>
          </ul>
          <hr />
          <h1 className="font-bold text-lg pt-3 pb-2">Subscriptions</h1>
          <ul className="mb-3">
            <li className="flex items-center py-2">
              <FaRegUserCircle size={20} />
              <h1 className="ml-5">Rhythmic Flute</h1>
            </li>
            <li className="flex items-center py-2">
              <FaRegUserCircle size={20} />
              <h1 className="ml-5">N.M.G. Music</h1>
            </li>
            <li className="flex items-center py-2">
              <FaRegUserCircle size={20} />
              <h1 className="ml-5">Carryminati</h1>
            </li>
            <li className="flex items-center py-2">
              <FaRegUserCircle size={20} />
              <h1 className="ml-5">Akshay Saini</h1>
            </li>
            <li className="flex items-center py-2">
              <FaRegUserCircle size={20} />
              <h1 className="ml-5">RexIsLive</h1>
            </li>
          </ul>
          <hr />
          <h1 className="font-bold text-lg pt-3 pb-2">Explore</h1>
          <ul>
            <li className="flex items-center py-2">
              <BsFire size={20} />
              <h1 className="ml-5">Trending</h1>
            </li>
            <li className="flex items-center py-2">
              <FiShoppingBag size={20} />
              <h1 className="ml-5">Shopping</h1>
            </li>
            <li className="flex items-center py-2">
              <PiMusicNoteLight size={20} />
              <h1 className="ml-5">Music</h1>
            </li>
            <li className="flex items-center py-2">
              <BiSolidCameraMovie size={20} />
              <h1 className="ml-5">Movie</h1>
            </li>
            <li className="flex items-center py-2">
              <SiYoutubegaming size={20} />
              <h1 className="ml-5">Gaming</h1>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
