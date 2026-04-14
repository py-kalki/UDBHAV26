"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Timer, MapPin, Calendar, Trophy } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Timer size={32} />,
    title: "Format",
    description: "24-Hour Non-Stop Hackathon",
  },
  {
    icon: <MapPin size={32} />,
    title: "Venue",
    description: "Sage University, Indore",
  },
  {
    icon: <Calendar size={32} />,
    title: "Date",
    description: "25–26 April 2026",
  },
  {
    icon: <Trophy size={32} />,
    title: "Prize",
    description: "₹45,000 Total Prize Pool",
  },
];

export default function Highlights() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="highlights" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-bg-elevated border border-border-dim p-8 hover:border-amber transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "4px" }}
            >
              <span className="text-amber mb-6 block">{item.icon}</span>
              <h3 className="font-heading font-bold text-sm text-text-secondary uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="font-body text-base text-text-primary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
