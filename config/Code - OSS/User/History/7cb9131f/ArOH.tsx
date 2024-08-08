import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";

/*
Navigation bar
*/

export default function NavBar({ isAdmin }: { isAdmin: boolean }) {
  const menuOptions = isAdmin
    ? navigationOptions.admin
    : navigationOptions.volunteer;

  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout/", { withCredentials: true });
      window.location.href = "/#/login";
      console.log("Logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="flex justify-between items-center px-8 bg-main-green text-lg text-white">
      <NavLink to={"/"}>
        <img className="w-40" src={logo} />
      </NavLink>
      <nav>
        <ul className="flex gap-2 items-center">
          {menuOptions.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  (isActive ? "bg-dark-green " : "") +
                  "hover:bg-dark-green p-4 rounded-xl"
                }
                end
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-dark-green p-4 rounded-xl"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const navigationOptions = {
  admin: [
    { text: "Anuncios", to: "/anuncios" },
    { text: "Salida de artículos", to: "/salida" },
    { text: "Entrada de artículos", to: "/entrada" },
    { text: "Préstamos activos", to: "/prestamos" },
    { text: "Movimientos pasados", to: "/movimientos" },
  ],
  volunteer: [
    { text: "Anuncios", to: "/anuncios" },
    { text: "Salida de artículos", to: "/salida" },
  ],
};
