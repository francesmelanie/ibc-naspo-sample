import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { capabilityStatementHref } from "@/data/publicSectorContent";

export function CapabilityStatementCTA() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.07)}
          className="border-y border-border/70 py-10 md:py-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true">□</span>
              Capability Statement
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl"
            >
              Download the public-sector capability statement.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base text-muted-foreground">
              A concise two-page overview of IBC's core capabilities, cooperative procurement
              readiness, NAICS and PSC codes, certifications, and points of contact — formatted
              for procurement reviewers and contracting teams.
            </motion.p>
          </div>
          <motion.a
            variants={fadeUp}
            href={capabilityStatementHref}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-background hover:bg-primary transition-colors justify-self-start md:justify-self-end"
          >
            <span aria-hidden="true">↓</span>
            Download PDF
            <span aria-hidden="true" className="-ml-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
