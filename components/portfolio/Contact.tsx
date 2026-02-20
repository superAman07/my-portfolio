"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socials = [
  { icon: Github, href: "https://github.com/superAman07/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aman-vishwakarma-dev/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/superAman_7", label: "X / Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/iamsuperaman/", label: "Instagram" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-deep overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-left mb-12 sm:mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 tracking-tight text-text-primary">
            Let&apos;s Work <span className="text-accent">Together</span>.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-text-body text-lg leading-relaxed">
                Have a project in mind or just want to say hello?
                <br />
                <span className="text-text-primary font-semibold">
                  Let&apos;s build something amazing together.
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:amanvishwa2806@gmail.com"
                className="flex items-center gap-3 text-text-body hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-accent flex items-center justify-center transition-colors">
                  <Mail size={16} className="text-accent" />
                </div>
                <span className="font-mono text-sm">amanvishwa2806@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-text-body">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <MapPin size={16} className="text-accent" />
                </div>
                <span className="font-mono text-sm">Lucknow, India 🇮🇳</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4 block">
                Find me on
              </span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full border border-border hover:border-accent bg-bg-surface hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
                    aria-label={s.label}
                  >
                    <s.icon size={18} className="text-text-muted group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-mono text-text-muted">
                Available for freelance & full-time opportunities
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.35 }}
          >
            <form onSubmit={onSubmit} className="bg-bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <label htmlFor="name" className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-bg-deep border border-border rounded-lg text-text-primary text-sm font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-bg-deep border border-border rounded-lg text-text-primary text-sm font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-bg-deep border border-border rounded-lg text-text-primary text-sm font-mono placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                />
              </div>

              <Button
                 type="submit"
                 variant="brutalist"
                 size="lg"
                 disabled={status === "sending"}
                 className="w-full flex items-center justify-center gap-2"
               >
                 {status === "idle" && (
                   <>
                     <Send size={16} /> Send Message
                   </>
                 )}
                 {status === "sending" && (
                   <>
                     <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     Sending...
                   </>
                 )}
                 {status === "success" && (
                   <>
                     <CheckCircle size={16} /> Message Sent!
                   </>
                 )}
                 {status === "error" && (
                   <>
                     <AlertCircle size={16} /> Something went wrong
                   </>
                 )}
               </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}