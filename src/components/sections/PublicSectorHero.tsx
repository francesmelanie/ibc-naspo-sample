import { fadeUp, motion, staggerContainer } from "@/lib/motion";
import { heroStats, capabilityStatementHref } from "@/data/publicSectorContent";
import { WaveAccent } from "@/components/site/WaveAccent";

export function PublicSectorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-14 pb-20 md:pt-24 md:pb-32">
      <WaveAccent className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="ibc-container relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
          className="max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[2.25rem] sm:text-6xl lg:text-[5rem] font-semibold leading-[1.05] sm:leading-[1.02] tracking-tight"
          >
            Public Sector &{" "}
            <span className="text-gradient-brand">Cooperative Contracting</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 sm:mt-8 max-w-3xl text-base sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground"
          >
            Scalable operational support services for government agencies, emergency response
            initiatives, and cooperative purchasing environments.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-background hover:bg-primary transition-colors"
            >
              Connect with us
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={capabilityStatementHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
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
