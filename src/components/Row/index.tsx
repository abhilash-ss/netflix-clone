import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "../../axios";
import { base_url } from "../../utils/constants";
import { RowProps, MovieType, ResponseType } from "./types";

import "./Row.scss";

const Row: FunctionComponent<RowProps> = ({
  title,
  fetchUrl,
  isLargeRow = false,
}) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

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

  console.table(movies);
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
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
