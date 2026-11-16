
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    before: "Our videos needed a more polished and engaging feel. K-Media delivered",
    highlight: "edits that made our content stand out.",
    after: "",
    name: "OBSERVER",
    role: "MEDIA / CONTENT",
  },
  {
    before: "They understood the kind of content we wanted and made every video",
    highlight: "look professional, clear, and engaging.",
    after: "",
    name: "CANAM STUDYABROAD",
    role: "EDUCATION / CONTENT",
  },
  {
    before: "From smooth transitions to the final finishing touches, their editing brought",
    highlight: "a whole new level of quality to our videos.",
    after: "",
    name: "OWLED MEDIA",
    role: "MEDIA / CONTENT",
  },
  {
    before: "The team did a great job turning our raw footage into",
    highlight: "engaging videos that hold viewers' attention.",
    after: "",
    name: "GOSOURCE",
    role: "BRAND / BUSINESS",
  },
  {
    before: "We wanted our videos to look more creative and consistent. K-Media made the process",
    highlight: "easy, smooth, and professional.",
    after: "",
    name: "BREW MEDIA",
    role: "MEDIA / CONTENT",
  },
  {
    before: "Their attention to detail helped present our jewellery beautifully, with",
    highlight: "visually appealing edits that match our brand.",
    after: "",
    name: "ASTU JEWELLERY",
    role: "JEWELLERY / E-COMMERCE",
  },
  {
    before: "They understood the style of our content and created videos with",
    highlight: "the right pace, flow, and storytelling.",
    after: "",
    name: "TRADE WITH MANISH",
    role: "FINANCE / CONTENT CREATOR",
  },
  {
    before: "The editing quality, creative approach, and overall presentation made",
    highlight: "our video content more impactful.",
    after: "",
    name: "DA CREATION",
    role: "CREATIVE / CONTENT",
  },
  {
    before: "K-Media helped us give our content a more polished look with",
    highlight: "clean edits and engaging visual storytelling.",
    after: "",
    name: "ZEAL SPARROW",
    role: "BRAND / CONTENT",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-brand-white px-6 md:px-12 py-20 md:py-28">
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
              <span className="relative z-10">
                {current.highlight}
              </span>
              <span className="absolute bottom-[3px] md:bottom-[8px] left-0 w-full h-[0.24em] bg-brand-red/90 -z-0" />
            </span>{" "}
            {current.after}
          </h2>

          <div className="mt-8">
            <p className="font-editorial-italic text-3xl md:text-4xl text-brand-red">
              — {current.name}
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-black/50 mt-3">
              {current.role}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={previous}
            aria-label="Previous testimonial"
            className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          <span className="text-xs tracking-widest text-black/50">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
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
