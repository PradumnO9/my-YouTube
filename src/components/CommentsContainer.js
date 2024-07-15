import React from "react";
import { FaUserCircle } from "react-icons/fa";

// N - level nesting in comments
const commentsData = [
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [],
  },
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [
      {
        name: "Pradumn Kumar",
        text: "Hello world, what's up!",
        replies: [],
      },
      {
        name: "Pradumn Kumar",
        text: "Hello world, what's up!",
        replies: [
          {
            name: "Pradumn Kumar",
            text: "Hello world, what's up!",
            replies: [
              {
                name: "Pradumn Kumar",
                text: "Hello world, what's up!",
                replies: [
                  {
                    name: "Pradumn Kumar",
                    text: "Hello world, what's up!",
                    replies: [
                      {
                        name: "Pradumn Kumar",
                        text: "Hello world, what's up!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Pradumn Kumar",
                    text: "Hello world, what's up!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [],
  },
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [],
  },
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [],
  },
  {
    name: "Pradumn Kumar",
    text: "Hello world, what's up!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 shadow-sm rounded-lg my-2">
      <FaUserCircle size={30} />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
        <Comment data={comment} />
        <div className="pl-10 ml-5 border border-l-black">
            <CommentList comments={comment.replies} />
        </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
