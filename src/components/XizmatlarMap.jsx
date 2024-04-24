function XizmatlarMap({ map }) {
  console.log({ map });
  return (
    <ul className="xizmatlar__list">
      {map.map((xizmat) => {
        let { name, img, description } = xizmat;
        return (
          <li className="xizmatalr__item" key={Math.random()}>
            <img src={img} alt="" /> <h4>{name}</h4>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default XizmatlarMap;
