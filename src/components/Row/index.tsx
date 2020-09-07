import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "../../axios";
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

  console.log("checking state", movies);
  return (
    <div>
      <h2>{title}</h2>
      {/* {container} */}
      RowItems
    </div>
  );
};

export default Row;
