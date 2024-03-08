
import { useEffect, useState } from "react"
import "./App.css"
import searchIcon from "../src/assets/search.svg"
import MovieCard from "./components/MovieCard"

const API_URL = "http://www.omdbapi.com?apikey=965c3b62"

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("Superman")
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div
        className="search"

      >
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className="container">

              {
                movies.map((movie) => {
                  return (
                    <MovieCard
                      movie={movie}
                    />
                  )

                })
              }

            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )

      }


    </div>
  )
}



export default App
