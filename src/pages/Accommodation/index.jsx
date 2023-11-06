import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";
import LogementInfoHeader from "../../components/logementInfoHeader";
import Tags from "../../components/tags";
import HostInfo from "../../components/hostInfo";
import Rating from "../../components/rating";
import Accordion from "../../components/accordion";
import Error from "../../components/error404";

function FicheLogement() {
  const location = useLocation(); // useLocation pour obtenir l'URL
  const currentUrl = location.pathname;
  const urlLogementId = currentUrl.split("/")[2]; // Extraction de l'ID du logement à partir de l'URL
  const logement = data.find((item) => item.id === urlLogementId); // cette constante recherche dans l'array le données du logement correspondant  
 
  if (!logement) {
   return <Error />; // s'il n'y a pas de logement à afficher, la page affiche le composant de la page d'erreur
 }
 
  const hostInfo = logement.host; // hostInfo récupère les données de host dans l'array de données 

  return (
    <div className="fiche-logement-container">
      <Carrousel logement={logement} />
      <div className="infos-logement">
        <div className="logement-header">
          <LogementInfoHeader
            title={logement.title}
            adresse={logement.location}
          />
          <Tags tagsListe={logement.tags} />
        </div>
        <div className="host-and-rating">
          <HostInfo hostName={hostInfo.name} hostPicture={hostInfo.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="description-container">
        <Accordion
          data={[
            {
              title: "Description",
              content: logement.description,
            },
          ]}
        />
        <Accordion
          data={[
            {
              title: "Équipements",
              content: logement.equipments.map((item, index) => (
                <p key={index}>{item}</p>
              )),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
