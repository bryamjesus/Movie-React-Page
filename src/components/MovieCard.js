import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "../css/MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={style.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img
          width={230}
          height={345}
          className={style.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
