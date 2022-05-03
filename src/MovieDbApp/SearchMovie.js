import React,{useState} from 'react';
import MovieCard from './MovieCard';

function SearchMovie(props) {
  const[query , setQuery]= useState('');
  const[movies , setMovies]= useState([]);

    async function searchMovies(e){
      e.preventDefault();
      console.log(query);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7bbaf094f119a693e0b4b645984dc7b8&language=en-US&query=${query}&page=1&include_adult=false`;
      try{
        const response = await fetch(url);
        const data= await response.json();
        setMovies(data.results);
      }catch(error){
          console.error(error);
      }
      setQuery("");
;
    }
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor='query' className="label">Movie Name</label>
                <input type="text" name="query" placeholder='Enter movie name' 
                className="input" value={query} onChange={(e)=>{setQuery(e.target.value)}}></input>
                <button className="button" type="submit">Submit</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map((movie) => {
                    return ( 
                        <MovieCard movie={movie} key={movie.id}/>
                        )
                })}
            </div>  
        </div>
    );
}

export default SearchMovie;