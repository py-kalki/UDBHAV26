import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#tracks" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Sponsors", href: "/#sponsors" },
];

const pageLinks = [
  { label: "Register (Round 2)", href: "/register" },
  { label: "PS Drop", href: "/ps" },
  { label: "Code of Conduct", href: "/conduct" },
  { label: "Winners", href: "/winners" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Wordmark + Event Details */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display text-4xl tracking-tight text-text-primary">
                UDBHAV
              </span>
              <span className="font-display text-4xl tracking-tight text-amber">
                &apos;26
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
              24-Hour Hackathon by Alta School of Technology
              <br />
              Sage University, Indore
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={16} className="text-amber shrink-0" />
                <span className="font-body text-sm">
                  Sage University, Indore, Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="font-mono text-xs text-amber">📅</span>
                <span className="font-mono text-sm text-amber tracking-wider">
                  25 – 26 APRIL 2026
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-body text-sm text-text-secondary hover:text-amber transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {pageLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-body text-sm text-text-secondary hover:text-amber transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact + Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:udbhav@altaschool.in"
                className="flex items-center gap-3 text-text-secondary hover:text-amber transition-colors duration-200"
              >
                <Mail size={16} className="text-amber shrink-0" />
                <span className="font-body text-sm">udbhav@altaschool.in</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-text-secondary hover:text-amber transition-colors duration-200"
              >
                <Phone size={16} className="text-amber shrink-0" />
                <span className="font-body text-sm">+91 98765 43210</span>
              </a>
            </div>

            <h4 className="font-heading font-semibold text-sm text-text-primary uppercase tracking-wider mb-4">
              External
            </h4>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-amber transition-colors duration-200"
            >
              Register on Unstop
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-muted text-center sm:text-left">
            © 2026 Alta School of Technology · Sage University, Indore
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built for UDBHAV&apos;26
          </p>
        </div>
      </div>
    </footer>
  );
}
