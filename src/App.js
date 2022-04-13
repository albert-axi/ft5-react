import './App.css';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import { searchMovie } from './utilities/utilities';
import MovieForm from './components/MovieForm';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

function App() {
  // 4c2eada9

  const [movies, setMovies] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    searchMovie("Batman")
      .then(data => {
        setMovies(data.Search)
      })
  }, []) // triggers only when the component is mounted

  useEffect(() => {
    console.log("movie state has been updated")
  }, [movies]) // triggers whenever movies state is updated

  useEffect(() => {
    console.log("This effect will trigger every re-render")
  })

  const removeMovie = movieTitle => {
    const newMovies = movies.filter(movie => {
      return movie.Title !== movieTitle
    }) // []

    setMovies(newMovies)
  }

  const selectMovie = movieTitle => {
    const movie = movies.find(movie => movie.Title === movieTitle)

    setShowModal(true)
    setSelectedMovie(movie)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieForm />
      <MovieList movies={movies} selectMovie={selectMovie} removeMovie={removeMovie}>
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movieTitle={movie.Title}
            dateReleased={movie.Year}
            poster={movie.Poster}
            removeMovie={removeMovie}
            selectMovie={selectMovie}
          />
        )
        )}
      </MovieList>

      {showModal && selectedMovie ? <Modal selectedMovie={selectedMovie} showModal={showModal} closeModal={closeModal} /> : null}
    </div>
  );
}

export default App;
