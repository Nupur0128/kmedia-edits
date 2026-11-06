import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Play,
  Mic2,
  Headphones,
  AudioLines,
  Scissors,
  Video,
  Captions,
  SlidersHorizontal,
  Workflow,
  CalendarDays,
  Radio,
  Clapperboard,
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

const features = [
  {
    icon: Video,
    title: "Multi-Camera Editing",
    description:
      "Switch between camera angles at the right moments to create a natural, engaging podcast viewing experience.",
  },
  {
    icon: AudioLines,
    title: "Audio Cleanup & Enhancement",
    description:
      "Reduce distracting background noise, balance speaker volumes and refine dialogue for clearer listening.",
  },
  {
    icon: Captions,
    title: "Captions & Subtitles",
    description:
      "Add clean, readable subtitles that make your podcast easier to follow and more accessible to viewers.",
  },
  {
    icon: SlidersHorizontal,
    title: "Color Correction & Grading",
    description:
      "Create balanced, consistent visuals across camera angles with a polished look that suits your brand.",
  },
  {
    icon: Scissors,
    title: "Engaging Cuts & Pacing",
    description:
      "Remove unnecessary pauses, awkward moments and distractions while preserving the natural conversation.",
  },
  {
    icon: Clapperboard,
    title: "Graphics & Branding",
    description:
      "Add lower thirds, speaker names, intros, outros and branded visual elements to give your show a consistent identity.",
  },
];

const podcastFormats = [
  "Video Podcasts",
  "Two-Person Interviews",
  "Multi-Guest Conversations",
  "Business & Founder Podcasts",
  "Educational Podcasts",
  "Solo Talking-Head Shows",
  "Remote Podcast Recordings",
  "Panel Discussions",
  "Live Podcast Recordings",
];

const portfolio = [
  {
    title: "Multi-Camera Podcast",
    category: "VIDEO PODCAST",
    duration: "48:20",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1000&auto=format&fit=crop",
  },
  {
    title: "Studio Interview",
    category: "INTERVIEW",
    duration: "32:45",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop",
  },
  {
    title: "Creator Conversation",
    category: "CREATOR PODCAST",
    duration: "26:15",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1000&auto=format&fit=crop",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Recordings",
    description:
      "Send us your camera footage, audio tracks, brand assets and any editing references.",
  },
  {
    number: "02",
    title: "Editing & Synchronization",
    description:
      "We sync your audio and video, select camera angles, clean up the footage and shape the conversation.",
  },
  {
    number: "03",
    title: "Review & Refinement",
    description:
      "Review the first cut and share your feedback on pacing, captions, graphics and other details.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive your finished podcast video and agreed social media edits in the required formats.",
  },
];

const benefits = [
  {
    icon: <Mic2 size={36} />,
    title: "Clearer, balanced podcast audio",
  },
  {
    icon: <Video size={36} />,
    title: "Smooth multi-camera storytelling",
  },
  {
    icon: <CalendarDays size={36} />,
    title: "Consistent episode delivery",
  },
  {
    icon: <Radio size={36} />,
    title: "Content ready for your platforms",
  },
];

const faqs = [
  {
    question: "What type of podcasts do you edit?",
    answer:
      "We edit video podcasts, interviews, solo episodes, business podcasts, educational shows, panel discussions and remote podcast recordings.",
  },
  {
    question: "Can you edit podcasts with multiple cameras?",
    answer:
      "Yes. We can synchronize multiple camera recordings and audio tracks, then switch between angles to create a smooth and engaging viewing experience.",
  },
  {
    question: "Can you improve the audio quality of my podcast?",
    answer:
      "Yes. We can reduce suitable background noise, balance audio levels, improve dialogue clarity and add audio enhancements. The final result also depends on the quality of the original recording.",
  },
  {
    question: "Do you add captions and speaker names?",
    answer:
      "Yes. We can add subtitles, speaker names, lower thirds, branded graphics and other visual elements based on your requirements.",
  },
  {
    question: "Can you create short clips from full podcast episodes?",
    answer:
      "Yes. We can identify suitable moments from your podcast and edit them into vertical clips for platforms such as Instagram Reels, YouTube Shorts and other social channels.",
  },
  {
    question: "How should I share my podcast footage?",
    answer:
      "You can share your raw camera footage, audio recordings and reference files through Google Drive or another file-sharing platform.",
  },
  {
    question: "How much does podcast video editing cost?",
    answer:
      "Pricing depends on episode duration, number of camera angles, audio requirements, graphics, captions and the number of short clips required. Contact us for a project-specific quote.",
  },
];

