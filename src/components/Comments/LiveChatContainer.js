import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helper";

const LiveChatContainer = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // Here we can call API for live chat data
    // console.log("API Polling");
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="mx-2 p-2 w-full h-[450px] border border-black bg-slate-100  rounded-tl-lg rounded-tr-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <LiveChatMessage
              key={index}
              name={chat.name}
              message={chat.message}
            />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black  rounded-bl-lg rounded-br-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Padumn",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-10/12 px-2"
          type="text"
          placeholder="Type Something!"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 mx-2 bg-gray-300 rounded-lg hover:bg-gray-200">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
