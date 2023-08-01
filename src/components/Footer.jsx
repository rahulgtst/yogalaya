import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <article>
        <NavLink to="/">
          <img src={Logo} alt="Logo" width={100} height={25} />
        </NavLink>
        <p>©All copyrights reserved.</p>
      </article>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "footer-links" : "footer-links"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/poses"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "footer-links" : "footer-links"
            }
          >
            Poses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "footer-links" : "footer-links"
            }
          >
            Classes
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>Instagram</li>
        <li>YouTube</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Facebook</li>
      </ul>
    </footer>
  );
};

export default Footer;
