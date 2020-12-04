import React from "react";
import "../Navbar/navbar.scss";
import { Link, withRouter } from "react-router-dom";
import fire from "./../../../Firebase/config/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Navbar = (props) => {
  const { user } = props;
  const signOut = () => {
    fire.auth().signOut();
    props.history.push("/");
    toast.warn("Log-Out Successfull.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <nav className="navbar__Wrapper">
      {/*if user is login it will access movies page otherwise it will see homepage*/}
      <Link
        to={user ? { pathname: "/movies" } : { pathname: "/" }}
        className="logoLink"
      >
        <div className="logo">Stream</div>
      </Link>
      <div className="authBtn">
        {user ? (
          <button className="signOutBtn" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <Link className="signInBtn" to="/auth">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
