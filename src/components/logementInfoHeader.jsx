function LogementInfoHeader({ title, adresse }) {
  return (
    <div className="logement-title">
        <h1>{title}</h1>
        <p className="adresse">{adresse}</p>
    </div>
  );
}

export default LogementInfoHeader;
