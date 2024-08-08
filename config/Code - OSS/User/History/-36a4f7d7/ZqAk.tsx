import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import VEA_logo from "/VEA_logo.jpg";
import RC_logo from "/RC_logo.png";

// Utility function to get active class
const getActiveClass = ({ isActive }) =>
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
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to toggle the navigation bar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <header className="bg-white flex-wrap sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-1">
      <div className="flex items-center">
        <img src={VEA_logo} alt="VEA Logo" className="h-20 w-20" />
        <img src={RC_logo} alt="RC Logo" className="h-16 w-16" />
      </div>
      <nav className="w-1/4 flex justify-end">
        <div className="hidden w-full md:flex justify-between pr-8">
          <NavLinks />
        </div>
        <div className="md:hidden pr-5">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <div
        className={`${isOpen ? "block" : "hidden"} ${
          isAnimating ? "animate-slide-in" : "animate-slide-out"
        } flex flex-col items-center basis-full`}
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default NavBar;
