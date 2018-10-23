import React from 'react';

const Card = (props) => {
    return (
      <div className="cards">
        <h3>{props.name}</h3>
        <figure>
            <img src={ props.img } alt="description for screen readers mostly"/>
            <figcaption>{props.description}</figcaption>
        </figure>
        <p>${props.price}</p>
        <button>Visit Now</button>
      </div>
    );
  }

export default Card;