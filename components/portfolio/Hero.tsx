"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import HireMeBadge from "@/components/portfolio/HireMeBadge";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollTo";

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
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

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
          className="absolute rounded-full bg-accent"
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
      <FloatingParticles />
      <SpeedLines />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center pt-20 md:pt-16 pb-20 md:pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-accent mb-4 tracking-wider"
          >
            【 Hey there, I&apos;m 】
          </motion.p>
         <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--text-primary)] leading-tight"
         >
            Aman
            <br />
            <span className="text-accent">Vishwakarma</span>
         </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-text-body max-w-lg leading-relaxed"
          >
            Designing <span className="text-text-primary font-semibold">chaos</span> into{" "}
            <span className="text-text-primary font-semibold">pixel-perfect</span> clarity.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {["Full-Stack Developer", "UI/UX Designer", "Creative Coder"].map(
              (role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono border border-border-strong text-text-muted rounded-full"
                >
                  {role}
                </span>
              )
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button variant="brutalist" size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button variant="brutalist-outline" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume ↗
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden md:block mt-12"
          >
            <HireMeBadge />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          <div className="absolute -inset-4 border-2 border-accent opacity-10 rounded-sm rotate-3 pointer-events-none" />
          <div className="relative w-72 h-80 md:w-[420px] md:h-[500px] lg:w-[480px] lg:h-[560px]">
            <div className="w-full h-full rounded-sm overflow-hidden">
              <Image
                src="/hero-img.png"
                alt="Aman Vishwakarma - Full-Stack Developer"
                fill
                className="object-cover -scale-x-100"
                priority
              />
            </div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-accent opacity-50" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-accent opacity-50" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-accent opacity-50" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-accent opacity-50" />
          </div>
          <div className="absolute -bottom-8 -left-4 md:hidden">
            <HireMeBadge />
          </div>
        </motion.div>
      </div>
      <motion.button
        onClick={() => scrollToSection("projects")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      >
        <span className="text-[10px] font-mono text-text-muted group-hover:text-accent tracking-widest uppercase transition-colors">
          scroll
        </span>
        <ArrowDown size={14} className="text-accent group-hover:scale-125 transition-transform" />
      </motion.button>
    </section>
  );
}