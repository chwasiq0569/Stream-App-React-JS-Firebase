import React, { useState, useEffect } from "react";
import "./movies.scss";
import Navbar from "../HomePage/Navbar/Navbar";
import Row from "./Row";
import requests from "../../Requests/requests";
import { streamOriginalUrl } from "../../Requests/requests";
import axios from "axios";
import { Link } from "react-router-dom";
import { truncate } from "../utils/utils";
import { CircularProgress } from "@material-ui/core";
import Loader from "react-loader-spinner";

const base_url = "https://image.tmdb.org/t/p/original";

const Movies = ({ user }) => {
  const [banner, setBanner] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    let isMounted = true;
    window.scrollTo(0, 0);
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${streamOriginalUrl.fetchUrl}`
      );
      if (isMounted) {
        setBanner(
          request?.data?.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            //generate random number between results.length -1 and 1
          ]
        );
        setPageLoading(false);
      }
      // console.log("fetchData(): ", request);
      return () => {
        // clean up
        isMounted = false;
      };
      // return request;
    }
    fetchData();
  }, []);

  return pageLoading ? (
    <div className="loadingStateMain">
      <Loader
        type="Puff"
        color="#e50914"
        height={75}
        width={75}
        timeout={3000} //3 secs
      />
    </div>
  ) : (
    <div className="moviesPage__Wrapper">
      <div className="innerWrapper">
        <Navbar user={user} />
        <div className="upper__Hero__Portion">
          <div
            className="heroBanner"
            style={{
              backgroundImage: `url(${base_url}${banner?.backdrop_path})`,
            }}
          >
            <div className="innerData">
              <h1>{banner?.title || banner?.name || banner?.original_name}</h1>
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
          {requests.map((req) => (
            <Row title={req.title} fetchUrl={req.fetchUrl} key={req.fetchUrl} />
          ))}
        </div>
        <div className="footer__Container">
          <p
            className="github__Repo"
            onClick={() =>
              window.open(
                "https://github.com/chwasiq0569/Stream-App-React-JS-Firebase.git",
                "_blank"
              )
            }
          >
            Click For Github Repo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
