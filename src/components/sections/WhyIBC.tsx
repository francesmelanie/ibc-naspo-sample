import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { whyIbcCards } from "@/data/publicSectorContent";

export function WhyIBC() {
  return (
    <section className="py-20 md:py-28">
      <div className="ibc-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              Why IBC
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
            >
              When execution matters more than plans.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Programs do not fail because strategy is missing. They fail when execution breaks
              down. IBC operates in that space — embedding with teams, stabilizing delivery,
              resolving issues in real time, and aligning strategy, operations, and technology.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 inline-block rounded-xl border-l-2 border-primary pl-4 text-base font-medium text-foreground/90 italic"
            >
              Most firms advise. Some implement. We stabilize and deliver.
            </motion.p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
            className="grid sm:grid-cols-2 gap-4"
          >
            {whyIbcCards.map((c, i) => (
              <motion.li
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover transition-shadow"
              >
                <div className="font-display text-xs font-semibold text-primary tracking-widest">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
