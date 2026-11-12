import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";

type Category =
  | "Reels & Shorts"
  | "YouTube Videos"
  | "Podcasts"
  | "UGC"
  | "Brand Ads"
  | "Cinematic Shoots"
  | "Photography"
  | "AI Edits";

type Project = {
  id: number;
  title: string;
  category: Category;
  format: string;
  duration: string;
  image: string;
  shape: "portrait" | "square" | "landscape";
  videoId?: string;
};

const categories = [
  "All",
  "Reels & Shorts",
  "YouTube Videos",
  "Podcasts",
  "UGC",
  "Brand Ads",
  "Cinematic Shoots",
  "Photography",
  "AI Edits",
];

const projects: Project[] = [
  // ================= UGC VIDEOS =================
  {
    id: 1,
    title: "Product Review Video",
    category: "UGC",
    format: "PRODUCT REVIEW",
    duration: "UGC",
    image: "",
    shape: "portrait",
    videoId: "1tB8j9r32u6rvFPLE1IVxtOBJTboaZKzJ",
  },
  {
    id: 2,
    title: "Unboxing Experience",
    category: "UGC",
    format: "UNBOXING",
    duration: "UGC",
    image: "",
    shape: "square",
    videoId: "1WbGoaebET3U8pduZdYka1cQ94qDhO2yx",
  },
  {
    id: 3,
    title: "Lifestyle Product Video",
    category: "UGC",
    format: "LIFESTYLE UGC",
    duration: "UGC",
    image: "",
    shape: "landscape",
    videoId: "1f05cUgYBHHQHYuYajSdrxy79mg949DYb",
  },
  {
    id: 4,
    title: "Beauty Product Demonstration",
    category: "UGC",
    format: "PRODUCT DEMO",
    duration: "UGC",
    image: "",
    shape: "portrait",
    videoId: "1xttKgw07MOV9WJ_gZqTJcRIza52e0Fwj",
  },

  // ================= REELS & SHORTS =================
  {
    id: 5,
    title: "Educational Content",
    category: "Reels & Shorts",
    format: "EDUCATIONAL",
    duration: "SHORT-FORM",
    image: "",
    shape: "square",
    videoId: "1-bk0r4_3yRIJ9OjAWfwWKZ630JjHdmPn",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Reels & Shorts",
    format: "SOCIAL MEDIA",
    duration: "SHORT-FORM",
    image: "",
    shape: "portrait",
    videoId: "17wevyacOmU0_KCnqYMIvoZ0YQ3WbOV1O",
  },
  {
    id: 7,
    title: "Creator & Personal Brand Reel",
    category: "Reels & Shorts",
    format: "CREATOR CONTENT",
    duration: "SHORT-FORM",
    image: "",
    shape: "landscape",
    videoId: "1oKrNAs13IlrEcg8t9ZRvaSuycFcqo23S",
  },
  {
    id: 8,
    title: "Lifestyle & Trending Reel",
    category: "Reels & Shorts",
    format: "LIFESTYLE",
    duration: "SHORT-FORM",
    image: "",
    shape: "square",
    videoId: "1ziNUXa8ZF8IvQ0rphPzk7D8AaGqVXWyI",
  },
  {
    id: 9,
    title: "Product Promotional Video",
    category: "Reels & Shorts",
    format: "BRAND CONTENT",
    duration: "SHORT-FORM",
    image: "",
    shape: "portrait",
    videoId: "1Q93tHgbw4FehDwj4o1omX0iu-QfMC6Di",
  },
  {
    id: 10,
    title: "Personal Branding Video",
    category: "Reels & Shorts",
    format: "PERSONAL BRAND",
    duration: "SHORT-FORM",
    image: "",
    shape: "landscape",
    videoId: "1SF1E3GBjeckMQgUVy0EHB7ADCN3oISFL",
  },
  {
    id: 11,
    title: "Brand Storytelling",
    category: "Reels & Shorts",
    format: "BRAND CONTENT",
    duration: "SHORT-FORM",
    image: "",
    shape: "square",
    videoId: "1fVSAt2WjV2ueRLM6HccoKy2UdsNsTPiE",
  },
  {
    id: 12,
    title: "Product Showcase",
    category: "Reels & Shorts",
    format: "PRODUCT VIDEO",
    duration: "SHORT-FORM",
    image: "",
    shape: "portrait",
    videoId: "1FDqZ_snn_G5HkmJ8X347rN7M7ubbcx7v",
  },
  {
    id: 13,
    title: "Promotional Reel",
    category: "Reels & Shorts",
    format: "PROMOTIONAL",
    duration: "SHORT-FORM",
    image: "",
    shape: "landscape",
    videoId: "14zZauIPNw0tLFLyiws8edhEa-OvkGZis",
  },
  {
    id: 14,
    title: "Short-Form Video Edit",
    category: "Reels & Shorts",
    format: "SHORT-FORM",
    duration: "SHORT-FORM",
    image: "",
    shape: "square",
    videoId: "1t6Vu6j2VFldluJGdvlQp8lkRxrNGxqTu",
  },

  // ================= PODCAST VIDEOS =================
  {
    id: 15,
    title: "Multi-Camera Podcast",
    category: "Podcasts",
    format: "VIDEO PODCAST",
    duration: "48:20",
    image: "",
    shape: "landscape",
    videoId: "1f9hjM1PKKV7FkdO_ahHuZePkaIvWdL9p",
  },
  {
    id: 16,
    title: "Studio Interview",
    category: "Podcasts",
    format: "INTERVIEW",
    duration: "32:45",
    image: "",
    shape: "portrait",
    videoId: "1Pd_MOsrQlPinomiDd_7HgVyV77en-_pN",
  },
  {
    id: 17,
    title: "Creator Conversation",
    category: "Podcasts",
    format: "CREATOR PODCAST",
    duration: "26:15",
    image: "",
    shape: "square",
    videoId: "1PbibY4I-EEqkah1lT9fFtCRNS2r81D9d",
  },
];

