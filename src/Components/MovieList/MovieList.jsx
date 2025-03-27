
import MovieCard from '../MovieCard/MovieCard'
import React, { useState } from 'react'
import FilterMovie from '../FilerMovie/FilterMovie'
import movies from '../../movies'
import AddMovie from '../AddMovie/AddMovie'
import './MovieList.css';

// component parent playerList of the component child Player
const MovieList = () => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <div className="movie-list-container">
      <div className="movie-list-header">
        <FilterMovie setFilteredMovies={setFilteredMovies} />
        <AddMovie filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
      </div>
      {filteredMovies.length > 0 ? (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="no-movies-message">No movies found</p>
      )}
    </div>
  )
}

export default MovieList