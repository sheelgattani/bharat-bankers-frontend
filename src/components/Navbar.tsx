import { SITE_NAME, NAV_LINKS } from "../constants/NavbarConst";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand">{SITE_NAME}</span>
      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;