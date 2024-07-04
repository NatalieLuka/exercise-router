import { useParams } from "react-router-dom";
import { actors } from "./data/actors";

export default function Actors() {
  const { actorId } = useParams();
  console.log(actorId);

  const actor = actors.find((actor) => actor.id == actorId);

  return (
    <>
      <h1>Actors</h1>
      {actor?.name}
    </>
  );
}
