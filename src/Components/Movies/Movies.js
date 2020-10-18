import React, { useState, useEffect } from "react";
import "./movies.scss";
import Navbar from "../HomePage/Navbar/Navbar";
import Row from "./Row";
import requests from "../../Requests/requests";
import { streamOriginalUrl } from "../../Requests/requests";
import axios from "axios";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

const Movies = ({ user }) => {
  const [landscapePoster, setLandscapePoster] = useState(true);
  const [banner, setBanner] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${streamOriginalUrl.fetchUrl}`
      );
      setBanner(
        request?.data?.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log("fetchData(): ", request);
      return request;
    }
    fetchData();
    // let dat
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "....." : str;
  }

  return (
    <div className="moviesPage__Wrapper">
      <div className="innerWrapper">
        <Navbar user={user} />
          <div className="upper__Hero__Portion">
            <div
              className="middlePoster"
              style={{
                backgroundImage: `url(${base_url}${banner?.backdrop_path})`,
              }}
            >
              <div className="innerData">
                <h1>
                  {banner?.title || banner?.name || banner?.original_name}
                </h1>
                <div className="flexBtns">
                  <Link
                    to={{
                      pathname: `moviepage/${banner?.id}`,
                      state: { movie: banner },
                    }}
                  >
                    <button>View</button>
                  </Link>
                </div>
                <p>{truncate(banner?.overview, 140)}</p>
              </div>
            </div>
          </div>
        )}
        <div className="wrapper"></div>
        <div className="rowContainer">
          {requests.map((req, i) => (
            <div key={req.fetchUrl}>
              <Row title={req.title} fetchUrl={req.fetchUrl} />
            </div>
          ))}
        </div>
      <div className="footer__Container">
            <p className="github__Repo" onClick={() => window.open("","_blank")}>Click For Github Repo</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
