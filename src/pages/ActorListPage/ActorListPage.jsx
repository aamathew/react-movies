import ActorCard from "../../components/ActorCard/ActorCard";
import "./ActorListPage.css";

export default function ActorList(props) {
  const actors = props.movies.reduce((actor, mov) => {
    mov.cast.forEach((a) => {
      if (!actor.includes(a)) actor.push(a);
    });
    return actor;
  }, []);
  return (
    <div className="actor-list">
      {actors.map((a) => {
        return <ActorCard key={a} actor={a} />;
      })}
    </div>
  );
}
