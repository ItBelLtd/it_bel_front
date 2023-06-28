import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink className="navlink" to="/news">
        Home
      </NavLink>
      <NavLink className="navlink" to="/authors">
        Authors
      </NavLink>
      <NavLink className="navlink" to="/about">
        About Us
      </NavLink>
    </nav>
  );
};
