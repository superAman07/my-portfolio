"use client";

import { motion } from "framer-motion";

export default function HireMeBadge() {
  const text = "  Web Developer · UI/UX Designer · ";

  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36">
      {/* Rotating Text Circle */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text className="fill-text-primary text-[14px] font-mono uppercase tracking-[0.3em]">
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </motion.svg>

      {/* Center "Hire Me" */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-text-primary flex items-center justify-center cursor-pointer"
        >
          <span className="text-bg-deep text-xs font-bold font-mono">
            Hire Me
          </span>
        </motion.div>
      </div>
    </div>
  );
}