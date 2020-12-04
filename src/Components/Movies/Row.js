import React, { useEffect, useState } from "react";
import instance from "../../Requests/apiInstance";
import axios from "axios";
import "./row.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link, useParams } from "react-router-dom";
import MoviePoster from "./MoviePoster";
import Loader from "react-loader-spinner";

const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  // const apiUrl =
  //   "https://api.themoviedb.org/3/discover/tv?api_key=7f7f4abe76895cf49abdacd8093c9a27&with_networks=213/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg";
  useEffect(() => {
    let isMounted = true;
    async function getData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      if (isMounted) {
        setMovies(request.data.results);
        setLoadingState(false);
      }
      return request;
    }
    getData();
    return () => {
      isMounted = false;
    };
  }, [fetchUrl]);
  console.log("movies: ", movies);
  return loadingState ? (
    <div className="loadingStateRow">
      <Loader
        type="TailSpin"
        color="#e50914"
        height={35}
        width={35}
        timeout={3000} //3 secs
      />
    </div>
  ) : (
    <div className="genreContainer">
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      <ScrollContainer className="scroll-container row">
        {movies.map((mov, i) => (
          <div
            key={i}
            className={
              mov.landscapePoster === true
                ? "poster__Container"
                : "poster__ContainerLandscape"
            }
          >
            <MoviePoster mov={mov} base_url={base_url} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Row;
