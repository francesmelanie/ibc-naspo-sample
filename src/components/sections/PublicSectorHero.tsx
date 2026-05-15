import { fadeUp, motion, staggerContainer } from "@/lib/motion";
import { heroStats, capabilityStatementHref } from "@/data/publicSectorContent";
import { WaveAccent } from "@/components/site/WaveAccent";

export function PublicSectorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-16 md:pt-16 md:pb-24">
      <WaveAccent className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      <div className="ibc-container relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Public Sector & Cooperative Contracting
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05] tracking-tight"
          >
            Execution support for{" "}
            <span className="text-gradient-brand">public-sector programs</span>{" "}
            that cannot afford to fail.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Innovative Business Concepts (IBC) supports local, state, and public-sector partners with
            embedded delivery, program management, staffing, logistics, data and reporting,
            client support, and operational coordination.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-primary transition-colors"
            >
              Connect with us
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={capabilityStatementHref}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <span aria-hidden="true">↓</span>
              Capability Statement
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.06, 0.2)}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-border/70"
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.stat}
              variants={fadeUp}
              className="border-b border-border/70 md:border-b-0 md:border-r last:border-r-0 px-1 py-5 md:px-6"
            >
              <dt className="font-display text-xl md:text-2xl font-semibold text-gradient-brand">
                {s.stat}
              </dt>
              <dd className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
