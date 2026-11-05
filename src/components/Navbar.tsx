
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Work", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        <Link to="/" className="leading-none">
          <span className="text-2xl font-bold tracking-tight">
            K-MEDIA<span className="text-brand-red">.</span>
          </span>
          <span className="block text-[9px] tracking-[0.3em] mt-1">
            EDITS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-brand-red"
                    : "text-brand-black hover:text-brand-red"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-brand-black text-white px-5 py-3 rounded-full text-sm hover:bg-brand-red transition-colors"
        >
          Start a Project
          <ArrowUpRight size={16} />
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-brand-white px-6 py-6 border-t border-black/10">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
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
