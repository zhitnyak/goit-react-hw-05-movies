import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className={s.nav}>
      <NavLink
        style={{ marginRight: "15px" }}
        exact
        to={{
          pathname: "/",
          state: { from: location },
        }}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: "/movies",
          state: { from: location },
        }}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
