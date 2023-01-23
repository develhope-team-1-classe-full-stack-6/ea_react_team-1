import 'bootstrap/dist/css/bootstrap.min.css';
import slides from '../../../data/carouselDatabase.json';
import { useState } from 'react';
import "./carousel.scss";
import Modal from '@mui/material/Modal';

export default function EACarousel () {
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 1 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 1) {
    return null;
  }

  const Modalstyle = {
    position: 'absolute',
    width: "100vw",
    height: "100vh",
    bgcolor: '#000',
    paddingTop: "40px"
  };

  return(
    <div className='bg-dark'>
      <div className="carousel-wrapper">
        <h1 className="text-white d-flex justify-content-center pt-5">Trailer</h1>
        <div className="container carousel slide mt-5 position-relative">
          <div className="carousel-inner">
            <div className="carousel-item active">
            {slides.map((item, index) => {
              return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (
                    <iframe 
                      style={{ width: "100%", aspectRatio: 16/9 }} 
                      src={item.src} 
                      title={item.title}>
                    </iframe>
                  )}
                </div>
              );
            })}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
              <span className="carousel-control-prev-icon"></span>
            </button>
            <span className="text-white">{current}/10</span>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
              <span className="carousel-control-next-icon"></span>
            </button>
            <button type="button" className="btn-trigger-modal" onClick={handleOpen}>
              <img src="./assets/images/pages/ea-originals/expanding-arrows.png" alt="" />
            </button>
          </div>
        </div>

        {/* Modal */}      
        <div>
        <Modal
          sx={Modalstyle}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <div className="carousel-wrapper">
          <div className='modalHeader'>
            <button className='closeBtnModal' onClick={handleClose}>X</button>
          </div>
          <div className="container carousel slide mt-5 position-relative">
            <div className="carousel-inner">
              <div className="carousel-item active">
              {slides.map((item, index) => {
                return(
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                      <iframe 
                        style={{ width: "100%", aspectRatio: 16/9 }} 
                        src={item.src} 
                        title={item.title}>
                      </iframe>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button className="carousel-control-prev" type="button" onClick={prevSlide}>
                <span className="carousel-control-prev-icon"></span>
              </button>
              <span className="text-white">{current}/10</span>
              <button className="carousel-control-next" type="button" onClick={nextSlide}>
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
        </Modal>
      </div>
      </div>
    </div>
  )
}