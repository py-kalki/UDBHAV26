"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const CONTACTS = [
  {
    name: "Prince Kumar",
    role: "Lead Organizer",
    email: "prince@altaschool.in",
    phone: "+91 98765 43210",
  },
  {
    name: "Rishabh Sharma",
    role: "Technical Lead",
    email: "rishabh@altaschool.in",
    phone: "+91 98765 43211",
  },
];

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32">
      {/* Subtle amber radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #FFAA0006, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / 07 CONTACT
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary">
            Get In Touch
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {CONTACTS.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-bg-surface border border-border-dim p-6"
              style={{ borderRadius: "4px" }}
            >
              <h3 className="font-heading font-bold text-lg text-text-primary">
                {contact.name}
              </h3>
              <p className="font-body text-sm text-text-secondary mb-4">
                {contact.role}
              </p>

              <div className="space-y-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-amber transition-colors duration-200"
                >
                  <Mail size={14} className="text-amber shrink-0" />
                  <span className="font-body text-sm">{contact.email}</span>
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-amber transition-colors duration-200"
                >
                  <Phone size={14} className="text-amber shrink-0" />
                  <span className="font-body text-sm">{contact.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
