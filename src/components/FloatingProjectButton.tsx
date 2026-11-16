
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingProjectButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[1000]"
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        className="group"
      >
        <Link
          to="/contact"
          aria-label="Start a Project"
          className="flex items-center justify-center h-14 w-14 hover:w-[190px] rounded-full bg-[#E53935] text-white shadow-[0_8px_30px_rgba(229,57,53,0.25)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
        >
          {/* Arrow Icon */}
          <span className="flex-shrink-0 flex items-center justify-center">
            <ArrowUpRight
              size={25}
              strokeWidth={1.8}
              className="transition-transform duration-500 group-hover:rotate-45"
            />
          </span>

          {/* Button Text */}
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-500 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:ml-3">
            Start a Project
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
