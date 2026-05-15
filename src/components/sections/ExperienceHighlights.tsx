import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { experienceHighlights } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function ExperienceHighlights() {
  return (
    <section className="py-20 md:py-28">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Experience"
          title="Experience in critical public-sector environments"
          intro="IBC has supported high-pressure public-sector initiatives involving emergency response, public health support, multi-agency coordination, public-facing digital platforms, and operational stabilization."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.07)}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {experienceHighlights.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover hover:border-primary/40 transition-all"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-20"
              />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
