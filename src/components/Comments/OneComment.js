import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const OneComment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, textOriginal, likeCount } =
    comment;
  return (
    <div className="flex bg-gray-100 p-2 shadow-sm rounded-lg my-2">
      <img
        className="w-10 h-10 mx-2 rounded-full"
        alt="logo"
        src={authorProfileImageUrl}
      />
      <div className="px-3">
        <h1 className="font-bold">{authorDisplayName}</h1>
        <p>{textOriginal}</p>
        <div className="flex items-center mt-2">
          <div className="cursor-pointer p-1 hover:bg-gray-300 rounded-full">
            <AiOutlineLike size={20} />
          </div>
          <h1 className="mx-1">{likeCount}</h1>
          <h1 className="text-sm ml-5 cursor-pointer p-1 font-bold hover:bg-gray-300 rounded-full">
            Reply
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
