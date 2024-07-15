import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { casheResults } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const handleHamBurgerToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 api calls is < 200ms
    // decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      casheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-3 my-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <RxHamburgerMenu
          onClick={handleHamBurgerToggle}
          className="cursor-pointer"
          size={30}
        />
        <img
          className="w-36 m-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10 ml-40">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full py-2 px-5"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="border border-gray-400 rounded-r-full bg-gray-300 hover:bg-gray-200 p-2">
            Search
          </button>
          {showSuggestions && (
            <div className="absolute bg-white py-2 shadow-lg border border-gray-100 rounded-xl w-[30rem] z-30">
              <ul>
                {suggestions.map((sugg) => {
                  return (
                    <li
                      key={sugg}
                      className="flex items-center py-2 px-3 hover:bg-gray-100"
                    >
                      <CiSearch size={20} /> <h1 className="ml-2">{sugg}</h1>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <FaUserCircle size={35} />
      </div>
    </div>
  );
};

export default Header;
