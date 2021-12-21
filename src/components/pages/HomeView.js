import { useState, useEffect } from "react";
import api from "../api";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api().then(setMovies);
    console.log(setMovies);
  }, []);

  return (
    <>
      <h1>Trending Today</h1>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
