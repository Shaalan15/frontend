
import React from 'react';



function Card(props) {
    return(
        <div className="card mb-4" style={{"width": "20em"}}>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
};


export default Card;