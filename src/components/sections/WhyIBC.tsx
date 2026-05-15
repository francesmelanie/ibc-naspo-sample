import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { whyIbcCards } from "@/data/publicSectorContent";

export function WhyIBC() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              <span className="h-px w-6 bg-primary/60" />
              Why IBC
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.15]"
            >
              When execution matters more than plans.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Programs do not fail because strategy is missing. They fail when execution breaks
              down. IBC operates in that space — embedding with teams, stabilizing delivery,
              resolving issues in real time, and aligning strategy, operations, and technology.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-8 border-l-2 border-primary pl-5 text-lg font-display font-medium text-foreground/90 leading-snug"
            >
              Most firms advise. Some implement. <span className="text-gradient-brand">We stabilize and deliver.</span>
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.05)}
            className="divide-y divide-border/70 lg:mt-[8.5rem]"
          >
            {whyIbcCards.map((c, i) => (
              <motion.li
                key={c.title}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] gap-6 py-5 first:pt-0"
              >
                <div className="font-display text-xs font-semibold text-primary tabular-nums pt-2">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
