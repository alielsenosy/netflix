import "./register.scss";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import TextField from "@mui/material/TextField";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Tv from "./components/Tv";
import Download from "./components/Download";
import EveryWhere from "./components/EveryWhere";
import Kids from "./components/Kids";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showMail, setShowMail] = useState(false);
  const history = useHistory();

  const handleStart = () => {
    setShowMail(true);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="register">
        <div className="regTop">
          <div className="regWrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt=""
              className="regLogo"
            />
            <button
              className="loginButton"
              onClick={() => history.push("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="regContainer">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!showMail ? (
            <div className="regInput">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="registerButton" onClick={handleStart}>
                Get Started <KeyboardArrowRightIcon />
              </button>
            </div>
          ) : (
            <form className="regInput">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
      <Tv />
      <Download />
      <EveryWhere />
      <Kids />
      <Questions />
      <Footer />
    </>
  );
};

export default Register;
