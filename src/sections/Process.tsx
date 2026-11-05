
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
    <section className="bg-[#F0EEE8] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">

          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-brand-red text-xs tracking-[0.3em] mb-7">
              05 / OUR PROCESS
            </p>

            <h2 className="font-editorial text-6xl md:text-8xl leading-[0.9]">
              From raw
              <br />
              footage to
              <br />
              <span className="font-editorial-italic text-brand-red">
                remarkable.
              </span>
            </h2>

            <p className="text-sm text-black/60 leading-7 max-w-sm mt-8">
              A simple, transparent creative process.
              You bring the footage and the vision.
              We bring it all together.
            </p>

            <div className="flex gap-3 mt-9">
              <div className="bg-white border border-black/10 rounded-xl p-5">
                <p className="font-editorial text-3xl">01—04</p>
                <p className="text-[9px] tracking-widest text-black/50 mt-1">
                  CLEAR STEPS
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-5">
                <p className="font-editorial text-3xl">100%</p>
                <p className="text-[9px] tracking-widest text-black/50 mt-1">
                  CREATIVE FOCUS
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-10 bottom-10 w-px bg-brand-red/30" />

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 top-7 w-14 h-14 rounded-full bg-brand-white border border-black/10 flex items-center justify-center z-10 shadow-sm">
                      <Icon size={21} className="text-brand-red" />
                    </div>

                    <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-9 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-[10px] tracking-[0.2em] text-brand-red">
                          {step.day}
                        </span>
                        <span className="font-editorial text-4xl text-black/10">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-editorial text-3xl md:text-4xl mt-5">
                        {step.title}
                      </h3>

                      <p className="text-sm text-black/55 leading-7 mt-3 max-w-xl">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-2 mt-7 text-[10px] tracking-widest text-black/50">
                        <Check size={14} className="text-brand-red" />
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
