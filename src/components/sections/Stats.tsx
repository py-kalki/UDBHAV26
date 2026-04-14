"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 45000, prefix: "₹", label: "PRIZE POOL" },
  { value: 50, label: "TEAMS" },
  { value: 200, suffix: "+", label: "PARTICIPANTS" },
  { value: 24, label: "HOURS" },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isVisible,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: decelerate towards end
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * value);

      setCount(current);

      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatted =
    value >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <span className="font-mono text-4xl sm:text-5xl font-semibold text-amber tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="bg-bg-surface border-y border-border-dim"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-10 px-4 ${
                i < STATS.length - 1 ? "border-r border-border-dim" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-border-dim" : ""}`}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className="font-body text-xs uppercase text-text-secondary tracking-[0.12em] mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
