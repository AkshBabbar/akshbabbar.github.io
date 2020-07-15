import React from 'react';
import './card-style.css'

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={ props.imgsrc } alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{ props.title }</h3>
                <p className="card-text font-text text-secondary">{ props.desc }</p>
            </div>
        </div>
    );
}

export default Card;