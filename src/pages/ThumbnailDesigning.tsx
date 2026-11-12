import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Eye,
  Palette,
  MousePointerClick,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Long-Form Video Editing", path: "/long-form-video-editing" },
  { name: "Podcast Video Editing", path: "/podcast-video-editing" },
  { name: "AI UGC Video Editing", path: "/UGC-video-editing"},
  { name: "Thumbnail Designing", path: "/thumbnail-designing" },
  { name: "Shorts/Reel Video Editing", path: "/short-form-video-editing" },
  { name: "YouTube Channel Management", path: "/youtube-channel-management" },
];

const portfolio = [
  {
    title: "The Creator's Playbook",
    category: "PERSONAL BRAND",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop",
    label: "CREATOR STORY",
    headline: "BUILD YOUR BRAND",
  },
  {
    title: "The Business Breakdown",
    category: "BUSINESS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop",
    label: "BUSINESS INSIGHTS",
    headline: "GROW SMARTER",
  },
  {
    title: "The Gaming Experience",
    category: "GAMING",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&auto=format&fit=crop",
    label: "GAMING",
    headline: "LEVEL UP!",
  },
];

const features = [
  {
    icon: Eye,
    title: "Attention-Grabbing Designs",
    description:
      "Create visually striking thumbnails that stand out in crowded feeds and make viewers curious about your content.",
  },
  {
    icon: Palette,
    title: "Creative Visual Direction",
    description:
      "We use colors, typography, expressions and visual elements that match your content and channel identity.",
  },
  {
    icon: Layers,
    title: "Consistent Brand Identity",
    description:
      "Build a recognizable thumbnail style across your videos while keeping every design fresh and relevant.",
  },
  {
    icon: MousePointerClick,
    title: "Click-Worthy Composition",
    description:
      "Thoughtfully arrange text, images and visual hierarchy to communicate your video's main idea quickly.",
  },
];

const formats = [
  "YouTube Video Thumbnails",
  "Podcast Thumbnails",
  "Gaming Thumbnails",
  "Educational Thumbnails",
  "Business & Finance Thumbnails",
  "Personal Brand Thumbnails",
  "Reaction Video Thumbnails",
  "Lifestyle & Vlog Thumbnails",
  "Series & Episode Thumbnails",
];

const process = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your video, target audience, references and preferred visual direction.",
  },
  {
    number: "02",
    title: "Concept & Design",
    description:
      "We develop a thumbnail concept using suitable imagery, typography, colors and composition.",
  },
  {
    number: "03",
    title: "Review & Feedback",
    description:
      "Review the design and share your feedback so we can make the required refinements.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive your final thumbnail in a high-quality, platform-ready format.",
  },
];

const faqs = [
  {
    question: "What information do you need to design a thumbnail?",
    answer:
      "We need your video topic, title or key message, reference images if available, channel branding and any specific design preferences.",
  },
  {
    question: "Do you create custom YouTube thumbnails?",
    answer:
      "Yes. Every thumbnail is designed around your video's topic, audience and visual identity rather than relying on generic templates.",
  },
  {
    question: "Can you follow my existing channel style?",
    answer:
      "Absolutely. Share a few examples of your existing thumbnails and we will use them as a reference to maintain a consistent visual identity.",
  },
  {
    question: "Can I request changes to the design?",
    answer:
      "Yes. You can share your feedback after reviewing the design. Revision requirements and timelines are discussed before the project begins.",
  },
  {
    question: "How much does thumbnail designing cost?",
    answer:
      "Pricing depends on the number of thumbnails, design complexity and project requirements. Contact us for a customized quote.",
  },
];

