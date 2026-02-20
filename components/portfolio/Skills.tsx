"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";

const galaxies = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#DC2626",
    icon: "⚛️",
    description:
      "Crafting pixel-perfect, responsive interfaces that users love. Specializing in React ecosystems with modern tooling and performant architectures.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS", "JavaScript"],
    angle: -90,
  },
  {
    id: "backend",
    label: "Backend",
    color: "#22C55E",
    icon: "⬡",
    description:
      "Engineering robust server-side architectures with scalable APIs, clean ORM patterns, and relational database mastery.",
    skills: ["Node.js", "NestJS", "Prisma ORM", "REST APIs", "PostgreSQL"],
    angle: 0,
  },
  {
    id: "cloud",
    label: "Cloud",
    color: "#3B82F6",
    icon: "☁️",
    description:
      "Deploying production-grade applications on AWS. Managing infrastructure, storage, databases, and CI/CD pipelines at scale.",
    skills: ["AWS", "S3", "RDS", "Amplify", "EC2", "Vercel", "Git/GitHub"],
    angle: 90,
  },
  {
    id: "languages",
    label: "Languages",
    color: "#F59E0B",
    icon: "⚡",
    description:
      "Strong algorithmic foundations with 1000+ problems solved. Proficient across multiple paradigms — from systems programming to web development.",
    skills: ["TypeScript", "JavaScript", "C/C++", "SQL", "HTML/CSS"],
    angle: 180,
  },
];

const achievements = [
  {
    icon: "🏆",
    platform: "LeetCode",
    stat: "1000+ Day Streak",
    badge: "T-Shirt Winner",
    color: "#F59E0B",
  },
  {
    icon: "🎯",
    platform: "GeeksForGeeks",
    stat: "800+ Day Streak",
    badge: "2 Bags + 2 T-Shirts",
    color: "#22C55E",
  },
];

const getOrbitPos = (angleDeg: number, radius: number) => ({
  x: Math.cos((angleDeg * Math.PI) / 180) * radius,
  y: Math.sin((angleDeg * Math.PI) / 180) * radius,
});

