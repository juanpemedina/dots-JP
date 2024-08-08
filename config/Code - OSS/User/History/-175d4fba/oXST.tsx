<nav>
  <ul className="flex justify-around items-center">
    <li></li>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-black underline" : "text-black"
        }
      >
        {" "}
        Inicio{" "}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/retiros"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Retiros
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Contacto
      </NavLink>
    </li>
  </ul>
</nav>;
