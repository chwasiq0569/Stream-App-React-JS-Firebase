import React from "react";
import Button from "./Button";
const Form = ({
  logIn,
  signUp,
  email,
  password,
  fireErrors,
  setEmail,
  setPassword,
  changeBtn,
  registerBtnFunc,
}) => {
  return (
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
        // <button type="submit" onClick={signUp}>
        //   Sign Up
        // </button>
        <Button event={signUp} text={"Sign Up"} />
      ) : (
        // <button type="submit" onClick={logIn}>
        //   Log In
        // </button>
        <Button event={logIn} text={"Log In"} />
      )}
      <p>New To Stream?</p>
      <Button event={registerBtnFunc} text={"Register"} />
      {/* <button className="registerBtn" onClick={registerBtnFunc}>
        Register
      </button> */}
    </form>
  );
};

export default Form;
