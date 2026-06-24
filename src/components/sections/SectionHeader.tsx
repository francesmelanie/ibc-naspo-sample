import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";

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
      variants={staggerContainer(0.06)}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span aria-hidden="true" className="h-[2px] w-7 bg-primary rounded-full" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-3 sm:mt-4 text-2xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.2] sm:leading-[1.15]"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
