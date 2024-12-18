import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data
    fetch("http://localhost:4000/movies")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </main>
    </>
  );
}

export default Home;
