import JamoaMap from "../components/JamoaMap";
import "../css/blog.css";
import "../css/jamoa.css";
function Jamoa() {
  return (
    <section className="jamoa xizmatlar">
      <h2 className="xizmatlar__title">Biz qanday ishlaymiz?</h2>
      <p className="xizmatler__lorem">
        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
        facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
        mattis eros at sem pulvinar
      </p>
      <ul className="jamoa__list">
        <JamoaMap />
      </ul>
      <button className="btn jamoa__btn">Buyurtma berish</button>
    </section>
  );
}

export default Jamoa;
