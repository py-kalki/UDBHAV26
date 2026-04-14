"use client";

// NOTE: Metadata is defined in layout.tsx for this route
// See /register/layout.tsx for SEO metadata

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-12">
          <span className="font-mono text-[11px] text-amber tracking-[0.2em] uppercase block mb-4">
            / REGISTRATION
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-primary mb-4">
            Round 2 Registration
          </h1>
          <p className="font-body text-lg text-text-secondary">
            For shortlisted teams only. 50 teams compete.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            STEP TRACKER
            6 steps displayed as horizontal step tracker
            TODO: Implement multi-step form flow
            ═══════════════════════════════════════════ */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
          {["Team Info", "Leader", "Member 2", "Members 3–4", "Mentor", "Pay"].map(
            (step, i) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono ${
                    i === 0
                      ? "border-amber text-amber"
                      : "border-ghost text-ghost"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="font-body text-[10px] text-text-muted text-center max-w-[60px]">
                  {step}
                </span>
              </div>
            )
          )}
        </div>

        {/* ═══════════════════════════════════════════
            ROUND 1 CTA BANNER
            ═══════════════════════════════════════════ */}
        <div className="bg-bg-elevated border-l-[3px] border-l-amber border border-border-dim p-6 mb-10">
          <p className="font-heading font-semibold text-base text-text-primary mb-2">
            Not shortlisted yet? Start with Round 1 on Unstop
          </p>
          <p className="font-body text-sm text-text-secondary mb-4">
            Round 1 deadline: 10 April 2026
          </p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-amber text-bg-void font-heading font-semibold text-xs uppercase tracking-[0.1em] hover:bg-amber/90 transition-colors"
          >
            Go to Unstop →
          </a>
        </div>

        {/* ═══════════════════════════════════════════
            REGISTRATION FORM
            TODO: Wire up form state management (React Hook Form / useState)
            TODO: Add form validation
            TODO: Wire Razorpay SDK for payments
            TODO: Connect to Supabase / API for form submission
            ═══════════════════════════════════════════ */}
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          {/* --- TEAM INFO --- */}
          <div>
            <label className="font-mono text-[11px] text-amber tracking-[0.15em] uppercase block mb-4">
              Team Information
            </label>
            <div className="space-y-4">
              {["Team Name", "College Name", "Branch"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="w-full bg-bg-elevated border border-border-dim text-text-primary placeholder:text-text-muted px-4 py-3 font-body text-sm focus:border-amber focus:outline-none transition-colors"
                  style={{ borderRadius: "4px" }}
                />
              ))}
              <select
                className="w-full bg-bg-elevated border border-border-dim text-text-muted px-4 py-3 font-body text-sm focus:border-amber focus:outline-none transition-colors"
                style={{ borderRadius: "4px" }}
                defaultValue=""
              >
                <option value="" disabled>
                  Year of Study
                </option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>
          </div>

          {/* --- TEAM LEADER --- */}
          <div>
            <label className="font-mono text-[11px] text-amber tracking-[0.15em] uppercase block mb-4">
              Team Leader
            </label>
            <div className="space-y-4">
              {["Full Name", "Email", "Phone (+91)"].map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "email" : "text"}
                  placeholder={field}
                  className="w-full bg-bg-elevated border border-border-dim text-text-primary placeholder:text-text-muted px-4 py-3 font-body text-sm focus:border-amber focus:outline-none transition-colors"
                  style={{ borderRadius: "4px" }}
                />
              ))}
            </div>
          </div>

          {/* --- MEMBER 2 (Mandatory) --- */}
          <div>
            <label className="font-mono text-[11px] text-amber tracking-[0.15em] uppercase block mb-4">
              Member 2 <span className="text-crimson">*</span>
            </label>
            <div className="space-y-4">
              {["Full Name", "Email", "Phone (+91)"].map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "email" : "text"}
                  placeholder={field}
                  className="w-full bg-bg-elevated border border-border-dim text-text-primary placeholder:text-text-muted px-4 py-3 font-body text-sm focus:border-amber focus:outline-none transition-colors"
                  style={{ borderRadius: "4px" }}
                />
              ))}
            </div>
          </div>

          {/* --- MEMBERS 3 & 4 (Optional) --- */}
          {/* TODO: Initially hidden, reveal with "+ Add Member" button
              Use slide-down animation when revealing
              Track added members in state */}
          <div>
            <label className="font-mono text-[11px] text-text-muted tracking-[0.15em] uppercase block mb-4">
              Members 3 & 4 (Optional)
            </label>
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 border border-amber/40 text-amber font-heading font-semibold text-xs uppercase tracking-[0.08em] hover:bg-amber/10 transition-colors"
            >
              + Add Member
            </button>
          </div>

          {/* --- MENTOR & PAYMENT --- */}
          <div>
            <label className="font-mono text-[11px] text-amber tracking-[0.15em] uppercase block mb-4">
              Mentor & Payment
            </label>

            {/* TODO: Checkbox toggle should update total payable amount */}
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                className="w-5 h-5 accent-[#FFAA00] bg-bg-elevated border-border-dim"
              />
              <span className="font-body text-sm text-text-primary">
                I want a Mentor Session (+ ₹300)
              </span>
            </label>

            <div className="flex items-center gap-3 mb-8">
              <span className="font-body text-sm text-text-secondary">
                Total Payable:
              </span>
              <span className="font-mono text-3xl font-semibold text-amber">
                ₹800
              </span>
            </div>

            {/* TODO: Both checkboxes must be checked to enable Pay button */}
            <div className="space-y-3 mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 accent-[#FFAA00]"
                />
                <span className="font-body text-sm text-text-secondary">
                  I agree to the{" "}
                  <a href="/conduct" className="text-amber hover:underline">
                    Code of Conduct
                  </a>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 accent-[#FFAA00]"
                />
                <span className="font-body text-sm text-text-secondary">
                  I confirm all information is correct
                </span>
              </label>
            </div>

            {/* TODO: Wire Razorpay SDK — trigger payment on click
                TODO: Disable button until both checkboxes are checked
                TODO: After payment success, submit form data to backend */}
            <button
              type="submit"
              disabled
              className="w-full py-4 bg-ghost text-text-muted font-heading font-bold text-lg uppercase tracking-[0.08em] cursor-not-allowed transition-all duration-300 disabled:opacity-60"
            >
              Pay Now
            </button>
            <p className="font-mono text-[10px] text-text-muted text-center mt-3">
              Powered by Razorpay · Secure payment
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
