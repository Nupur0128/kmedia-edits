import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  CalendarDays,
  Search,
  ChartNoAxesCombined,
  Image,
} from "lucide-react";
import { motion } from "framer-motion";

// Replace this URL whenever you want to update the hero image.
const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop";

// These are illustrative visuals for the service areas,
// not representations of completed K-Media client projects.
const workItems = [
  {
    title: "Channel Setup & Optimization",
    category: "CHANNEL STRUCTURE",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1000&auto=format&fit=crop",
  },
  {
    title: "Content Planning & Publishing",
    category: "CONTENT OPERATIONS",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&auto=format&fit=crop",
  },
  {
    title: "Video Upload & SEO Management",
    category: "VIDEO OPTIMIZATION",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop",
  },
];

const services = [
  {
    name: "Long-Form Video Editing",
    path: "/services/long-form-video-editing",
  },
  {
    name: "Podcast Video Editing",
    path: "/services/podcast-video-editing",
  },
  {
    name: "Thumbnail Designing",
    path: "/services/thumbnail-designing",
  },
  {
    name: "Shorts/Reel Video Editing",
    path: "/services/short-form-video-editing",
  },
  {
    name: "YouTube Channel Management",
    path: "/services/youtube-channel-management",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Content Planning & Scheduling",
    description:
      "Plan upcoming uploads, organize your content calendar and build a practical publishing schedule around your channel.",
  },
  {
    icon: Search,
    title: "YouTube SEO & Optimization",
    description:
      "Optimize video titles, descriptions, tags and other relevant metadata to make your content easier to understand and discover.",
  },
  {
    icon: Image,
    title: "Thumbnail Coordination",
    description:
      "Coordinate visually consistent thumbnails that reflect each video's topic and fit your channel's overall identity.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Performance Tracking",
    description:
      "Review available channel analytics to understand audience behaviour, evaluate content performance and identify opportunities to improve.",
  },
];

const activities = [
  "Channel Setup & Optimization",
  "Video Upload Management",
  "Titles & Descriptions",
  "YouTube SEO",
  "Thumbnail Coordination",
  "Content Calendar Planning",
  "Playlist Organization",
  "Analytics & Reporting",
  "Publishing Schedule Management",
];

const process = [
  {
    number: "01",
    title: "Channel Audit",
    description:
      "We understand your channel, existing content, audience and current publishing workflow before planning the next steps.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We organize content priorities, metadata requirements and a practical publishing schedule based on your needs.",
  },
  {
    number: "03",
    title: "Manage & Publish",
    description:
      "We coordinate uploads, titles, descriptions, thumbnails and other agreed channel management tasks.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "We review available channel insights and use the findings to inform future content planning and optimization.",
  },
];

const faqs = [
  {
    question: "What is included in YouTube channel management?",
    answer:
      "Depending on your package, channel management can include upload scheduling, video titles, descriptions, SEO optimization, thumbnail coordination, playlist organization and performance reporting.",
  },
  {
    question: "Do you create videos for the channel as well?",
    answer:
      "Video editing can be included as an additional service. We can discuss long-form editing, Shorts, podcast clips and thumbnail designing based on your requirements.",
  },
  {
    question: "Do you need access to my YouTube channel?",
    answer:
      "Yes, if you want us to manage uploads and channel settings directly. Access should be provided through YouTube channel permissions rather than sharing your personal Google password.",
  },
  {
    question: "Can you help optimize existing videos?",
    answer:
      "Yes. We can review selected existing uploads and suggest improvements to titles, descriptions, thumbnails, playlists and other relevant details.",
  },
  {
    question: "Can you guarantee more views or subscribers?",
    answer:
      "No service can guarantee a specific number of views or subscribers. We focus on consistent channel management, content optimization and performance-informed improvements.",
  },
  {
    question: "How much does YouTube channel management cost?",
    answer:
      "Pricing depends on upload frequency, the number of videos, optimization requirements and the level of ongoing management. Contact us for a customized plan.",
  },
];

const advantages = [
  "Structured publishing workflow",
  "Consistent channel presentation",
  "Content-focused optimization",
  "Clear project communication",
  "Performance-aware planning",
  "Flexible management scope",
];

