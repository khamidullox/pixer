import { Link } from "react-router-dom";
import "../css/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer__list">
        <h4>Copyright 2020</h4>
        <p>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar tincidunt.
        </p>
      </div>
      <div className="footer__list">
        <h4>Sayt sahifalari</h4>
        <nav>
          <Link to="/">Bosh sahifa</Link>
          <Link to="/xizmatlar">Xizmatlar</Link>
          <Link to="/portfoilo">Portfolio</Link>
          <Link to="/jamo">Jamoa</Link>
          <Link to="/blog">Blog</Link>
        <Link to="/kontaklar">Kontaktlar</Link>

        </nav>
      </div>
      <nav className="footer__list">
        <h4>Biz internetda</h4>
        <ul className="footer__nav-list">
          <li>
            <img src="/public/icon/telegram.svg" alt="Telegram" />
            <a href="#">Telegram</a>
          </li>
          <li>
            <img src="/public/icon/facebook.svg" alt="Facebook" />
            <a href="#">Facebook</a>
          </li>
          <li>
            <img src="/public/icon//instagram.svg" alt="Instagram" />
            <a href="#">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
