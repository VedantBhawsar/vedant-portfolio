import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", scrollTo: "#hero" },
    { name: "Work", path: "/work", scrollTo: "#work" },
    { name: "Skills", path: "/skills", scrollTo: "#skills" },
    { name: "Contact", path: "/contact", scrollTo: "#contact" },
  ];

  const isScrollLink = (item: typeof navItems[0]) => item.scrollTo !== null;

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
      });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavLink = (item: typeof navItems[0], isMobile = false) => {
    const baseClasses = `font-medium transition-colors duration-300 focus-ring rounded-sm px-2 py-1 ${
      isMobile ? "text-[14px] w-fit" : "text-[15px]"
    }`;

    if (isScrollLink(item)) {
      return (
        <a
          key={item.name}
          href={item.scrollTo!}
          onClick={(e) => {
            handleScrollClick(e, item.scrollTo!);
            if (isMobile) setIsOpen(false);
          }}
          className={`${baseClasses} text-nav hover:text-nav-hover`}
        >
          {item.name}
        </a>
      );
    }

    return (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={isMobile ? () => setIsOpen(false) : undefined}
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? "text-primary" : "text-nav hover:text-nav-hover"}`
        }
      >
        {item.name}
      </NavLink>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto max-w-[900px]">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
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

          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) => renderNavLink(item))}
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-350 ease-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-6 border-t border-border">
            {navItems.map((item) => renderNavLink(item, true))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;