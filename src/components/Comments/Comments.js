import React from "react";
import { useSelector } from "react-redux";
import OneComment from "./OneComment";

const Comments = () => {
  const videoComments = useSelector((store) => store.videos.videoComments);
  if (!videoComments) return;
  return (
    <div className="w-full md:w-full">
      <h1 className="font-bold text-2xl py-2 px-1">
        {videoComments.length} Comments
      </h1>
      <div className="h-56 overflow-y-scroll buttonList-scroll w-full md:h-full">{videoComments.map((comment) => {
        return (
          <OneComment
            key={comment.id}
            comment={comment?.snippet?.topLevelComment?.snippet}
          />
        );
      })}</div>
    </div>
  );
};

export default Comments;
