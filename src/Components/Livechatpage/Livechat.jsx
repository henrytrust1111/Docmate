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





// import "./Livechat.css";
// import Frame1 from "../../asset/Frame1.png";
// import Frame2 from "../../asset/Frame2.png";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";

// const Livechat = () => {
//   const [input, setInput] = useState();
//   const [output, setOutput] = useState([]);
//   const scrollRef = useRef();
//   // console.log(input);
//   const url = "https://doc-mate-rose.vercel.app/messages";
//   // const url = "http://localhost:3000/api/messages";
//   const url1 = "https://doc-mate-rose.vercel.app/get-messages";
//   // const url1 = "http://localhost:3000/api/get-messages";
//   // const socket = io("https://doc-mate.onrender.com");
//   // const socket = io("https://doc-mate-rose.vercel.app");
//   const socket = io("http://localhost:3000");

//   const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
//   const userToken = userInfo?.token;
//   const headers = {
//     Authorization: `Bearer ${userToken}`,
//   };

//   const data = { message: input };
//   // console.log(typeof data);

//   const handleGet = async () => {
//     try {
//       const response = await axios.get(url1, { headers });
//       response.data.messages.reverse();
//       setOutput(response.data.messages); // Clear input after sending
//     } catch (error) {
//       console.log("Message sent:", input);
//       console.log(error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops",
//         text: error.message || "An error occurred",
//       });
//     }
//   };

//   const handleSend = async (e) => {
//     e.preventDefault();
//     // console.log(input);
//     if (!input) {
//       console.log("the input is empty");
//     }
//     try {
//       const response = await axios.post(url, data, { headers });
//       // handleGet();
//       setInput(""); // Clear input after sending
//       setOutput((prev) => [...prev, data].reverse());
//       if (response) {
//         socket.on("response", (datas) => {
//           console.log(datas);
//           setOutput((prev) => [...prev, datas].reverse());
//         });
//       }
//     } catch (error) {
//       console.log("Message sent:", input);
//       console.log(error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops",
//         text: error.message || "An error occurred",
//       });
//     }
//   };

//   // useEffect(()=>{
//   //   handleGet()
//   // },[output])

//   useEffect(() => {
//     handleGet();
//     // scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [output]);

//   return (
//     <div className="LivechatContainer">
//       <div className="LiveChatWrapper">
//         <div className="LivechatTop">
//           <h1>Live Chat</h1>
//         </div>
//         <div className="LiveChatdownBox">
//           <div className="LiveChatdownBoxContainer">
//             <div className="LiveChatdownWrapper">
//               {output?.reverse().map((e, i) => (
//                 <div
//                   ref={scrollRef}
//                   className={
//                     e?.role === "user" ? "LivechatHello" : "LivechatHello1"
//                   }
//                   key={i}
//                 >
//                   <div className="LivechatProfilecircle1">
//                     <div className="Leftlivechatprofile">
//                       <img
//                         src={e?.role === "user" ? Frame2 : Frame1}
//                         alt="image"
//                       />
//                     </div>
//                     <div className="Rightlivechattext">
//                       <div className="Rightlivechattextwrap">
//                         <p>{e.message}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="SendtextContainer">
//           <div className="Sendtextmainbody">
//             <div className="sendtextlivechatwrap">
//               <div className="Leftsendtectlivechat">
//                 <input
//                   type="text"
//                   placeholder="Some text...."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                 />
//               </div>
//               <div className="Rightsendtectlivechat" onClick={handleSend}>
//                 <button>Send</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Livechat;
