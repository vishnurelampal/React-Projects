import React from "react";
const ChatMessage = ({ name, message, imageUrl }) => {
  return (
    <div id="chatmsgDiv" className="flex gap-3 p-3 border-b border-gray-200">
      <img className="w-7 h-7 rounded-full" src={imageUrl} alt="user-logo" />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
