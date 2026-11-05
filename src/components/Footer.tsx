
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white px-6 md:px-12 pt-16 pb-8">

      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              K-MEDIA<span className="text-brand-red">.</span>
            </h2>
            <p className="text-xs tracking-[0.3em] mt-2 text-white/60">
              EDITS · A SUB-BRAND OF KODANDA MEDIA
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-white/70">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Our Work</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-brand-red"
          >
            Let's create something
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© 2026 K-Media Edits. All rights reserved.</p>
          <p>Crafted with creativity by Kodanda Media.</p>
        </div>

      </div>
    </footer>
  );
}
