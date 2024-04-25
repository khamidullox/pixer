import XizmatlarMap from "../components/XizmatlarMap";
import { Link } from "react-router-dom";
let data = [
  {
    name: "Vebsayt tuzish",
    img: "../public/xizmatlar/website-illustration.png",
    description: "lorem impus",
  },
  {
    name: "Telegram bot",
    img: "../public/xizmatlar/bot-illustration.png",
    description: "lorem impus",
  },
  {
    name: "SMM",
    img: "./public/xizmatlar/smm-illustration.png",
    description: "lorem impus",
  },
  {
    name: "Grafik dizayn",
    img: "../public/xizmatlar/design-illustration.png",
    description: "lorem impus",
  },
  {
    name: "CRM tizimlar",
    img: "../public/xizmatlar/crm-illustration.png",
    description: "lorem impus",
  },
];
function Xizmatlar() {
  return (
    <section className="xizmatlar">
      <h2 className="xizmatlar__title">Xizmatlar</h2>
      <p className="xizmatler__lorem">
        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
        facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
        mattis eros at sem pulvinar
      </p>
      <XizmatlarMap map={data} />
      <div className="xizmatlar__btn">
        <button className="btn">Buyurtma berish</button>
        <Link to="/Xizmatlar">Xizmatlar sahifasiga o’tish</Link>
      </div>
      <br />
    </section>
  );
}

export default Xizmatlar;
