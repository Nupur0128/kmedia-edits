import { motion } from "framer-motion";
import {
  MessageSquareText,
  FolderPlus,
  Scissors,
  TrendingUp,
  Globe2,
  Clock3,
  Languages,
  CloudUpload,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Story First",
    description:
      "We don't just cut clips. We find the story that makes people stay.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Creative Kick-Off",
    description:
      "We understand your vision, audience and goals before every project.",
    icon: FolderPlus,
  },
  {
    number: "03",
    title: "Quality Editing",
    description:
      "Thoughtful editing, polished visuals and attention to every detail.",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Publish & Grow",
    description:
      "Content made to perform, connect with audiences and grow your brand.",
    icon: TrendingUp,
  },
];

const features = [
  {
    icon: Globe2,
    title: "Creators & Brands",
    description:
      "From individual creators to growing businesses, we edit for every vision.",
  },
  {
    icon: Clock3,
    title: "Reliable Turnaround",
    description:
      "Consistent delivery timelines without compromising creative quality.",
  },
  {
    icon: Languages,
    title: "Creative Communication",
    description:
      "Easy collaboration, clear briefs and feedback at every stage.",
  },
  {
    icon: CloudUpload,
    title: "Easy File Sharing",
    description:
      "Share footage through Google Drive or Dropbox and receive final edits online.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAFAF9] px-5 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* TOP HEADING */}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-[1.02] tracking-tight text-[#191919]"
          >
            Why Choose <span className="text-brand-red">Us.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-base text-black/60 leading-7 max-w-[350px]"
          >
            Great content deserves great editing. We bring creativity,
            consistency and quality to every frame we create.
          </motion.p>
        </div>

        {/* FOUR CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="relative isolate overflow-hidden bg-white border border-black/[0.08] rounded-[22px] p-6 md:p-7 min-h-[215px] group cursor-pointer hover:shadow-[0_18px_45px_rgba(169,0,45,0.16)] transition-shadow duration-500"
              >
                {/* TRANSPARENT BRAND-RED LIQUID LAYER */}
                <div className="absolute inset-0 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none">
                  {/* Subtle transparent red liquid */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#A9002D]/25 via-[#C00024]/12 to-[#E60023]/5 backdrop-blur-[1px]" />

                  {/* Glass reflection and depth */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_35%,rgba(169,0,45,0.06)_75%,rgba(169,0,45,0.12))]" />

                  {/* Animated water surface */}
                  <motion.div
                    className="absolute -top-[19px] left-[-50%] w-[200%] h-10"
                    animate={{
                      x: ["0%", "12%", "-5%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      viewBox="0 0 1200 100"
                      preserveAspectRatio="none"
                      className="w-full h-full"
                    >
                      <defs>
                        <linearGradient
                          id={`waterWave-${reason.number}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#A9002D"
                            stopOpacity="0.12"
                          />
                          <stop
                            offset="45%"
                            stopColor="#C00024"
                            stopOpacity="0.22"
                          />
                          <stop
                            offset="100%"
                            stopColor="#A9002D"
                            stopOpacity="0.08"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 55 C100 5 200 5 300 48 C400 90 500 90 600 48 C700 5 800 5 900 48 C1000 90 1100 90 1200 48 L1200 100 L0 100 Z"
                        fill={`url(#waterWave-${reason.number})`}
                      />
                    </svg>
                  </motion.div>

                  {/* Fine reflective water edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/40 blur-[1px]" />

                  {/* Subtle red underwater glow */}
                  <div className="absolute -bottom-12 -right-10 w-40 h-40 rounded-full bg-[#A9002D]/10 blur-3xl" />
                </div>

                {/* CARD CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#191919] flex items-center justify-center text-white group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-lg">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="text-[30px] font-extrabold tracking-tight text-[#EAEAE7] group-hover:text-brand-red/60 transition-colors duration-500">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl md:text-3xl text-[#191919] mb-2 group-hover:text-[#A9002D] transition-colors duration-500">
                    {reason.title}
                  </h3>

                  <p className="text-[13px] md:text-sm leading-[1.6] text-black/55 group-hover:text-black/75 transition-colors duration-500">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DARK FEATURE PANEL */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 bg-[#191919] rounded-[26px] px-7 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* LEFT CONTENT */}

          <div className="flex flex-col justify-center">
            <p className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-brand-red uppercase mb-5">
              K-Media Production · CREATIVE STUDIO
            </p>

            <h3 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white">
              Your Vision.
              <br />
              <span className="font-editorial-italic text-brand-red">
                Our Creative Edge.
              </span>
            </h3>

            <p className="text-sm md:text-base text-white/60 leading-7 max-w-[440px] mt-5">
              From short-form content to cinematic brand films, we bring your
              ideas to life through powerful visuals and thoughtful
              storytelling.
            </p>
          </div>

          {/* RIGHT FEATURE CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="bg-[#242424] rounded-[19px] p-5 md:p-6 min-h-[145px] group hover:bg-[#2B2B2B] transition-colors duration-300"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="text-brand-red mb-5 group-hover:scale-110 transition-transform duration-300"
                  />

                  <h4 className="font-editorial text-xl text-white mb-2">
                    {feature.title}
                  </h4>

                  <p className="text-xs md:text-[13px] text-white/50 leading-[1.6]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
