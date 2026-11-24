
import { motion } from "framer-motion";

const clients = [
  { name: "OBSERVER", logo: "/images/clientlogo1.png" },
  { name: "CANAM STUDYABROAD", logo: "/images/clientlogo2.png" },
  { name: "OWLED MEDIA", logo: "/images/clientlogo3.png" },
  { name: "GOSOURCE", logo: "/images/clientlogo4.png" },
  { name: "BREW MEDIA", logo: "/images/clientlogo5.png" },
  { name: "ASTU JEWELLERY", logo: "/images/clientlogo6.png" },
  { name: "TRADE WITH MANISH", logo: "/images/clientlogo7.jpeg" },
  { name: "DA CREATION", logo: "/images/clientlogo8.jpeg" },
  { name: "ZEAL SPARROW", logo: "/images/clientlogo9.png" },
];

export default function ClientLogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-brand-red py-8 md:py-4 border-y border-white/10">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0px", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex shrink-0 items-center justify-center px-8 md:px-4"
          >
            <div className="flex h-16 w-24 items-center justify-center rounded-full bg-white p-4 md:h-24 md:w-24">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="eager"
                draggable={false}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}