import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovie(props) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovies(e) {
    e.preventDefault();
    console.log(query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7bbaf094f119a693e0b4b645984dc7b8&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
    setQuery("");
  }
  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <div class="flex flex-col w-50% items-center ">
          <div>
            <label htmlFor="query" className="text-blue-600 font-sm font-mono mr-2">
              Movie Name
            </label>
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Enter movie name"
              className="rounded-lg bg-blue-200 border-indigo-500 p-4"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            ></input>
          </div>

          <button className="rounded-full border-indigo-500 border-2 uppercase text-orange-600 px-4 mt-5" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className=" flex flex-col justify-center item-center ">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
}

export default SearchMovie;
