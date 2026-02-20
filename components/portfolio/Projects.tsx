"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "ShipQuickr",
    description:
      "A comprehensive eCommerce logistics solution featuring a robust admin portal for shipment tracking, courier serviceability checks, and automated label generation. Built to handle complex shipping logic with ease.",
    tags: ["Next.js", "TypeScript", "Prisma", "AWS", "PostgreSQL"],
    links: {
      demo: "https://shipquickr.com",
      repo: "https://github.com/superAman07/shipquickr",
    },
    image: "/projects/shipquickr.png",
  },
  {
    title: "Celsius Pop",
    description:
      "A luxury perfume e-commerce platform integrated with a custom MLM logic called '7th Heaven'. Features distinct user/admin dashboards and a seamless purchase experience.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "AWS Amplify", "Redux"],
    links: {
      demo: "https://celsiuspop.com",
      repo: "https://github.com/superAman07/7thHeaven",
    },
    image: "/projects/celsius.png",
  },
  {
    title: "Courier Billing App",
    description:
      "An intelligent billing engine enabling bulk Excel imports, automated pincode mapping, and invoice generation with tax calculations. Designed to streamline operations for courier aggregators.",
    tags: ["Next.js", "React Table", "ExcelJS", "PostgreSQL"],
    links: {
      demo: "https://courier-billing-awadh.vercel.app",
      repo: "https://github.com/superAman07/courier-billing-app",
    },
    image: "/projects/billing-app.png",
  },
  {
    title: "Travomine Quotation",
    description:
      "AI-powered travel quotation generator. Allows agents to create dynamic travel packages and quotations instantly, streamlining the workflow between travel agents and clients.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    links: {
      demo: "https://quotation-maker-hdvw.vercel.app",
      repo: "https://github.com/superAman07/quotation-maker",
    },
    image: "/projects/quotation.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            // Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mt-3">
            Featured <span className="text-accent">Projects</span>.
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.4 }}
            className="mt-4 h-[3px] w-[120px] rounded-full origin-left bg-accent"
            style={{ boxShadow: "0 0 12px rgba(229, 57, 53, 0.5)" }}
          />
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-text-muted mb-6 font-mono text-sm">
            Check out more on my GitHub
          </p>
          <Button variant="brutalist-outline" size="lg">
            <a href="https://github.com/superAman07" target="_blank" rel="noopener noreferrer">
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}