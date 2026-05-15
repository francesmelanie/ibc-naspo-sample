import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { capabilities } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function CapabilityAreas() {
  return (
    <section className="ibc-section bg-gradient-wash">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Capabilities"
          title="Public-sector capability areas"
          intro="From emergency mobilization to ongoing operational oversight, IBC provides embedded support across the program lifecycle."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.04)}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 border border-border/70"
        >
          {capabilities.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="bg-card p-6 hover:bg-secondary/40 transition-colors"
            >
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
