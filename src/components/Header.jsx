import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} alt="Logo" width={100} height={30} />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "header-links-active"
                  : "header-links"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/poses"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "header-links-active"
                  : "header-links"
              }
            >
              Poses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "header-links-active"
                  : "header-links"
              }
            >
              Classes
            </NavLink>
          </li>
        </ul>
      </nav>
      <button>Sign In</button>
    </header>
  );
};

export default Header;
