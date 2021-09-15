import React from 'react'
import Movie from './Movie'

function Movies(props) {
  return (
    <div className='movies container'>
      {props.movies.map((movie) => 
        <Movie movie={movie} key={movie.imdbID}{...movie} />
      )}
    </div>
  )
}

export default Movies
