import React from "react";
import { Link } from "react-router-dom";
import "./LiveChat.css";

const LiveChat = () => {
  return (
    <div className="chat-icon">
      <Link to="/chat">
        <img
          src="/bubble-chat.png"
          alt=""
          style={{ width: "90%", height: "90%" }}
        />
      </Link>
    </div>
  );
};

export default LiveChat;
