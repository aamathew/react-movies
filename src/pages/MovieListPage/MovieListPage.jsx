import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListPage.css";

export default function MovieListPage(props) {
  return (
    <>
      <h1>Movies</h1>
      <div className="movie-posters">
        {props.movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.title} />;
        })}
      </div>
    </>
  );
}
