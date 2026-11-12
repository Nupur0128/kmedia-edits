import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Scissors,
  Captions,
  Music2,
  Film,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Long-Form Video Editing", path: "/long-form-video-editing" },
  { name: "Podcast Video Editing", path: "/podcast-video-editing" },
  { name: "AI UGC Video Editing", path: "/UGC-video-editing" },
  { name: "Thumbnail Designing", path: "/thumbnail-designing" },
  { name: "Shorts/Reel Video Editing", path: "/short-form-video-editing" },
  { name: "YouTube Channel Management", path: "/youtube-channel-management" },
];

const portfolio = [
  {
    title: "Educational Content",
    category: "EDUCATIONAL",
    videoId: "1-bk0r4_3yRIJ9OjAWfwWKZ630JjHdmPn",
  },
  {
    title: "Social Media Campaign",
    category: "SOCIAL MEDIA",
    videoId: "17wevyacOmU0_KCnqYMIvoZ0YQ3WbOV1O",
  },
  {
    title: "Creator & Personal Brand Reel",
    category: "CREATOR CONTENT",
    videoId: "1oKrNAs13IlrEcg8t9ZRvaSuycFcqo23S",
  },
  {
    title: "Lifestyle & Trending Reel",
    category: "LIFESTYLE",
    videoId: "1ziNUXa8ZF8IvQ0rphPzk7D8AaGqVXWyI",
  },
  {
    title: "Product Promotional Video",
    category: "BRAND CONTENT",
    videoId: "1Q93tHgbw4FehDwj4o1omX0iu-QfMC6Di",
  },
  {
    title: "Personal Branding Video",
    category: "PERSONAL BRAND",
    videoId: "1SF1E3GBjeckMQgUVy0EHB7ADCN3oISFL",
  },
  {
    title: "Brand Storytelling",
    category: "BRAND CONTENT",
    videoId: "1fVSAt2WjV2ueRLM6HccoKy2UdsNsTPiE",
  },
  {
    title: "Product Showcase",
    category: "PRODUCT VIDEO",
    videoId: "1FDqZ_snn_G5HkmJ8X347rN7M7ubbcx7v",
  },
  {
    title: "Promotional Reel",
    category: "PROMOTIONAL",
    videoId: "14zZauIPNw0tLFLyiws8edhEa-OvkGZis",
  },
  {
    title: "Short-Form Video Edit",
    category: "SHORT-FORM",
    videoId: "1t6Vu6j2VFldluJGdvlQp8lkRxrNGxqTu",
  },
];

const features = [
  {
    icon: Scissors,
    title: "Fast-Paced Editing",
    description:
      "We use purposeful cuts, transitions and pacing to make short-form videos feel dynamic and easy to follow.",
  },
  {
    icon: Captions,
    title: "Captions & Subtitles",
    description:
      "Add clear, well-timed captions that support your message and make your videos easier to follow without sound.",
  },
  {
    icon: Music2,
    title: "Music & Sound Effects",
    description:
      "Enhance your videos with suitable background music, sound effects and balanced audio.",
  },
  {
    icon: Film,
    title: "Visual Effects & Motion",
    description:
      "Use motion graphics, zooms, overlays and visual elements to add energy without distracting from the message.",
  },
];

const formats = [
  "Instagram Reels",
  "YouTube Shorts",
  "Facebook Reels",
  "Podcast Clips",
  "Talking-Head Videos",
  "Product Videos",
  "Educational Shorts",
  "Behind-the-Scenes Videos",
  "Promotional Videos",
];

const process = [
  {
    number: "01",
    title: "Share Your Footage",
    description:
      "Send us your raw clips, long-form videos or recorded content with your preferred references.",
  },
  {
    number: "02",
    title: "Editing & Enhancements",
    description:
      "We create short-form edits with engaging pacing, captions, audio and visual elements.",
  },
  {
    number: "03",
    title: "Review & Refine",
    description:
      "Review the first cut and share feedback on captions, timing, visuals and other details.",
  },
  {
    number: "04",
    title: "Ready-to-Post Delivery",
    description:
      "Receive your final videos in vertical formats suitable for your selected platforms.",
  },
];

