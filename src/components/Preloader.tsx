
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOADING_DURATION = 4000;
const CIRCLE_SIZE = 42;
const CIRCLE_RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(
        Math.floor((elapsed / LOADING_DURATION) * 100),
        100,
      );

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);
      }
    }, 30);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
    }, LOADING_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] bg-[#101010] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background glow */}
          {/* <div className="absolute w-[350px] h-[350px] rounded-full bg-brand-red/10 blur-[120px] pointer-events-none" /> */}

          {/* Top accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-brand-red origin-left"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <img
              src="/images/productionlogo4.png"
              alt="K-Media Production"
              className="w-48 sm:w-56 md:w-64 h-auto object-contain"
            />
          </motion.div>

          {/* Loading information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center mt-4"
          >
            {/* <p className="text-white/40 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-2">
              Loading Experience
            </p>

            <p className="text-white/85 text-xs tracking-[0.18em] uppercase">
              Crafting Visual Stories
            </p> */}

            {/* Circular Loader */}
            <div
              className="relative flex items-center justify-center mt-4"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
              }}
            >
              <svg
                width={CIRCLE_SIZE}
                height={CIRCLE_SIZE}
                viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                className="-rotate-90"
              >
                {/* Background circle */}
                <circle
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="2"
                />

                {/* Animated progress circle */}
                <motion.circle
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={CIRCLE_RADIUS}
                  fill="none"
                  stroke="currentColor"
                  className="text-brand-red"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  animate={{
                    strokeDashoffset:
                      CIRCUMFERENCE -
                      (progress / 100) * CIRCUMFERENCE,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Center glow */}
              {/* <div className="absolute w-10 h-10 rounded-full bg-brand-red/10 blur-xl" /> */}
            </div>

            {/* Percentage below circular loader */}
            <motion.div
              key={progress}
              initial={{ opacity: 0.6, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-mono text-lg font-medium text-white tabular-nums"
            >
              {String(progress).padStart(2, "0")}
              <span className="text-brand-red text-sm ml-0.5">%</span>
            </motion.div>

            {/* Bottom details */}
            {/* <div className="flex justify-between w-[260px] sm:w-[280px] mt-5">
              <span className="text-white/25 text-[9px] tracking-[0.2em] uppercase">
                K-Media Production
              </span>

              <span className="text-white/25 text-[9px] tracking-[0.2em] uppercase">
                {progress === 100 ? "Ready" : "Please Wait"}
              </span>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
