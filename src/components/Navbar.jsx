import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/logo.jpeg"
const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/product" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔹 Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full transition duration-300 ${
      isActive
        ? "text-white bg-black shadow"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 ">
        {/* Brand */}
        <img src={logo} alt="logo" className="md:w-28 w-24 h-20 object-contain "/>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={linkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          <TiThMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
