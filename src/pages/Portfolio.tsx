
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
  videoUrl?: string;
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
  {
    id: 1,
    title: "Pulse – Fitness Reel",
    category: "Reels & Shorts",
    format: "REEL",
    duration: "0:45",
    image: "/images/pic1.jpg",
    shape: "portrait",
  },
  {
    id: 2,
    title: "Taste & Fire",
    category: "Reels & Shorts",
    format: "REEL",
    duration: "0:38",
    image: "/images/pic2.jpg",
    shape: "portrait",
  },
  {
    id: 3,
    title: "Runway Red",
    category: "Reels & Shorts",
    format: "REEL",
    duration: "0:52",
    image: "/images/pic2.jpg",
    shape: "portrait",
  },
  {
    id: 4,
    title: "Neon Rain",
    category: "Cinematic Shoots",
    format: "CINEMATIC SHORT",
    duration: "3:12",
    image: "/images/pic1.jpg",
    shape: "landscape",
  },
  {
    id: 5,
    title: "Atelier Product Story",
    category: "Photography",
    format: "PRODUCT SHOOT",
    duration: "24 FRAMES",
    image: "/images/pic2.jpg",
    shape: "square",
  },
  {
    id: 6,
    title: "The Long Road",
    category: "YouTube Videos",
    format: "DOCUMENTARY",
    duration: "12:24",
    image: "/images/pic1.jpg",
    shape: "landscape",
  },
  {
    id: 7,
    title: "Deep Cuts Podcast",
    category: "Podcasts",
    format: "PODCAST EDIT",
    duration: "42:10",
    image: "/images/pic2.jpg",
    shape: "landscape",
  },
  {
    id: 8,
    title: "Coastline Cruise",
    category: "Cinematic Shoots",
    format: "DRONE FILM",
    duration: "2:35",
    image: "/images/pic1.jpg",
    shape: "landscape",
  },
  {
    id: 9,
    title: "Creator Gear Guide",
    category: "YouTube Videos",
    format: "LONG-FORM",
    duration: "12:47",
    image: "/images/pic1.jpg",
    shape: "landscape",
  },
  {
    id: 10,
    title: "Velora Rouge",
    category: "Brand Ads",
    format: "BRAND FILM",
    duration: "1:38",
    image: "/images/pic2.jpg",
    shape: "landscape",
  },
  {
    id: 11,
    title: "Morning Routine",
    category: "UGC",
    format: "UGC AD",
    duration: "0:34",
    image: "/images/pic1.jpg",
    shape: "portrait",
  },
  {
    id: 12,
    title: "Dream Frames",
    category: "AI Edits",
    format: "AI SEQUENCE",
    duration: "0:55",
    image: "/images/pic1.jpg",
    shape: "landscape",
  },
  {
    id: 10,
    title: "Creator Gear Guide",
    category: "YouTube Videos",
    format: "LONG-FORM",
    duration: "12:47",
    image: "/images/pic2.jpg",
    shape: "portrait",
  },
  {
    id: 11,
    title: "Velora Rouge",
    category: "Brand Ads",
    format: "BRAND FILM",
    duration: "1:38",
    image: "/images/pic2.jpg",
    shape: "landscape",
  },
  {
    id: 12,
    title: "Morning Routine",
    category: "UGC",
    format: "UGC AD",
    duration: "0:34",
    image: "/images/pic1.jpg",
    shape: "portrait",
  },
  {
    id: 13,
    title: "Dream Frames",
    category: "AI Edits",
    format: "AI SEQUENCE",
    duration: "0:55",
    image: "/images/pic2.jpg",
    shape: "landscape",
  },
];

const imageShapes = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[16/10]",
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

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
            <span className="font-editorial-italic text-brand-red">Unfiltered</span>
            <br />
            Creativity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-lg text-black/60 leading-7 max-w-xl mt-10"
          >
            {filteredProjects.length} projects across every format we
            create. Click any frame to preview.
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

                <motion.button
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
                  className="
                    w-full
                    text-left
                    mb-7
                    break-inside-avoid
                    block
                    group
                    cursor-pointer
                  "
                >

                  {/* IMAGE */}
                  <div
                    className={`relative w-full overflow-hidden bg-[#E9E6E0] ${imageShapes[project.shape]}`}
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* CATEGORY LABEL */}
                    <div className="
                      absolute top-3 left-3
                      bg-[#111111]/90
                      text-white
                      px-3 py-2
                      text-[8px] md:text-[10px]
                      tracking-[0.18em]
                      uppercase
                      z-10
                    ">
                      {project.category}
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="
                      absolute inset-0
                      bg-black/0
                      group-hover:bg-black/35
                      transition-all duration-500
                      flex items-center justify-center
                    ">

                      <div className="
                        w-12 h-12
                        rounded-full
                        bg-white
                        text-black
                        flex items-center justify-center
                        opacity-0
                        scale-75
                        group-hover:opacity-100
                        group-hover:scale-100
                        transition-all duration-300
                      ">
                        <Play size={18} fill="currentColor" />
                      </div>

                    </div>

                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="flex items-start justify-between gap-2 mt-3">

                    <h3 className="font-editorial text-lg md:text-xl leading-tight">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      className="
                        flex-shrink-0 mt-1
                        text-black/40
                        group-hover:text-brand-red
                        transition-colors
                      "
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

                </motion.button>

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

              <div className="bg-[#171717]">

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[70vh] object-contain"
                />

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