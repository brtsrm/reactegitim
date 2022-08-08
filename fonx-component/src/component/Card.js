import React from 'react'
// import PropTypes from 'prop-types';


class Card extends React.Component {
    static defaultProps = {
        cartTitle: 'Helloworld'
    }
    render() {
        return (
            <div className="card w-100">
                <img className="card-img-top" src="https://dummyimage.com/640x360/fff/aaa" alt="https://dummyimage.com/640x360/fff/aaa"></img>
                <div className="card-body">
                    <h4 className="card-title">{this.props.cartTitle}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        )
    }
}

// Card.defaultProps = {
//     cartTitle: 'Helloworld'
// }

// Card.propTypes = {
//     cartTitle: PropTypes.string.isRequired
// }

export default Card