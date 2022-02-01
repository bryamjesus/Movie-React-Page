import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import style from "../css/MovieGrid.module.css";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => [
      get("/discover/movie").then((data) => {
        setMovies(data.results);
        //console.log(movies)
      }),
    ],
    []
  );

  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
