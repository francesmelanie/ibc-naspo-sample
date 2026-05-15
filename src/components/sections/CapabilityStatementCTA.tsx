import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { capabilityStatementHref } from "@/data/publicSectorContent";

export function CapabilityStatementCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="ibc-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-14 text-primary-foreground shadow-card"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                <FileText className="h-4 w-4" />
                Capability Statement
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Download the public-sector capability statement.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed"
              >
                A concise one-page overview of IBC's public-sector capabilities, procurement
                readiness, experience highlights, and contact information.
              </motion.p>
            </div>
            <motion.a
              variants={fadeUp}
              href={capabilityStatementHref}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all justify-self-start md:justify-self-end"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
