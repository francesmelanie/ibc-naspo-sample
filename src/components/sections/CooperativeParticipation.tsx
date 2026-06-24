import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";

export function CooperativeParticipation() {
  return (
    <section className="border-t border-border/70">
      <div className="ibc-container py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span aria-hidden="true" className="h-[2px] w-7 bg-primary rounded-full" />
            Cooperative Purchasing
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-6 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              IBC is actively expanding participation within public-sector and cooperative purchasing
              ecosystems including OMNIA Partners, NASPO ValuePoint, and Sourcewell to support
              scalable government operational services and multi-jurisdiction procurement opportunities.
            </p>
            <p>
              IBC monitors and pursues opportunities aligned with emergency response support,
              operational staffing, program management, and public-sector service delivery initiatives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
