import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Movies from "./Components/Movies/Movies";
import { Route, withRouter } from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";
import Auth from "./Components/Auth/Auth";
import fire from "./Firebase/config/firebase";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
function App(props) {
  const { match, location, history } = props;
  const [user, setUser] = useState(null);
  const [changeBtn, setChangeBtn] = useState(false);
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("loggedIn");
        setUser(user);
        setChangeBtn(false);
        user ? history.push("/movies") : history.push("/auth");
      } else {
        setUser(user);
        console.log("loggedOut");
        setChangeBtn(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <PrivateRoute
        user={user}
        path="/movies"
        component={() => <Movies user={user} />}
      />
      <PrivateRoute
        user={user}
        path="/moviepage/:id"
        component={() => <MoviePage user={user} />}
      />
      <Route exact path="/auth" component={() => <Auth user={user} />} />
      <Route exact path="/" component={() => <Home user={user} />} />
    </div>
  );
}

export default withRouter(App);
