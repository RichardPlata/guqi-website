import { Link } from "react-router-dom";
import logoFull from "../assets/logo/guqi-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <img src={logoFull} alt="GU-QI" className="brand-logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/terapias">Terapias</Link>
          <Link to="/filosofia">Filosofía</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Link to="/contacto" className="btn btn-primary nav-cta">
          Reservar
        </Link>
      </div>
    </header>
  );
}