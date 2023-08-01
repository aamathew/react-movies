function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard(props) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="card"
    >
      <div>
        <h1>{props.actor}</h1>
      </div>
    </div>
  );
}
