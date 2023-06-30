import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink className="navlink" to="/news">
        Рекомендации
      </NavLink>
      <input type="text" placeholder="Искать новости..." />
      <NavLink className="navlink" to="/authors">
        <span>Авторы</span>
      </NavLink>
      <NavLink className="navlink" to="/signup">
        <span>Регистрация</span>
      </NavLink>
      <NavLink className="navlink" to="/login">
        <span>Вход</span>
      </NavLink>
    </nav>
  );
};
