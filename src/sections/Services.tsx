
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Video,
  Clapperboard,
  Camera,
  MonitorPlay,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "General",
    italic: "Video Editing.",
    description: "From quick scroll-stoppers to cinematic storytelling.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=85",
    icon: Video,
    items: [
      "YouTube Shorts & Reels",
      "Short-form Videos (1–5 min)",
      "Long-form Videos (5–25 min)",
      "Podcast Editing",
      "Documentaries & Vlogs",
      "UGC & AI Edits",
    ],
  },
  {
    number: "02",
    title: "Commercial",
    italic: "Production.",
    description: "Visual content that gives brands a personality.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=900&q=85",
    icon: Clapperboard,
    items: [
      "Brand Advertisements",
      "Product Shoots",
      "Commercial Films",
      "Promotional Videos",
      "Product Video Editing",
    ],
  },
  {
    number: "03",
    title: "Photography &",
    italic: "Shoots.",
    description: "Capturing products, places and moments with purpose.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
    icon: Camera,
    items: [
      "Retail Photography",
      "Product Photography",
      "Drone Shoots",
      "Cinematic Shoots",
      "Brand Photography",
    ],
  },
  {
    number: "04",
    title: "YouTube Channel",
    italic: "Management.",
    description: "A complete monthly solution for growing your channel.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=85",
    icon: MonitorPlay,
    items: [
      "Thumbnail Design",
      "Titles & Hashtags",
      "Captions & Descriptions",
      "Video Uploading",
      "Upload Scheduling",
      "Monthly Management",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-brand-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <div>
            <p className="text-brand-red text-xs tracking-[0.3em] mb-5">
              02 / WHAT WE DO
            </p>

            <h2 className="font-editorial text-6xl md:text-8xl leading-[0.9]">
              Creative work.
              <br />
              <span className="font-editorial-italic text-brand-red">
                Without limits.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm text-black/60 leading-7">
            One creative partner for everything your brand needs
            to look, sound and feel different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group bg-white border border-black/10 rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} ${service.italic}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute top-5 left-5 text-white text-xs tracking-widest">
                    {service.number} / 04
                  </span>

                  <div className="absolute top-5 right-5 w-11 h-11 bg-brand-white rounded-full flex items-center justify-center text-brand-red">
                    <Icon size={21} />
                  </div>

                  <h3 className="absolute bottom-6 left-6 text-white font-editorial text-4xl md:text-5xl leading-none">
                    {service.title}
                    <br />
                    <span className="italic">{service.italic}</span>
                  </h3>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm text-black/55 mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] md:text-xs bg-brand-white border border-black/10 rounded-full px-3 py-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="flex items-center justify-between mt-8 pt-5 border-t border-black/10 text-sm group/link"
                  >
                    <span>Discuss this service</span>
                    <ArrowUpRight
                      size={18}
                      className="text-brand-red group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
