import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { heroStats, capabilityStatementHref } from "@/data/publicSectorContent";
import { WaveAccent } from "@/components/site/WaveAccent";

export function PublicSectorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-12 pb-20 md:pt-20 md:pb-28">
      <WaveAccent className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="ibc-container relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.12)}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Public Sector & Cooperative Contracting
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              Execution support for{" "}
              <span className="text-gradient-brand">public-sector programs</span>{" "}
              that cannot afford to fail.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl"
            >
              Innovative Business Concepts supports local, state, and public-sector partners with
              embedded delivery, program management, staffing, logistics, data and reporting,
              client support, and operational coordination for high-visibility programs.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={capabilityStatementHref}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-card-hover transition-shadow"
              >
                <Download className="h-4 w-4" />
                Download Capability Statement
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Contact Public Sector Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1, 0.25)}
            className="grid grid-cols-2 gap-4"
          >
            {heroStats.map((s) => (
              <motion.li
                key={s.stat}
                variants={fadeUp}
                className="rounded-2xl border border-border/70 bg-card/90 backdrop-blur-sm p-5 shadow-soft"
              >
                <div className="font-display text-2xl font-bold text-gradient-brand">
                  {s.stat}
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground leading-snug">{s.label}</div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
