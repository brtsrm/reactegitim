import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from "axios";

console.log(process.env)


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    /*
    ********FETCH KULLANIMI********
        async componentDidMount() {
            const baseURL = "http://localhost:3002/movies"
            const response = await fetch(baseURL)
            const data = await response.json()

            this.setState({
                movies : data
            })
        }*/


    async componentDidMount() {

        const response = await axios.get(`https://api.themoviedb.org/3/list/8213922?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = response.data.items
        console.log(data)
        this.setState({
            movies: data
        });
    }

    /*
    *********FETCH DELETE KULLANIMI
    deleteMovie = async (movie) => {
        const DeleteMovie = App.BaseUrl + `/${movie.id}`
        await fetch(DeleteMovie, {
            method: "DELETE"
        })
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }*/

    deleteMovie = async (movie) => {
        const DeleteMovie = `https://api.themoviedb.org/3/list/8213922/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_API_SESSION_KEY}&api_key=${process.env.REACT_APP_API_KEY}`
        await axios.post(DeleteMovie)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
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
                return movie.title.toLowerCase().trim().indexOf(this.state.searchQuery.trim().toLowerCase()) !== -1
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