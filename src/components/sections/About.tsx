"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Trophy } from "lucide-react";

const WHY_PARTICIPATE = [
  {
    icon: <Zap size={20} />,
    title: "Real-World Problems",
    desc: "Solve actual industry challenges across 6 cutting-edge tracks",
  },
  {
    icon: <Users size={20} />,
    title: "Collaborate & Network",
    desc: "Work with talented peers and connect with mentors & judges",
  },
  {
    icon: <Trophy size={20} />,
    title: "Win ₹45,000+",
    desc: "Compete for prizes, recognition, and bragging rights",
  },
];

const TEAM_MEMBERS = [
  { name: "Prince Kumar", role: "Lead Organizer" },
  { name: "Rishabh Sharma", role: "Technical Lead" },
];

export default function About() {
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
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Column — Label + Heading */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
                / 01 ABOUT
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-text-primary leading-tight">
                What is
                <br />
                UDBHAV&apos;26?
              </h2>
            </motion.div>
          </div>

          {/* Right Column — Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-base text-ice leading-[1.8]"
            >
              UDBHAV&apos;26 is a high-stakes, 24-hour hackathon organized by
              Alta School of Technology (Enclope & Sunstone) at Sage University,
              Indore. 50 shortlisted teams go head-to-head, choosing from 10
              real-world problem statements in a rapid 15-minute PS Drop window.
              No fluff — just code, creativity, and the clock.
            </motion.p>

            {/* Why Participate */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-heading font-bold text-lg text-text-primary mb-5">
                Why Participate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {WHY_PARTICIPATE.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-sm text-text-primary mb-1">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Organising Body */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                Organised By
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Enclope", "Alta School of Technology", "Sunstone"].map(
                  (org) => (
                    <div
                      key={org}
                      className="px-5 py-3 bg-bg-elevated border border-border-dim flex items-center justify-center"
                    >
                      <span className="font-heading font-semibold text-sm text-text-secondary">
                        {org}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Organising Team */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                Organising Team
              </h3>
              <div className="flex flex-wrap gap-4">
                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.name}
                    className="px-5 py-4 bg-bg-surface border border-border-dim min-w-[180px]"
                  >
                    <p className="font-heading font-semibold text-sm text-text-primary">
                      {member.name}
                    </p>
                    <p className="font-body text-xs text-text-secondary mt-1">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60px] bg-bg-void"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />
    </section>
  );
}
