import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Rating({ rating }) {
  const stars = []; // création d'un array vide pour les stars. Il sera composé en fonction du logement.rating dans chaque page de logement

  // La boucle crée les étoiles en fonction du rating, qui va de 1 a 5.
  // Tant que l'index est moins grand ou égal au rating, il reçoit une starActive. Dans le cas contraire, il reçoit une starInactive

  for (let i = 1; i <= 5; i++) { 
    if (i <= rating) {
      stars.push(<img key={i} src={starActive} alt={`starActive-${i}`} />);
    } else {
      stars.push(<img key={i} src={starInactive} alt={`starInactive-${i}`} />);
    }
  }

  // la fonction retoune une div avec l'array des stars qui vient d'être crée en fonction du rating
  return <div className="rating">{stars}</div>;
}

export default Rating;
