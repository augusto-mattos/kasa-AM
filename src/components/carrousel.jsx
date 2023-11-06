import { useState } from "react";
import arrowSlider from "../assets/arrow-slider.png";

// La fonction Carrousel reçoit "logement" comme props. Dans la page des logement, le logement correspondra au ID identifié dans les données des annonces
function Carrousel({ logement }) {

  const logementPictures = logement.pictures; // identifie les pictures qui composent le caroussel en fonction du logement 

  const [currentId, setCurrentId] = useState(0); // l'image affichée par défaut sera toujours la première image du caroussel 

  // la prochaine image est calculé à partir de l'ID de l'image courante. Le calcul avec module crée l'effet looping et permet de passer de la dernière à la première image. L'image précedente est calculé de façon similaire, dans le sens inverse.
  const nextSlide = () => { 
    setCurrentId(
      (currentId + 1) % logementPictures.length
    );
  };

  const prevSlide = () => {
    setCurrentId(
      (currentId - 1 + logementPictures.length) % logementPictures.length
    );
  };

  // s'il existe plus d'une picture identifié dans les données du logement pour composer le caroussel, la fonction retourne la div caroussel avec les images, un compteur et des boutons pour passer à la prochaine slide ou revenir à la précedente. Si il n'existe qu'une seule picture dans les données du logement, il n'y aura pas de boutons et de compteur affichés. 
  return (
    <div className="caroussel">
      {logementPictures.length > 1 ? (
        <>
          <div className="caroussel-container">
            <img
              src={logementPictures[currentId]}
              alt={`Photographie ${currentId + 1} du logement ${logement.id}`}
            />
            <p className="img-counter">
              {`${currentId + 1}/${logementPictures.length}`}
            </p>
            <button className="previous-img" onClick={prevSlide}>
              <img src={arrowSlider} alt="photographie précédente" />
            </button>
            <button className="next-img" onClick={nextSlide}>
              <img src={arrowSlider} alt="prochaine photographie" />
            </button>
          </div>
        </>
      ) : (
        <div className="caroussel-container">
          <img
            src={logementPictures[currentId]}
            alt={`Photographie ${currentId + 1} du logement ${logement.id}`}
          />
        </div>
      )}
    </div>
  );
}

export default Carrousel;
