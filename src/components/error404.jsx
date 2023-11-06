import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-msg">Oups! La page que vous demandez n'existe pas.</div>
      <div className="error-redirect-link">
        <Link to="/">
        Retourner sur la page d’accueil
        </Link>
        </div>
    </div>
  );
}

export default Error404;