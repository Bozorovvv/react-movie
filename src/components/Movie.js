import React from 'react'

function Movie({ movie }) {
  return (
    <div key={movie.imdbID}>
      <div className="card">
        <div className="card-image">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h6 className="header">{movie.Title}</h6>
          </div>
          <div className="card-action">
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
