"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Wallet,
  GraduationCap,
  Leaf,
  Building2,
  BrainCircuit,
} from "lucide-react";

const TRACKS = [
  {
    icon: <HeartPulse size={24} />,
    name: "HealthTech & MedTech",
    description: "Healthcare, diagnostics, patient management",
  },
  {
    icon: <Wallet size={24} />,
    name: "FinTech & Web3",
    description: "Financial services, crypto, DeFi, payments",
  },
  {
    icon: <GraduationCap size={24} />,
    name: "EdTech & Skilling",
    description: "Learning platforms, skill development",
  },
  {
    icon: <Leaf size={24} />,
    name: "Sustainability & GreenTech",
    description: "Climate, energy, circular economy",
  },
  {
    icon: <Building2 size={24} />,
    name: "Smart Cities & IoT",
    description: "Urban infrastructure, connected devices",
  },
  {
    icon: <BrainCircuit size={24} />,
    name: "AI/ML & Data Science",
    description: "Intelligent systems, ML applications",
  },
];

export default function Tracks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tracks" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / 03 TRACKS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary">
            Problem Domains
          </h2>
        </motion.div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-bg-surface border-l-[3px] border-l-amber border-y border-r border-y-transparent border-r-transparent hover:border-l-crimson hover:bg-bg-elevated p-6 transition-all duration-300"
              style={{ borderRadius: "0" }}
            >
              <span className="text-amber group-hover:text-crimson transition-colors duration-300 block mb-4">
                {track.icon}
              </span>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                {track.name}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
