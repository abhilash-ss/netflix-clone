import React, { FunctionComponent, useEffect, useState } from "react";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import axios from "../../axios";
import { base_url } from "../../utils/constants";
import { MovieType, ResponseType } from "../../utils/types";
import { RowProps } from "./types";

import "./Row.scss";

const movieTrailer = require("movie-trailer"); // type error fix

const Row: FunctionComponent<RowProps> = ({
  title,
  fetchUrl,
  isLargeRow = false,
}) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ResponseType = await axios.get(fetchUrl);
        setMovies(response.data.results);
        return response;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleOnClick = async (movie: MovieType) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(
          movie?.title || movie?.name || movie?.original_language
        );
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        // console.log("checkingURL", url);
        // console.log(urlParams);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const opts = {
    height: "448",
    width: "100%",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: MovieType) => (
          <img
            className={`row__poster ${isLargeRow && "row__poster--large"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            onClick={() => handleOnClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
