import React from 'react';

function MovieCard({movie}) {
    return (
        <div className="  flex flex-col items-center justify-center border-4 border-grey-400 w-1/3 bg-grey-200 mt-6 rounded-lg h-full " >
        <img className=" mt-5  w-20% h-20%"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
        <div className="card--content">
        <h3 className="font-bold font-mono text-grey-700">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--desc">{movie.overview}</p>
        </div>

        </div>
    );
}

export default MovieCard;