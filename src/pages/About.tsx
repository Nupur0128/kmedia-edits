
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Scissors,
  Film,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Scissors,
    title: "Short-Form Editing",
    description:
      "Reels, YouTube Shorts, and social-first videos designed to capture attention and keep viewers watching.",
  },
  {
    number: "02",
    icon: Film,
    title: "Long-Form Editing",
    description:
      "Engaging YouTube videos, storytelling edits, and polished content that keeps your audience connected.",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Podcast Editing",
    description:
      "Turn conversations into compelling podcast videos, clips, and shareable moments.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Channel Management",
    description:
      "Consistent content support, upload planning, and creative direction for your YouTube presence.",
  },
];

const values = [
  {
    number: "01",
    title: "Story First",
    description:
      "Every edit starts with understanding the story. We focus on making content meaningful, engaging, and easy to follow.",
  },
  {
    number: "02",
    title: "Details Matter",
    description:
      "From transitions and sound design to pacing and visuals, every detail contributes to the final experience.",
  },
  {
    number: "03",
    title: "Built for People",
    description:
      "We create with the audience in mind, making videos that feel natural, relevant, and worth watching.",
  },
  {
    number: "04",
    title: "Creative Collaboration",
    description:
      "Your vision matters. We work around your goals, feedback, and creative direction to bring ideas to life.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your brand, audience, content style, and project goals.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Our editing approach brings together storytelling, visuals, sound, and pacing.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We review the edit, incorporate your feedback, and polish the details.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Your final content is prepared and delivered according to the agreed requirements.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-brand-white text-brand-black">
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] text-brand-red font-semibold"
          >
            <span className="w-8 h-[2px] bg-brand-red" />
            ABOUT K-Media Production
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[108px] leading-[0.94] tracking-tight mt-8 max-w-6xl"
          >
            We believe in the power of
            <span className="font-editorial-italic text-brand-red">
              {" "}storytelling.
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <p className="text-base md:text-lg text-brand-black/65 max-w-xl leading-relaxed">
              We turn raw footage into meaningful visual experiences. From
              the first cut to the final frame, our focus is on creating
              content that connects with people.
            </p>

            <a
              href="#our-story"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider border-b border-brand-black pb-2 hover:text-brand-red hover:border-brand-red transition-colors w-fit"
            >
              Get to know us
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* DECORATIVE MOVING ELEMENT */}
        <motion.div
          aria-hidden="true"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-4 top-24 md:right-12 lg:right-24 lg:top-20 pointer-events-none select-none"
        >
          <span className="font-editorial text-[180px] sm:text-[230px] md:text-[300px] lg:text-[370px] leading-none text-brand-red/10">
            K.
          </span>
        </motion.div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section
        id="our-story"
        className="bg-brand-black text-brand-white px-6 md:px-12 lg:px-16 py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="flex items-center gap-3 text-xs tracking-[0.3em] text-brand-red font-semibold">
              <span className="w-7 h-[2px] bg-brand-red" />
              WHO WE ARE
            </p>

            <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[1.02] mt-7">
              More than just
              <br />
              <span className="font-editorial-italic text-brand-red">
                an edit.
              </span>
            </h2>

            <div className="space-y-5 text-white/65 leading-relaxed mt-8 max-w-lg">
              <p>
                K-Media Production is built around a simple idea: great content
                deserves great storytelling. A video is not just a collection
                of clips. It's an opportunity to communicate, entertain, and
                build a connection.
              </p>

              <p>
                We bring together creative thinking, thoughtful editing, and
                attention to detail to help creators and brands present
                their ideas in the best possible way.
              </p>

              <p>
                Whether it's a quick social media reel, a detailed YouTube
                video, or a podcast episode, we approach every project with
                the same creative mindset.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85"
                alt="Creative video editing workspace"
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 md:-left-6 bg-brand-red p-5 md:p-7 max-w-[220px]">
              <Sparkles size={23} className="mb-4" />
              <p className="font-editorial text-2xl md:text-3xl leading-tight">
                Every frame has a purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] text-brand-red font-semibold">
                WHAT WE DO
              </p>

              <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[0.98] mt-6">
                Creativity meets
                <br />
                <span className="font-editorial-italic text-brand-red">
                  execution.
                </span>
              </h2>
            </div>

            <p className="text-brand-black/60 leading-relaxed max-w-sm">
              Creative video solutions for creators, brands, businesses,
              and anyone with a story worth sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 border-t border-brand-black/20">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group border-b border-brand-black/20 md:even:border-l md:even:pl-10 md:odd:pr-10 py-9 md:py-11"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-xs tracking-widest text-brand-red">
                      {service.number}
                    </span>
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-brand-black/40 group-hover:text-brand-red group-hover:rotate-12 transition-all"
                    />
                  </div>

                  <h3 className="font-editorial text-3xl md:text-4xl mt-7 group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-brand-black/60 leading-relaxed mt-4 max-w-md">
                    {service.description}
                  </p>

                  <a
                    href="/services/short-form-video-editing"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest mt-7 uppercase hover:text-brand-red transition-colors"
                  >
                    Explore services
                    <ArrowUpRight size={15} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-brand-red text-white px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] text-white/65 font-semibold">
              WHAT DRIVES US
            </p>

            <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-7">
              Our creativity.
              <br />
              <span className="font-editorial-italic">
                Your story.
              </span>
            </h2>

            <p className="text-white/75 leading-relaxed mt-7 max-w-xl">
              Good editing is not about adding more effects. It's about
              knowing what to keep, what to remove, and how to make every
              moment count.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/25 mt-16 border border-white/25">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-brand-red p-7 md:p-8 min-h-[240px] group hover:bg-brand-black transition-colors duration-300"
              >
                <span className="text-xs tracking-widest text-white/60">
                  {value.number}
                </span>

                <h3 className="font-editorial text-3xl mt-10">
                  {value.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed mt-4">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] text-brand-red font-semibold">
              HOW WE WORK
            </p>

            <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[0.98] mt-6">
              From raw footage
              <br />
              to <span className="font-editorial-italic text-brand-red">ready.</span>
            </h2>

            <p className="text-brand-black/60 mt-6 leading-relaxed">
              A thoughtful process helps us turn your creative direction
              into a polished final video.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t-2 border-brand-black pt-6 group hover:border-brand-red transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-5xl text-brand-red/30 group-hover:text-brand-red transition-colors">
                    {step.number}
                  </span>
                  <Check
                    size={19}
                    className="text-brand-black/30 group-hover:text-brand-red transition-colors"
                  />
                </div>

                <h3 className="font-editorial text-3xl mt-8">
                  {step.title}
                </h3>

                <p className="text-sm text-brand-black/60 leading-relaxed mt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-black text-brand-white px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-brand-red font-semibold">
            HAVE A STORY TO TELL?
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-7">
            <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Let's create
              <br />
              something
              <span className="font-editorial-italic text-brand-red">
                {" "}worth watching.
              </span>
            </h2>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-6 bg-brand-red text-white px-8 py-5 text-xs font-semibold tracking-[0.15em] hover:bg-white hover:text-brand-black transition-colors w-fit"
            >
              LET'S WORK TOGETHER
              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
