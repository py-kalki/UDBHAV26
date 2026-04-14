import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winners",
  description:
    "UDBHAV'26 hackathon winners. See the top teams and their winning solutions.",
};

export default function WinnersPage() {
  /* ═══════════════════════════════════════════════════════════
     WINNERS PAGE — 2 STATES
     
     State 1: UNPUBLISHED (default) — "RESULTS PENDING" with skeleton cards
     State 2: PUBLISHED — Confetti burst + winner podium cards
     
     TODO: Add state management for published/unpublished
     TODO: Wire data source (Supabase / API)
     TODO: Install & wire canvas-confetti for celebration effect
           npm install canvas-confetti
           import confetti from 'canvas-confetti'
     TODO: Add special mentions / track prize cards
     ═══════════════════════════════════════════════════════════ */

  // TODO: Change to true when winners are announced
  const isPublished = false;

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {!isPublished ? (
          /* ═══════════════════════════════════════════
             STATE 1: UNPUBLISHED — Results Pending
             ═══════════════════════════════════════════ */
          <div className="text-center py-20">
            <h1 className="font-display text-6xl sm:text-8xl text-text-muted mb-8">
              RESULTS PENDING
            </h1>
            <p className="font-body text-lg text-text-secondary mb-16">
              Winners will be announced after the hackathon concludes on 26
              April 2026.
            </p>

            {/* Skeleton Winner Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* 2nd Place */}
              <div className="order-2 sm:order-1 bg-bg-surface border border-border-dim p-6 relative overflow-hidden opacity-50">
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-xs text-ghost">2ND PLACE</span>
                  <div className="h-5 w-3/4 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-1/2 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-2/3 skeleton-shimmer rounded mx-auto" />
                  <div className="font-mono text-2xl text-ghost mt-4">????</div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="order-1 sm:order-2 bg-bg-surface border-2 border-border-dim p-8 relative overflow-hidden opacity-50 sm:-mt-4">
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-xs text-ghost">1ST PLACE</span>
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="h-6 w-3/4 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-1/2 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-2/3 skeleton-shimmer rounded mx-auto" />
                  <div className="font-mono text-3xl text-ghost mt-4">????</div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="order-3 bg-bg-surface border border-border-dim p-6 relative overflow-hidden opacity-50">
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-xs text-ghost">3RD PLACE</span>
                  <div className="h-5 w-3/4 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-1/2 skeleton-shimmer rounded mx-auto" />
                  <div className="h-3 w-2/3 skeleton-shimmer rounded mx-auto" />
                  <div className="font-mono text-2xl text-ghost mt-4">????</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ═══════════════════════════════════════════
             STATE 2: PUBLISHED — Winners Announced
             
             TODO: Trigger confetti on page load:
               useEffect(() => {
                 confetti({ particleCount: 200, spread: 120, origin: { y: 0.4 } });
               }, []);
             
             TODO: Replace placeholder data with actual winner info
             ═══════════════════════════════════════════ */
          <div className="text-center py-12">
            <h1 className="font-display text-7xl sm:text-[100px] text-gradient-amber mb-3">
              WINNERS
            </h1>
            <p className="font-mono text-sm text-text-secondary tracking-wider mb-16">
              UDBHAV&apos;26 · 26 APRIL 2026
            </p>

            {/* Winner Podium */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* 2nd Place */}
              <div className="order-2 sm:order-1 bg-bg-surface border border-[#C0C0C0]/30 p-6 text-center">
                <span className="font-mono text-xs text-text-muted block mb-2">
                  2ND PLACE
                </span>
                <h3 className="font-heading font-extrabold text-xl text-text-primary">
                  Team Name
                </h3>
                <p className="font-body text-sm text-text-secondary mt-1">
                  Member 1, Member 2, Member 3
                </p>
                <p className="font-mono text-xl text-amber mt-3">₹15,000</p>
                <p className="font-body text-xs text-text-muted mt-1">
                  PS: Problem Statement Title
                </p>
              </div>

              {/* 1st Place */}
              <div className="order-1 sm:order-2 bg-bg-surface border-2 border-amber/40 p-8 text-center sm:-mt-6 amber-glow">
                <span className="font-mono text-xs text-amber block mb-2">
                  1ST PLACE
                </span>
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-heading font-extrabold text-2xl text-text-primary">
                  Team Name
                </h3>
                <p className="font-body text-sm text-text-secondary mt-1">
                  Member 1, Member 2, Member 3, Member 4
                </p>
                <p className="font-mono text-2xl text-amber mt-3">₹25,000</p>
                <p className="font-body text-xs text-text-muted mt-1">
                  PS: Problem Statement Title
                </p>
              </div>

              {/* 3rd Place */}
              <div className="order-3 bg-bg-surface border border-ghost/30 p-6 text-center">
                <span className="font-mono text-xs text-text-muted block mb-2">
                  3RD PLACE
                </span>
                <h3 className="font-heading font-extrabold text-xl text-text-primary">
                  Team Name
                </h3>
                <p className="font-body text-sm text-text-secondary mt-1">
                  Member 1, Member 2
                </p>
                <p className="font-mono text-xl text-amber mt-3">₹5,000</p>
                <p className="font-body text-xs text-text-muted mt-1">
                  PS: Problem Statement Title
                </p>
              </div>
            </div>

            {/* TODO: Special Mentions / Track Prizes
                <div className="mt-16">
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-6">
                    Special Mentions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ... track prize cards ...
                  </div>
                </div>
            */}
          </div>
        )}
      </div>
    </div>
  );
}
