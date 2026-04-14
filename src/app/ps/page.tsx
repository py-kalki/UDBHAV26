import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PS Drop",
  description:
    "Problem Statement Drop for UDBHAV'26. Enter your Team Code and select your problem statement in the 15-minute window.",
};

export default function PSDropPage() {
  /* ═══════════════════════════════════════════════════════════
     PS DROP — 4 STATES
     
     This page has 4 distinct states:
       1. PRE-DROP  — Countdown to PS Drop opening
       2. ACTIVE    — 15-minute live selection window (10:45–11:00 AM)
       3. CLOSED    — Selection window has ended
       4. ALREADY SELECTED — Team has already locked in a PS
     
     TODO: Implement state machine (useState + useEffect)
     TODO: Wire Supabase Realtime for live slot counts
     TODO: Add team code verification API call
     TODO: Implement PS selection + confirmation modal
     TODO: Add polling/WebSocket for slot count updates (every 3–5 sec)
     ═══════════════════════════════════════════════════════════ */

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ═══════════════════════════════════════════
            STATE 1: PRE-DROP (Default display)
            bg: slow pulsing crimson radial glow
            ═══════════════════════════════════════════ */}
        <div className="relative text-center py-20">
          {/* Pulsing background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, #FF2D2D06, transparent 70%)",
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
          />

          <div className="relative z-10">
            <h1 className="font-display text-5xl sm:text-7xl text-text-primary mb-4">
              PROBLEM STATEMENT DROP
            </h1>
            <p className="font-body text-lg text-text-secondary mb-12">
              Stay sharp. Enter your Team Code when the drop opens.
            </p>

            {/* Countdown Timer */}
            {/* TODO: Replace static values with actual countdown logic
                TODO: Target time: 10:45 AM on 25 April 2026 */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mb-12">
              {[
                { value: "00", label: "HOURS" },
                { value: "00", label: "MINUTES" },
                { value: "00", label: "SECONDS" },
              ].map((unit, i) => (
                <div key={unit.label} className="text-center">
                  <span className="font-mono text-6xl sm:text-8xl text-text-primary font-semibold tabular-nums">
                    {unit.value}
                  </span>
                  <span className="block font-mono text-[11px] text-text-muted tracking-widest mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-body text-sm text-text-secondary">
                PS Drop opens at{" "}
                <span className="text-amber font-mono">10:45 AM</span> on{" "}
                <span className="text-amber font-mono">25 April 2026</span>
              </p>
              <p className="font-body text-sm text-text-muted">
                Have your Team Code ready — check your confirmation email.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            STATE 2: ACTIVE (Hidden by default)
            
            TODO: Show when current time is between 10:45–11:00 AM on event day
            
            Components needed:
            - Alert bar: bg crimson, "⚡ PS DROP IS LIVE — X minutes remaining"
            - Team Code input: large centered, 2px amber border
            - "Verify Code" button → API call
            - After verification: 10 PS Cards in 2×5 grid
            - Each card: PS number, title, slots remaining, "Select This PS"
            - Slot color: green (5) → amber (3) → red (1) → gray (full)
            - Full cards: opacity 0.5, "FULL" badge, disabled button
            - Confirmation modal with warning
            ═══════════════════════════════════════════ */}

        {/* Team Code Input (shown in active state) */}
        <div className="max-w-md mx-auto mt-8">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder='Enter Team Code (e.g. UDB-7K3X)'
              className="flex-1 bg-bg-elevated border-2 border-amber text-text-primary placeholder:text-text-muted px-4 py-3.5 font-mono text-base text-center tracking-widest focus:outline-none"
              style={{ borderRadius: "4px" }}
              maxLength={8}
            />
            <button className="px-6 py-3.5 bg-amber text-bg-void font-heading font-semibold text-sm uppercase tracking-wider hover:bg-amber/90 transition-colors">
              Verify
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PS CARDS GRID (shown after team code verification)
            
            TODO: Populate from API/database
            TODO: Real-time slot updates via Supabase Realtime / polling
            TODO: Selection + confirmation modal flow
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-bg-surface border border-border-dim p-5 opacity-40"
              style={{ borderRadius: "4px" }}
            >
              <span className="font-mono text-xs text-text-muted">
                PS-{String(i + 1).padStart(2, "0")}
              </span>
              <div className="h-4 w-3/4 skeleton-shimmer rounded mt-3 mb-3" />
              <div className="h-3 w-1/2 skeleton-shimmer rounded mb-4" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ghost">
                  — / 5 slots
                </span>
                <button
                  disabled
                  className="px-4 py-1.5 bg-ghost text-text-muted font-heading text-xs uppercase cursor-not-allowed"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            STATE 3: CLOSED (Hidden by default)
            
            TODO: Show after 11:00 AM on event day
            
            <div className="text-center py-20">
              <h2 className="font-display text-6xl text-crimson">SELECTION CLOSED</h2>
              <p className="font-body text-text-secondary mt-4">
                PS selection has ended. Check your team email for your assigned problem statement.
              </p>
            </div>
            ═══════════════════════════════════════════ */}

        {/* ═══════════════════════════════════════════
            STATE 4: ALREADY SELECTED (Hidden by default)
            
            TODO: Show when team has already made a selection
            
            <div className="max-w-md mx-auto text-center py-20">
              <div className="bg-bg-surface border-2 border-amber p-8 rounded">
                <CheckCircle className="text-amber mx-auto mb-4" size={48} />
                <h3 className="font-heading font-bold text-xl text-text-primary">[PS Title]</h3>
                <p className="font-body text-text-secondary mt-2">
                  Your team has locked in this PS. Good luck.
                </p>
              </div>
            </div>
            ═══════════════════════════════════════════ */}
      </div>
    </div>
  );
}
