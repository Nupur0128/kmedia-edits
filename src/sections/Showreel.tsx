
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const videoId = "1f9hjM1PKKV7FkdO_ahHuZePkaIvWdL9p";

export default function Showreel() {
  const videoRef = useRef<HTMLDivElement>(null);

  // Track the video card as it enters the viewport.
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start 95%", "center 55%"],
  });

  // Small at the bottom, gradually grows while scrolling upward.
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [110, 0]);

  // Smooth out the scroll animation.
  const scale = useSpring(scaleValue, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const y = useSpring(yValue, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  return (
    <section className="bg-brand-black text-white px-6 md:px-12 py-24 md:py-32 overflow-hidden">
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

        {/* Scroll-animated video */}
        <motion.div
          ref={videoRef}
          style={{ scale, y }}
          className="relative w-full aspect-video overflow-hidden rounded-2xl bg-[#292929] shadow-2xl"
        >
          <iframe
            src={`https://drive.google.com/file/d/${videoId}/preview`}
            title="K-Media Production Showreel"
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />

          {/* Top label */}
          <span className="absolute top-6 right-6 z-10 text-white/70 text-xs tracking-widest pointer-events-none">
            SHOWREEL / 01
          </span>

          {/* Bottom title */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 pointer-events-none">
            <p className="text-white/60 text-[10px] tracking-[0.3em] mb-2">
              K-MEDIA PRODUCTION · 2026
            </p>

            <h3 className="font-editorial text-3xl md:text-5xl">
              Stories in Motion.
            </h3>
          </div>
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
