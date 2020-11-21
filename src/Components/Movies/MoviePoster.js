import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = ({ mov, base_url }) => {
  return (
    <Link
      to={{
        pathname: `moviepage/${mov?.id}`,
        state: { movie: mov },
      }}
    >
      <div className="image__Container">
        <img src={`${base_url}${mov.poster_path}`} alt={mov.name} />
      </div>
    </Link>
  );
};

export default MoviePoster;
