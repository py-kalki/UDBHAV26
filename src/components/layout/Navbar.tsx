"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_SECTIONS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#tracks" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Judging", href: "/#judging" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Contact", href: "/#contact" },
];

const NAV_PAGES = [
  { label: "PS Drop", href: "/ps" },
  { label: "Conduct", href: "/conduct" },
  { label: "Winners", href: "/winners" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-void/90 backdrop-blur-xl border-b border-border-dim"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group" id="nav-logo">
            <span
              className="font-display text-3xl lg:text-4xl tracking-tight text-text-primary"
            >
              UDBHAV
            </span>
            <span className="font-display text-3xl lg:text-4xl tracking-tight text-amber">
              &apos;26
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative px-3 py-2 font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            {/* Separator */}
            <span className="w-px h-6 bg-border-dim mx-2" />

            {NAV_PAGES.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 font-body text-sm transition-colors duration-200 group ${
                  pathname === item.href
                    ? "text-amber"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Register CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/register"
              id="nav-register-cta"
              className="px-5 py-2.5 border border-amber text-amber font-heading font-semibold text-xs uppercase tracking-[0.1em] hover:bg-amber hover:text-bg-void transition-all duration-300"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-hamburger"
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bg-surface border-t border-border-dim px-4 py-6 space-y-1">
          {NAV_SECTIONS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block px-4 py-3 font-body text-base text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors rounded"
            >
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border-dim my-3" />

          {NAV_PAGES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-4 py-3 font-body text-base transition-colors rounded ${
                pathname === item.href
                  ? "text-amber bg-bg-elevated"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border-dim my-3" />

          <Link
            href="/register"
            className="block text-center px-4 py-3 border border-amber text-amber font-heading font-semibold text-sm uppercase tracking-[0.1em] hover:bg-amber hover:text-bg-void transition-all duration-300 mt-4"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
