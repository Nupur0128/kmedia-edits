import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  Upload,
  Clapperboard,
  MessageSquare,
  Send,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    day: "PROJECT KICKOFF",
    title: "Share your footage.",
    description:
      "Tell us about your project, goals and creative direction. Share your raw footage through Google Drive or Dropbox.",
    icon: Upload,
    tag: "BRIEF & FOOTAGE",
  },
  {
    number: "02",
    day: "PRODUCTION",
    title: "We create the magic.",
    description:
      "Our editors work on pacing, transitions, sound design, colour and storytelling to bring your vision to life.",
    icon: Clapperboard,
    tag: "EDIT & CREATE",
  },
  {
    number: "03",
    day: "REVIEW",
    title: "Your feedback matters.",
    description:
      "Watch the first cut, share your feedback and request revisions. We refine the edit until it's right.",
    icon: MessageSquare,
    tag: "REVIEW & REFINE",
  },
  {
    number: "04",
    day: "FINAL DELIVERY",
    title: "Ready for the world.",
    description:
      "Receive your final export in the required formats, ready to publish across your platforms.",
    icon: Send,
    tag: "EXPORT & DELIVER",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the steps container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(latest * steps.length))
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToStep = (idx: number) => {
    const el = document.getElementById(`process-step-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="bg-[#F0EEE8] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 xl:gap-24 items-start relative">

          {/* LEFT STICKY SECTION */}
          <div className="lg:sticky lg:top-24 xl:top-28 lg:self-start space-y-6">
            <div>
              <p className="text-brand-red text-xs tracking-[0.3em] mb-4 sm:mb-6 font-medium">
                05 / OUR PROCESS
              </p>

              <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.95]">
                From raw
                <br />
                footage to
                <br />
                <span className="font-editorial-italic text-brand-red">
                  remarkable.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-black/60 leading-6 sm:leading-7 max-w-sm mt-4 sm:mt-6">
                A simple, transparent creative process.
                You bring the footage and the vision.
                We bring it all together.
              </p>
            </div>

            {/* Quick Step Jump Pills */}
            <div className="hidden sm:flex items-center gap-2 pt-1">
              {steps.map((s, idx) => (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => scrollToStep(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? "bg-brand-red text-white shadow-md shadow-brand-red/20 scale-105"
                      : idx < activeStep
                      ? "bg-white text-brand-red border border-brand-red/20 hover:border-brand-red"
                      : "bg-white/70 text-black/50 border border-black/10 hover:text-black/80 hover:bg-white"
                  }`}
                >
                  <span>{s.number}</span>
                  {activeStep === idx && (
                    <span className="text-[10px] tracking-wider hidden md:inline">
                      {s.day}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Stage & Metrics Cards */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <div className="bg-white border border-black/10 rounded-xl p-4 sm:p-5 flex-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <p className="font-editorial text-2xl sm:text-3xl text-brand-red">
                    0{activeStep + 1}
                    <span className="text-black/25 text-lg font-normal"> / 04</span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider bg-brand-red/10 text-brand-red">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    ACTIVE
                  </span>
                </div>
                <p className="text-[8px] sm:text-[9px] tracking-widest text-black/60 mt-1 uppercase font-medium">
                  {steps[activeStep].tag}
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-4 sm:p-5 flex-1 transition-all duration-300">
                <p className="font-editorial text-2xl sm:text-3xl">
                  100%
                </p>
                <p className="text-[8px] sm:text-[9px] tracking-widest text-black/50 mt-1 uppercase font-medium">
                  Creative Focus
                </p>
              </div>
            </div>

            {/* Overall Progress Indicator */}
            <div className="hidden lg:block pt-1">
              <div className="flex justify-between items-center text-[9px] tracking-widest text-black/45 mb-2 font-medium">
                <span>OVERALL PROGRESS</span>
                <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-red rounded-full"
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SCROLLING SECTION */}
          <div ref={containerRef} className="relative pb-8 sm:pb-16">

            {/* Static Background Timeline Line */}
            <div className="absolute left-5 sm:left-7 top-6 sm:top-10 bottom-6 sm:bottom-10 w-0.5 bg-black/10 rounded-full" />

            {/* Animated Brand-Red Timeline Fill Line */}
            <motion.div
              className="absolute left-5 sm:left-7 top-6 sm:top-10 bottom-6 sm:bottom-10 w-0.5 bg-brand-red origin-top rounded-full shadow-[0_0_8px_rgba(229,57,53,0.4)]"
              style={{ scaleY }}
            />

            <div className="space-y-12 sm:space-y-16 md:space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <motion.article
                    key={step.number}
                    id={`process-step-${index}`}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    onViewportEnter={() => setActiveStep(index)}
                    viewport={{
                      once: false,
                      amount: 0.35,
                      margin: "-15% 0px -25% 0px",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-12 sm:pl-20 group"
                  >
                    {/* Timeline Node Icon */}
                    <div
                      className={`absolute left-0 top-5 sm:top-7 w-10 h-10 sm:w-14 sm:h-14 rounded-full border transition-all duration-500 flex items-center justify-center z-10 ${
                        isActive
                          ? "bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/35 scale-110 ring-4 ring-brand-red/20"
                          : isPast
                          ? "bg-white text-brand-red border-brand-red/40 shadow-sm"
                          : "bg-white text-black/40 border-black/15 shadow-sm group-hover:border-black/30"
                      }`}
                    >
                      <Icon
                        size={18}
                        className="sm:hidden transition-transform duration-300"
                      />
                      <Icon
                        size={21}
                        className="hidden sm:block transition-transform duration-300"
                      />
                    </div>

                    {/* Process Card */}
                    <div
                      className={`bg-white rounded-2xl p-5 sm:p-7 md:p-9 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                        isActive
                          ? "border-brand-red/40 shadow-[0_16px_40px_rgba(229,57,53,0.08)] ring-1 ring-brand-red/15"
                          : "border-black/10 shadow-sm"
                      }`}
                    >
                      <div className="flex justify-between items-center gap-2 sm:gap-3">
                        <span
                          className={`text-[9px] sm:text-[10px] tracking-[0.2em] font-medium transition-colors duration-300 ${
                            isActive ? "text-brand-red" : "text-black/60"
                          }`}
                        >
                          {step.day}
                        </span>

                        <span
                          className={`font-editorial text-2xl sm:text-4xl transition-colors duration-300 ${
                            isActive ? "text-brand-red/40" : "text-black/10"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-5 leading-[1.15]">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-black/60 leading-relaxed mt-2 sm:mt-3 max-w-xl">
                        {step.description}
                      </p>

                      <div className="flex items-center justify-between mt-4 sm:mt-7 pt-4 border-t border-black/[0.06]">
                        <div
                          className={`flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] tracking-widest font-medium transition-colors duration-300 ${
                            isActive ? "text-brand-red" : "text-black/50"
                          }`}
                        >
                          <Check
                            size={13}
                            className={isActive ? "text-brand-red" : "text-black/40"}
                          />
                          {step.tag}
                        </div>

                        {isActive && (
                          <span className="hidden sm:inline-flex items-center text-[10px] text-brand-red font-medium tracking-wider">
                            Step 0{index + 1} Active
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
