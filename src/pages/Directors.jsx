import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetch directors data
    fetch("http://localhost:4000/directors")
      .then(response => response.json())
      .then(data => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map(director => (
            <article key={director.name}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading directors...</p>
        )}
      </main>
    </>
  );
}

export default Directors;
