import React, { useState, useEffect } from "react";
import "./moviepage.scss";

import Navbar from "./../HomePage/Navbar/Navbar";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import RatingStars from "../../assets/images/icons8-star-100.png";
import { withRouter } from "react-router-dom";

const MoviePage = ({ location, user }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    setMovie(location?.state?.movie);
    window.scrollTo(0, 0);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
        })
        .catch(console.error);
    }
  }, [movie]);

  const opts = {
    height: "450",
    width: "100% ",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      className={trailerUrl ? "MoviePage__Wrapper_Big" : "MoviePage__Wrapper"}
    >
      {!movie ? (
        "Loading"
      ) : (
        <div className="inner__Wrapper">
          <div className="navbarContainer">
            <Navbar user={user} />
          </div>

          <div className="upper__Section">
            <div className="movie__Info">
              <div className="leftSide">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                {/* <h1>Title</h1> */}
                <p>{movie?.overview}</p>
                <div className="Rating__Stars">
                  <img src={RatingStars} alt="RatingStars" />
                  <img src={RatingStars} alt="RatingStars" />
                  <img src={RatingStars} alt="RatingStars" />
                  <img src={RatingStars} alt="RatingStars" />
                  <img src={RatingStars} alt="RatingStars" />
                </div>
              </div>
              <div className="rightSide">
                <img
                  src={`${base_url}${movie?.poster_path}`}
                  alt={"Poster__Img"}
                />
              </div>
            </div>
          </div>
          {trailerUrl && (
            <div className="lower__Section">
              <Youtube videoId={trailerUrl} opts={opts} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(MoviePage);
