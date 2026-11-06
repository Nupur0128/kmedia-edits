import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL US",
    value: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "OUR LOCATION",
    value: "Indore, Madhya Pradesh, India",
    href: null,
  },
  {
    icon: Clock3,
    label: "WORKING HOURS",
    value: "Monday – Saturday, 10 AM – 6 PM",
    href: null,
  },
];

const services = [
  "Short-Form Video Editing",
  "Long-Form Video Editing",
  "Podcast Video Editing",
  "YouTube Channel Management",
  "Thumbnail Designing",
  "Other",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Not decided yet",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Project Inquiry - ${formData.name}`,
    );

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}
Budget: ${formData.budget || "Not specified"}

Project Details:
${formData.message}
    `);

    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="overflow-hidden bg-brand-white text-brand-black">
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] text-brand-red font-semibold"
          >
            <span className="w-8 h-[2px] bg-brand-red" />
            LET'S CONNECT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight mt-8 max-w-4xl"
          >
            Have a project?
            <br />
            <span className="font-editorial-italic text-brand-red">
              Let's talk.
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <p className="text-base md:text-lg text-brand-black/65 max-w-xl leading-relaxed">
              Have an idea, a project, or a brand that needs better content?
              Tell us what you're working on. Let's create something worth
              watching.
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider border-b border-brand-black pb-2 hover:text-brand-red hover:border-brand-red transition-colors w-fit"
            >
              Start a conversation
              <ArrowDownIcon />
            </a>
          </div>
        </div>

        {/* ANIMATED QUESTION MARK */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -18, 0],
            rotate: [0, 8, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute right-2 top-24 sm:right-6 md:right-12 lg:right-60 lg:top-16 pointer-events-none select-none z-0"
        >
          <span className="font-editorial text-[150px] sm:text-[190px] md:text-[260px] lg:text-[440px] leading-none text-brand-red/10">
            ?
          </span>
        </motion.div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-brand-black text-brand-white px-6 md:px-12 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <Icon size={19} className="text-brand-red" />
                <p className="text-[10px] tracking-[0.2em] text-white/45">
                  {item.label}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm md:text-base font-medium hover:text-brand-red transition-colors break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm md:text-base font-medium">
                    {item.value}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="px-6 md:px-12 lg:px-16 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-[0.3em] text-brand-red font-semibold">
              <span className="inline-block w-7 h-[2px] bg-brand-red mr-3 align-middle" />
              PROJECT INQUIRY
            </p>

            <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl leading-[1.02] mt-7">
              Let's make
              <br />
              something
              <br />
              <span className="font-editorial-italic text-brand-red">
                happen.
              </span>
            </h2>

            <p className="text-brand-black/60 leading-relaxed mt-8 max-w-md">
              Every great project starts with a conversation. Share a few
              details about your goals, and let's figure out how we can help
              bring your vision to life.
            </p>

            <div className="mt-14 border-t border-brand-black/15 pt-7">
              <p className="text-xs tracking-[0.2em] text-brand-black/45 mb-5">
                FOLLOW OUR WORK
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 border border-brand-black/20 rounded-full flex items-center justify-center text-sm font-bold hover:bg-brand-red hover:border-brand-red hover:text-white transition-all"
                >
                  IG
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 border border-brand-black/20 rounded-full flex items-center justify-center text-sm font-bold hover:bg-brand-red hover:border-brand-red hover:text-white transition-all"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-brand-black/10 p-6 md:p-10 lg:p-12"
          >
            <div className="mb-9">
              <p className="text-xs tracking-[0.2em] text-brand-red font-semibold">
                TELL US ABOUT YOUR PROJECT
              </p>
              <h3 className="font-editorial text-3xl md:text-4xl mt-3">
                Fill in the details.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold mb-3 tracking-wide"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors placeholder:text-brand-black/35"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold mb-3 tracking-wide"
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors placeholder:text-brand-black/35"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold mb-3 tracking-wide"
                >
                  COMPANY / BRAND
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or brand name"
                  className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors placeholder:text-brand-black/35"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold mb-3 tracking-wide"
                  >
                    WHAT DO YOU NEED? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold mb-3 tracking-wide"
                  >
                    PROJECT BUDGET
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Select your budget</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold mb-3 tracking-wide"
                >
                  TELL US ABOUT YOUR PROJECT *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea, goals, timeline, or anything else we should know..."
                  className="w-full bg-transparent border-b border-brand-black/25 py-3 text-sm outline-none focus:border-brand-red transition-colors placeholder:text-brand-black/35 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-8 bg-brand-red text-white px-8 py-5 text-xs font-semibold tracking-[0.15em] hover:bg-brand-black transition-colors"
              >
                SEND PROJECT INQUIRY
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>

              <p className="text-xs text-brand-black/45 leading-relaxed">
                By submitting this form, you agree to be contacted regarding
                your project inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-red text-white px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="text-xs tracking-[0.3em] text-white/65">
              GOT SOMETHING IN MIND?
            </p>
            <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.95]">
              Good things
              <br />
              start with a<span className="font-editorial-italic"> hello.</span>
            </h2>
          </div>

          <a
            href="mailto:hello@yourdomain.com"
            className="group inline-flex items-center gap-5 border-b border-white pb-3 text-sm font-semibold tracking-wider w-fit hover:text-white/70 transition-colors"
          >
            SAY HELLO
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </section>
    </main>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={17} className="rotate-90" />;
}
