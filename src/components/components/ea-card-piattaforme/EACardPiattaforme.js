import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EACardPiattaforme.scss'

function EACardPiattaforme(props) {

  const backgroundImg = './assets/images/pages/library/piattaforme/18_background.jpg'
    return (
    <div className="card-piattaforme"
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <div
        className="container cards-container"
        style={{
            maxWidth: "1456px", 
            margin: "0 auto"
        }}
      >
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a href={props.link} className="card">
            <img
              src={props.src}
              className="card-img-top"
              alt={props.alt}
            />
            <div className="card-body p-4">
              <h3 className="h5 title text-center text-md-center mb-2">
                {props.title}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
    )
}

export default EACardPiattaforme

EACardPiattaforme.defaultProps = {
    link: 'none',
    src: '',
    alt: 'weird pic',
    title: 'Download Per Mac'
}