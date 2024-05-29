import "./Livechat.css";
import Frame1 from "../../asset/Frame1.png";
import Frame2 from "../../asset/Frame2.png";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Livechat = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const scrollRef = useRef(null);
  const url = "https://doc-mate-rose.vercel.app/messages";
  const url1 = "https://doc-mate-rose.vercel.app/get-messages";
  const socket = io("http://localhost:3000");

  const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
  const userToken = userInfo?.token;
  const headers = { Authorization: `Bearer ${userToken}` };

  const data = { message: input };

  const handleGet = async () => {
    try {
      const response = await axios.get(url1, { headers });
      response.data.messages.reverse();
      setOutput(response.data.messages);
      console.log(output);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.message || "An error occurred",
      });
    }
  };

  const handleSend = async (e) => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
    if (!input) return;

    try {
      const response = await axios.post(url, data, { headers });
      setInput("");
      setOutput((prev) => [...prev, data]);
      if (response) {
        socket.on("response", (datas) => {
          // setOutput((prev) => [...prev, datas]);
          setOutput((prev) => [...prev, datas].reverse());
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.message || "An error occurred",
      });
    }
  };

  useEffect(() => {
    handleGet();
  }, [output]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
                ref={i === output.length - 1 ? scrollRef : null}
                className={`message ${e?.role === "user" ? "user" : "bot"}`}
                key={i}
              >
                <div className="profile-picture">
                  <img src={e?.role === "user" ? Frame2 : Frame1} alt="Profile" />
                </div>
                <div className="message-text">
                  <p>{e.message}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="livechat-footer">
          <form onSubmit={handleSend} className="send-message-form">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Livechat;