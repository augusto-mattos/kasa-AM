import data from "../data/annonces.json";
import { Link } from "react-router-dom";

// Cette fonction crée une galerie pour afficher les cards des logements. Elle fait un mapping des données fournies pour identifier les IDs de logements et creer une div "logement-card" pour chaque logement identifié. Dans cette div il y a un lien vers la page du logement correspondant. De la liste de données la fonction récupère aussi une image de couverture pour le card et le titre du logement  
function Cards() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {data.map((logement) => (
          <div key={logement.id} id={logement.id} className="logement-card">
            <Link to={`/logement/${logement.id}`}>
              <img
                src={logement.cover}
                alt="card de logement"
                className="logement-cover"
              />
              <div className="overlay-card">
                <h3>{logement.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
