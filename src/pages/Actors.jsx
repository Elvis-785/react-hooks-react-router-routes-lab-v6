import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actors data
    fetch("http://localhost:4000/actors")
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length > 0 ? (
          actors.map(actor => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map(movie => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading actors...</p>
        )}
      </main>
    </>
  );
}

export default Actors;
