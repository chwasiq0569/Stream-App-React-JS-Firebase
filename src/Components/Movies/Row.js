import React, { useEffect, useState } from "react";
import instance from "../../Requests/apiInstance";
import axios from "axios";
import "./row.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link, useParams } from "react-router-dom";
import MoviePoster from "./MoviePoster";

const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, landscapePoster }) => {
  const [movies, setMovies] = useState([]);
  const apiUrl =
    "https://api.themoviedb.org/3/discover/tv?api_key=7f7f4abe76895cf49abdacd8093c9a27&with_networks=213/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg";
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [fetchUrl]);
  console.log("movies: ", movies);
  return (
    <div className="genreContainer">
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      {movies.length > 10 ? (
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
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Row;
