
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const floatingCards = [
  {
    label: "REEL",
    duration: "0:45",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85",
    position:
      "left-0 md:left-[-3%] top-[8%] md:top-[10%]",
    width: "w-[115px] sm:w-[155px] md:w-[185px]",
    rotate: "-rotate-3",
    delay: 0,
  },
  {
    label: "YOUTUBE",
    duration: "12:40",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=85",
    position:
      "right-0 md:right-[-3%] top-[10%] md:top-[13%]",
    width: "w-[120px] sm:w-[165px] md:w-[210px]",
    rotate: "rotate-2",
    delay: 0.3,
  },
  {
    label: "PODCAST",
    duration: "24:18",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=85",
    position:
      "left-[2%] md:left-[5%] bottom-[5%]",
    width: "w-[135px] sm:w-[180px] md:w-[220px]",
    rotate: "rotate-2",
    delay: 0.5,
  },
  {
    label: "UGC",
    duration: "0:30",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85",
    position:
      "right-[2%] md:right-[5%] bottom-[-2%]",
    width: "w-[115px] sm:w-[150px] md:w-[175px]",
    rotate: "-rotate-3",
    delay: 0.7,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-white px-5 md:px-12">

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-red/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto pt-20 md:pt-12 pb-12">

        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          <p className="text-xs tracking-[0.35em] text-brand-red mb-4">
            K-MEDIA PRODUCTION · CREATIVE VIDEO STUDIO
          </p>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-8xl lg:text-[100px] leading-[0.95] tracking-tight">
            Every frame has a story.
            <br />
            We make it <span className="font-editorial-italic text-brand-red">worth watching.  </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-base text-black/60 leading-7 mt-4">
            From scroll-stopping reels to cinematic brand films,
            we turn raw footage into content people remember.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/portfolio"
              className="flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm hover:bg-brand-black transition-all"
            >
              Explore Our Work
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 border border-black/20 px-7 py-4 rounded-full text-sm hover:bg-brand-black hover:text-white transition-all"
            >
              Start a Project
            </Link>

          </div>
        </motion.div>

        {/* Laptop + Floating Video Cards */}
        <motion.div
          initial={{ opacity: 0, y: 65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative max-w-[1050px] mx-auto mt-16 md:mt-20 mb-8"
        >

          {/* Laptop */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[88%] md:w-[78%] mx-auto z-10 pt-3"
          >

            {/* Laptop screen */}
            <div className="relative bg-[#171717] border-[5px] md:border-[9px] border-[#242424] rounded-t-[18px] md:rounded-t-[25px] p-2 md:p-4 shadow-2xl">

              {/* Screen header */}
              <div className="flex justify-between items-center px-2 py-1.5 mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                <span className="text-[7px] md:text-[9px] tracking-widest text-white/50">
                  K-Media Production / PREMIERE TIMELINE
                </span>

                <span className="text-[7px] md:text-[9px] text-green-400">
                  ● LIVE
                </span>
              </div>

              {/* Editing preview */}
              <div className="grid grid-cols-[1.8fr_0.8fr] gap-2">

                <div className="relative aspect-video rounded-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85"
                    alt="Cinematic video editing preview"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/15" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play fill="white" size={18} />
                    </div>
                  </div>

                  <span className="absolute bottom-2 left-2 text-[7px] md:text-[9px] text-white tracking-widest">
                    CINEMATIC PROJECT 001
                  </span>
                </div>

                {/* Preview clips */}
                <div className="grid grid-rows-2 gap-2">
                  <div className="rounded-md overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=400&q=80"
                      alt="Night cinematic footage"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="rounded-md overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80"
                      alt="Creative video footage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Editing timeline */}
              <div className="bg-[#252525] rounded-md mt-2 p-2 md:p-3">

                <div className="flex justify-between text-[6px] md:text-[8px] text-white/40 mb-2">
                  <span>00:00</span>
                  <span>00:15</span>
                  <span>00:30</span>
                  <span>00:45</span>
                  <span>01:00</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex gap-1 h-3 md:h-4">
                    <div className="w-[25%] rounded-sm bg-purple-400" />
                    <div className="w-[30%] rounded-sm bg-purple-400" />
                    <div className="w-[20%] rounded-sm bg-purple-400" />
                    <div className="w-[25%] rounded-sm bg-purple-400" />
                  </div>

                  <div className="flex gap-1 h-3 md:h-4">
                    <div className="w-[40%] rounded-sm bg-emerald-500" />
                    <div className="w-[30%] rounded-sm bg-emerald-500" />
                    <div className="w-[30%] rounded-sm bg-emerald-500" />
                  </div>

                  <div className="flex gap-1 h-2 md:h-3">
                    <div className="w-[35%] rounded-sm bg-blue-400" />
                    <div className="w-[25%] rounded-sm bg-blue-400" />
                    <div className="w-[40%] rounded-sm bg-blue-400" />
                  </div>
                </div>

              </div>
            </div>

            {/* Laptop base */}
            <div className="h-2 md:h-3 bg-gradient-to-b from-[#c5c5c5] via-[#777] to-[#444] rounded-b-xl shadow-lg mx-[-4%]" />
            <div className="h-1 bg-[#aaa] rounded-b-full mx-[25%]" />

          </motion.div>

          {/* Floating media cards */}
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, index % 2 === 0 ? -10 : 10, 0],
              }}
              transition={{
                opacity: { duration: 0.7, delay: card.delay },
                scale: { duration: 0.7, delay: card.delay },
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                },
              }}
              className={`absolute ${card.position} ${card.width} z-20 ${card.rotate} bg-white p-1 md:p-1.5 shadow-[0_15px_45px_rgba(0,0,0,0.18)] rounded-sm`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={card.image}
                  alt={`${card.label} video editing example`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-2 left-2 bg-brand-red text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded">
                  {card.label}
                </span>

                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[8px] px-2 py-1 rounded">
                  {card.duration}
                </span>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center items-center gap-3 mt-12 text-xs text-black/40 tracking-widest">
          <ArrowDown size={15} className="animate-bounce" />
          SCROLL TO EXPLORE
        </div>

      </div>
    </section>
  );
}