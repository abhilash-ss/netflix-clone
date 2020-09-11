import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "../../axios";
import { base_url } from "../../utils/constants";
import { MovieType, ResponseType } from "../../utils/types";
import { BannerProps } from "./types";

import "./Banner.scss";

const Banner: FunctionComponent<BannerProps> = ({ fetchUrl }) => {
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    const fetchData = async () => {
      const response: ResponseType = await axios.get(fetchUrl);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    fetchData();
  }, [fetchUrl]);

  const truncate = (str: string = "", n: number) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h3>
      </div>
      <div className="banner--fade-bottom" />
    </header>
  );
};

export default Banner;
