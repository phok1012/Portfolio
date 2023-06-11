import React from 'react';
import '../css/InterestBlock.css';

const InterestBlock = ({image}) => {
  return (
    <div class="carousel-item active">
          <img src={image} class="d-block w-100" alt="..."></img>
    </div>
  )
}

export default InterestBlock