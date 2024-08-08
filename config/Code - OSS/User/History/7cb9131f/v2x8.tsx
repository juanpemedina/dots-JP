import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";

/*
Navigation bar
*/

export default function NavBar() {
	//TODO: COMMENT the code below
  /*
	const [menuOptions, setMenuOptions] = useState<{ text: string; to: string; }[]>([]);

  useEffect(() => {
    // Fetch user data from backend
    axios.get("/api/user/", { withCredentials: true })
      .then(response => {
        const isAdmin = response.data.is_administrator;
        const isVolunteer = response.data.is_volunteer;
        if (isAdmin) {
          setMenuOptions(navigationOptions.admin);
        } else if (isVolunteer) {
          setMenuOptions(navigationOptions.volunteer);
        } else {
          console.error("User role not found");
        }
      })
      .catch(error => {
        console.error("Error fetching user data for role authentication:", error);
      });
  }, []);
  */
  const menuOptions = navigationOptions.admin;

  return (
    <header className="flex justify-between items-center px-8 bg-main-green text-lg text-white">
      <NavLink to={"/"}>
        <img className="w-40" src={logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul className="flex gap-2">
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
