
import { motion } from "framer-motion";

const clients = [
  { name: "OBSERVER", logo: "/images/clientlogo1.jpeg" },
  { name: "CANAM STUDYABROAD", logo: "/images/clientlogo2.png" },
  { name: "OWLED MEDIA", logo: "/images/clientlogo3.jpeg" },
  { name: "GOSOURCE", logo: "/images/clientlogo4.png" },
  { name: "BREW MEDIA", logo: "/images/clientlogo5.jpeg" },
  { name: "ASTU JEWELLERY", logo: "/images/clientlogo6.png" },
  { name: "TRADE WITH MANISH", logo: "/images/clientlogo7.jpeg" },
  { name: "DA CREATION", logo: "/images/clientlogo8.jpeg" },
  { name: "ZEAL SPARROW", logo: "/images/clientlogo9.png" },
];

export default function ClientLogoMarquee() {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-brand-red py-8 md:py-4 border-y border-white/10">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex items-center justify-center flex-shrink-0 px-8 md:px-12"
          >
            <div className="w-24 h-16 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-white p-4">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                draggable={false}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
