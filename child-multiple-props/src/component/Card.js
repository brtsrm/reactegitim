import React from 'react'


const Card = (props) => {

    return (
        <div>
            <div className="card">
                <img className="card-img-top" style={{ width: "250px" }} src={props.cardImage} alt={props.cardImage} />
                <div class="card-body">
                    <h4 className="card-title">{props.cardTitle}</h4>
                    <p className="card-text">{props.cardText}</p>
                    <p className="card-text">
                        <small className='text-muted'>{props.lastUpdate}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card