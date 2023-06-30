import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink className="navlink" to="/about">
          О нас
        </NavLink>
        <NavLink className="navlink" to="/contacts">
          Контакты
        </NavLink>
      </nav>
    </footer>
  );
};
