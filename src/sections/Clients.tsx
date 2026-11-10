
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "NOT SO DAILY",
    subscribers: "198k Subscribers",
    logo: "/images/clients/not-so-daily.png",
  },
  {
    name: "The Founder's Dream",
    subscribers: "282k Subscribers",
    logo: "/images/clients/founders-dream.png",
  },
  {
    name: "Galaxy Geeks",
    subscribers: "687k Subscribers",
    logo: "/images/clients/galaxy-geeks.png",
  },
  {
    name: "Reelin' with Asia & BJ",
    subscribers: "298k Subscribers",
    logo: "/images/clients/reelin-asia.png",
  },
  {
    name: "CineDesi",
    subscribers: "2.49M Subscribers",
    logo: "/images/clients/cinedesi.png",
  },
  {
    name: "Creative Studio",
    subscribers: "150k Subscribers",
    logo: "/images/clients/creative-studio.png",
  },
];

export default function Clients() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#A9002D] via-[#C00024] to-[#ED001B] py-20 md:py-28">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 mb-14 md:mb-16"
      >
        <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.02] tracking-tight text-white">
          Clients we've <span className="text-[#191919]">worked</span> with
        </h2>
      </motion.div>

      {/* Slider wrapper */}
      <div className="relative max-w-[1600px] mx-auto px-12 md:px-20">

        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Previous clients"
          className="absolute left-1 md:left-5 top-[25%] -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform"
        >
          <ChevronLeft size={65} strokeWidth={1.5} />
        </button>

        {/* Client cards */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 md:gap-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-[28%] lg:w-[18%] snap-center text-center group"
            >
              {/* Circular logo */}
              <div className="mx-auto w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/80 bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Client name */}
              <h3 className="text-white font-bold text-base md:text-lg mt-8 mb-5 truncate px-2">
                {client.name}
              </h3>

              {/* Subscribers */}
              <p className="text-white text-base md:text-xl font-medium">
                {client.subscribers}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Next clients"
          className="absolute right-1 md:right-5 top-[25%] -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform"
        >
          <ChevronRight size={65} strokeWidth={1.5} />
        </button>

      </div>

    </section>
  );
}
