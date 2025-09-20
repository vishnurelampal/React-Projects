import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, createCustomChat } from "../utils/Redux/chatSlice";
import {
  generateRandomName,
  generateRandomMessage,
  getRandomUserIcons,
} from "../utils/HelperFunctions";
const LiveChatContainer = () => {
  const [inputChat, setInputChat] = useState("");
  const [showChatFlag, setShowChatFlag] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const generateChat = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
          imageUrl: getRandomUserIcons(),
        })
      );
    }, 1000);
    console.log(messages);
    return () => clearInterval(generateChat);
  }, []);
  useEffect(() => {
    const showChatAfterSomeTime = setTimeout(() => {
      setShowChatFlag(true);
    }, 1500);
    return () => clearInterval(showChatAfterSomeTime);
  }, []);

  function handleChatClick() {
    dispatch(
      createCustomChat({
        name: generateRandomName(),
        message: inputChat,
        imageUrl: getRandomUserIcons(),
      })
    );
    setInputChat("");
  }

  return (
    <>
      {showChatFlag && (
        <div>
          <div className=" flex overflow-y-scroll h-[500px] w-[400px] flex-col-reverse ">
            {messages.map((messages, index) => (
              <ChatMessage
                key={index}
                name={messages.name}
                message={messages.message}
                imageUrl={messages.imageUrl}
              />
            ))}
          </div>

          <form
            className="flex my-2 h-[40px] w-full gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleChatClick();
            }}
          >
            <input
              className="w-96 px-4 h-full border rounded-3xl bg-gray-200 focus:outline-gray-400"
              type="text"
              placeholder="chat"
              value={inputChat}
              onChange={(e) => {
                setInputChat(e.target.value);
              }}
            />
            <button
              className="bg-gray-200 flex-grow rounded-3xl h-full px-4"
              onClick={handleChatClick}
            >
              Chat
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChatContainer;
