import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies"
        const response = await fetch(baseURL)
        const data = await response.json()

        this.setState({
            movies : data
        })
    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        /*
        this.setState({
            movies: newMovieList
        })
        */
        this.setState(state => ({
            movies: newMovieList
        }))
    }
    searchMovie = (event) => {
        const targetValue = event.target.value
        this.setState({
            searchQuery: targetValue
        })
    }


    render() {
        let filterMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().trim().indexOf(this.state.searchQuery.trim().toLowerCase()) !== -1
            }
        )
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>
                <MovieList
                    movies={filterMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App 