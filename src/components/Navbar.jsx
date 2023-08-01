import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar(props) {
  return (
    <>
      <h3>Welcome {props.user}! </h3>
      <div className="nav">
        <NavLink to="/">
          <button className="btn">Movies</button>
        </NavLink>
        <NavLink to="/actors">
          <button className="btn">Actors</button>
        </NavLink>
      </div>
    </>
  );
}
