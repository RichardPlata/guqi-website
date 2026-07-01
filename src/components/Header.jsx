import { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo/guqi-logo.svg";

const whatsappLink =
  "https://wa.me/527226773247?text=Hola,%20me%20gustaría%20agendar%20una%20evaluación%20en%20GU-QI.";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logoFull} alt="GU-QI" className="brand-logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/terapias" onClick={closeMenu}>Terapias</Link>
          <Link to="/filosofia" onClick={closeMenu}>Filosofía</Link>
          <Link to="/cursos" onClick={closeMenu}>Cursos</Link>
          <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn nav-cta desktop-cta"
          onClick={closeMenu}
        >
          Reservar
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}