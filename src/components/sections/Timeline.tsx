"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  time: string;
  phase: string;
  description: string;
  isKey?: boolean;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: "9:00 AM",
    phase: "Check-in & Registration",
    description: "Teams arrive, collect badges, and set up their workstations.",
  },
  {
    time: "10:00 AM",
    phase: "Opening Ceremony",
    description: "Welcome address, rules overview, and judge introductions.",
  },
  {
    time: "10:45 AM",
    phase: "PS Drop",
    description:
      "Problem Statements go live. 15 minutes to select your battlefield.",
    isKey: true,
  },
  {
    time: "11:00 AM",
    phase: "Hacking Begins",
    description: "Clock starts. 24 hours of building, breaking, and iterating.",
  },
  {
    time: "2:00 PM",
    phase: "Mentor Round 1",
    description: "First round of mentor sessions for registered teams.",
  },
  {
    time: "8:00 PM",
    phase: "Progress Check",
    description: "Mid-hack checkpoint. Share progress with organizers.",
  },
  {
    time: "11:00 AM +1",
    phase: "Hacking Ends",
    description: "Code freeze. Final commits only.",
    isKey: true,
  },
  {
    time: "11:30 AM +1",
    phase: "Final Pitch",
    description:
      "5-minute demo per team. Show what you built to the judges.",
    isKey: true,
  },
  {
    time: "2:00 PM +1",
    phase: "Results & Awards",
    description: "Winners announced. Prizes distributed. Glory earned.",
    isKey: true,
  },
];

export default function Timeline() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="timeline" className="py-24 lg:py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / 04 TIMELINE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary">
            Event Schedule
          </h2>
          <p className="font-body text-sm text-text-secondary mt-3">
            25–26 April 2026
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-border-dim lg:-translate-x-px" />

          <div className="space-y-8 lg:space-y-12">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  animate={
                    isVisible
                      ? { opacity: 1, x: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                  }}
                  className={`relative flex items-start lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 lg:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 ${
                      event.isKey
                        ? "bg-crimson w-4 h-4 shadow-[0_0_12px_rgba(255,45,45,0.4)]"
                        : "bg-amber"
                    }`}
                    style={{ top: "6px" }}
                  />

                  {/* Content */}
                  <div
                    className={`ml-10 lg:ml-0 lg:w-[45%] ${
                      isLeft
                        ? "lg:text-right lg:pr-12"
                        : "lg:text-left lg:pl-12"
                    }`}
                  >
                    <span
                      className={`font-mono text-[13px] tracking-wider ${
                        event.isKey ? "text-crimson" : "text-amber"
                      }`}
                    >
                      {event.time}
                    </span>
                    <h3
                      className={`font-heading font-semibold text-lg mt-1 ${
                        event.isKey ? "text-crimson" : "text-text-primary"
                      }`}
                    >
                      {event.phase}
                    </h3>
                    <p className="font-body text-sm text-text-secondary mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
