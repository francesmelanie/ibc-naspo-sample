import { fadeUp, motion, staggerContainer, viewportOnce } from "@/lib/motion";
import portAuthority from "@/assets/certs/port-authority-mwbe.png";
import nycMwbe from "@/assets/certs/nyc-mwbe.png";
import womenOwned from "@/assets/certs/women-owned.png";
import wbenc from "@/assets/certs/wbenc.png";
import sbaWosb from "@/assets/certs/sba-wosb.png";

const certifications = [
  { src: sbaWosb, alt: "SBA Certified Woman-Owned Small Business (WOSB)" },
  { src: wbenc, alt: "Certified WBENC — Women's Business Enterprise" },
  { src: womenOwned, alt: "Women Owned" },
  { src: nycMwbe, alt: "New York City M/WBE" },
  { src: portAuthority, alt: "The Port Authority of NY & NJ — MWBE Certified" },
];

export function SupplierDiversity() {
  return (
    <section className="ibc-section">
      <div className="ibc-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <span aria-hidden="true">—</span>
            Supplier Diversity
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.15]"
          >
            Strategic Partner & Supplier Network
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            IBC maintains a scalable network of strategic partners and operational support resources
            to assist with specialized staffing, surge operations, field deployment support, and
            multi-jurisdiction program coordination.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            This collaborative approach supports operational flexibility while enabling
            responsiveness to varying public-sector program requirements and rapid-response
            operational needs.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            IBC continues to expand its partner ecosystem to support scalable multi-jurisdictional
            deployments and cooperative procurement initiatives. We welcome partnership discussions with
            businesses of all sizes seeking collaborative opportunities in public-sector operations,
            emergency response support, staffing, program management, logistics, and related service areas.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            IBC also encourages participation from Minority-Owned Business Enterprises (MBEs),
            Women-Owned Business Enterprises (WBEs/MWBEs), small businesses, and other diverse supplier
            organizations interested in supporting public-sector initiatives through strategic partnership
            opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="mt-12"
        >
          <motion.div
            variants={fadeUp}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            Certifications
          </motion.div>
          <motion.ul
            variants={staggerContainer(0.05)}
            className="mt-5 flex flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-4"
          >
            {certifications.map((c) => (
              <motion.li
                key={c.alt}
                variants={fadeUp}
                className="flex-1 sm:flex-none flex items-center justify-center rounded-lg border border-border/70 bg-card p-1 sm:px-3 sm:py-2 h-12 sm:h-16 sm:w-32 hover:border-primary/40 transition-all"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
