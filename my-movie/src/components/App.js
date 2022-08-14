import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'


class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "mErhaba",
                "rating": 1.3,
                "overview": "senaryo",
                "placeholder": "https://via.placeholder.com/300.png/aaa/fff"
            },
            {
                "id": 2,
                "name": "MeR",
                "rating": 3.3,
                "overview": "senaryo",
                "placeholder": "https://via.placeholder.com/300.png/aaa/fff"
            }
        ],
        searchQuery: ""
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