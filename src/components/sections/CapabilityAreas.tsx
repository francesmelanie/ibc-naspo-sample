import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { capabilities } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function CapabilityAreas() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-wash">
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
          variants={staggerContainer(0.05)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover hover:border-primary/40 transition-all h-full"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary">
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
