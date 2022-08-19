import React from 'react';

class AddMovie extends React.Component {

    render() {
        return (

            <div className="container">
                <h2 className="mt-3 ">Movie Add</h2>
                <form className="mt-5">
                    <input className="form-control" id="disabledInput" type="text"
                           placeholder="Fill the form to add a movie..." disabled="disabled"/>
                    <div className="form-row">
                        <div className="form-group mt-4">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="inputRating">Rating</label>
                            <input type="text" className="form-control" name="rating"/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="inputImage">Image URL</label>
                            <input type="text" className="form-control" name="imageURL"/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="overviewTextArea">Overview</label>
                            <textarea name="overview" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Add Movie" className="mt-4 btn btn-danger btn-block"/>
                </form>
            </div>
        )
    }

}

export default AddMovie
