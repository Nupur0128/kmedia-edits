
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Showreel() {
  return (
    <section className="bg-brand-black text-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-red text-xs tracking-[0.3em] mb-5">
              01 / OUR CREATIVE WORLD
            </p>

            <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Not just edits.
              <br />
              <span className="font-editorial-italic text-white/50">
                An experience.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm text-white/50 leading-7">
            Every cut, every transition, every frame has a purpose.
            Take a look at what we create.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden rounded-2xl bg-[#292929] aspect-video"
        >
          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1800&q=85"
            alt="Creative video production studio"
            className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play fill="white" size={25} />
            </div>

            <p className="text-white text-xs tracking-[0.3em] mt-5">
              OUR SHOWREEL
            </p>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="text-white/60 text-[10px] tracking-[0.3em] mb-2">
              K-Media Production · 2026
            </p>
            <h3 className="font-editorial text-3xl md:text-5xl">
              Stories in Motion.
            </h3>
          </div>

          <span className="absolute top-6 right-6 text-white/70 text-xs tracking-widest">
            PLAY / 01
          </span>
        </motion.div>

        <div className="flex justify-between items-center mt-8 border-t border-white/15 pt-6">
          <p className="text-xs text-white/40 tracking-widest">
            EDITING · PRODUCTION · STORYTELLING
          </p>

          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-sm hover:text-brand-red transition-colors"
          >
            Explore all work <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
