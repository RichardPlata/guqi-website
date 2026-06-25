import { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo/guqi-logo.svg";

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

        <Link to="/contacto" className="btn nav-cta desktop-cta" onClick={closeMenu}>
          Reservar
        </Link>

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