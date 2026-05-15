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
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {audiences.map(({ title, description, icon: Icon }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className={`rounded-2xl border border-border/70 bg-card p-6 hover:border-primary/40 transition-colors ${
                i === audiences.length - 1 && audiences.length % 3 === 1
                  ? "lg:col-start-2"
                  : ""
              } ${
                i === audiences.length - 1 && audiences.length % 2 === 1
                  ? "sm:max-lg:col-span-2 sm:max-lg:max-w-md sm:max-lg:mx-auto sm:max-lg:w-full"
                  : ""
              }`}
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
