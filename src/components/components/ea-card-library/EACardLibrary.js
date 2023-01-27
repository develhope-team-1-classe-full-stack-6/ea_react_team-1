import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EACardLibrary.scss'

function EACardLibrary(props) {


    return (
        <div className="card-libreria-giochi">
            <div
                className="container cards-container"
                
            >
                <div className="d-flex flex-wrap justify-content-center gap-0">

                    <a href={props.link} className="card">
                        <div className="h3-container">
                            <h3>{props.title}</h3>
                            <img className="arrow" src="./assets/images/components/ea-card-library/02_arrow.png" alt="arrow"/>
                        </div>
                        <img
                            src="./assets/images/components/ea-card-library/01_background.png"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body p-4">
                            <h3 className="h3 title text-center text-md-start mb-2">
                                {props.title2}
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EACardLibrary

EACardLibrary.defaultProps = {
    title: 'Questo',
    title2: 'Titolo'
}