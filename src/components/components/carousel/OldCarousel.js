import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {

  return(
    <div className='bg-dark'>
      <div id="carousel-wrapper">
      <h1 className="text-white d-flex justify-content-center mt-5">Trailer</h1>
      <div id="carosello">
        <div id="carouselExampleControls" className="container carousel slide mt-5 position-relative" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/aVYL6FK5lxo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/QLdv1HXm558" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/jCsXeTZ5Pec" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/t45aHl62tR0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/JSbW55bOXK8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/ohClxMmNLQQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/usKLT2BIfc8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/ea8YVzZtwTc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/u3MNbPxrO-c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="carousel-item">
              <iframe className="d-block w-100" height="630" src="https://www.youtube.com/embed/YepmaGWN2Jw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="carousel-btn-controls d-flex justify-content-center mt-4">
            <button id="slider-control-prev" className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <span className="text-white" id="countLabel">1/10</span>
            <button id="slider-control-next" className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
            
            <button id="open-modal-button" type="button" className="btn-trigger-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src=".assets/images/pages/ea-originals/expanding-arrows.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}