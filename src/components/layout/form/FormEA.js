/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../../components/button/CustomButton';
import './form_ea.scss'

function FormEA() {
  require('bootstrap/dist/css/bootstrap.min.css');
  return (
    <section className="form-wrapper py-5">
      <div className="d-flex flex-column flex-lg-row container gap-4 px-4" style={{ maxWidth: "1180px" }}>
        <div className="">
          <h2 className="d4 mb-3">TIENITI AL PASSO CON LE E-MAIL SU EA E THE SIMS</h2>
          <p>Iscriviti oggi stesso per ricevere tramite e-mail i più recenti aggiornamenti, notizie, contenuti dietro le
            quinte, offerte esclusive e molto altro su The Sims (come pure su altri prodotti, notizie, eventi e promozioni
            di EA).</p>
        </div>
        <div className="form">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">E-mail</label>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 mb-3">
            <div>
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingAge" placeholder="GG/MM/YYYY" />
                <label htmlFor="floatingAge">Data di Nascita</label>
              </div>
            </div>

            <div>
              <div tabIndex="0" className="form-select">
                <div>
                  <p className="label-select">Lingua</p>
                  <p id="display-lang">Italia</p>
                </div>
                <ul>
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
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Posso disiscrivermi in qualsiasi momento modificando le mie <a href="#">preferenze sulle e-mail</a>, contattando
              <a href="#">privacyadmin.ea.com</a> o scrivendo a Electronic Arts Inc., ATTN: Email Opt-Out, 209 Redwood Shores Pkwy,
              Redwood City, CA, 94065, USA.
            </label>
          </div>
          <CustomButton />
        </div>
      </div>
    </section>
  );
}

export default FormEA;
