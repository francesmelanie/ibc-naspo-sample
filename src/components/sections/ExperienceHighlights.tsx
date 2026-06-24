import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import { experienceHighlights } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ExperienceHighlights() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Experience"
          title="Experience in Critical Public-Sector Environments"
          intro="IBC has supported high-pressure initiatives involving emergency response, public health, multi-agency coordination, public-facing digital platforms, and operational stabilization."
        />
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="mt-10 divide-y divide-border/70 border-y border-border/70"
        >
          {experienceHighlights.map(({ title, description }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="grid grid-cols-[auto_1fr] items-start gap-6 py-6 group hover:bg-secondary/30 transition-colors px-1"
            >
              <span className="font-display text-xs font-semibold text-muted-foreground tabular-nums pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
