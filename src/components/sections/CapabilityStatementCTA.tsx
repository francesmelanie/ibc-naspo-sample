import { Download } from "lucide-react";
import { capabilityStatementHref } from "@/data/publicSectorContent";

export function CapabilityStatementCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background py-20 md:py-28">
      <div className="ibc-container relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-background/70">
            <span aria-hidden="true" className="h-[2px] w-7 bg-background/40 rounded-full" />
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
          className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
        >
          Download Capability Statement
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

