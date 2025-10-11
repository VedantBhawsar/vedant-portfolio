import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger - left aligned */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus-ring rounded-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 text-nav transition-all duration-350 ${
                  isOpen ? "opacity-0 rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
                size={24}
              />
              <X
                className={`absolute inset-0 text-nav transition-all duration-350 ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"
                }`}
                size={24}
              />
            </div>
          </button>

          {/* Desktop navigation - right aligned */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors duration-300 focus-ring rounded-sm px-2 py-1 ${
                    isActive ? "text-primary" : "text-nav hover:text-nav-hover"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile menu - slides down, pushes content */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-350 ease-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-6 border-t border-border">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors duration-300 focus-ring rounded-sm px-2 py-1 w-fit ${
                    isActive ? "text-primary" : "text-nav hover:text-nav-hover"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
