import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles.css";
import NavBar from "../../components/Navbar";
import LoginPage from "../LoginPage/LoginPage";
import MovieListPage from "../MovieListPage/MovieListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import { movies } from "../../data";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}
