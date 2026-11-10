import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const services = [
  {
    name: "Long-Form Video Editing",
    path: "/long-form-video-editing",
  },
  {
    name: "Podcast Video Editing",
    path: "/podcast-video-editing",
  },
  {
    name: "Thumbnail Designing",
    path: "/thumbnail-designing",
  },
  {
    name: "Shorts/Reel Video Editing",
    path: "/short-form-video-editing",
  },
  {
    name: "YouTube Channel Management",
    path: "/youtube-channel-management",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${
      isActive ? "text-brand-red" : "text-brand-black hover:text-brand-red"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="leading-none shrink-0"
        >
          <span className="text-2xl font-bold tracking-tight">
            K-MEDIA<span className="text-brand-red">.</span>
          </span>
          <span className="block text-[9px] tracking-[0.3em] mt-1">PRODUCTION</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          {/* Services Link + Dropdown */}
          <div
            className="relative py-6"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              {/* Clickable Services Main Page */}
              <NavLink
                to="/services"
                end
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive || location.pathname.startsWith("/services/")
                      ? "text-brand-red"
                      : "text-brand-black hover:text-brand-red"
                  }`
                }
              >
                Services
              </NavLink>

              {/* Dropdown Arrow */}
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-label="Toggle individual services"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className="p-1 text-brand-black hover:text-brand-red transition-colors"
              >
                <ChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`
      absolute top-full left-1/2 -translate-x-1/2
      w-[320px]
      bg-white
      shadow-[0_8px_30px_rgba(0,0,0,0.12)]
      border border-black/5
      py-2
      transition-all duration-300
      ${
        servicesOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 translate-y-2"
      }
    `}
            >
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={() => setServicesOpen(false)}
                  className={({ isActive }) =>
                    `block px-8 py-4 text-[15px] transition-all duration-200 ${
                      isActive
                        ? "text-brand-red bg-black/[0.03]"
                        : "text-brand-black hover:text-brand-red hover:bg-black/[0.03]"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/portfolio" className={navClass}>
            Portfolio
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-brand-black text-white px-5 py-3 rounded-full text-sm hover:bg-brand-red transition-colors"
        >
          Start a Project
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-brand-white px-6 py-6 border-t border-black/10">
          <div className="flex flex-col gap-5">
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className="text-lg text-brand-black hover:text-brand-red"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className="text-lg text-brand-black hover:text-brand-red"
            >
              About
            </NavLink>

            {/* Mobile Services */}
            <div>
              <div className="flex items-center justify-between">
                {/* Main Services Page Link */}
                <NavLink
                  to="/services"
                  end
                  onClick={closeMobileMenu}
                  className="text-lg text-brand-black hover:text-brand-red"
                >
                  Services
                </NavLink>

                {/* Mobile Dropdown Arrow */}
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-label="Toggle individual services"
                  aria-expanded={servicesOpen}
                  className="p-2"
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Individual Services */}
              {servicesOpen && (
                <div className="mt-4 ml-3 pl-4 border-l border-black/15 flex flex-col gap-4">
                  {services.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-sm transition-colors ${
                          isActive
                            ? "text-brand-red"
                            : "text-black/70 hover:text-brand-red"
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              onClick={closeMobileMenu}
              className="text-lg text-brand-black hover:text-brand-red"
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className="text-lg text-brand-black hover:text-brand-red"
            >
              Contact
            </NavLink>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="bg-brand-red text-white text-center py-3 rounded-full"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
