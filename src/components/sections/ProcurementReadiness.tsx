import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { procurementReadiness } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ProcurementReadiness() {
  return (
    <section className="py-20 md:py-28 bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Procurement Readiness"
          title="Built for procurement-ready delivery"
          intro="IBC is prepared to support public-sector buyers, prime contractors, and cooperative procurement opportunities through structured onboarding, contract coordination, reporting discipline, scalable deployment, and partner alignment."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.04)}
          className="mt-12 grid gap-3 sm:grid-cols-2"
        >
          {procurementReadiness.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-soft"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-foreground/90">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground italic">
          Prepared to support public-sector and cooperative procurement environments.
        </p>
      </div>
    </section>
  );
}
