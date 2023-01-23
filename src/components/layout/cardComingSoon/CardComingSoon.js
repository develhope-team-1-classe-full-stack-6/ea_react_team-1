import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/button/CustomButton';
import './_card-2.scss';

function CardComingSoon(props) {
    return (
<<<<<<< HEAD
        <div className="d-flex flex-column coming-soon-card-wrapper" style={{ width: "544px" }}>
=======
        <div className="d-flex flex-column coming-soon-card-wrapper">
>>>>>>> origin/dev
            <img src={props.srcImg} alt="" />
            <h5 className="d6 mt-3 mb-4">{props.title}</h5>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Data di Uscita</p>
                <p className="w-75">{props.date}</p>
            </div>
<<<<<<< HEAD
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
=======
            {props.platform === "" ? <></> : <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
>>>>>>> origin/dev
                <p className="l3 w-25 pb-1">Piattaforme</p>
                <div className="h6 coming-soon-responsive-width text-orange">
                    <p>{props.platform}</p>
                </div>
<<<<<<< HEAD
            </div>
            <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Genere</p>
                <div className="h6 w-75 text-orange"><p>{props.genere}</p></div>
            </div>
            <div className="mt-4">
                <a href={props.href}><CustomButton color={"black"}>Sito ufficiale</CustomButton></a>
=======
            </div>}
            {props.platform === "" ? <></> : <div className="d-flex align-items-baseline coming-soon-flex coming-soon-border">
                <p className="l3 w-25 pb-1">Genere</p>
                <div className="h6 w-75 text-orange"><p>{props.genere}</p></div>
            </div>}
            <div className="mt-4">
                <a className='text-decoration-none' href={props.href}><CustomButton color={"white"}>Sito ufficiale</CustomButton></a>
>>>>>>> origin/dev
            </div>
        </div>
    );
}

export default CardComingSoon;
