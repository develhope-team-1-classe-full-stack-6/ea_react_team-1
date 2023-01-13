import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../../../../src/components/components/button/CustomButton';
import './cardcomingsoon.scss'


function CardComingSoon(props) {
    return (
        <div className="d-flex flex-column coming-soon-card-wrapper" style={{ width: "544px" }}>
            <img src={props.src} alt="" />
            <h5 className="d6 mt-3 mb-4">{props.titolo}</h5>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Data di Uscita</p>
                <p className="w-75">{props.data}</p>
            </div>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Piattaforme</p>
                <div className="h6 coming-soon-responsive-width text-orange">
                    <p>{props.piattaforme}</p>
                </div>
            </div>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Genere</p>
                <div className="h6 w-75 text-orange"><p>{props.genere}</p></div>
            </div>
            <div className="mt-4">
                <CustomButton/>
            </div>
        </div>
    );
}

export default CardComingSoon;
