import React from 'react';
import InterestBlock from './InterestBlock';
import InterestData from '../data/InterestData'

const Interest = () => {
  return (
    <div id='Interests' className='pb-5'>
      <h1 className='text-center'>Interest</h1>
      <div id="interestCarousel" className="carousel slide">
        <div className="carousel-indicators">
          { InterestData.map((interest, index) =>
            <button type="button" data-bs-target="#interestCarousel" data-bs-slide-to={index} className={index === 0 ? "active":null} aria-current={index === 0?"true": null} aria-label={`Slide ${index +1}`}></button>
          )}
        </div>
        <div className="carousel-inner">
          { InterestData.map((interest, index) =>
            <div className={ index === 0 ? 'carousel-item active' :'carousel-item'}>
              <div className="img-container">
                <img src={interest.image} className="d-block img-thumbnail" alt="#"/>
                <div className='int-overlay'>
                    <h2 className=''>{interest.title}</h2>
                    <div>{interest.des}</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#interestCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#interestCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Interest
