import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { supplierDiversityBlocks, certificationLabels } from "@/data/publicSectorContent";

export function SupplierDiversity() {
  return (
    <section className="py-20 md:py-28 bg-gradient-wash">
      <div className="ibc-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card overflow-hidden relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-brand opacity-10 blur-3xl"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] relative">
            <div>
              <motion.span
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Supplier Diversity
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Supplier diversity & partner network
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg text-muted-foreground leading-relaxed"
              >
                As an M/WBE-certified firm, IBC brings supplier diversity value alongside practical
                operational capability. We support agencies, prime contractors, and partner
                organizations with flexible teams, specialized expertise, and scalable delivery
                models.
              </motion.p>
            </div>
            <motion.ul variants={staggerContainer(0.05)} className="grid gap-2.5">
              {supplierDiversityBlocks.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm font-medium text-foreground/90"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-10 pt-8 border-t border-border/70 relative"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Certifications
            </div>
            <div className="flex flex-wrap gap-2.5">
              {certificationLabels.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-foreground/85"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Certification badges to be confirmed by IBC leadership before publication.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
