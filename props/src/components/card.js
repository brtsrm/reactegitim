import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.cardTitle}</h4> 
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>
    )
}

export default Card