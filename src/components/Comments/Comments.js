import React from "react";
import { useSelector } from "react-redux";
import OneComment from "./OneComment";

const Comments = () => {
  const videoComments = useSelector((store) => store.videos.videoComments);
  if (!videoComments) return <h1>Loading...</h1>;
  return (
    <div>
      {videoComments.map((comment) => {
        return (
          <OneComment comment={comment?.snippet?.topLevelComment?.snippet} />
        );
      })}
    </div>
  );
};

export default Comments;
