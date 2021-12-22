import { useState, useEffect } from "react";
import { getTrending } from "../api";
import MoviesList from "../MovieList/MovieList";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(setMovies);
    console.log(setMovies);
  }, []);

  return (
    <>
      <h1>Trending Today</h1>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
