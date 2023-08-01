import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

export default function MovieDetailPage(props) {
  let { movieName } = useParams();
  let movie = props.movies.find((mv) => mv.title === movieName);
  return (
    <div className="movie-info">
      <div>
        <h1>{movie.title}</h1>
        <h4>Release: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
        <h2>
          Cast:
          <ul className="actors">
            {movie.cast.map((actor) => {
              return <li key={actor}>{actor}</li>;
            })}
          </ul>
        </h2>
      </div>
      <img className="poster" src={`${movie.posterPath}`} alt="poster" />
    </div>
  );
}