const faqs = [
  {
    question: "Which platforms do you edit short-form videos for?",
    answer:
      "We edit vertical videos for Instagram Reels, YouTube Shorts and Facebook Reels. We can also discuss other platform-specific requirements.",
  },
  {
    question: "Can you turn long videos into short clips?",
    answer:
      "Yes. Share your long-form video or podcast recording, and we can identify suitable moments to turn into shorter clips.",
  },
  {
    question: "Do you add captions and subtitles?",
    answer:
      "Yes. We can add styled captions, subtitles, highlighted words and other text elements based on your content and preferred style.",
  },
  {
    question: "What video format will I receive?",
    answer:
      "For vertical short-form content, we generally deliver 9:16 videos in a platform-ready format. Other aspect ratios can be discussed before starting.",
  },
  {
    question: "How much does short-form video editing cost?",
    answer:
      "Pricing depends on the number of videos, footage duration, editing style, graphics and turnaround requirements. Contact us for a customized quote.",
  },
];

export default function ShortsReelVideoEditing() {
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      {/* SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <div className="max-w-7xl mx-auto flex gap-3 justify-center flex-wrap">
          {services.map((service) => {
            const active = service.name === "Shorts/Reel Video Editing";

            return (
              <Link
                key={service.path}
                to={service.path}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
                  active
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
                  04
                </span>

                <span className="text-xs tracking-[0.3em] text-black/50">
                  OUR SERVICES / SHORT-FORM VIDEO
                </span>
              </div>

              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight">
                Short Videos.
                <br />
                <span className="font-editorial-italic text-brand-red">
                  Big Impact.
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-8">
                Turn your ideas, recordings and long-form content into engaging
                short videos. We edit Reels and Shorts with strong pacing,
                captions, sound and creative visuals.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors"
                >
                  Create Short-Form Content
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

            {/* RIGHT SIDE - INTERACTIVE BEFORE / AFTER */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] overflow-hidden bg-black shadow-2xl">
                {/* FINAL EDIT - BASE IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&auto=format&fit=crop"
                  alt="Professionally edited short-form video"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "saturate(1.4) contrast(1.15) brightness(1.05)",
                  }}
                />

                {/* FINAL EDIT COLOR TREATMENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-900/20 pointer-events-none" />

                {/* ORIGINAL FOOTAGE - SLIDER CLIP */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&auto=format&fit=crop"
                    alt="Original unedited video footage"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(0.85) brightness(0.72) contrast(0.85) saturate(0.5)",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* ORIGINAL LABEL */}
                <span className="absolute top-4 left-4 z-20 bg-white text-brand-black px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  ORIGINAL
                </span>

                {/* FINAL EDIT LABEL */}
                <span className="absolute top-4 right-4 z-20 bg-brand-red text-white px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  FINAL EDIT
                </span>

                {/* COMPARISON DIVIDER */}
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
                  aria-label="Compare original footage with final short-form video edit"
                  className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/45 font-semibold">
                  RAW FOOTAGE
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-brand-red font-semibold">
                  SCROLL-READY EDIT
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
              MADE FOR THE FEED
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight text-brand-black mt-5">
              Every second
              <br />
              <span className="font-editorial-italic text-brand-red">
                has a purpose.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              Short-form videos give creators and brands a quick way to share
              ideas, showcase products and connect with their audiences.
            </p>

            <p>
              But a good short video needs more than trimming a longer clip. It
              needs a clear opening, purposeful pacing, readable captions and
              visuals that support the message.
            </p>

            <p>
              K-Media helps turn your footage into polished vertical videos
              designed for the way people watch content today.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Let's plan your videos
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR WORK / PORTFOLIO */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                OUR WORK
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                Short videos.
                <br />
                <span className="font-editorial-italic text-brand-red">
                  Strong stories.
                </span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm md:text-base text-black/55 leading-7">
                A look at the videos we create. Explore our editing style,
                storytelling and creative approach across different formats.
              </p>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-red border-b border-brand-red pb-2 w-fit"
              >
                Explore all projects
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.videoId}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group min-w-0"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-black shadow-md group-hover:shadow-xl transition-shadow duration-500">
                  {activeVideoId === item.videoId ? (
                    <iframe
                      src={`https://drive.google.com/file/d/${item.videoId}/preview`}
                      title={item.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(item.videoId)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      aria-label={`Play ${item.title}`}
                    >
                      <img
                        src={`https://drive.google.com/thumbnail?id=${item.videoId}&sz=w1000`}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Play
                            size={23}
                            fill="currentColor"
                            className="ml-1"
                          />
                        </span>
                      </div>
                    </button>
                  )}

                  {/* Project Number */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="bg-brand-black/75 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-semibold tracking-widest px-3 py-2 rounded-full">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12 pt-6 border-t border-black/10">
            <p className="text-xs text-black/45">
              12 PROJECTS · CREATIVE EDITING · VISUAL STORYTELLING
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-black transition-colors"
            >
              Have a project in mind?
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-white px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHAT WE DO
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
              Short-form editing
              <br />
              <span className="font-editorial-italic text-brand-red">
                that flows.
              </span>
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              From the first frame to the final export, we shape your content
              into clear, engaging and platform-ready videos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-[#FFF0F0] rounded-[24px] p-7 md:p-9 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-7">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold">
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

      {/* CONTENT FORMATS */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                CONTENT FORMATS
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5">
                What can we edit?
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              One recording can become multiple pieces of content. We help adapt
              your footage for different short-form formats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-black/10 p-5 rounded-xl hover:border-brand-red hover:bg-[#FFF5F5] transition-all"
              >
                <span className="text-brand-red font-editorial text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-semibold">{item}</span>

                <ArrowUpRight size={17} className="ml-auto text-black/35" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 md:px-12 py-16 md:py-24 bg-brand-black text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              HOW IT WORKS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
              From footage
              <br />
              to{" "}
              <span className="font-editorial-italic text-brand-red">
                the feed.
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
                <span className="font-editorial text-5xl text-brand-red/70">
                  {step.number}
                </span>

                <h3 className="font-bold text-xl mt-7">{step.title}</h3>

                <p className="text-sm leading-7 text-white/55 mt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY K-MEDIA */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHY K-Media Production
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-6 leading-tight">
              Make your
              <br />
              content{" "}
              <span className="font-editorial-italic text-brand-red">
                move.
              </span>
            </h2>

            <p className="text-black/55 leading-relaxed mt-7 max-w-lg">
              We combine creative editing with a structured workflow so you can
              keep producing content without handling every edit yourself.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-brand-black transition-colors"
            >
              Work With Us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Platform-ready vertical edits",
              "Consistent editing style",
              "Captions and visual elements",
              "Clear project communication",
              "Creative clip selection",
              "Organized delivery workflow",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl border border-black/10 bg-white"
              >
                <Check size={19} className="text-brand-red shrink-0 mt-0.5" />

                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-12 py-20 md:py-28 bg-[#FFF0F0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              GOT QUESTIONS?
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
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
                <button
                  type="button"
                  aria-controls={`shorts-faq-${index}`}
                  className="w-full flex items-center justify-between gap-5 text-left"
                >
                  <span className="font-semibold text-base md:text-xl">
                    <span className="text-brand-red mr-4 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {faq.question}
                  </span>

                  <span className="text-brand-red text-2xl transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45">
                    +
                  </span>
                </button>

                <div
                  id={`shorts-faq-${index}`}
                  className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300"
                >
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
      <section className="px-5 md:px-12 pb-20 md:pb-28 pt-16">
        <div className="max-w-[1440px] mx-auto bg-brand-black text-white rounded-[32px] md:rounded-[48px] px-7 py-14 md:px-16 md:py-20 text-center">
          <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
            READY TO CREATE?
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl mt-6 leading-tight">
            Let's make
            <br />
            something{" "}
            <span className="font-editorial-italic text-brand-red">
              scroll-worthy.
            </span>
          </h2>

          <p className="text-white/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Turn your raw clips and ideas into short-form videos that are ready
            to share with your audience.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-brand-black transition-colors"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>

          <p className="text-xs text-white/40 mt-6">
            Have questions? Email us at info@kodandamedia.com
          </p>
        </div>
      </section>
    </main>
  );
}
