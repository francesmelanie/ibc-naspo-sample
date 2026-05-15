import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { supplierDiversityBlocks, certificationLabels } from "@/data/publicSectorContent";

export function SupplierDiversity() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              <span className="h-px w-6 bg-primary/60" />
              Supplier Diversity
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.15]"
            >
              Supplier diversity & partner network
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              As an M/WBE-certified firm, IBC brings supplier diversity value alongside practical
              operational capability — supporting agencies, primes, and partners with flexible
              teams and scalable delivery.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Certifications
              </div>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {certificationLabels.map((c) => (
                  <span key={c} className="text-sm font-medium text-foreground/85">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.ul variants={staggerContainer(0.04)} className="divide-y divide-border/70 border-y border-border/70 lg:mt-[8.5rem]">
            {supplierDiversityBlocks.map((b) => (
              <motion.li
                key={b}
                variants={fadeUp}
                className="flex items-center gap-3 py-3.5 text-sm font-medium text-foreground/90"
              >
                <span className="text-primary" aria-hidden="true">✓</span>
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
