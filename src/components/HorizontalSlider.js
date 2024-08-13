import React, { useRef } from 'react';
import '../styling/HorizontalSlider.css'; 
import '../styling/App.css'
import arrowNext from '../assets/next.png';
import { Link } from 'react-router-dom';

const HorizontalSlider = ({ items }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -200, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 200, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="horizontal-slider">
      <button className="arrow left" onClick={scrollLeft}>
        <img className="rounded-icon flip-horizontal" src={arrowNext} alt="Previous" />
      </button>
      <div className="slider" ref={sliderRef}>
        {items.map((item) => (
          <Link to={`/movie/${item.imdbID}`} key={item.imdbID} className='slider-item'>
            <div>
              <img src={item.Poster} alt={item.Title} />
              {/* <div>
                <span>{item.Title}</span>
                <h3>{item.Year}</h3>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <img className="rounded-icon" src={arrowNext} alt="Next" />
      </button>
    </div>
  );
};

export default HorizontalSlider;
