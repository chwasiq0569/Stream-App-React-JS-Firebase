import React, { useState, useEffect } from "react";
import fire from "../../Firebase/config/firebase";
import "./auth.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, Link } from "react-router-dom";

toast.configure();
const Auth = (props) => {
  console.log("props.isProtected: ", props.isProtected);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fireErrors, setFireErrors] = useState("");
  const [changeBtn, setChangeBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const registerBtnFunc = (e) => {
    e.preventDefault();
    setChangeBtn(!changeBtn);
  };

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully Logged In");
        props.history.push("/movies");
        toast.success("LogIn Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setFireErrors(error.message);
        console.log(fireErrors);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("New User Created Successfully");
        props.history.push("/movies");
        toast.success("Sign Up Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        setFireErrors(error.message);
        console.log(fireErrors);
      });
  };

  return (
    <div className="signIn__Wrapper">
      <div className="signIn_Inner_Wrapper">
        <div className="auth__Container">
          <Link className="logoLink" to="/">
            <h1 className="streamLogo">Stream</h1>
          </Link>
          <form className="form">
            <h1 className="signInText">Sign In</h1>
            <p className="fireErrors">{fireErrors}</p>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {changeBtn ? (
              <button type="submit" onClick={signUp}>
                Sign Up
              </button>
            ) : (
              <button type="submit" onClick={login}>
                Log In
              </button>
            )}
            <p>New To Stream?</p>
            <button className="registerBtn" onClick={registerBtnFunc}>
              Register
            </button>
          </form>

          <p className="captchaInfo">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Auth);
