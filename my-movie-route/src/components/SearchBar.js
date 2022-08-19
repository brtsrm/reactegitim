import React from 'react'

class SearchBar extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5 mt-4">
                    <div className="col-10">
                        <input onChange={this.props.searchMovieProp} type="text"
                               className="form-control p-2" placeholder="Search a movie"
                        />
                    </div>
                    <div className="col-2">
                        <button className="w-100 btn btn-danger">Add Movie</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar
