"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  image: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, links, image, index }: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-24 last:mb-0`}
    >
      <div className={`md:col-span-7 relative ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="relative rounded-lg overflow-hidden border border-border bg-bg-surface aspect-16/10 group-hover:border-accent/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-bg-deep/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className={`absolute -bottom-3 ${isEven ? "-right-3" : "-left-3"} w-24 h-24 border-b-2 ${isEven ? "border-r-2" : "border-l-2"} border-accent/30 rounded-br-lg z-0 transition-all duration-300 group-hover:w-32 group-hover:h-32 group-hover:border-accent`} />
      </div>

      <div className={`md:col-span-5 relative z-20 ${isEven ? "md:order-2 md:text-right" : "md:order-1 md:text-left"}`}>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <div className="relative p-6 bg-bg-elevated/90 backdrop-blur-sm border border-border rounded-lg shadow-xl mb-6 hover:shadow-2xl transition-all duration-300 group-hover:border-accent/20">
          <p className="text-text-body leading-relaxed">
            {description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? "justify-end" : "justify-start"}`}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-accent px-3 py-1 bg-accent/5 rounded-full border border-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 ${isEven ? "justify-end" : "justify-start"}`}>
          <a
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-accent text-text-muted hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="View Source Code"
          >
            <Github size={20} />
          </a>
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group/btn"
          >
            Visit Site
            <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}