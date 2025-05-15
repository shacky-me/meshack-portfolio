import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./mode-toggle";
import { Link, useNavigate } from "react-router-dom";

const navlinks = [
  { name: "Overview", href: "#overview" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Backstage", href: "/backstage" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // const closeMenuAndScroll = (href: string) => {
  //   setIsMenuOpen(false);
  //   const targetElement = document.querySelector(href);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleNavLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed z-50 w-full py-4 px-6 bg-background dark:bg-background">
      <div className="flex mx-auto max-w-6xl justify-between items-center">
        <Link to="/" className="italic tracking-wide text-lg">
          Kigen Meshack
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 ml-auto">
          {navlinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavLinkClick(link.href)}
              className="cursor-pointer hover:text-[#4da187] transition duration-500 ease-in-out"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1l3homNnhbsP-_VWLmbOff-BudVkz7QzK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#032218] text-[#014d40] font-bold px-2 py-1 rounded-md hover:border-[#41adad] hover:text-[#3a5e68] transition duration-500 ease-in"
          >
            Resume
          </a>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto mr-2">
          <ModeToggle />
        </div>
        <button
          onClick={handleButtonClick}
          className="md:hidden cursor-pointer"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 text-[#4e0d33]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-[#034146]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed bg-[#ffffff] dark:bg-[#020617] top-15 left-0 w-full z-50 flex flex-col items-center py-6 md:hidden"
        >
          <nav className="flex flex-col items-center gap-8 text-lg">
            {navlinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  handleNavLinkClick(link.href);
                  setIsMenuOpen(false);
                }}
                className="hover:text-[#4da187] transition duration-500 ease-in-out"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1l3homNnhbsP-_VWLmbOff-BudVkz7QzK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#032218] text-[#014d40] font-bold px-2 py-1 rounded-md hover:border-[#41adad] hover:text-[#3a5e68] transition duration-500 ease-in"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
