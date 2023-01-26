import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/button/CustomButton';
import './_card-2.scss';

function CardComingSoon(props) {
    require('bootstrap/dist/css/bootstrap.min.css');
    return (
        <div className="d-flex flex-column coming-soon-card-wrapper">
            <img src={props.srcImg} alt="" />
            <h5 className="d6 mt-3 mb-4">{props.title}</h5>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Data di Uscita</p>
                <p className="w-75">{props.date}</p>
            </div>
            {props.platform === "" ? <></> : <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Piattaforme</p>
                <div className="h6 coming-soon-responsive-width text-orange">
                    <p>{props.platform}</p>
                </div>
            </div>}
            {props.platform === "" ? <></> : <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Genere</p>
                <div className="h6 w-75 text-orange"><p>{props.genere}</p></div>
            </div>}
            <div className="mt-4">
                <a className='text-decoration-none' href={props.href}><CustomButton color={"white"}>Sito ufficiale</CustomButton></a>
            </div>
        </div>
    );
}

export default CardComingSoon;
