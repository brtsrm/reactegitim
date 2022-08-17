import React from 'react'


const MovieList = (props) => {
    /*function handleClick(event) {
        console.log(event.target)

    }*/

    return (
        <div className='row'>
            {
                props.movies.map((movie) => (
                    <div className='col-md-4' key={movie.id}>
                        <div className='card mb-4 shadow-sm'>
                            <img src={"https://themoviedb.org//t/p/w220_and_h330_face/"+movie.backdrop_path} className='card-img-top '
                                 alt="Sample Movie"/>
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.title}</h5>
                                <p className='Sample movie description'>{movie.overview}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={(event) => props.deleteMovieProp(movie)} type='button'
                                            className='btn btn-md btn-outline-danger'>Delete
                                    </button>
                                    <h2><span className='badge bg-info'>{movie.vote_average}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList