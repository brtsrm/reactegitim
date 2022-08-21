import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import AddMovie from "./AddMovie";
import axios from "axios";
import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from "react-router-dom";

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

        //const response = await axios.get(`https://api.themoviedb.org/3/list/8213922?api_key=${process.env.REACT_APP_API_KEY}`)
        const response = await axios.get('http://localhost:3000/movies')
        const data = response.data
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
        // const DeleteMovie = `https://api.themoviedb.org/3/list/8213922/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_API_SESSION_KEY}&api_key=${process.env.REACT_APP_API_KEY}`
        const DeleteMovie = `http://localhost:3000/movies/${movie.id}`
        await axios.delete(DeleteMovie)
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


    Main = (filterMovies) => {
        return (
            <div className="row">
                <div className='col-lg-12'>
                    <SearchBar searchMovieProp={this.searchMovie}/>
                </div>
                <MovieList movies={filterMovies} deleteMovieProp={this.deleteMovie}/>
            </div>
        )
    }

    addMovie = async (movie) => {
        const responseNewMovieAdd = await axios.post("http://localhost:3000/movies/", movie)
        if (responseNewMovieAdd.status === 201) {
            this.setState({
                movie: this.state.movies.concat([movie])
            })
            window.location.href = "/"
        }
    }

    addMovieList = () => {
        return (
            <div>
                <AddMovie onAddMovie={(movie) => {
                    this.addMovie(movie)
                }}/>
            </div>
        )
    }

    render() {
        let filterMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().trim().indexOf(this.state.searchQuery.trim().toLowerCase()) !== -1
            }
        )
        return (
            <div className='container'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={this.Main(filterMovies)}/>
                        <Route path="/add" element={this.addMovieList()}/>
                    </Routes>
                </BrowserRouter>
            </div>


        )
    }
}

export default App
