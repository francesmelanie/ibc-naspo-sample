import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { audiences } from "@/data/publicSectorContent";
import { SectionHeader } from "./SectionHeader";

export function WhoWeServe() {
  return (
    <section className="py-20 md:py-28">
      <div className="ibc-container">
        <SectionHeader
          eyebrow="Who We Serve"
          title="Public-sector teams operating under real pressure"
          intro="IBC supports public-sector organizations and partners operating in complex, high-pressure environments where timelines, visibility, coordination, and execution quality matter."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audiences.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-soft text-primary group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
