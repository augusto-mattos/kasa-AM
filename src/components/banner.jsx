import { useLocation } from "react-router-dom";
import imgBannerAccueil from "../assets/banner-accueil.png";
import imgBannerAbout from "../assets/banner-about.png";

function Banner() {
  const location = useLocation(); //identifie l'url de la page où le banner est affiché et ensuite définie son image, son alt et un titre par défaut. Cela est utilisé que si la fonction est appellé dans la page initiale

  let bannerImg = imgBannerAccueil;
  let bannerAlt = "banner de la page d'accueil";
  let bannerTitle = "Chez vous, partout et ailleurs";

  // si le banner est affiché sur une autre page qui n'est pas la page initiale, son image, alt et titre sont modifiés
  if (location.pathname !== "/") {
    bannerImg = imgBannerAbout;
    bannerAlt = "banner de la page à propos";
    bannerTitle = null;
  }

  return (
    <div className="banner">
      <img className="banner-image" src={bannerImg} alt={bannerAlt} />
      <div className="banner-opacity"></div>
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;
