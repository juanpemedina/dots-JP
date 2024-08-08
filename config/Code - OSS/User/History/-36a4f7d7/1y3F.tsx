import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import VEA_logo from "/VEA_logo.jpg";
import RC_logo from "/RC_logo.png";

// Utility function to get active class
const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-gray-1000 font-semibold text-lg underline"
    : "text-gray-950 font-medium text-lg";

// Component for navigation links
const NavLinks = () => (
  <>
    <NavLink to="/" className={getActiveClass}>
      Inicio
    </NavLink>
    <NavLink to="/retiros" className={getActiveClass}>
      Retiros
    </NavLink>
    <NavLink to="/contacto" className={getActiveClass}>
      Contacto
    </NavLink>
  </>
);

// Main navigation bar component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navigation bar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("Open");
  };

  return (
    <div className="sticky top-0 h-20 w-screen">
      <div className="m-auto flex flex-col items-center justify-between gap-5 pt-4 text-gray-300">
        <div className="itemc flex h-9 w-full justify-between px-9">
          <h1 className="self-center text-3xl">ARTHUR TROVATO</h1>
          <button onClick={() => setIsOpened(!isOpened)}>
            <FontAwesomeIcon
              className="h-full w-full"
              icon="fa-solid fa-square-caret-down"
            />
          </button>
        </div>
        <nav
          className={`${
            isOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <a className="w-full border-t py-1 text-center" href="#">
            PRESENTATION
          </a>
          <a className="w-full border-t py-1 text-center" href="#">
            COMPETENCES
          </a>
          <a className="w-full border-t py-1 text-center" href="#">
            PORTFOLIO
          </a>
          <a className="w-full border-t py-1 text-center" href="#">
            A PROPOS
          </a>
          <a className="w-full border-t py-1 text-center" href="#">
            CONTACT
          </a>
          <a className="w-full border-y border-t py-1 text-center" href="#">
            TELECHARGER LE CV
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
