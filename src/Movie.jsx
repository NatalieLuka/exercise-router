import { movies } from "./data/movies";

export function Movies() {
  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <img src={movie.thumbnail} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
