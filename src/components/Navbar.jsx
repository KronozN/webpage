import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Competitions", to: "/competitions" },
  { name: "Speed Dating", to: "/speed-dating" },
  { name: "Judges & Sponsors", to: "/judges-sponsors" },
  { name: "About Us", to: "/about" }
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img src={require("../assets/logo.png")} alt="IT Code Fair Logo" className="h-10" />
        </Link>
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-bold px-3 py-2 rounded-2xl transition-colors duration-200 hover:bg-accent hover:text-primary ${location.pathname === link.to ? "bg-accent text-primary" : "text-text"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
