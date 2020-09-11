export type RowProps = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export type MovieType = {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: string;
};

export type ResponseType = {
  data: {
    results: MovieType[];
  };
};
