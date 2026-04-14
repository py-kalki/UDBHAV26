"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const SPONSOR_TIERS = [
  {
    tier: "Title Sponsor",
    logoWidth: "200px",
    slots: 1,
    filled: 0,
  },
  {
    tier: "Gold Sponsors",
    logoWidth: "140px",
    slots: 3,
    filled: 0,
  },
  {
    tier: "Silver Sponsors",
    logoWidth: "100px",
    slots: 4,
    filled: 0,
  },
];

export default function Sponsors() {
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
    <section ref={sectionRef} id="sponsors" className="py-24 lg:py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / 06 SPONSORS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary">
            Our Partners
          </h2>
        </motion.div>

        {/* Tiers */}
        <div className="space-y-14">
          {SPONSOR_TIERS.map((tier, tierIdx) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + tierIdx * 0.1 }}
              className="text-center"
            >
              <p className="font-mono text-xs uppercase text-text-muted tracking-[0.15em] mb-6">
                {tier.tier}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                {/* Filled slots — none yet, placeholder for when logos are added */}
                {/* TODO: Replace with actual sponsor logos
                    {tier.logos.map(logo => (
                      <div style={{ width: tier.logoWidth }}>
                        <img src={logo.src} alt={logo.name}
                          className="grayscale hover:grayscale-0 transition-all duration-300" />
                      </div>
                    ))}
                */}

                {/* Unfilled slots */}
                {[...Array(tier.slots - tier.filled)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-ghost/40 hover:border-amber/30 transition-colors duration-300"
                    style={{
                      width: tier.logoWidth,
                      height: `calc(${tier.logoWidth} * 0.6)`,
                    }}
                  >
                    <span className="font-body text-xs text-ghost">
                      Become a Sponsor
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact for sponsorship */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:sponsors@altaschool.in"
            className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-amber transition-colors duration-200"
          >
            <Mail size={14} />
            sponsors@altaschool.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}
