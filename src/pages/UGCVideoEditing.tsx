import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Check,
  Captions,
  Volume2,
  Film,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";

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
    name: "UGC Video Editing",
    path: "/UGC-video-editing",
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

const portfolio = [
  {
    id: "ugc-1",
    title: "Product Review Video",
    category: "PRODUCT REVIEW",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: "ugc-2",
    title: "Unboxing Experience",
    category: "UNBOXING",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: "ugc-3",
    title: "Lifestyle Product Video",
    category: "LIFESTYLE UGC",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: "ugc-4",
    title: "Beauty Product Demonstration",
    category: "PRODUCT DEMO",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: "ugc-5",
    title: "Customer Experience",
    category: "TESTIMONIAL",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: "ugc-6",
    title: "Brand Promotional Creative",
    category: "UGC AD CREATIVE",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
];

const features = [
  {
    icon: ShoppingBag,
    title: "Product-Focused Storytelling",
    description:
      "We highlight product features, benefits and real-life use cases through clear and relatable storytelling.",
  },
  {
    icon: Captions,
    title: "Captions & Text Highlights",
    description:
      "Add engaging captions, highlighted words and on-screen text to make your videos easier to follow.",
  },
  {
    icon: Volume2,
    title: "Music & Sound Design",
    description:
      "Enhance your videos with suitable background music, sound effects and balanced audio.",
  },
  {
    icon: Film,
    title: "Creative Visual Editing",
    description:
      "Use transitions, overlays, product shots and motion elements to create polished UGC videos.",
  },
];

const formats = [
  "Product Reviews",
  "Unboxing Videos",
  "Product Demonstrations",
  "Customer Testimonials",
  "Lifestyle UGC",
  "Problem-Solution Videos",
  "Talking-Head Videos",
  "UGC Ad Creatives",
  "Brand Promotional Videos",
];

const process = [
  {
    number: "01",
    title: "Share Your Footage",
    description:
      "Send us your raw creator footage, product clips, brand guidelines and preferred references.",
  },
  {
    number: "02",
    title: "Editing & Storytelling",
    description:
      "We structure your footage with engaging hooks, clean cuts, captions and creative visuals.",
  },
  {
    number: "03",
    title: "Review & Refine",
    description:
      "Review the first draft and share feedback on pacing, captions, audio and other details.",
  },
  {
    number: "04",
    title: "Final Video Delivery",
    description:
      "Receive your polished, platform-ready UGC videos in your preferred format.",
  },
];

const faqs = [
  {
    question: "What is UGC video editing?",
    answer:
      "UGC video editing involves transforming creator-recorded footage into engaging videos for brands. This can include product reviews, unboxing videos, testimonials, demonstrations and promotional ad creatives.",
  },
  {
    question: "What types of UGC videos do you edit?",
    answer:
      "We edit product reviews, unboxing videos, product demonstrations, customer testimonials, lifestyle UGC, talking-head videos, problem-solution videos and UGC ad creatives.",
  },
  {
    question: "Do I need to provide the raw footage?",
    answer:
      "Yes. You can share your raw creator footage, product clips, voiceovers and brand references through Google Drive or another file-sharing platform.",
  },
  {
    question: "Can you edit UGC videos for advertisements?",
    answer:
      "Yes. We can edit creator-led videos into promotional creatives suitable for platforms such as Instagram, Facebook and other digital advertising channels.",
  },
  {
    question: "Do you add captions, music and transitions?",
    answer:
      "Yes. Depending on your requirements, we can add captions, background music, sound effects, transitions, product highlights and other visual elements.",
  },
  {
    question: "How much does UGC video editing cost?",
    answer:
      "Pricing depends on the number of videos, footage duration, editing complexity, graphics and delivery requirements. Contact us for a customized quote.",
  },
];

export default function UGCVideoEditing() {
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleVideoSound = (cardId: string) => {
    const currentVideo = videoRefs.current[cardId];

    if (!currentVideo) return;

    // If this video is already unmuted, mute it.
    if (activeVideoId === cardId) {
      currentVideo.muted = true;
      setActiveVideoId(null);
      return;
    }

    // Mute the previously unmuted video.
    if (activeVideoId) {
      const previousVideo = videoRefs.current[activeVideoId];

      if (previousVideo) {
        previousVideo.muted = true;
      }
    }

    // Unmute the selected video.
    currentVideo.muted = false;
    setActiveVideoId(cardId);
  };

  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      {/* SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <div className="max-w-7xl mx-auto flex gap-3 justify-center flex-wrap">
          {services.map((service) => {
            const active = service.name === "UGC Video Editing";

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-brand-red text-white rounded-full px-4 py-2 text-[10px] tracking-widest">
                  06
                </span>

                <span className="text-xs tracking-[0.3em] text-black/50">
                  OUR SERVICES / UGC VIDEO EDITING
                </span>
              </div>

              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight">
                UGC Videos.
                <br />
                <span className="font-editorial-italic text-brand-red">
                  Real Stories.
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-8">
                Turn creator footage into authentic, engaging and polished brand
                content. We edit UGC videos with compelling hooks, relatable
                storytelling, captions and creative visuals that help your brand
                connect with its audience.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors"
                >
                  Create UGC Videos
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <span className="text-xs tracking-widest text-black/45">
                  REAL CONTENT. CREATIVE EDITING.
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
                {/* FINAL EDIT */}
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&auto=format&fit=crop"
                  alt="Professionally edited UGC brand video"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "saturate(1.4) contrast(1.12) brightness(1.02)",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-900/20 pointer-events-none" />

                {/* ORIGINAL FOOTAGE */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&auto=format&fit=crop"
                    alt="Original UGC video footage"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(0.85) brightness(0.72) contrast(0.85) saturate(0.5)",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* LABELS */}
                <span className="absolute top-4 left-4 z-20 bg-white text-brand-black px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  ORIGINAL
                </span>

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

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={comparisonPosition}
                  onChange={(e) =>
                    setComparisonPosition(Number(e.target.value))
                  }
                  aria-label="Compare original footage with final UGC video edit"
                  className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/45 font-semibold">
                  RAW FOOTAGE
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-brand-red font-semibold">
                  CREATIVE UGC EDIT
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
              CONTENT THAT CONNECTS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight text-brand-black mt-5">
              Real voices.
              <br />
              <span className="font-editorial-italic text-brand-red">
                Real connections.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              People connect with content that feels natural, relatable and
              authentic. UGC videos give brands an opportunity to communicate
              through creator-led stories and real product experiences.
            </p>

            <p>
              But effective UGC content needs more than just recorded footage.
              It needs a strong opening, clear messaging, engaging visuals and
              editing that keeps the viewer interested.
            </p>

            <p>
              K-Media transforms your raw creator footage into polished UGC
              videos designed for brand storytelling, social media and
              promotional campaigns.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Let's create your UGC content
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / CREATIVE SHOWCASE */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                OUR CREATIVE SHOWCASE
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                Stories that sell.
                <br />
                <span className="font-editorial-italic text-brand-red">
                  Content that connects.
                </span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm md:text-base text-black/55 leading-7">
                Explore different UGC styles, product-focused storytelling and
                creator-led content formats.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {portfolio.map((item, index) => {
              const isUnmuted = activeVideoId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group min-w-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-brand-black shadow-md group-hover:shadow-xl transition-shadow duration-500">
                    <iframe
                      src={`https://drive.google.com/file/d/${item.videoId}/preview`}
                      title={item.title}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />

                    {/* VIDEO OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                    {/* CATEGORY */}
                    {/* <span className="absolute top-4 left-4 z-10 bg-brand-black/80 backdrop-blur-sm text-white px-4 py-2 text-[10px] tracking-widest rounded-full">
                      {item.category}
                    </span> */}

                    {/* SOUND CONTROL */}
                    <button
                      type="button"
                      onClick={() => handleVideoSound(item.id)}
                      aria-label={isUnmuted ? "Mute video" : "Unmute video"}
                      aria-pressed={isUnmuted}
                      className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-white hover:text-brand-red transition-all duration-300 shadow-lg"
                    >
                      <Volume2
                        size={19}
                        className={!isUnmuted ? "opacity-60" : ""}
                      />
                    </button>

                    {/* SOUND STATUS */}
                    <span className="absolute bottom-5 left-4 z-10 text-[9px] tracking-widest font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full">
                      {isUnmuted ? "SOUND ON" : "MUTED"}
                    </span>
                  </div>

                  {/* VIDEO TITLE */}
                  <div className="flex items-start justify-between gap-3 mt-5">
                    <h3 className="font-editorial text-xl md:text-2xl text-brand-black group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-black/35 group-hover:text-brand-red transition-colors"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12 pt-6 border-t border-black/10">
            <p className="text-xs text-black/45">
              CREATOR CONTENT · PRODUCT STORIES · BRAND CAMPAIGNS
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

      {/* TYPES OF UGC CONTENT */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                UGC CONTENT FORMATS
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5">
                What can we edit?
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              From product experiences to creator-led advertisements, we help
              turn your raw footage into content that communicates your brand's
              message.
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
                  className="ml-auto text-black/35 shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHAT WE DO
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
              UGC editing
              <br />
              <span className="font-editorial-italic text-brand-red">
                that feels real.
              </span>
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              We combine authentic storytelling with creative editing to make
              your UGC videos engaging, clear and ready for your chosen
              platforms.
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

      {/* PROCESS */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              HOW IT WORKS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5">
              From raw clips
              <br />
              to{" "}
              <span className="font-editorial-italic text-brand-red">
                brand stories.
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

                <p className="text-sm leading-7 text-black/55 mt-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY K-MEDIA */}
      <section className="bg-brand-black text-white px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHY K-MEDIA PRODUCTION
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-6 leading-tight">
              Your brand.
              <br />
              Your story.
              <br />
              <span className="font-editorial-italic text-brand-red">
                Our creativity.
              </span>
            </h2>

            <p className="text-white/55 leading-relaxed mt-7 max-w-lg">
              We believe UGC content should feel natural while communicating
              your brand's message clearly. Our editing approach balances
              authentic creator storytelling with professional visual
              presentation.
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
              "Creator-led storytelling",
              "Brand-focused editing",
              "Platform-ready formats",
              "Captions and visual elements",
              "Consistent editing quality",
              "Clear project communication",
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
                  aria-controls={`ugc-faq-${index}`}
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
                  id={`ugc-faq-${index}`}
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
            Let's bring your
            <br />
            <span className="font-editorial-italic text-brand-red">
              brand story to life.
            </span>
          </h2>

          <p className="text-white/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Turn your creator footage into engaging UGC videos that showcase
            your products, communicate your message and connect with your
            audience.
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
