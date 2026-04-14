"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Judging() {
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
    <section ref={sectionRef} id="judging" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / 05 JUDGING
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary">
            Judging Criteria
          </h2>
        </motion.div>

        {/* Placeholder State */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <p className="font-heading font-semibold text-xl text-text-secondary mb-8">
            Judging criteria will be announced soon
          </p>

          {/* Skeleton Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-bg-elevated border border-border-dim p-6 space-y-4"
                style={{ borderRadius: "4px" }}
              >
                <div className="h-4 w-24 skeleton-shimmer rounded" />
                <div className="h-3 w-full skeleton-shimmer rounded" />
                <div className="h-3 w-3/4 skeleton-shimmer rounded" />
                <div className="mt-4">
                  <div className="inline-block h-6 w-12 skeleton-shimmer rounded" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TODO: When criteria are provided, replace placeholder with:
            - Card grid with criterion name, description, weight badge
            - Weight badge: --amber text, --amber/10 bg, IBM Plex Mono font
            - Example:
              {CRITERIA.map(c => (
                <div className="bg-bg-elevated border border-border-dim p-6">
                  <h3 className="font-heading font-bold">{c.name}</h3>
                  <p className="font-body text-text-secondary">{c.description}</p>
                  <span className="font-mono text-amber bg-amber/10 px-2 py-1">{c.weight}%</span>
                </div>
              ))}
        */}
      </div>
    </section>
  );
}
