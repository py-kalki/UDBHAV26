"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headlineLetters = "UDBHAV'26".split("");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,30,48,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,48,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.04,
        }}
      />

      {/* Radial Gradients */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 30%, #FFAA0008, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 70%, #FF2D2D05, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Content — 60% */}
          <div className="lg:col-span-3">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-[11px] text-text-secondary tracking-[0.15em] uppercase mb-6"
            >
              BY ALTA SCHOOL OF TECHNOLOGY · SAGE UNIVERSITY, INDORE
            </motion.p>

            {/* Main Headline */}
            <div className="mb-2 overflow-hidden">
              <h1 className="font-display text-[80px] sm:text-[120px] lg:text-[180px] leading-[0.85] tracking-tight">
                {headlineLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.06,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="inline-block text-gradient-amber"
                    style={{ perspective: "1000px" }}
                  >
                    {letter === "'" ? "\u2019" : letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="font-display text-[32px] sm:text-[48px] lg:text-[64px] text-text-primary leading-none tracking-tight mb-5"
            >
              24-HOUR HACKATHON
            </motion.h2>

            {/* Date Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="font-mono text-base text-amber tracking-[0.2em] mb-5"
            >
              25 – 26 APRIL 2026
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="font-body text-lg text-text-secondary max-w-[480px] leading-relaxed mb-8"
            >
              50 teams. 10 problems. 15 minutes to choose your battlefield.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-unstop"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-amber text-bg-void font-heading font-semibold text-sm uppercase tracking-[0.08em] hover:bg-amber/90 transition-all duration-300 amber-glow"
              >
                Register on Unstop (Round 1)
              </a>
              <Link
                href="/register"
                id="hero-cta-round2"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-border-dim text-text-primary font-heading font-semibold text-sm uppercase tracking-[0.08em] hover:border-amber hover:text-amber transition-all duration-300"
              >
                Register for Round 2 →
              </Link>
            </motion.div>
          </div>

          {/* Right Side — Geometric Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex lg:col-span-2 items-center justify-center"
          >
            <div className="relative w-[320px] h-[380px]">
              {/* Abstract overlapping rectangles — battle map aesthetic */}
              <div
                className="absolute top-0 right-0 w-[200px] h-[260px] border border-amber/20"
                style={{ transform: "rotate(3deg)" }}
              />
              <div
                className="absolute top-[40px] right-[40px] w-[180px] h-[220px] border border-amber/40"
                style={{ transform: "rotate(-2deg)" }}
              />
              <div
                className="absolute top-[80px] right-[20px] w-[160px] h-[180px] border border-crimson/20"
                style={{ transform: "rotate(5deg)" }}
              />
              <div
                className="absolute top-[60px] right-[60px] w-[120px] h-[140px] bg-amber/5 border border-amber/30"
                style={{ transform: "rotate(-1deg)" }}
              />

              {/* Geometric accent lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 380"
                fill="none"
              >
                <line
                  x1="0"
                  y1="190"
                  x2="320"
                  y2="190"
                  stroke="#FFAA00"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                />
                <line
                  x1="160"
                  y1="0"
                  x2="160"
                  y2="380"
                  stroke="#FFAA00"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                />
                <line
                  x1="0"
                  y1="0"
                  x2="320"
                  y2="380"
                  stroke="#FF2D2D"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <circle
                  cx="160"
                  cy="190"
                  r="60"
                  stroke="#FFAA00"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  fill="none"
                />
                <circle
                  cx="160"
                  cy="190"
                  r="4"
                  fill="#FFAA00"
                  fillOpacity="0.6"
                />
                {/* Corner marks */}
                <path d="M20,20 L20,40 M20,20 L40,20" stroke="#FFAA00" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M300,20 L300,40 M300,20 L280,20" stroke="#FFAA00" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M20,360 L20,340 M20,360 L40,360" stroke="#FF2D2D" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M300,360 L300,340 M300,360 L280,360" stroke="#FF2D2D" strokeWidth="1" strokeOpacity="0.3" />
              </svg>

              {/* Floating labels */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-text-muted tracking-widest uppercase">
                SECTOR.01
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] text-amber/50 tracking-widest uppercase">
                WAR.ROOM
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-amber/40 to-transparent" />
      </motion.div>
    </section>
  );
}
