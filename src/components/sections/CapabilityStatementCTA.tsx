import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { capabilityStatementHref } from "@/data/publicSectorContent";

export function CapabilityStatementCTA() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-foreground text-background">
      <div className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="ibc-container relative py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.07)}
          className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/70">
              <span className="h-px w-6 bg-background/40" />
              Capability Statement
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] max-w-2xl text-white"
            >
              A trusted public-sector{" "}
              <span className="text-gradient-brand">cooperative contractor.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-background/75">
              Download our brochure to learn more about our capabilities, certifications, and how
              we partner with public-sector buyers.
            </motion.p>
          </div>
          <motion.a
            variants={fadeUp}
            href={capabilityStatementHref}
            download
            className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-xs sm:text-sm font-medium text-foreground hover:bg-background/90 transition-colors justify-self-start md:justify-self-end"
          >
            <span aria-hidden="true">↓</span>
            Download PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
