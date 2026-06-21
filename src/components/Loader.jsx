import logoSymbol from "../assets/logo/guqi-symbol.svg";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        <img src={logoSymbol} alt="GU-QI" className="loader-symbol" />
        <span className="loader-text">GU-QI</span>
      </div>
    </div>
  );
}