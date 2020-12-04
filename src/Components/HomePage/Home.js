import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./home.scss";
import Collapse from "./Collapse/Collapse";
import EmailComp from "./EmailComp/EmailComp";
import Footer from "./Footer/Footer";
import fire from "./../../Firebase/config/firebase";
import DownloadComp from "./DownloadComp/DownloadComp";

const Home = (props) => {
  const { user, changeBtn, setChangeBtn } = props;
  const [email, setEmail] = useState("dummyUser@gmail.com");
  const [password, setPassword] = useState("dummyUser@gmail.com");
  const [fireErrors, setFireErrors] = useState("");
  const [changeBtns, setChangeBtns] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeBtnFunc = () => {
    setChangeBtns(true);
  };

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully Logged In");
        props.history.push("/movies");
      })
      .catch((error) => {
        setFireErrors(error.message);
        console.log(fireErrors);
        setChangeBtns(false);
      });
  };

  return (
    <div className="homePage__Wrapper">
      <div className="homePage_Inner_Wrapper">
        <Navbar user={user} changeBtn={changeBtn} setChangeBtn={setChangeBtn} />
        <div className="Hero__Data">
          <h1 className="hero__Text">Unlimited Movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <p className="fireErrorsHomeAuth">{fireErrors}</p>
          <EmailComp
            login={login}
            changeBtnFunc={changeBtnFunc}
            changeBtns={changeBtns}
            changeEmail={changeEmail}
            changePassword={changePassword}
            email={email}
            password={password}
          />
        </div>
        <DownloadComp />
        <div className="collapseContainer">
          <h1>Frequently Asked Questions</h1>
          <Collapse />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
