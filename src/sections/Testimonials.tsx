import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    before: "The team understood our vision and turned it into",
    highlight: "content that felt exactly like our brand.",
    after: "",
    name: "Client Name",
    role: "BRAND / BUSINESS OWNER",
  },
  {
    before:
      "From the first draft to the final delivery, the entire creative process felt",
    highlight: "smooth and professional.",
    after: "",
    name: "Client Name",
    role: "CONTENT CREATOR",
  },
  {
    before: "They brought a fresh perspective to our videos. The",
    highlight: "attention to detail",
    after: " made all the difference.",
    name: "Client Name",
    role: "MARKETING TEAM",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const previous = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-brand-white px-6 md:px-12 py-28 md:py-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="bg-brand-black text-white rounded-full px-4 py-2 text-[10px] tracking-widest">
            04
          </span>
          <span className="text-xs tracking-[0.3em] text-black/50">
            WHAT CLIENTS SAY
          </span>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-6xl mx-auto"
        >
          <span className="font-editorial text-8xl text-brand-red leading-none">
            “
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[82px] leading-[1.12] tracking-tight text-brand-black max-w-[1350px] mx-auto">
            {current.before}{" "}
            <span className="font-editorial-italic relative inline text-brand-black px-1">
              <span className="relative z-10">{current.highlight}</span>

              <span className="absolute bottom-[3px] md:bottom-[8px] left-0 w-full h-[0.24em] bg-brand-red/90 -z-0" />
            </span>{" "}
            {current.after}
          </h2>

          <div className="mt-4">
            <p className="font-editorial-italic text-3xl md:text-4xl text-brand-red">
              — {current.name}
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-black/50 mt-3">
              {current.role}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={previous}
            aria-label="Previous testimonial"
            className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          <span className="text-xs tracking-widest text-black/50">
            0{active + 1} / 0{testimonials.length}
          </span>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
