import { NavLink } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  //TODO: Change for each user role
  const menuOptions = navigationOptions.admin;
  return (
    <header className="flex justify-between items-center px-8 bg-main-green text-lg text-white">
      <NavLink to={"/"}>
        <h1>JP</h1>
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

export default App;
