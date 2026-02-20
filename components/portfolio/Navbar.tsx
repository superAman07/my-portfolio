
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/superAman07/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aman-vishwakarma-dev/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/superAman_7", label: "Twitter" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

const socialVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

const mobileLinkVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-bg-deep/80 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-full grid grid-cols-3 items-center relative">
          
          {/* ── LEFT: Navigation Links (Desktop) ── */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                variants={linkVariants}
                className="relative text-sm font-medium font-body text-text-muted hover:text-accent transition-colors duration-300 group"
              >
                {link.label}
                {/* Hover Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                {/* Active Indicator */}
                {activeLink === link.label && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Hamburger (Visible only on Mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>

          {/* ── CENTER: Logo ── */}
          <div className="flex justify-center items-center">
            <motion.a
              href="#home"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ 
                borderColor: "var(--accent)", 
                color: "var(--accent)",
              }}
              className="w-10 h-10 rounded-full border-2 border-text-primary flex items-center justify-center group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-transparent border-t-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xs font-bold tracking-tighter">AV</span>
            </motion.a>
          </div>

          {/* ── RIGHT: Socials + Toggle (Desktop) ── */}
          <div className="flex items-center justify-end gap-5">
            <motion.div 
              className="hidden md:flex items-center gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ y: -2, color: "var(--accent)" }}
                  className="text-text-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full cursor-pointer text-text-muted hover:text-accent hover:bg-bg-elevated transition-all relative overflow-hidden group"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "sun" : "moon"}
                  initial={{ y: 20, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={mobileLinkVariants}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "text-3xl font-bold font-body transition-colors",
                    activeLink === link.label ? "text-accent" : "text-text-primary hover:text-accent"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div 
                className="flex items-center gap-8 mt-10"
                variants={mobileLinkVariants}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}