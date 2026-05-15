import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { audiences } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function WhoWeServe() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Who We Serve"
          title="Public-sector teams operating under real pressure"
          intro="IBC supports organizations and partners working in complex, high-pressure environments where timelines, visibility, coordination, and execution quality matter."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.04)}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border/70 border-l border-border/70"
        >
          {audiences.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="border-b border-r border-border/70 p-6 hover:bg-secondary/40 transition-colors"
            >
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
