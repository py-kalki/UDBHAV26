import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "Code of Conduct for UDBHAV'26 hackathon. Rules, guidelines, and expected behavior for all participants.",
};

export default function ConductPage() {
  /* ═══════════════════════════════════════════════════════════
     CODE OF CONDUCT
     
     TODO: Replace placeholder content with actual rules from Prince/Rishabh
     TODO: Add any additional sections as needed
     ═══════════════════════════════════════════════════════════ */

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-heading font-extrabold text-4xl sm:text-[56px] text-text-primary leading-tight mb-3">
            Code of Conduct
          </h1>
          <p className="font-mono text-xs text-amber tracking-[0.15em] uppercase">
            UDBHAV&apos;26 · Sage University, Indore
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* TODO: Replace these placeholder sections with actual conduct content */}

          {/* Section 1 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              1. Respect & Inclusivity
            </h2>
            <p className="font-body text-base text-ice leading-[1.9]">
              All participants, mentors, judges, and organizers are expected to
              treat each other with respect. Harassment, discrimination, or
              offensive behavior of any kind will not be tolerated.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              2. Fair Play
            </h2>
            <div className="border-l-[3px] border-l-amber pl-4">
              <p className="font-body text-base text-ice leading-[1.9]">
                All code submitted must be original work created during the
                hackathon. Use of pre-built projects, plagiarized code, or
                unauthorized external help is strictly prohibited.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              3. Team Composition
            </h2>
            <p className="font-body text-base text-ice leading-[1.9]">
              Teams must consist of 2–4 members. All team members must be
              registered participants. No changes to team composition are allowed
              after registration closes.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              4. Problem Statement Selection
            </h2>
            <div className="border-l-[3px] border-l-amber pl-4">
              <p className="font-body text-base text-ice leading-[1.9]">
                Problem statements are selected during the 15-minute PS Drop
                window. Once a PS is locked in, it cannot be changed. Each PS has
                a maximum of 5 team slots.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              5. Intellectual Property
            </h2>
            <p className="font-body text-base text-ice leading-[1.9]">
              All intellectual property created during the hackathon belongs to
              the respective teams. Organizers reserve the right to showcase
              projects for promotional purposes.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              6. Venue Rules
            </h2>
            <p className="font-body text-base text-ice leading-[1.9]">
              Participants must follow all venue rules and regulations set by
              Sage University. Damage to property, unauthorized access to
              restricted areas, or any illegal activity will result in immediate
              disqualification.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
              7. Judging & Decisions
            </h2>
            <div className="border-l-[3px] border-l-crimson pl-4">
              <p className="font-body text-base text-ice leading-[1.9]">
                All decisions made by the judges and organizers are final. Any
                attempt to influence judging through unfair means will result in
                disqualification.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-border-dim">
            <p className="font-body text-sm text-text-secondary">
              For questions about the Code of Conduct, contact the organizers at{" "}
              <a
                href="mailto:udbhav@altaschool.in"
                className="text-amber hover:underline"
              >
                udbhav@altaschool.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
