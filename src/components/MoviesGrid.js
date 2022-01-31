import movies from "../json/movies.json";
import { MovieCard } from "./MovieCard";
import style from "../css/MovieGrid.module.css"

export function MoviesGrid() {
//console.log(movies);
  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}