export default function YouTubeChannelManagement() {
  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      {/* 01 — SERVICE NAVIGATION */}
      <section className="px-5 pt-7">
        <nav
          aria-label="Video editing services"
          className="max-w-7xl mx-auto"
        >
          <div className="flex gap-3 overflow-x-auto pb-3 justify-start lg:justify-center">
            {services.map((service) => {
              const active =
                service.name === "YouTube Channel Management";

              return (
                <Link
                  key={service.path}
                  to={service.path}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
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
        </nav>
      </section>

      {/* 02 — HERO */}
      <section className="px-5 md:px-12 pt-14 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-7 md:mb-8">
              <span className="bg-brand-red text-white rounded-full px-4 py-2 text-[10px] tracking-widest font-bold">
                05
              </span>

              <span className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] text-black/50 font-semibold">
                OUR SERVICES / YOUTUBE MANAGEMENT
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.98] tracking-tight">
              YouTube
              <br />
              Channel
              <br />
              <span className="font-editorial-italic text-brand-red">
                Management.
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-xl mt-7 md:mt-8">
              Build a more organized and consistent YouTube presence. From
              content planning and video uploads to SEO and channel
              optimization, we manage the work that keeps your channel
              running smoothly.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-brand-red text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-brand-black transition-colors mt-8"
            >
              Manage My Channel

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative aspect-[1.12/1] overflow-hidden rounded-[24px] md:rounded-[32px] bg-black shadow-2xl">
              <img
                src={heroImage}
                alt="Team planning and managing YouTube content"
                className="w-full h-full object-cover"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <span className="absolute top-5 left-5 bg-brand-red text-white px-4 py-2 text-[10px] font-bold tracking-widest">
                K-MEDIA / YOUTUBE
              </span>

              <div className="absolute bottom-7 left-6 md:bottom-10 md:left-9 right-6">
                <span className="text-white/70 text-[10px] tracking-[0.25em] font-semibold">
                  PLAN. PUBLISH. OPTIMIZE.
                </span>

                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-3 max-w-lg">
                  Your channel deserves a better system.
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3 mt-4 text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-black/45 font-semibold">
              <span>CONTENT MANAGEMENT</span>
              <span>YOUTUBE OPTIMIZATION</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 — SERVICE AREAS */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                WHAT WE SUPPORT
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
                The work behind
                <br />
                <span className="font-editorial-italic text-brand-red">
                  a well-managed channel.
                </span>
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              YouTube management involves several moving parts. We help bring
              content organization, publishing and optimization together
              through a more structured workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {workItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group min-w-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-black">
                  <img
                    src={item.image}
                    alt={`Illustrative visual for ${item.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  <span className="absolute top-4 left-4 bg-brand-black/90 text-white px-4 py-2 text-[10px] tracking-widest font-semibold">
                    {item.category}
                  </span>

                  <div className="absolute bottom-4 right-4 bg-brand-red text-white w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <h3 className="font-editorial text-xl md:text-2xl mt-5">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-black/40 mt-7 leading-relaxed">
            These visuals are illustrative examples of our management
            activities. Replace them with approved K-Media project screenshots
            or channel work when available.
          </p>
        </div>
      </section>

      {/* 04 — INTRODUCTION */}
      <section className="px-5 md:px-12 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] font-bold text-brand-red">
              MORE THAN JUST UPLOADS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl leading-tight mt-5">
              Your channel
              <br />
              needs a{" "}
              <span className="font-editorial-italic text-brand-red">
                system.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-black/65 text-base md:text-lg leading-relaxed">
            <p>
              Running a YouTube channel involves much more than recording and
              publishing videos. Planning, metadata, thumbnails, scheduling
              and performance reviews all take time.
            </p>

            <p>
              Our channel management service brings these activities together
              into a structured workflow, helping your channel stay organized
              and your content get published more consistently.
            </p>

            <p>
              Whether you are an individual creator, podcast or business, we
              can help manage the operational side of your YouTube presence.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-red font-semibold border-b border-brand-red pb-1 hover:text-brand-black hover:border-brand-black transition-colors"
            >
              Discuss your channel
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — WHAT WE OFFER */}
      <section className="bg-[#FFF0F0] px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-12 md:mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              OUR MANAGEMENT SERVICES
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
              Everything behind
              <br />
              <span className="font-editorial-italic text-brand-red">
                a better workflow.
              </span>
            </h2>

            <p className="text-black/60 mt-5 text-base md:text-lg leading-relaxed">
              We help organize the ongoing tasks that support your YouTube
              channel, from planning and optimization to publishing and review.
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
                  className="bg-white rounded-[24px] p-7 md:p-9 border border-brand-red/10 hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300"
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

      {/* 06 — MANAGEMENT TASKS */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
                WHAT WE HANDLE
              </span>

              <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
                Your channel,
                <br />
                <span className="font-editorial-italic text-brand-red">
                  better organized.
                </span>
              </h2>
            </div>

            <p className="text-black/55 max-w-md leading-relaxed">
              Choose the support you need. The exact scope of work can be
              customized around your upload frequency, content requirements
              and channel goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-4 border border-black/10 p-5 rounded-xl hover:border-brand-red hover:bg-[#FFF5F5] transition-all duration-300"
              >
                <span className="text-brand-red font-editorial text-2xl shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-semibold text-sm md:text-base">
                  {item}
                </span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto shrink-0 text-black/35 transition-all duration-300 group-hover:text-brand-red group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — PROCESS */}
      <section className="px-5 md:px-12 py-16 md:py-24 bg-brand-black text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              HOW IT WORKS
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
              A clear process
              <br />
              for{" "}
              <span className="font-editorial-italic text-brand-red">
                your channel.
              </span>
            </h2>

            <p className="text-white/55 text-base md:text-lg leading-relaxed mt-5">
              From understanding your channel to managing its ongoing
              activities, every step follows a clear and collaborative process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-brand-red pt-7"
              >
                <span className="font-editorial text-5xl text-brand-red/70">
                  {step.number}
                </span>

                <h3 className="font-bold text-xl mt-7">{step.title}</h3>

                <p className="text-sm leading-7 text-white/55 mt-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — WHY K-MEDIA */}
      <section className="px-5 md:px-12 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              WHY K-MEDIA
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-6 leading-tight">
              Focus on creating.
              <br />
              We'll help manage
              <br />
              <span className="font-editorial-italic text-brand-red">
                the rest.
              </span>
            </h2>

            <p className="text-black/55 leading-relaxed mt-7 max-w-lg">
              We bring planning, publishing and optimization tasks into one
              organized process, helping you spend more time creating content
              while we support the work behind your channel.
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
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-xl border border-black/10 bg-white hover:border-brand-red/40 transition-colors"
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

      {/* 09 — FAQ */}
      <section className="px-5 md:px-12 py-20 md:py-28 bg-[#FFF0F0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
              GOT QUESTIONS?
            </span>

            <h2 className="font-editorial text-4xl md:text-6xl mt-5 leading-tight">
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
                  aria-controls={`youtube-faq-${index}`}
                  aria-label={`View answer: ${faq.question}`}
                  className="w-full flex items-center justify-between gap-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4 rounded-sm"
                >
                  <span className="font-semibold text-base md:text-xl leading-snug">
                    <span className="text-brand-red mr-3 md:mr-4 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {faq.question}
                  </span>

                  <span className="text-brand-red text-2xl shrink-0 transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45">
                    +
                  </span>
                </button>

                <div
                  id={`youtube-faq-${index}`}
                  className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300"
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base leading-7 text-black/55 pt-4 pl-9 md:pl-10 max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="px-5 md:px-12 pb-20 md:pb-28 pt-16">
        <div className="max-w-[1440px] mx-auto bg-brand-black text-white rounded-[32px] md:rounded-[48px] px-7 py-14 md:px-16 md:py-20 text-center">
          <span className="text-xs tracking-[0.25em] text-brand-red font-bold">
            READY TO ORGANIZE YOUR CHANNEL?
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-7xl mt-6 leading-tight">
            Let's build a
            <br />
            stronger{" "}
            <span className="font-editorial-italic text-brand-red">
              YouTube presence.
            </span>
          </h2>

          <p className="text-white/55 max-w-xl mx-auto mt-6 leading-relaxed">
            Get a structured approach to channel planning, publishing and
            optimization with K-Media.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-brand-black transition-colors"
          >
            Discuss Your Channel
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