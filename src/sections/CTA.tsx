
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-brand-red text-white px-6 md:px-12 py-28 md:py-36 overflow-hidden relative">

      <div className="max-w-[1440px] mx-auto relative z-10">

        <p className="text-xs tracking-[0.3em] mb-8 text-white/70">
          06 / YOUR NEXT PROJECT STARTS HERE
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.9] max-w-6xl"
        >
          Got footage?
          <br />
          <span className="font-editorial-italic">
            Let's make
          </span>
          <br />
          something unforgettable.
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-14">
          <p className="text-sm text-white/75 leading-7 max-w-md">
            Have a video to edit, a brand to build or a story to tell?
            We'd love to hear about it. Let's create something worth watching.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-3 bg-white text-brand-black px-7 py-4 rounded-full text-sm hover:bg-brand-black hover:text-white transition-all"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="mailto:info@kodandamedia.com"
              className="flex items-center gap-3 border border-white/50 px-7 py-4 rounded-full text-sm hover:bg-white hover:text-brand-red transition-all"
            >
              <Mail size={17} />
              Email Us
            </a>
          </div>
        </div>

      </div>

      <span className="absolute -right-10 -bottom-28 font-editorial text-[300px] md:text-[420px] leading-none text-white/[0.07] pointer-events-none select-none">
        K
      </span>

    </section>
  );
}
