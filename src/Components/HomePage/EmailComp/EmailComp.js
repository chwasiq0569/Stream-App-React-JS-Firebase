import React, { useState } from "react";
import "../home.scss";
const EmailComp = ({
  login,
  changeBtnFunc,
  changeBtns,
  changeEmail,
  changePassword,
  email,
  password,
}) => {
  return (
    <div className="emailInput">
      {!changeBtns ? (
        <>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={changeEmail}
            value={email}
          />
          <button onClick={changeBtnFunc}>GO</button>
        </>
      ) : (
        <>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={changePassword}
            value={password}
          />
          <button onClick={login}>CONTINUE</button>
        </>
      )}
    </div>
  );
};

export default EmailComp;
