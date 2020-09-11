export type MovieType = {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title?: string;
  name?: string;
  original_name?: string;
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
