import React from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'

export default class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=d471e6a1&s=marvel')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
  }
  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=d471e6a1&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  render() {
    return (
      <div className="main">
        <Search searchMovie={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    )
  }
}
