import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer(0.08)}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
