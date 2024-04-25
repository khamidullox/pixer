import React from "react";
import "../css/jamoa-kontaklar.css";
let data = [
  {
    name: "Talablarni aniqlab chiqamiz",
    lorem:
      "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
    img: "/jamoa/step-illlustration.png",
  },
  {
    name: "Bir necha yechimlarni taklif qilamiz",
    lorem:
      "sNullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
    img: "/jamoa/step-illlustration-2.png",
  },
  {
    name: "Loyiha uchun vaqt belgilaymiz",
    lorem:
      "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
    img: "/jamoa/step-illustration-3.png",
  },
  {
    name: "A’lo sifat bilan bajarib topshiramiz",
    lorem:
      "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
    img: "/jamoa/step-illustration-4.png",
  },
  {
    name: "Qo’llab-quvvatlab boramiz",
    lorem:
      "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis",
    img: "/jamoa/step-illustration-5.png",
  },
];
function JamoaMap() {
  return (
    <>
      {data.map((ustun) => {
        let { name, lorem, img } = ustun;
        return (
          <li className="jamoa__item">
            <img className="img" src={img} alt="" />
            <div className="jamoa__text">
              <h4>{name}</h4>
              <p>{lorem}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default JamoaMap;
