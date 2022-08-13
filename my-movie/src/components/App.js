import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'


class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "merhaba",
                "rating": 1.3,
                "overview": "senaryo",
                "placeholder": "https://via.placeholder.com/300.png/aaa/fff"
            },
            {
                "id": 2,
                "name": "asa",
                "rating": 3.3,
                "overview": "senaryo",
                "placeholder": "https://via.placeholder.com/300.png/aaa/fff"
            }
        ]
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

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-lg-12'>
                        <SearchBar/>
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App 