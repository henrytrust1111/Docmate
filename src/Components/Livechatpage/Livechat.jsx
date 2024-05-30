import "./Livechat.css";
import Frame1 from "/docmate3.png";
import Frame2 from "../../asset/Frame2.png";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Livechat = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const scrollRef = useRef(null);
  const messagesEndRef = useRef(null);
  const url = "https://doc-mate-rose.vercel.app/messages";
  const url1 = "https://doc-mate-rose.vercel.app/get-messages";
  const socket = io("http://localhost:3000");

  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = userInfo?.token;
  const headers = { Authorization: `Bearer ${userToken}` };

  const handleGet = async () => {
    try {
      const response = await axios.get(url1, { headers });
      response.data.messages.reverse();
      setOutput(response.data.messages);
      scrollToBottom();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.message || "An error occurred",
      });
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input) return;

    const timestamp = new Date().toISOString();

    const data = { message: input, createdAt: timestamp };
    setInput("");
    try {
      const response = await axios.post(url, data, { headers });
      setOutput((prev) => [...prev, data]);
      if (response) {
        socket.on("response", (datas) => {
          setOutput((prev) => [...prev, datas].reverse());
        });
      }
      scrollToBottom();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.message || "An error occurred",
      });
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGet();
  }, [output]);

  useEffect(() => {
    scrollToBottom();
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}/${month}/${year} ${hours}:${minutes}${ampm}`;
  };

  return (
    <div className="livechat-container">
      <div className="livechat-wrapper">
        <header className="livechat-header">
          <h1>Live Chat</h1>
        </header>
        <main className="livechat-main">
          <div className="messages-container">
            {output.map((e, i) => (
              <div
                className={`message ${e?.role === "user" ? "user" : "bot"}`}
                key={i}
                ref={scrollRef}
              >
                <div className="profile-picture">
                  <img
                    src={e?.role === "user" ? Frame2 : Frame1}
                    alt="Profile"
                  />
                </div>
                <div className="message-text">
                  <p>{e.message}</p>
                  <div
                    className={e?.role === "user" ? "timestamp" : "timestamp1"}
                  >
                    {formatTimestamp(e.createdAt)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </main>
        <footer className="livechat-footer">
          <form onSubmit={handleSend} className="send-message-form">
            <textarea
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              required
              // rows="1"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Livechat;
