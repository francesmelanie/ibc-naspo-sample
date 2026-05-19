import { capabilityStatementHref } from "@/data/publicSectorContent";

export function CapabilityStatementCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-accent/20 blur-[140px]"
      />
      <div className="ibc-container relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/70">
            <span className="h-px w-6 bg-background/40" />
            Capability Statement
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            A trusted public-sector{" "}
            <span className="text-gradient-brand">cooperative contractor.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-background/75 leading-relaxed">
            Download our brochure to learn more about our capabilities, certifications, and how
            we partner with public-sector buyers.
          </p>
        </div>
        <a
          href={capabilityStatementHref}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90 transition-colors"
        >
          <span aria-hidden="true">↓</span>
          Download Capability Statement
        </a>
      </div>
    </section>
  );
}
