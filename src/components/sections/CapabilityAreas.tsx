import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
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
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map(({ title, description }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-border/70 bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="font-display text-xs font-semibold text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
