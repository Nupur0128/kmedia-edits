import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* -----------------------------------------
   SERVICE IMAGES
   Replace these image URLs with your actual
   portfolio thumbnails whenever ready.
------------------------------------------ */

const serviceImages = {
  longForm: [
    {
      src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop",
      alt: "Podcast video editing",
    },
    {
      src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&auto=format&fit=crop",
      alt: "Audio and video production",
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop",
      alt: "Studio video production",
    },
  ],

  shortForm: [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop",
      alt: "Short form creator video",
    },
    {
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop",
      alt: "Fashion reel editing",
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop",
      alt: "Lifestyle vertical video",
    },
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&auto=format&fit=crop",
      alt: "Creative video production",
    },
  ],

  thumbnails: [
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&auto=format&fit=crop",
      alt: "Creative thumbnail design",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop",
      alt: "Travel video thumbnail",
    },
    {
      src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&auto=format&fit=crop",
      alt: "Cinematic thumbnail",
    },
  ],
};

/* -----------------------------------------
   REUSABLE IMAGE CAROUSEL
------------------------------------------ */

type GalleryImage = {
  src: string;
  alt: string;
};

function ServiceGallery({
  images,
  vertical = false,
}: {
  images: GalleryImage[];
  vertical?: boolean;
}) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const visibleImages = vertical
    ? [images[active], images[(active + 1) % images.length]]
    : [images[active]];

  return (
    <div className="w-full">
      <div
        className={`relative flex gap-5 ${vertical ? "justify-center" : ""}`}
      >
        <AnimatePresence mode="wait">
          {visibleImages.map((image, index) => (
            <motion.div
              key={`${active}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className={`relative overflow-hidden rounded-[28px] bg-black ${
                vertical
                  ? "w-1/2 aspect-[3/5] max-w-[230px]"
                  : "w-full aspect-[16/9]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-7 bg-brand-red"
                : "w-2 bg-black/20 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------
   SERVICE SECTION
------------------------------------------ */

function ServiceSection({
  number,
  title,
  intro,
  description,
  note,
  images,
  vertical,
  reverse,
}: {
  number: string;
  title: string;
  intro: string;
  description: string;
  note?: string;
  images: GalleryImage[];
  vertical?: boolean;
  reverse?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#FFF0F0] border border-brand-red/10 px-6 py-12 sm:px-10 md:px-16 lg:px-20 md:py-20"
    >
      <div
        className={`max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image Gallery */}

        <div className="w-full">
          <ServiceGallery images={images} vertical={vertical} />
        </div>

        {/* Service Content */}

        <div className="w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] font-bold">
              SERVICES
            </span>

            <span className="text-xs tracking-widest text-black/40">
              0{number}
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-brand-black">
            {title}
          </h2>

          <p className="text-lg md:text-xl font-semibold leading-relaxed mt-5 text-brand-black">
            {intro}
          </p>

          <p className="text-sm md:text-base leading-7 md:leading-8 text-black/70 mt-6">
            {description}
          </p>

          {note && (
            <p className="text-sm md:text-base leading-7 text-black/70 mt-5">
              <span className="font-bold text-brand-black">P.S. – </span>
              {note}
            </p>
          )}

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 mt-8 bg-brand-black text-white px-6 py-4 rounded-full text-sm font-semibold hover:bg-brand-red transition-colors"
          >
            Discuss Your Project
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

/* -----------------------------------------
   MAIN SERVICES PAGE
------------------------------------------ */

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceOptions = [
    "Long-Form Video Editing",
    "Short-Form Video Editing",
    "Podcast Video Editing",
    "Thumbnail Designing",
    "YouTube Channel Management",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const channel = String(data.get("channel") || "");
    const project = String(data.get("project") || "");

    const subject = encodeURIComponent(`New Project Inquiry - ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nYouTube Channel: ${channel}\nServices: ${selectedServices.join(", ")}\n\nProject Details:\n${project}`,
    );

    window.location.href = `mailto:info@kodandamedia.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-brand-white overflow-hidden">
      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="relative px-6 md:px-12 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-brand-black text-white rounded-full px-4 py-2 text-[10px] tracking-widest">
                02
              </span>

              <span className="text-xs tracking-[0.3em] text-black/50">
                WHAT WE DO
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-8xl lg:text-[112px] leading-[0.98] tracking-tight text-brand-black max-w-6xl">
              We make your
              <br />
              content{" "}
              <span className="font-editorial-italic text-brand-red">
                impossible
              </span>
              <br />
              to ignore.
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10 md:mt-14">
              <p className="text-base md:text-xl leading-relaxed text-black/60 max-w-xl">
                From long-form storytelling to scroll-stopping short videos, we
                turn your ideas into content people actually want to watch.
              </p>

              <Link
                to="#inquiry"
                className="group inline-flex items-center gap-3 text-sm font-semibold border-b-2 border-brand-red pb-2 w-fit hover:text-brand-red transition-colors"
              >
                LET'S WORK TOGETHER
                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          SERVICE 01 - LONG FORM
      ====================================== */}

      <div className="px-0 md:px-5 mb-8 md:mb-12">
        <ServiceSection
          number="1"
          title="Long-Form Video Editing"
          intro="Love creating content but hate the long hours of editing? We're here to help."
          description="Our video editing team analyses and replicates your editing style (with some improvements) to ensure you can post consistently, be more relevant, and get better results."
          note="If reaction videos are your thing, our team will make sure to create videos that can avoid copyright claims."
          images={serviceImages.longForm}
        />
      </div>

      {/* =====================================
          SERVICE 02 - SHORT FORM
      ====================================== */}

      <div className="px-0 md:px-5 mb-8 md:mb-12">
        <ServiceSection
          number="2"
          title="Short-Form Vertical Video Editing"
          intro="TikTok, Reels and YouTube Shorts have taken the world by storm, and can grow your reach faster than ever."
          description="We identify high-virality-potential moments from your long-form content, and edit them into short-form clips to boost your growth."
          images={serviceImages.shortForm}
          vertical
          reverse
        />
      </div>

      {/* =====================================
          SERVICE 03 - THUMBNAILS
      ====================================== */}

      <div className="px-0 md:px-5 mb-20 md:mb-28">
        <ServiceSection
          number="3"
          title="Thumbnail Design"
          intro="A good thumbnail can make or break the performance of your video, as they need to stop the viewer's scroll and instigate curiosity."
          description="Our graphic design team instils the spirit of your video into one carefully crafted, inviting frame, that can increase CTR by up to 3x!"
          images={serviceImages.thumbnails}
        />
      </div>

      {/* =====================================
          INQUIRY FORM
      ====================================== */}

      <section
        id="inquiry"
        className="px-6 md:px-12 py-20 md:py-8 bg-brand-white"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left Side - Project Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-brand-red text-white rounded-full px-4 py-2 text-[10px] tracking-widest">
                04
              </span>
              <span className="text-xs tracking-[0.3em] text-black/50">
                START A PROJECT
              </span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] text-brand-black">
              Tell us what
              <br />
              you{" "}
              <span className="font-editorial-italic text-brand-red">
                need.
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-black/55 mt-7 max-w-lg">
              Have a channel, a brand or an idea? Tell us a little about it.
              We'll figure out the rest together.
            </p>

            <div className="mt-12 space-y-7">
              {/* Visit Us */}
              <div className="flex items-start gap-4 border-b border-black/10 pb-6">
                <div className="w-11 h-11 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-brand-red mb-2">
                    VISIT US
                  </p>
                  <p className="text-base md:text-lg font-semibold text-brand-black">
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              {/* Let's Make Something Great */}
              <div className="flex items-start gap-4 border-b border-black/10 pb-6">
                <div className="w-11 h-11 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-brand-red mb-2">
                    LET'S MAKE SOMETHING GREAT
                  </p>
                  <a
                    href="mailto:info@kodandamedia.com"
                    className="text-base md:text-lg font-semibold text-brand-black hover:text-brand-red transition-colors"
                  >
                    info@kodandamedia.com
                  </a>
                </div>
              </div>

              {/* Let's Talk */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-brand-red mb-2">
                    LET'S TALK
                  </p>
                  <a
                    href="tel:+918085082069"
                    className="text-base md:text-lg font-semibold text-brand-black hover:text-brand-red transition-colors"
                  >
                    +91 80850 82069
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#FFF7F7] border border-brand-red/10 rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12"
          >
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                PROJECT INQUIRY
              </span>
              <h3 className="font-editorial text-3xl md:text-4xl text-brand-black mt-3">
                Let's get started.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name, Email, Channel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-3"
                  >
                    Your Name / Company Name
                    <span className="text-brand-red"> *</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name / company"
                    className="w-full border-0 border-b border-black/40 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-black/35 focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-3"
                  >
                    Your Email
                    <span className="text-brand-red"> *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border-0 border-b border-black/40 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-black/35 focus:border-brand-red transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="channel"
                    className="block text-sm font-semibold mb-3"
                  >
                    YouTube Channel Link
                    <span className="text-brand-red"> *</span>
                  </label>
                  <input
                    id="channel"
                    name="channel"
                    type="url"
                    required
                    placeholder="https://youtube.com/@yourchannel"
                    className="w-full border-0 border-b border-black/40 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-black/35 focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-semibold mb-3"
                >
                  About Your Project
                  <span className="text-brand-red"> *</span>
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-y border-0 border-b border-black/40 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-black/35 focus:border-brand-red transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <p className="text-sm font-semibold mb-4">
                  I Need
                  <span className="text-brand-red"> *</span>
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((service) => {
                    const selected = selectedServices.includes(service);

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        aria-pressed={selected}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          selected
                            ? "bg-brand-red border-brand-red text-white"
                            : "bg-white border-black/25 text-brand-black hover:border-brand-red hover:text-brand-red"
                        }`}
                      >
                        {selected && <Check size={14} />}
                        {service}
                      </button>
                    );
                  })}
                </div>
                {selectedServices.length === 0 && (
                  <p className="text-xs text-black/40 mt-3">
                    Select at least one service to continue.
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={selectedServices.length === 0}
                  className="group inline-flex items-center justify-center gap-4 bg-brand-red text-white px-9 py-4 rounded-full font-semibold text-sm hover:bg-brand-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Your Inquiry
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
                <span className="text-xs leading-relaxed text-black/45">
                  We'll get back to you as soon as possible.
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
