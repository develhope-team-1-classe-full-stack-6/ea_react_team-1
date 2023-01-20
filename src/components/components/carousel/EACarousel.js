import React, { useState } from 'react';
import data from '../../../data/carouselDatabase.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EACarousel ({ slides }) {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 1 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 1) {
    return null;
  }

  return (
    <div className='bg-dark'>
      <h1 className="text-white d-flex justify-content-center mt-5">Trailer</h1>
      <div className="container carousel slide mt-5 position-relative">
        <div>
          {data.map((item, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
              {index === current && (
                <iframe src={item.src} title={item.title}></iframe>
              )}
              </div>
            );
          })}
        </div>
        <div className="carousel-btn-controls d-flex justify-content-cente mt-4">
          <button className="carousel-control-prev carousel-control-prev-icon" type="button" onClick={prevSlide}/>
          <span className="text-white">{current}/10</span>
          <button className="carousel-control-next carousel-control-next-icon" type="button" onClick={nextSlide} />

          {/* open modal  */}
          <button id="open-modal-button" type="button" className="btn-trigger-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src=".assets/images/pages/ea-originals/expanding-arrows.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};