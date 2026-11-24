
import { motion } from "framer-motion";
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
  return (
    <section className="bg-[#F0EEE8] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">

          {/* LEFT STICKY SECTION */}
          <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center lg:self-start">

            <p className="text-brand-red text-xs tracking-[0.3em] mb-4 sm:mb-7">
              05 / OUR PROCESS
            </p>

            <h2 className="font-editorial text-4xl sm:text-6xl md:text-8xl leading-[0.95]">
              From raw
              <br />
              footage to
              <br />
              <span className="font-editorial-italic text-brand-red">
                remarkable.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-black/60 leading-6 sm:leading-7 max-w-sm mt-4 sm:mt-8">
              A simple, transparent creative process.
              You bring the footage and the vision.
              We bring it all together.
            </p>

            <div className="flex gap-3 mt-6 sm:mt-9">

              <div className="bg-white border border-black/10 rounded-xl p-4 sm:p-5 flex-1 sm:flex-initial">
                <p className="font-editorial text-2xl sm:text-3xl">
                  01—04
                </p>
                <p className="text-[8px] sm:text-[9px] tracking-widest text-black/50 mt-1">
                  CLEAR STEPS
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-4 sm:p-5 flex-1 sm:flex-initial">
                <p className="font-editorial text-2xl sm:text-3xl">
                  100%
                </p>
                <p className="text-[8px] sm:text-[9px] tracking-widest text-black/50 mt-1">
                  CREATIVE FOCUS
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SCROLLING SECTION */}
          <div className="relative">

            {/* Timeline */}
            <div className="absolute left-5 sm:left-7 top-6 sm:top-10 bottom-6 sm:bottom-10 w-px bg-brand-red/30" />

            <div className="space-y-6 sm:space-y-8">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-12 sm:pl-20"
                  >

                    {/* Timeline Icon */}
                    <div className="absolute left-0 top-5 sm:top-7 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border border-black/10 flex items-center justify-center z-10 shadow-sm">
                      <Icon
                        size={18}
                        className="text-brand-red sm:hidden"
                      />
                      <Icon
                        size={21}
                        className="text-brand-red hidden sm:block"
                      />
                    </div>

                    {/* Process Card */}
                    <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-6 md:p-9 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                      <div className="flex justify-between items-center gap-2 sm:gap-3">
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-brand-red font-medium">
                          {step.day}
                        </span>

                        <span className="font-editorial text-2xl sm:text-4xl text-black/10">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-5 leading-[1.15]">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-black/55 leading-relaxed mt-2 sm:mt-3 max-w-xl">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-1.5 sm:gap-2 mt-4 sm:mt-7 text-[9px] sm:text-[10px] tracking-widest text-black/50">
                        <Check size={13} className="text-brand-red" />
                        {step.tag}
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