import { Link } from "react-router-dom";
import "../css/novbar.css";
function Novbar() {
  return (
    <header>
      <a href="">
        <img
          className="header__img"
          src="/public/images/logo-svg.svg"
          alt="Pixer"
        />
      </a>
      <nav className="header__nav">
        <Link to="/">Bosh sahifa</Link>
        <Link to="/xizmatlar">Xizmatlar</Link>
        <Link to="/jamo">Jamoa</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/portfoilo">Portfolio</Link>
        <Link to="/kontaklar">Kontaktlar</Link>
        <button className="btn header__btn">+998 90 921 37 11</button>
      </nav>
    </header>
  );
}

export default Novbar;
