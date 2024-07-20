import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { casheResults } from "../redux/searchSlice";
import { addSearchText } from "../redux/videosSlice";
import { addUser, removeUser } from "../redux/userSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useVideosUsingSearch from "../hooks/useVideosUsingSearch";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const searchText = useSelector((store) => store.videos.searchText);
  const currentUser = useSelector((store) => store.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleHamBurgerToggle = () => {
    dispatch(toggleMenu());
  };

  // updating redux store => searchVideos
  useVideosUsingSearch(searchText);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        dispatch(
          addUser({
            name: displayName,
            profilePhoto: photoURL,
            uid: uid,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

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
        {currentUser && (
          <RxHamburgerMenu
            onClick={handleHamBurgerToggle}
            className="cursor-pointer invisible md:visible"
            size={30}
          />
        )}
        <img
          className="w-36 mx-3 my-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
        {currentUser && (
          <h1 className="invisible md:visible py-1 px-3 bg-red-500 rounded-lg shadow-lg text-white mx-1 cursor-pointer">
            {currentUser?.name}
          </h1>
        )}
      </div>
      <div className="col-span-10 ml-40 hidden md:block">
        {currentUser && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex">
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
              <img
                className="border border-gray-400 rounded-r-full bg-gray-300 hover:bg-gray-200 px-3 py-2 cursor-pointer"
                onClick={() => {
                  dispatch(addSearchText(searchQuery));
                }}
                alt="search"
                width={50}
                src="https://cdn-icons-png.flaticon.com/256/149/149309.png"
              />
            </div>
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
          </form>
        )}
      </div>
      <div className="col-span-1 flex items-center">
        {currentUser && (
          <>
            <img
              className="w-10 h-10 mr-5 md:mr-0 rounded-full cursor-pointer md:cursor-text"
              alt="profile"
              src={currentUser?.profilePhoto}
              onClick={() => {
                setProfileToggle(!profileToggle);
              }}
            />
            {profileToggle && (
              <div className="visible md:hidden absolute w-[95%] z-30 -ml-[81%] text-center -mb-72 rounded-lg shadow-md bg-gradient-to-t from-black p-2">
                <h1 className="py-1 px-3 my-4 bg-red-500 rounded-lg shadow-lg text-white mx-1 cursor-pointer">
                  {currentUser?.name}
                </h1>
                <Link
                  className="px-[43%] py-2 m-2 bg-green-500 rounded-lg font-bold text-white hover:bg-green-400"
                  to="/"
                  onClick={() => {setProfileToggle(!profileToggle)}}
                >
                  Home
                </Link>
                <div className="flex my-4">
                  <input
                    className="w-full border border-gray-400 rounded-l-full py-2 px-5"
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
                  <img
                    className="border border-gray-400 rounded-r-full bg-gray-300 hover:bg-gray-200 px-3 py-2 cursor-pointer"
                    onClick={() => {
                      dispatch(addSearchText(searchQuery));
                      setProfileToggle(!profileToggle)
                    }}
                    alt="search"
                    width={50}
                    src="https://cdn-icons-png.flaticon.com/256/149/149309.png"
                  />
                </div>
                <Link
                  className="px-[41%] py-2 m-2 bg-purple-500 rounded-lg font-bold text-white hover:bg-green-400"
                  to="/live-chat"
                  onClick={() => {setProfileToggle(!profileToggle)}}
                >
                  LiveChat
                </Link>
                <button
                  className="px-[43%] py-2 mt-4 bg-red-500 rounded-lg font-bold text-white hover:bg-red-400"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            )}
            <button
              className="hidden md:block px-3 py-2 m-2 bg-red-500 rounded-lg font-bold text-white hover:bg-red-400"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        )}
        {!currentUser && (
          <Link
            className="px-3 -mr-20 py-2 m-2 bg-green-500 rounded-lg font-bold text-white hover:bg-green-400"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
