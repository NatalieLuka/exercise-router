import { actors } from "./data/actors";

export function Actors() {
  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <h2>{actor.name}</h2>
            <p>{actor.character}</p>
            <img src={actor.image} alt={actor.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
