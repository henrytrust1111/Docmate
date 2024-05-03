import React from "react";
import { useNavigate } from "react-router-dom";
import "./LiveChat.css";
import Swal from "sweetalert2";

const LiveChat = () => {
  const nav = useNavigate();
  const handleChat = () => {
    const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    const userToken = localStorage.getItem("loggedInUserToken");
    if (userInfo && userToken) {
      nav("/chat");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Entrance",
        text: "Please you have to be Logged-in first",
      });
    }
  };
  return (
    <div className="chat-icon">
      <img
        src="/bubble-chat.png"
        alt=""
        style={{ width: "90%", height: "90%" }}
        onClick={handleChat}
      />
    </div>
  );
};

export default LiveChat;
