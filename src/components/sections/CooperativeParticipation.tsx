import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";

export function CooperativeParticipation() {
  return (
    <section className="border-t border-border/70">
      <div className="ibc-container py-10 md:py-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="grid gap-3 md:grid-cols-[auto_1fr] md:items-baseline md:gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-px w-6 bg-primary/60" />
            Cooperative Purchasing
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            IBC is actively expanding participation in cooperative purchasing and public-sector
            partnership opportunities across state, local, and multi-jurisdiction programs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
