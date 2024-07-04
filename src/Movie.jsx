import { movies } from "./data/movies";
import { useParams } from "react-router-dom";

export default function Movies() {
  const { movieId } = useParams();
  console.log(movieId);

  const movie = movies.find((movie) => movie.id == movieId);

  return (
    <>
      <h1>Movies</h1>
      {movie?.title}
    </>
  );
}
