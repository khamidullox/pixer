import { Link } from "react-router-dom";
import "../css/jamoa-kontaklar.css";

function Kontaklar() {
  return (
    <section className="kontaklar xizmatlar">
      <div className="kontaklar__text">
        <h3 className="title">Buyurtma berish</h3>
        <p className="xizmatler__lorem lorem">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
      </div>
      <form className="form">
        <input type="text" placeholder="Ismingiz" />
        <input type="number" placeholder="Telefon raqamingiz" />
        <select name="" id="">
          <option className="option" value="">
            
            Xizmatlar turi
          </option>
        </select>
        <Link to="/kontaklar" className="form__btn btn">
          Buyurtma berish
        </Link>
      </form>
    </section>
  );
}

export default Kontaklar;
