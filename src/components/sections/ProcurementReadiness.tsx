import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { procurementReadiness } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ProcurementReadiness() {
  return (
    <section className="ibc-section bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Procurement Readiness"
          title="Built for procurement-ready delivery"
          intro="IBC supports public-sector buyers, prime contractors, and cooperative procurement opportunities through structured onboarding, contract coordination, reporting discipline, and partner alignment."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.03)}
          className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-1 divide-y divide-border/60"
        >
          {procurementReadiness.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-center gap-3 py-3.5 [&:nth-child(2)]:sm:border-t-0 first:border-t-0"
            >
              <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
              <span className="text-sm text-foreground/85">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
