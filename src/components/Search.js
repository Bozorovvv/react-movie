import React from 'react'

export default class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field container">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              placeholder="Search movies"
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
          </div>
        </div>
      </div>
    )
  }
}
