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
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span aria-hidden="true" className="h-[2px] w-7 bg-primary rounded-full" />
            Supplier Diversity & Partner Engagement
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.15]"
          >
            Supplier Diversity & Partner Engagement
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            IBC is committed to supporting a diverse, qualified, and competitive supplier network. As a
            minority- and woman-owned business, we understand the importance of creating practical
            opportunities for other diverse and small businesses to participate in public-sector,
            cooperative contracting, and client-supported work.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Our supplier diversity efforts are incorporated into our procurement and vendor management
            practice. This allows us to consider diverse suppliers as part of our sourcing, teaming,
            subcontracting, vendor intake, and partner engagement process.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            IBC has established an internal supplier diversity utilization target of{" "}
            <span className="font-semibold text-foreground">up to 5% of applicable subcontracted contract value</span>{" "}
            being directed to qualified diverse suppliers, depending on the type of procurement, scope of
            work, project requirements, client requirements, subcontracting opportunities, and supplier
            availability.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            This target is not a quota or guarantee of utilization on every contract. Instead, it serves
            as a practical guide for IBC's supplier outreach, sourcing, teaming, and subcontractor
            engagement efforts.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We encourage qualified diverse and small businesses — including MWBE, MBE, WBE, SBE, DBE,
            SDVOB, veteran-owned, disadvantaged, and other certified firms — to connect with us for
            potential teaming, subcontracting, staffing, consulting, operational support, training,
            technology, and project-based opportunities.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            IBC also recognizes that some emerging suppliers may not yet have formal public-sector
            marketing materials. Where appropriate, IBC may help qualified providers understand how to
            prepare a basic capability statement that highlights their services, certifications,
            experience, geographic coverage, and readiness to support client work.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            IBC is currently enhancing its Supplier Diversity Program and will continue updating this
            page as additional supplier intake, reporting, and outreach resources become available.
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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="mt-10"
        >
          <motion.div variants={fadeUp} className="rounded-2xl border border-border/70 bg-card p-6">
            <h3 className="text-lg font-semibold">Interested in partnering with IBC?</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              Diverse and small businesses are encouraged to contact us to share their capabilities,
              certifications, service areas, and interest in future teaming or subcontracting
              opportunities.
            </p>
            <a
              href="#supplier-information"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Submit Supplier Information →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
