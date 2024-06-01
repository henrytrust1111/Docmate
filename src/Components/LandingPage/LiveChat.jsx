import React from "react";
import { useNavigate } from "react-router-dom";
import "./LiveChat.css";
import { IoIosChatboxes } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";


const LiveChat = () => {
  const nav = useNavigate();
  const handleChat = () => {
    const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    const userToken = localStorage.getItem("loggedInUserToken");
    if (userInfo && userToken) {
      nav("/patient/chat");
    } else {
      toast.error("Please you have to be Logged-in first");
    }
  };
  return (
    <div className="chat-icon">
      <IoIosChatboxes size={40} color="#007bff" onClick={handleChat} />
    </div>
  );
};

export default LiveChat;
