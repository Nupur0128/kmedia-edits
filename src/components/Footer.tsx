import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

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
    name: "AI UGC Video Editing",
    path: "/UGC-video-editing",
  },
  {
    name: "Thumbnail Designing",
    path: "/thumbnail-designing",
  },
  {
    name: "Shorts / Reel Video Editing",
    path: "/short-form-video-editing",
  },
  {
    name: "YouTube Channel Management",
    path: "/youtube-channel-management",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand Information */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/productionlogo4.png"
                alt="K-Media Production"
                className="w-auto h-20 md:h-10 object-contain object-left mb-8"
              />
            </Link>

            <p className="text-sm text-white/55 leading-7 mt-2 max-w-sm">
              We turn raw footage into powerful visual stories. From video
              editing to complete channel management, we help brands and
              creators make every frame count.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-7 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-brand-black transition-all duration-300"
            >
              Let's create something
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/45 mb-7">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/75">
              <Link
                to="/"
                className="hover:text-brand-red transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-brand-red transition-colors w-fit"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-brand-red transition-colors w-fit"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-brand-red transition-colors w-fit"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="hover:text-brand-red transition-colors w-fit"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/45 mb-7">
              Our Services
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/75">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="hover:text-brand-red transition-colors w-fit"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/45 mb-7">
              Follow Us On
            </h3>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-brand-red hover:border-brand-red hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>

            <h3 className="text-xs uppercase tracking-[0.25em] text-white/45 mt-10 mb-5">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/70">
              <a
                href="mailto:production@kodandamedia.com"
                className="flex items-center gap-3 hover:text-brand-red transition-colors"
              >
                <Mail size={16} />
                production@kodandamedia.com
              </a>

              <a
                href="tel:+7415919006"
                className="flex items-center gap-3 hover:text-brand-red transition-colors"
              >
                <Phone size={16} />
                +91 74159 19006
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/15 pt-7">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} K-Media Production. All rights
              reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/55">
              <Link
                to="/terms-and-conditions"
                className="hover:text-brand-red transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/privacy-policy"
                className="hover:text-brand-red transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="text-xs text-white/45">
              Crafted with creativity by{" "}
              <span className="text-white">Kodanda Media.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
