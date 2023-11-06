import logo from "../assets/logo-kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