function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-text-primary"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ${star.delay}s infinite ease-in-out`,
          }}
        />
      ))}

      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
      />

      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #DC2626 0%, transparent 70%)",
          bottom: "5%",
          left: "-5%",
        }}
      />

      {[0, 1, 2].map((i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-accent"
          style={{
            width: 3,
            height: 3,
            opacity: 0.15,
            left: `${30 + i * 20}%`,
            top: `${40 + i * 10}%`,
            animation: `ambient-float ${6 + i * 2}s ${i}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function GalaxyView({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  const ORBIT_R = 130;
  const SKILL_R = 60;

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      <svg viewBox="-220 -220 440 440" className="w-full h-full">
        <circle
          cx={0}
          cy={0}
          r={ORBIT_R}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1}
          strokeDasharray="4 6"
          style={{ animation: "orbit-pulse 4s infinite ease-in-out" }}
        />
        <circle
          cx={0}
          cy={0}
          r={ORBIT_R * 0.55}
          fill="none"
          stroke="var(--border)"
          strokeWidth={0.5}
          strokeDasharray="2 8"
          opacity={0.4}
        />

        {galaxies.map((galaxy) => {
          const pos = getOrbitPos(galaxy.angle, ORBIT_R);
          const isSelected = galaxy.id === selected;
          return (
            <line
              key={`line-${galaxy.id}`}
              x1={0}
              y1={0}
              x2={pos.x}
              y2={pos.y}
              stroke={galaxy.color}
              strokeWidth={isSelected ? 1.5 : 0.5}
              strokeDasharray={isSelected ? "none" : "3 6"}
              opacity={isSelected ? 0.6 : 0.2}
              className="transition-all duration-500"
            />
          );
        })}

        <circle cx={0} cy={0} r={28} fill="var(--bg-elevated)" stroke="var(--border)" strokeWidth={1.5} />
        <circle cx={0} cy={0} r={22} fill="var(--bg-surface)" />
        <text
          x={0}
          y={1}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--text-primary)"
          fontSize={11}
          fontFamily="JetBrains Mono"
          fontWeight={700}
        >
          AV
        </text>

        {galaxies.map((galaxy) => {
          const pos = getOrbitPos(galaxy.angle, ORBIT_R);
          const isSelected = galaxy.id === selected;

          return (
            <g key={galaxy.id}>
              {isSelected && (
                <circle cx={pos.x} cy={pos.y} r={32} fill={galaxy.color}>
                  <animate attributeName="opacity" values="0.08;0.22;0.08" dur="2s" repeatCount="indefinite" />
                </circle>
              )}

              <circle
                cx={pos.x}
                cy={pos.y}
                r={isSelected ? 22 : 18}
                fill={isSelected ? `${galaxy.color}30` : "var(--bg-elevated)"}
                stroke={galaxy.color}
                strokeWidth={isSelected ? 2 : 1.5}
                onClick={() => onSelect(galaxy.id)}
                className="cursor-pointer transition-all duration-300"
                style={{ filter: isSelected ? `drop-shadow(0 0 8px ${galaxy.color}50)` : "none" }}
              />
              <text
                x={pos.x}
                y={pos.y}
                dy="0.35em"
                textAnchor="middle"
                fontSize={18}
                onClick={() => onSelect(galaxy.id)}
                className="cursor-pointer pointer-events-none"
              >
                {galaxy.icon}
              </text>

              <text
                x={pos.x}
                y={pos.y + (galaxy.angle === -90 ? -30 : galaxy.angle === 90 ? 35 : 0)}
                dx={galaxy.angle === 0 ? 32 : galaxy.angle === 180 ? -32 : 0}
                textAnchor={galaxy.angle === 0 ? "start" : galaxy.angle === 180 ? "end" : "middle"}
                dominantBaseline="central"
                fill={isSelected ? galaxy.color : "var(--text-muted)"}
                fontSize={10}
                fontFamily="JetBrains Mono"
                fontWeight={isSelected ? 600 : 400}
                className="transition-all duration-300"
              >
                {galaxy.label}
              </text>

              {isSelected && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={SKILL_R}
                  fill="none"
                  stroke={galaxy.color}
                  strokeWidth={0.5}
                  strokeDasharray="2 4"
                  opacity={0.3}
                />
              )}

              {isSelected &&
                galaxy.skills.map((skill, i) => {
                  const skillAngle = (i / galaxy.skills.length) * 360 - 90;
                  const sp = getOrbitPos(skillAngle, SKILL_R);
                  return (
                    <g key={skill}>
                      <circle cx={pos.x + sp.x} cy={pos.y + sp.y} r={3.5} fill={galaxy.color} opacity={0.9} />
                      <text
                        x={pos.x + sp.x}
                        y={pos.y + sp.y - 8}
                        textAnchor="middle"
                        fill="var(--text-primary)"
                        fontSize={6.5}
                        fontFamily="JetBrains Mono"
                        opacity={0.85}
                      >
                        {skill}
                      </text>
                    </g>
                  );
                })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function InfoPanel({ galaxy }: { galaxy: (typeof galaxies)[0] }) {
  return (
    <motion.div
      key={galaxy.id}
      initial={{ opacity: 0, y: 30, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{galaxy.icon}</span>
        <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight" style={{ color: galaxy.color }}>
          {galaxy.label}
        </h3>
      </div>

      <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">{galaxy.description}</p>

      <div>
        <span className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3 block">Technologies</span>

        <div className="flex flex-wrap gap-2">
          {galaxy.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs font-mono border transition-colors cursor-default"
              style={{
                color: galaxy.color,
                borderColor: `${galaxy.color}40`,
                backgroundColor: `${galaxy.color}10`,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState("frontend");
  const [isPaused, setIsPaused] = useState(false);
  const selectedGalaxy = galaxies.find((g) => g.id === selected)!;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelected((prev) => {
        const currentIndex = galaxies.findIndex((g) => g.id === prev);
        const nextIndex = (currentIndex + 1) % galaxies.length;
        return galaxies[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);


  return (
    <section id="skills" className="relative min-h-screen bg-bg-deep overflow-hidden">
      <Starfield />

      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-left mb-10 sm:mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">// What I Work With</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-3 tracking-tight text-text-primary">
            Skills &amp; Technologies
            <span className="text-accent">.</span>
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

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <GalaxyView selected={selected} onSelect={setSelected} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.35 }}
            className="flex flex-col gap-6"
          >
            <AnimatePresence mode="wait">
              <InfoPanel galaxy={selectedGalaxy} />
            </AnimatePresence>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {galaxies.map((g) => (
                <motion.button
                  key={g.id}
                  onClick={() => setSelected(g.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border cursor-pointer"
                  style={
                    g.id === selected
                      ? {
                          color: g.color,
                          borderColor: g.color,
                          backgroundColor: `${g.color}15`,
                          boxShadow: `0 0 16px ${g.color}25`,
                        }
                      : {
                          color: "var(--text-muted)",
                          borderColor: "var(--border)",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  {g.icon} {g.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.5 }}
          className="mt-16 sm:mt-24"
        >
          <h3 className="text-center text-sm sm:text-base font-mono text-text-muted tracking-widest mb-8">
            ✦ Achievements Unlocked ✦
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="anime-shimmer bg-bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-5 flex items-center gap-4 group transition-all duration-300 relative overflow-hidden"
              >
                <span className="text-3xl sm:text-4xl flex-shrink-0">{ach.icon}</span>
                <div className="min-w-0">
                  <p className="font-mono font-semibold text-sm" style={{ color: ach.color }}>
                    {ach.platform}
                  </p>
                  <p className="text-text-primary text-sm font-medium mt-0.5">{ach.stat}</p>
                  <p className="text-text-muted text-xs mt-0.5">{ach.badge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.4; }
        }
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes ambient-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          25% { transform: translate(10px, -15px); opacity: 0.2; }
          50% { transform: translate(-5px, -25px); opacity: 0.15; }
          75% { transform: translate(-10px, -10px); opacity: 0.2; }
        }
        .anime-shimmer {
          position: relative;
        }
        .anime-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
        }
        .anime-shimmer:hover::after {
          animation: shimmer-sweep 0.8s ease-out forwards;
        }
        @keyframes shimmer-sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
