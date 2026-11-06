import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Check,
  Clapperboard,
  Scissors,
  Volume2,
  Film,
} from "lucide-react";
import { motion } from "framer-motion";

const portfolio = [
  {
    title: "Podcast & Interview Editing",
    category: "PODCAST",
    duration: "42:10",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1000&auto=format&fit=crop",
  },
  {
    title: "Food & Lifestyle Stories",
    category: "LIFESTYLE",
    duration: "18:35",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000&auto=format&fit=crop",
  },
  {
    title: "Documentary Style Videos",
    category: "DOCUMENTARY",
    duration: "24:20",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1000&auto=format&fit=crop",
  },
];

const features = [
  {
    icon: Clapperboard,
    title: "Storytelling & Pacing",
    description:
      "We structure your footage into engaging stories that keep viewers watching.",
  },
  {
    icon: Scissors,
    title: "Professional Editing",
    description:
      "Clean cuts, smooth transitions and carefully crafted sequences that match your style.",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description:
      "Background music, sound effects and audio balancing for a polished viewing experience.",
  },
  {
    icon: Film,
    title: "Color Grading",
    description:
      "Consistent colors and visual treatments that give your content a professional finish.",
  },
];

const services = [
  {
    name: "Long-Form Video Editing",
    path: "/long-form-video-editing",
  },
  {
    name: "Podcast Video Editing",
    path: "/podcast-video-editing",
  },
  {
    name: "Thumbnail Designing",
    path: "/thumbnail-designing",
  },
  {
    name: "Shorts/Reel Video Editing",
    path: "/short-form-video-editing",
  },
  {
    name: "YouTube Channel Management",
    path: "/youtube-channel-management",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Footage",
    description:
      "Send us your raw footage, references and editing requirements.",
  },
  {
    number: "02",
    title: "Editing & Storytelling",
    description:
      "Our editors organize your footage and create an engaging first cut.",
  },
  {
    number: "03",
    title: "Review & Feedback",
    description:
      "Watch the draft and share your feedback so we can refine the video.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive your polished, export-ready video in your preferred format.",
  },
];

const faqs = [
  {
    question: "What type of long-form videos do you edit?",
    answer:
      "We edit YouTube videos, podcasts, interviews, documentaries, educational content, reaction videos and other long-form formats.",
  },
  {
    question: "Can you match my existing editing style?",
    answer:
      "Yes. We study your existing videos and references to understand your preferred pacing, transitions, graphics and overall editing style.",
  },
  {
    question: "Do I need to provide the raw footage?",
    answer:
      "Yes. You can share your raw footage through Google Drive or another file-sharing platform, along with your references and instructions.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. You can share your feedback after reviewing the first draft. Revision scope and timelines will be discussed before starting the project.",
  },
  {
    question: "How much does long-form video editing cost?",
    answer:
      "Pricing depends on video duration, editing complexity, graphics, sound design and delivery requirements. Contact us for a project-specific quote.",
  },
];

