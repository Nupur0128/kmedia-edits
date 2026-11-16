
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const floatingCards = [
  {
    label: "REEL",
    duration: "0:45",
    video: "/videos/herovideo1.mp4",
    position: "left-0 md:left-[-3%] top-[8%] md:top-[10%]",
    width: "w-[105px] sm:w-[140px] md:w-[170px]",
    rotate: "-rotate-3",
    delay: 0,
  },
  {
    label: "YOUTUBE",
    duration: "12:40",
    video: "/videos/herovideo2.mp4",
    position: "right-0 md:right-[-3%] top-[10%] md:top-[13%]",
    width: "w-[110px] sm:w-[150px] md:w-[180px]",
    rotate: "rotate-2",
    delay: 0.3,
  },
  {
    label: "PODCAST",
    duration: "24:18",
    video: "/videos/herovideo3.mp4",
    position: "left-[2%] md:left-[5%] bottom-[5%]",
    width: "w-[120px] sm:w-[160px] md:w-[190px]",
    rotate: "rotate-2",
    delay: 0.5,
  },
  {
    label: "UGC",
    duration: "0:30",
    video: "/videos/herovideo4.mp4",
    position: "right-[2%] md:right-[5%] bottom-[-2%]",
    width: "w-[105px] sm:w-[140px] md:w-[165px]",
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
            We make it{" "}
            <span className="font-editorial-italic text-brand-red">
              worth watching.
            </span>
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
          className="relative max-w-[1050px] mx-auto mt-16 md:mt-24 mb-8"
          style={{ perspective: "1200px" }}
        >
          {/* 3D Laptop */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotateX: [5, 7, 5],
              rotateY: [-3, -1, -3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-[78%] sm:w-[70%] md:w-[62%] max-w-[680px] mx-auto z-10 pt-3"
          >
            {/* Laptop Screen Frame */}
            <div
              className="relative rounded-t-[15px] sm:rounded-t-[20px] md:rounded-t-[25px] bg-gradient-to-br from-[#555] via-[#171717] to-[#444] p-[5px] sm:p-[7px] md:p-[9px] shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
              style={{ transform: "translateZ(12px)" }}
            >
              {/* Inner Screen */}
              <div className="relative overflow-hidden rounded-t-[9px] sm:rounded-t-[13px] bg-[#101319] border border-black/80 p-1.5 sm:p-2 md:p-3">
                {/* Camera */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#080808] border border-white/10 z-20" />

                {/* Screen Header */}
                <div className="flex justify-between items-center px-2 py-1.5 mb-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>

                  <span className="text-[5px] sm:text-[7px] md:text-[9px] tracking-widest text-white/50">
                    K-MEDIA PRODUCTION / VIDEO EDITOR
                  </span>

                  <span className="text-[5px] sm:text-[7px] md:text-[9px] text-green-400">
                    ● LIVE
                  </span>
                </div>

                {/* Editing Workspace */}
                <div className="bg-[#171b22] rounded-md p-1.5 sm:p-2 md:p-3">
                  {/* Preview and Media Panel */}
                  <div className="grid grid-cols-[1.8fr_0.8fr] gap-1.5 sm:gap-2">
                    {/* Main Preview */}
                    <div className="relative aspect-video rounded-sm overflow-hidden bg-[#080a0e] border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&q=85"
                        alt="Video editing preview"
                        className="w-full h-full object-cover opacity-80"
                      />

                      <div className="absolute inset-0 bg-black/10" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">
                          <Play fill="white" size={13} />
                        </div>
                      </div>

                      <span className="absolute bottom-1 left-1 text-[5px] sm:text-[7px] text-white/80 tracking-widest">
                        PREVIEW / 001
                      </span>
                    </div>

                    {/* Media and Effects Panels */}
                    <div className="grid grid-rows-2 gap-1.5 sm:gap-2 min-w-0">
                      <div className="bg-[#222832] rounded-sm border border-white/10 p-1.5 sm:p-2 space-y-1 sm:space-y-2">
                        <div className="text-[5px] sm:text-[7px] md:text-[8px] text-white/50 tracking-widest">
                          MEDIA FILES
                        </div>
                        <div className="h-1 w-[85%] rounded bg-blue-400/70" />
                        <div className="h-1 w-[65%] rounded bg-purple-400/70" />
                        <div className="h-1 w-[75%] rounded bg-emerald-400/70" />
                        <div className="h-1 w-[50%] rounded bg-white/20" />
                      </div>

                      <div className="bg-[#222832] rounded-sm border border-white/10 p-1.5 sm:p-2 space-y-1 sm:space-y-2">
                        <div className="text-[5px] sm:text-[7px] md:text-[8px] text-white/50 tracking-widest">
                          EFFECTS
                        </div>
                        <div className="flex gap-1">
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-purple-400/80" />
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-blue-400/80" />
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-pink-400/80" />
                        </div>
                        <div className="h-1 w-full rounded bg-white/10" />
                        <div className="h-1 w-[70%] rounded bg-white/10" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Editing Timeline */}
                  <div className="relative bg-[#20252d] rounded-sm mt-1.5 sm:mt-2 p-1.5 sm:p-2 md:p-3 overflow-hidden">
                    <div className="flex justify-between text-[5px] sm:text-[7px] md:text-[8px] text-white/40 mb-2">
                      <span>00:00</span>
                      <span>00:15</span>
                      <span>00:30</span>
                      <span>00:45</span>
                      <span>01:00</span>
                    </div>

                    <div className="relative space-y-1.5 sm:space-y-2">
                      {/* Video Track */}
                      <div className="flex gap-1 h-2 sm:h-3 md:h-4">
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-[25%] rounded-sm bg-purple-400"
                        />
                        <motion.div
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="w-[30%] rounded-sm bg-purple-400/80"
                        />
                        <div className="w-[20%] rounded-sm bg-purple-400" />
                        <div className="w-[25%] rounded-sm bg-purple-400/70" />
                      </div>

                      {/* Audio Track */}
                      <div className="flex gap-1 h-2 sm:h-3 md:h-4">
                        <div className="w-[40%] rounded-sm bg-emerald-500" />
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                          className="w-[30%] rounded-sm bg-emerald-500/80"
                        />
                        <div className="w-[30%] rounded-sm bg-emerald-500" />
                      </div>

                      {/* Effects Track */}
                      <div className="flex gap-1 h-1.5 sm:h-2 md:h-3">
                        <div className="w-[35%] rounded-sm bg-blue-400" />
                        <div className="w-[25%] rounded-sm bg-blue-400/80" />
                        <div className="w-[40%] rounded-sm bg-blue-400" />
                      </div>

                      {/* Moving Playhead */}
                      <motion.div
                        className="absolute top-[-5px] bottom-[-5px] w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
                        animate={{ left: ["2%", "98%"] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="absolute -top-1 left-[-3px] w-2 h-2 bg-white rotate-45 rounded-[1px]" />
                      </motion.div>
                    </div>

                    <div className="flex justify-between text-[5px] sm:text-[7px] md:text-[8px] text-white/35 mt-2 sm:mt-3">
                      <span>VIDEO 01</span>
                      <span>AUDIO TRACK</span>
                      <span>COLOR / FX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Hinge */}
            <div className="relative h-[3px] sm:h-1 bg-gradient-to-b from-[#777] via-[#333] to-[#999] mx-[2%] z-10" />

            {/* 3D Laptop Base */}
            <div
              className="relative h-3 sm:h-4 md:h-5 mx-[-7%] rounded-b-[45%] bg-gradient-to-b from-[#d5d5d5] via-[#777] to-[#333] shadow-[0_18px_25px_rgba(0,0,0,0.22)]"
              style={{
                clipPath: "polygon(3% 0, 97% 0, 100% 85%, 96% 100%, 4% 100%, 0 85%)",
                transform: "translateZ(25px)",
              }}
            >
              {/* Trackpad */}
              <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[20%] h-[55%] rounded-b-md border border-white/20 bg-gradient-to-b from-[#999] to-[#777]" />

              {/* Front Edge Highlight */}
              <div className="absolute bottom-0 left-[4%] right-[4%] h-[1px] bg-white/50" />
            </div>

            {/* Laptop Shadow */}
            <div className="absolute -bottom-5 left-[10%] right-[10%] h-5 rounded-full bg-black/20 blur-xl -z-10" />
          </motion.div>

          {/* Floating Autoplay Video Cards */}
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
                <video
                  src={card.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
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

        {/* Scroll Indicator */}
        <div className="flex justify-center items-center gap-3 mt-12 text-xs text-black/40 tracking-widest">
          <ArrowDown size={15} className="animate-bounce" />
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}