export default function PodcastVideoEditing() {
  const [comparisonPosition, setComparisonPosition] = useState(50);

  return (
    <main className="bg-brand-white overflow-hidden">
      {/* SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-3 justify-start md:justify-center">
          {services.map((service) => {
            const isActive = service.name === "Podcast Video Editing";

            return (
              <Link
                key={service.path}
                to={service.path}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
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
                  02
                </span>

                <span className="text-xs tracking-[0.3em] text-black/50">
                  OUR SERVICES / PODCAST EDITING
                </span>
              </div>

              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight text-brand-black">
                Podcast
                <br />
                Video{" "}
                <span className="font-editorial-italic text-brand-red">
                  Editing.
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-8">
                Great conversations deserve great presentation. We transform
                raw podcast recordings into polished video episodes with
                seamless camera cuts, clearer audio, captions and professional
                visuals.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors"
                >
                  Start Your Podcast

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <span className="text-xs tracking-widest text-black/45">
                  RECORD THE CONVERSATION. WE'LL EDIT THE STORY.
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
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&auto=format&fit=crop"
                  alt="Professionally edited podcast studio"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter:
                      "saturate(1.35) contrast(1.12) brightness(1.02)",
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
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&auto=format&fit=crop"
                    alt="Original unedited podcast footage"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      filter:
                        "grayscale(0.75) brightness(0.72) contrast(0.82) saturate(0.5)",
                    }}
                  />

                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                </div>

                {/* ORIGINAL LABEL */}
                <span className="absolute top-4 left-4 z-20 bg-white text-brand-black px-3 py-1.5 text-[10px] font-bold tracking-wide">
                  ORIGINAL
                </span>

                {/* FINAL LABEL */}
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

                {/* INTERACTIVE SLIDER */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={comparisonPosition}
                  onChange={(e) =>
                    setComparisonPosition(Number(e.target.value))
                  }
                  aria-label="Compare original podcast footage with final edit"
                  className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/45 font-semibold">
                  RAW RECORDING
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-brand-red font-semibold">
                  POLISHED PODCAST
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
              MORE THAN JUST CUTTING CLIPS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight text-brand-black mt-5">
              Your voice.
              <br />
              Your ideas.
              <br />
              <span className="font-editorial-italic text-brand-red">
                A better experience.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              Recording a podcast is only one part of creating a great show.
              Raw footage often needs synchronized audio, camera switching,
              thoughtful cuts and visual consistency before it is ready to
              publish.
            </p>

            <p>
              That's where K-Media comes in. We take care of the editing
              process so your conversations become professional, easy-to-watch
              episodes without losing their natural flow.
            </p>

            <p>
              Whether you record in a studio, remotely or with a single camera,
              we help you turn your recordings into content that is ready for
              your audience.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Let's discuss your podcast
              <ArrowUpRight size={17} />
            </Link>
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
              podcast needs.
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              From the first cut to the final export, we bring together
              technical editing and creative storytelling to make every episode
              look and sound its best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-[24px] p-7 md:p-8 border border-brand-red/10 hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300"
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

      {/* PODCAST FORMATS */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                PODCAST FORMATS
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                What can we edit?
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              Every podcast has its own voice and format. We adapt our editing
              approach to the way you record and the experience you want to
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {podcastFormats.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-black/10 p-5 rounded-xl hover:border-brand-red hover:bg-[#FFF5F5] transition-all"
              >
                <span className="text-brand-red font-editorial text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-semibold text-brand-black">{item}</span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto shrink-0 text-black/35"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST PORTFOLIO */}
      <section className="bg-[#FFF0F0] px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                OUR WORK
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
                Conversations,
                <br />
                <span className="font-editorial-italic text-brand-red">
                  beautifully edited.
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

                <div className="flex items-center justify-between gap-3 mt-5">
                  <h3 className="font-editorial text-xl md:text-2xl text-brand-black">
                    {item.title}
                  </h3>

                  <span className="text-xs text-black/45 shrink-0">
                    {item.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-black/40 mt-7">
            Portfolio cards currently use sample visuals. Replace them with
            approved K-Media podcast projects before publishing.
          </p>
        </div>
      </section>

      {/* PODCAST CLIPS */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-[22px] overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop"
                  alt="Podcast recording setup"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <span className="absolute bottom-4 left-4 bg-brand-red text-white px-3 py-2 text-[10px] tracking-widest">
                  FULL EPISODE
                </span>
              </div>

              <div className="relative aspect-[3/4] rounded-[22px] overflow-hidden bg-black mt-12">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop"
                  alt="Podcast interview conversation"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <span className="absolute bottom-4 left-4 bg-brand-black text-white px-3 py-2 text-[10px] tracking-widest">
                  SOCIAL CLIP
                </span>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-black/5 rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap">
              <div className="w-9 h-9 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                <Play size={15} fill="currentColor" />
              </div>

              <span className="text-xs font-bold tracking-wide text-brand-black">
                ONE RECORDING. MORE CONTENT.
              </span>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              BEYOND THE FULL EPISODE
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5 leading-tight">
              Turn long
              <br />
              conversations into
              <br />
              <span className="font-editorial-italic text-brand-red">
                short-form content.
              </span>
            </h2>

            <p className="text-black/60 mt-6 text-base md:text-lg leading-relaxed">
              Your podcast can create more than one piece of content. We can
              help repurpose suitable moments from your full episodes into
              short, platform-ready videos.
            </p>

            <div className="space-y-4 mt-8">
              {[
                "Vertical clips for Reels and Shorts",
                "Captions and highlighted key moments",
                "Speaker-focused framing and cuts",
                "Branded layouts for social platforms",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check
                    size={19}
                    className="text-brand-red shrink-0"
                  />

                  <span className="text-sm md:text-base text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/services/short-form-video-editing"
              className="inline-flex items-center gap-2 mt-9 text-brand-red font-semibold border-b border-brand-red pb-1"
            >
              Explore short-form editing
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#FFF0F0]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              HOW IT WORKS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
              From recording
              <br />
              to{" "}
              <span className="font-editorial-italic text-brand-red">
                ready to publish.
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
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              THE K-MEDIA APPROACH
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl text-brand-black mt-5">
              A better workflow
              <br />
              for your{" "}
              <span className="font-editorial-italic text-brand-red">
                podcast.
              </span>
            </h2>

            <p className="text-black/55 mt-5 text-base md:text-lg leading-relaxed">
              Spend more time preparing meaningful conversations and less time
              managing the editing timeline. We help make your podcast
              production workflow easier to maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#FFF0F0] rounded-[22px] p-7 md:p-8 flex flex-col items-start justify-center min-h-[190px] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-brand-red mb-6">{benefit.icon}</div>

                <h3 className="text-lg md:text-xl font-semibold text-brand-black leading-snug">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY K-MEDIA */}
      <section className="mx-0 md:mx-5 rounded-[32px] md:rounded-[48px] bg-brand-black text-white px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHY K-MEDIA EDITS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight mt-6">
              You bring
              <br />
              the conversation.
              <br />
              <span className="font-editorial-italic text-brand-red">
                We shape the experience.
              </span>
            </h2>

            <p className="text-white/55 leading-relaxed mt-7 max-w-lg">
              Your podcast should sound like you and look like your brand. We
              focus on thoughtful editing, consistent presentation and clear
              communication throughout the process.
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
              "Your show's identity, preserved",
              "Natural conversation flow",
              "Creator-first approach",
              "Consistent visual presentation",
              "Attention to audio and detail",
              "Clear communication and delivery",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.04]"
              >
                <Check
                  size={19}
                  className="text-brand-red shrink-0 mt-0.5"
                />

                <span className="text-sm leading-6 text-white/80">
                  {item}
                </span>
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
                className="group border-b border-black/15 py-6"
              >
                <button
                  type="button"
                  aria-controls={`podcast-faq-answer-${index}`}
                  className="w-full flex items-center justify-between gap-5 text-left"
                >
                  <h3 className="font-semibold text-base md:text-xl text-brand-black">
                    <span className="text-brand-red mr-4 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </h3>

                  <span className="text-brand-red text-2xl shrink-0 transition-transform duration-300 group-hover:rotate-45 group-focus-visible:rotate-45">
                    +
                  </span>
                </button>

                <div
                  id={`podcast-faq-answer-${index}`}
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
      <section className="px-5 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto bg-[#FFF0F0] rounded-[32px] md:rounded-[48px] border border-brand-red/10 px-7 py-14 md:px-16 md:py-20 text-center">
          <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
            READY TO TAKE YOUR PODCAST FURTHER?
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl text-brand-black mt-6 leading-tight">
            Your next episode
            <br />
            deserves a{" "}
            <span className="font-editorial-italic text-brand-red">
              great edit.
            </span>
          </h2>

          <p className="text-black/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Focus on the conversations that matter. Let K-Media take care of
            turning your podcast recordings into polished, publish-ready
            content.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-brand-black transition-colors"
          >
            Tell Us About Your Podcast
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