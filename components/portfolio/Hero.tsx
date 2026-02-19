"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import HireMeBadge from "@/components/portfolio/HireMeBadge";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// Anime-style decorative floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 6,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--accent)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Anime-style speed lines (decorative)
function SpeedLines() {
  return (
    <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-[0.03]">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-[var(--accent)]"
          style={{
            right: 0,
            top: `${15 + i * 10}%`,
            width: `${40 + Math.random() * 60}%`,
          }}
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8 + i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <FloatingParticles />
      <SpeedLines />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pt-24 md:pt-16">
        {/* ── LEFT: Text Content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          {/* Greeting with anime bracket accent */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-[var(--accent)] mb-4 tracking-wider"
          >
            【 Hey there, I&apos;m 】
          </motion.p>

          {/* Name */}
         <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--text-primary)] leading-tight"
         >
            Aman
            <br />
            <span className="text-[var(--accent)]">Vishwakarma</span>
         </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-[var(--text-body)] max-w-lg leading-relaxed"
          >
            Turning Vision Into Reality With{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Code
            </span>{" "}
            And{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Design
            </span>
            .
          </motion.p>

          {/* Role tags */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {["Full-Stack Developer", "UI/UX Designer", "Creative Coder"].map(
              (role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono border border-[var(--border-strong)] text-[var(--text-muted)] rounded-full"
                >
                  {role}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button variant="brutalist" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="brutalist-outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume ↗
              </a>
            </Button>
          </motion.div>

          {/* Hire Me Badge - Desktop only, bottom-left */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block mt-12"
          >
            <HireMeBadge />
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* Decorative frame behind portrait */}
          <div className="absolute -inset-4 border-2 border-[var(--accent)] opacity-10 rounded-sm rotate-3 pointer-events-none" />

          <div className="relative w-72 h-80 md:w-[420px] md:h-[500px] lg:w-[480px] lg:h-[560px]">
            {/* Portrait placeholder - replace with your AI-generated portrait */}
            <div className="w-full h-full bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)] rounded-sm border border-[var(--border)] flex items-center justify-center overflow-hidden">
              {/* Uncomment when you have the portrait image: */}
              {/* <Image
                src="/images/hero-portrait.png"
                alt="Ayush Verma - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              /> */}

              {/* Placeholder visual */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-[var(--accent)] opacity-20 mb-4" />
                <p className="text-[var(--text-muted)] text-sm font-mono">
                  hero-portrait.png
                </p>
              </div>
            </div>

            {/* Anime-style corner marks */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[var(--accent)] opacity-50" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[var(--accent)] opacity-50" />
          </div>

          {/* Mobile Hire Me Badge */}
          <div className="absolute -bottom-8 -left-4 md:hidden">
            <HireMeBadge />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-mono text-[var(--text-muted)]">
          scroll
        </span>
        <ArrowDown size={16} className="text-[var(--accent)]" />
      </motion.div>
    </section>
  );
}