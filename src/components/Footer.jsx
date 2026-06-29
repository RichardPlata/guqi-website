import { Link } from "react-router-dom";
import logoFull from "../assets/logo/guqi-logo.svg";

export default function Footer() {
  return (
    <footer className="footer site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={logoFull} alt="GU-QI" className="footer-logo" />
          <p>El custodio de tu bienestar vital.</p>
        </div>

        <div className="footer-column">
          <span>Navegación</span>

          <nav className="footer-nav">
            <Link to="/">Inicio</Link>
            <Link to="/terapias">Terapias</Link>
            <Link to="/filosofia">Filosofía</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <span>Contacto</span>
          <p>+52 722 677 3247</p>
          <p>guqiwellness@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}