export default function LongFormVideoEditing() {
  const [comparisonPosition, setComparisonPosition] = useState(50);

  return (
    <main className="bg-brand-white overflow-hidden">
      {/* SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <div className="max-w-7xl mx-auto flex gap-3 justify-center flex-wrap">
          {services.map((service) => {
            const isActive = service.name === "Long-Form Video Editing";

            return (
              <Link
                key={service.path}
                to={service.path}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-white text-brand-black border-black/15 hover:bg-brand-red hover:text-white hover:border-brand-red"
                }`}
              >
                {service.name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative px-5 md:px-10 lg:px-12 pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-brand-red text-white rounded-full px-4 py-2 text-[10px] tracking-widest">
                  01
                </span>

                <span className="text-xs tracking-[0.3em] text-black/50">
                  OUR SERVICES / VIDEO EDITING
                </span>
              </div>

              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight text-brand-black">
                Long-Form
                <br />
                Video{" "}
                <span className="font-editorial-italic text-brand-red">
                  Editing.
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-8">
                Your ideas deserve more than just a timeline and a few cuts. We
                transform raw footage into engaging stories with professional
                editing, cinematic visuals and sound that keep your audience
                watching.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors"
                >
                  Start Your Project
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <span className="text-xs tracking-widest text-black/45">
                  YOUR CONTENT. OUR CREATIVITY.
                </span>
              </div>
            </motion.div>

            {/* RIGHT SIDE - BEFORE / AFTER COMPARISON */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] overflow-hidden bg-black shadow-2xl">
                {/* FINAL EDIT IMAGE - BASE IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600&auto=format&fit=crop"
                  alt="Cinematic final video edit"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter:
                      "saturate(1.45) contrast(1.2) brightness(0.95) sepia(0.15)",
                  }}
                />

                {/* CINEMATIC COLOR OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-900/25 pointer-events-none" />

                {/* ORIGINAL IMAGE - CLIPPED BY SLIDER */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600&auto=format&fit=crop"
                    alt="Original ungraded video footage"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(0.85) brightness(0.72) contrast(0.8) saturate(0.55)",
                    }}
                  />

                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                </div>

                {/* ORIGINAL LABEL */}
                <span className="absolute top-4 left-4 z-20 bg-white text-brand-black px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  ORIGINAL
                </span>

                {/* FINAL EDIT LABEL */}
                <span className="absolute top-4 right-4 z-20 bg-brand-red text-white px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  FINAL EDIT
                </span>

                {/* DIVIDER */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none"
                  style={{
                    left: `${comparisonPosition}%`,
                    transform: "translateX(-50%)",
                  }}
                />

                {/* SLIDER HANDLE */}
                <div
                  className="absolute z-20 top-1/2 w-11 h-11 bg-brand-red rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white pointer-events-none"
                  style={{
                    left: `${comparisonPosition}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="text-lg leading-none">↔</span>
                </div>

                {/* INTERACTIVE RANGE INPUT */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={comparisonPosition}
                  onChange={(e) =>
                    setComparisonPosition(Number(e.target.value))
                  }
                  aria-label="Compare original footage with final video edit"
                  className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/45 font-semibold">
                  RAW FOOTAGE
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-brand-red font-semibold">
                  CINEMATIC FINISH
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 md:px-12 py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] font-bold text-brand-red">
              MORE THAN JUST EDITING
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight text-brand-black mt-5">
              Great videos
              <br />
              <span className="font-editorial-italic text-brand-red">
                keep people{" "}
              </span>
              watching.
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              Creating long-form content takes time. Planning, recording and
              editing every video can quickly become overwhelming.
            </p>

            <p>
              That's where we come in. Our video editing team takes your raw
              footage and turns it into polished, engaging content while
              maintaining your unique creative identity.
            </p>

            <p>
              Whether you're a YouTuber, podcaster, educator or brand, we help
              you publish consistently without spending hours behind the editing
              screen.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Let's discuss your content
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-[#FFF0F0] px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                OUR WORK
              </span>
              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                Stories we've shaped.
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red border-b border-brand-red pb-2 w-fit"
            >
              Explore all projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <span className="absolute top-4 left-4 bg-brand-black text-white px-4 py-2 text-[10px] tracking-widest">
                    {item.category}
                  </span>

                  <div className="absolute bottom-4 right-4 bg-brand-red text-white w-11 h-11 rounded-full flex items-center justify-center">
                    <Play size={17} fill="currentColor" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <h3 className="font-editorial text-xl md:text-2xl text-brand-black">
                    {item.title}
                  </h3>
                  <span className="text-xs text-black/45">{item.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-black/40 mt-7">
            Portfolio cards are visual placeholders. Replace these images with
            actual K-Media project thumbnails and video links.
          </p>
        </div>
      </section>

      {/* TYPES OF CONTENT */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                CONTENT FORMATS
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                What can we edit?
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              From creator-led videos to professional brand content, we edit
              long-form videos across different industries and formats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "YouTube Videos",
              "Podcast Episodes",
              "Interviews & Conversations",
              "Educational Videos",
              "Documentary Videos",
              "Reaction Videos",
              "Lifestyle & Vlogs",
              "Brand Storytelling",
              "Webinar Recordings",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-black/10 p-5 rounded-xl hover:border-brand-red hover:bg-[#FFF5F5] transition-all"
              >
                <span className="text-brand-red font-editorial text-2xl">
                  0{index + 1}
                </span>
                <span className="font-semibold text-brand-black">{item}</span>
                <ArrowUpRight size={17} className="ml-auto text-black/35" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="mx-0 md:mx-5 rounded-[32px] md:rounded-[48px] bg-[#FFF0F0] border border-brand-red/10 px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHAT WE DO
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5 leading-tight">
              Everything your
              <br />
              video needs.
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              Every frame matters. We bring together creativity, storytelling
              and technical editing to make your videos look and feel
              professional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-[24px] p-7 md:p-9 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-7">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-brand-black">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-base leading-7 text-black/55 mt-4">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              HOW IT WORKS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
              From raw footage
              <br />
              to{" "}
              <span className="font-editorial-italic text-brand-red">
                ready to post.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-brand-red pt-7"
              >
                <span className="font-editorial text-5xl text-brand-red/50">
                  {step.number}
                </span>

                <h3 className="font-bold text-xl text-brand-black mt-7">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-black/55 mt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      {/* <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Long-form editing & organic growth
        </h2>

        <p className="text-sm md:text-base mb-4">
          Built for creators who want to maximise retention and monetisation -
          without creative burnout.
        </p>

        <div className="h-px bg-[#ed0017] w-full mb-9" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#f4f4f6] rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[190px] hover:-translate-y-1 transition"
            >
              <div className="text-[#625f88] mb-4">{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-medium">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* WHY K-MEDIA */}
      <section className="mx-0 md:mx-5 rounded-[32px] md:rounded-[48px] bg-brand-black text-white px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHY K-MEDIA EDITS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight mt-6">
              You create.
              <br />
              We make it
              <br />
              <span className="font-editorial-italic text-brand-red">
                unforgettable.
              </span>
            </h2>

            <p className="text-white/55 leading-relaxed mt-7 max-w-lg">
              We believe great editing should make your content feel natural,
              engaging and unmistakably yours. Our goal is to help you focus on
              creating while we take care of the editing.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-brand-black transition-colors"
            >
              Work With Us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Your editing style, preserved",
              "Consistent content quality",
              "Creator-first approach",
              "Clear communication",
              "Attention to every detail",
              "Reliable delivery process",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.04]"
              >
                <Check size={19} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-sm leading-6 text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              GOT QUESTIONS?
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
              Frequently asked
              <br />
              <span className="font-editorial-italic text-brand-red">
                questions.
              </span>
            </h2>
          </div>

          <div className="border-t border-black/15">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group border-b border-black/15 py-7"
              >
                <div className="flex items-center justify-between gap-5">
                  <h3 className="font-semibold text-base md:text-xl text-brand-black">
                    <span className="text-brand-red mr-4 text-sm">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </h3>

                  <span className="text-brand-red text-2xl transition-transform duration-300 group-hover:rotate-45">
                    +
                  </span>
                </div>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base leading-7 text-black/55 pt-4 pl-10 max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto bg-[#FFF0F0] rounded-[32px] md:rounded-[48px] border border-brand-red/10 px-7 py-14 md:px-16 md:py-20 text-center">
          <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
            READY TO GET STARTED?
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl text-brand-black mt-6 leading-tight">
            Let's make your
            <br />
            next video{" "}
            <span className="font-editorial-italic text-brand-red">count.</span>
          </h2>

          <p className="text-black/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Spend more time creating and less time editing. Let's build content
            your audience wants to watch.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-brand-black transition-colors"
          >
            Tell Us About Your Project
            <ArrowRight size={18} />
          </Link>

          <p className="text-xs text-black/40 mt-6">
            Have questions? Email us at info@kodandamedia.com
          </p>
        </div>
      </section>
    </main>
  );
}
