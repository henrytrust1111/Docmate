import { useState } from "react";
import "./Enteremail.css";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Enteremail = () => {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState("");
    const nav = useNavigate();
//   console.log(email);

  const handleSubmit = async () => {
    console.log("Api");
    try {
      setLoading(true);
      const res = await axios.post("https://doc-mate.onrender.com/forgot", {
        email,
      });
    //   console.log(res.data);
      toast.success(res.data)
     setTimeout(() => {
     }, 9000);
      // toast.success("Client added Successfully");
      setLoading(false);
      setemail("");
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };
  const handleLogo = ()=>{
    nav("/")
  }

  return (
    <>
      <div className="Enteremailmainpage">
        <div className="EnteremailsucmainBody">
          <div className="Entermainheader">
            <div className="EnteremailmainheaderLogo" onClick={handleLogo}>
              <img src="public/docmate3.png" alt="" />
            </div>
          </div>
          <div className="Enteremailtheader">
            <div className="EnteremailsucBody">
              <div className="EnteremailsucBodywrapper">
                <div className="Enteremailsuccessfullybox">
                  <h3>Enter email</h3>
                </div>
                <div className="Eneteremailapprovedtickedem"></div>
                <div className="Enteremailapprovedticked">
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="EnteremailLoginboxem"></div>
                <div className="EnteremaullLoginbox">
                  <button onClick={() => handleSubmit()}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Enteremail;