export default function ThumbnailDesigning() {
  const [comparisonPosition, setComparisonPosition] = useState(50);

  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      {/* SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <div className="max-w-7xl mx-auto flex gap-3 justify-center flex-wrap">
          {services.map((service) => {
            const active = service.name === "Thumbnail Designing";

            return (
              <Link
                key={service.path}
                to={service.path}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border px-4 py-2.5 text-xs md:text-sm font-semibold transition-all ${
                  active
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-white border-black/15 hover:bg-brand-red hover:text-white hover:border-brand-red"
                }`}
              >
                {service.name}
              </Link>
            );
          })}
        </div>
      </section>

      {/* HERO */}
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
                  03
                </span>

                <span className="text-xs tracking-[0.3em] text-black/50">
                  OUR SERVICES / THUMBNAIL DESIGN
                </span>
              </div>

              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight">
                Thumbnails
                <br />
                That Make
                <br />
                <span className="font-editorial-italic text-brand-red">
                  Them Click.
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-8">
                Your thumbnail is your video's first impression. We create
                attention-grabbing designs that communicate your content,
                reflect your brand and make viewers want to know more.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors"
                >
                  Design My Thumbnail
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
                {/* FINAL DESIGN - BASE IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1600&auto=format&fit=crop"
                  alt="Enhanced creative visual used for thumbnail design"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter:
                      "saturate(1.35) contrast(1.15) brightness(1.05)",
                  }}
                />

                {/* FINAL DESIGN OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-black/70 pointer-events-none" />

                <div className="absolute bottom-7 left-6 right-6 z-[5] pointer-events-none">
                  <span className="inline-block bg-brand-red text-white px-3 py-1.5 text-[9px] md:text-[10px] font-black tracking-widest mb-3">
                    CREATOR EDITION
                  </span>

                  <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl leading-[0.95] uppercase drop-shadow-lg">
                    MAKE YOUR
                    <br />
                    CONTENT
                    <span className="text-brand-red"> STAND OUT.</span>
                  </h3>
                </div>

                {/* ORIGINAL IMAGE - CLIPPED BY SLIDER */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1600&auto=format&fit=crop"
                    alt="Original image before thumbnail design"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(0.9) brightness(0.72) contrast(0.85) saturate(0.5)",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* LABELS */}
                <span className="absolute top-4 left-4 z-20 bg-white text-brand-black px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  ORIGINAL
                </span>

                <span className="absolute top-4 right-4 z-20 bg-brand-red text-white px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  FINAL DESIGN
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
                  aria-label="Compare original image with final thumbnail design"
                  className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/45 font-semibold">
                  ORIGINAL VISUAL
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-brand-red font-semibold">
                  CREATIVE THUMBNAIL
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 md:px-12 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] font-bold text-brand-red">
              FIRST IMPRESSIONS MATTER
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight mt-5">
              Your content deserves
              <br />
              a{" "}
              <span className="font-editorial-italic text-brand-red">
                great cover.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              Before viewers watch your video, they see your thumbnail. A
              well-designed thumbnail helps communicate what your content is
              about and gives people a reason to stop scrolling.
            </p>

            <p>
              At K-Media, we combine creative concepts, strong visual
              composition and thoughtful typography to create thumbnails that
              fit your content and channel identity.
            </p>

            <p>
              Whether you publish educational videos, podcasts, gaming content
              or brand stories, we help your videos make a stronger first
              impression.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Let's discuss your designs
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                OUR WORK
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5">
                Designs that
                <br />
                <span className="font-editorial-italic text-brand-red">
                  make a statement.
                </span>
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black">
                  <img
                    src={item.image}
                    alt={`${item.title} thumbnail design`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute top-4 left-4 bg-brand-black text-white px-4 py-2 text-[10px] tracking-widest">
                    {item.category}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-white/75 text-[9px] md:text-[10px] tracking-[0.2em] font-bold">
                      {item.label}
                    </span>

                    <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mt-2">
                      {item.headline}
                    </h3>
                  </div>

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-5">
                  <h3 className="font-editorial text-xl md:text-2xl">
                    {item.title}
                  </h3>

                  <span className="text-xs text-black/40 shrink-0">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-black/40 mt-7">
            These are sample visuals for the portfolio layout. Replace them
            with approved K-Media thumbnail projects before publishing.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              OUR DESIGN APPROACH
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
              More than just
              <br />
              <span className="font-editorial-italic text-brand-red">
                a pretty picture.
              </span>
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              Every design decision has a purpose. We create thumbnails that
              combine visual appeal with a clear message.
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
                  className="bg-white rounded-[24px] p-7 md:p-9 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
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

      {/* THUMBNAIL TYPES */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                DESIGN CATEGORIES
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5">
                What can we design?
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              Different content needs different visual treatment. We design
              thumbnails around your format, message and audience.
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

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-black/35"
                />
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
              OUR PROCESS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
              From your idea
              <br />
              to{" "}
              <span className="font-editorial-italic text-brand-red">
                final design.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
              WHY K-MEDIA
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-6 leading-tight">
              Give your videos
              <br />
              a visual identity.
            </h2>

            <p className="text-black/55 leading-relaxed mt-7 max-w-lg">
              We focus on designs that feel relevant to your content, align
              with your brand and make your channel look more consistent.
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
              "Custom creative concepts",
              "Consistent channel identity",
              "Content-focused design",
              "Clear visual hierarchy",
              "Attention to detail",
              "Platform-ready exports",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl border border-black/10 bg-white"
              >
                <Check
                  size={19}
                  className="text-brand-red shrink-0 mt-0.5"
                />

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
                  aria-controls={`thumbnail-faq-${index}`}
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
                  id={`thumbnail-faq-${index}`}
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
            MAKE YOUR FIRST IMPRESSION COUNT
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl mt-6 leading-tight">
            Let's design
            <br />
            something{" "}
            <span className="font-editorial-italic text-brand-red">
              click-worthy.
            </span>
          </h2>

          <p className="text-white/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Give your next video a thumbnail that communicates its value and
            reflects your creative identity.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-brand-black transition-colors"
          >
            Start Your Design
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