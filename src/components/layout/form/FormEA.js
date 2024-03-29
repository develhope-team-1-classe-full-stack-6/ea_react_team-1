/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/button/CustomButton';
import './form_ea.scss'

function FormEA() {
  require('bootstrap/dist/css/bootstrap.min.css');
  return (
    <section className="form-wrapper py-5">
      <div className="d-flex flex-column flex-lg-row container gap-4 px-4" style={{ maxWidth: "1180px" }}>
        <div>
          <Typography>
          <h2 className="d4 mb-3 text-white">Resta sempre aggiornato con le e-mail di EA Originals e EA</h2>
          <p className='text-white'>Iscriviti subito per ricevere tramite e-mail le ultime novità su notizie, aggiornamenti, contenuti dietro le quinte, offerte esclusive e molto altro su EA Originals (sono incluse altre novità su notizie, prodotti, eventi e promozioni di EA).</p>
          </Typography>
          
          
        </div>
        <div className="form">
          <div className="form-floating mb-3">
            <input type="email" className="text-white form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">E-mail</label>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 mb-3">
            <div>
              <div className="form-floating">
                <input type="text" className="text-white form-control" id="floatingAge" placeholder="GG/MM/YYYY" />
                <label htmlFor="floatingAge">Data di Nascita</label>
              </div>
            </div>

            <div>
              <div tabIndex="0" className="form-select">
                <div>
                  <p className="label-select">Lingua</p>
                  <p id="display-lang" className='text-white'>Italia</p>
                </div>
                <ul className='text-white'>
                  <li className="d-flex justify-content-between"><p>Stati Uniti</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Arabia Saudita</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Argentina</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Australia</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Austria</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Belgio</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Brasile</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Canada</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Cile</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Colombia</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Corea</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Danimarca</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Emirati Arabi</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Finlandia</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Francia</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Germania</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Giappone</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Grecia</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Hong-Kong</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>India</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Irlanda</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between"><p>Israele</p><i className="fa-solid fa-check"></i></li>
                  <li className="d-flex justify-content-between selected"><p>Italia</p><i className="fa-solid fa-check"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-check mb-3 text-white">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
            Posso annullare l'iscrizione in qualsiasi momento, modificando le mie <a href="#" className='text-danger'>preferenze sulle e-mail</a>, contattando
              <a href="#" className='text-danger'>privacyadmin.ea.com</a> o scrivendo a Electronic Arts Inc., ATTN: Email Opt-Out, 209 Redwood Shores Pkwy,
              Redwood City, CA, 94065, USA.
            </label>
          </div>
          <CustomButton color="orange" border="none">
            Iscriviti
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

export default FormEA;
