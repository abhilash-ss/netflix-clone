import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "../../axios";
import { base_url } from "../../utils/constants";
import { RowProps, MovieType, ResponseType } from "./types";

const Row: FunctionComponent<RowProps> = ({ title, fetchUrl }) => {
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
          <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default Row;