const imageShapes = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[16/10]",
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Randomize the portfolio order once when the component mounts.
  const shuffledProjects = useMemo(() => {
    const shuffled = [...projects];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return shuffledProjects;

    return shuffledProjects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory, shuffledProjects]);
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#111111]">
      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-12 pb-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-red text-[11px] tracking-[0.3em] uppercase mb-8"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.95] tracking-[-0.055em] max-w-[1200px]"
          >
            Selected Work.{" "}
            <span className="font-editorial-italic text-brand-red">
              Unfiltered
            </span>
            <br />
            Creativity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-lg text-black/60 leading-7 max-w-xl mt-10"
          >
            {filteredProjects.length} projects across every format we create.
            Click any frame to preview.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="sticky top-0 z-30 bg-[#F8F7F3]/95 backdrop-blur-md border-y border-black/15">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 overflow-x-auto py-4 portfolio-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-5 py-3 text-xs md:text-sm transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-brand-red border-brand-red text-white"
                    : "border-black/15 text-black/65 hover:border-brand-red hover:text-brand-red"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ASYMMETRICAL MASONRY PORTFOLIO */}
      <section className="px-5 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            layout
            className="
              columns-1
              sm:columns-2
              lg:columns-3
              xl:columns-4
              gap-5
              md:gap-6
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="w-full text-left mb-7 break-inside-avoid block group cursor-pointer"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-[#171717] ${imageShapes[project.shape]}`}
                  >
                    {project.videoId ? (
                      <iframe
                        src={`https://drive.google.com/file/d/${project.videoId}/preview`}
                        title={project.title}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute top-3 left-3 bg-[#111111]/90 text-white px-3 py-2 text-[8px] md:text-[10px] tracking-[0.18em] uppercase z-10 pointer-events-none">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-2 mt-3">
                    <h3 className="font-editorial text-lg md:text-xl leading-tight">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      className="flex-shrink-0 mt-1 text-black/40 group-hover:text-brand-red transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-2">
                    <span className="text-[8px] md:text-[9px] tracking-[0.15em] text-black/45 uppercase">
                      {project.format}
                    </span>

                    <span className="text-[8px] md:text-[9px] tracking-wider text-black/45">
                      {project.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center py-20 text-black/50">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* PROJECT PREVIEW MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="
              fixed inset-0 z-[100]
              bg-black/90 backdrop-blur-sm
              flex items-center justify-center
              p-5 md:p-12
            "
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close preview"
              className="
                absolute top-6 right-6
                text-white
                hover:text-brand-red
                transition-colors
              "
            >
              <X size={30} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-[#171717] w-full aspect-video">
                {selectedProject.videoId ? (
                  <iframe
                    key={selectedProject.id}
                    src={`https://drive.google.com/file/d/${selectedProject.videoId}/preview`}
                    title={selectedProject.title}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-white pt-6">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-2">
                    {selectedProject.category}
                  </p>

                  <h2 className="font-editorial text-3xl md:text-5xl">
                    {selectedProject.title}
                  </h2>
                </div>

                <p className="text-xs tracking-widest text-white/60">
                  {selectedProject.format} · {selectedProject.duration}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
