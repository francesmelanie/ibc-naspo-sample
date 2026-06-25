import { useEffect, useState } from "react";
import { Network, HeartHandshake, Target, Users, Sparkles } from "lucide-react";
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

const eligibleFirms = [
  "MWBE",
  "MBE",
  "WBE",
  "SBE",
  "DBE",
  "SDVOB",
  "Veteran-Owned",
  "Disadvantaged",
];

const sections = [
  { id: "partner-network", number: "01", label: "Partner Network", icon: Network },
  { id: "diversity-commitment", number: "02", label: "Diversity Commitment", icon: HeartHandshake },
  { id: "utilization-target", number: "03", label: "5% Utilization Target", icon: Target },
  { id: "who-we-encourage", number: "04", label: "Who We Encourage", icon: Users },
  { id: "program-evolution", number: "05", label: "Program Evolution", icon: Sparkles },
];

export function SupplierDiversity() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ibc-section">
      <div className="ibc-container">
        {/* Section header */}
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
            Supplier Network & Partner Engagement
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-[2.25rem] font-semibold tracking-tight leading-[1.15]"
          >
            Strategic Partner & Supplier Diversity Program
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            A structured program that pairs IBC's operational partner network with an active commitment
            to engaging diverse, qualified, and small businesses across public-sector and cooperative work.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[18rem_minmax(0,1fr)] gap-10 lg:gap-14">
          {/* LEFT RAIL */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* In-page nav */}
            <nav aria-label="Program sections" className="hidden lg:block">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                On this section
              </div>
              <ul className="space-y-1 border-l border-border/70">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`relative block py-2 pl-4 text-sm transition-colors ${
                          active
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <span
                            aria-hidden="true"
                            className="absolute -left-px top-0 h-full w-[2px] bg-primary"
                          />
                        )}
                        <span className="text-[11px] font-mono mr-2 opacity-70">{s.number}</span>
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile horizontal nav */}
            <nav aria-label="Program sections" className="lg:hidden -mx-4 px-4 overflow-x-auto">
              <ul className="flex gap-2 whitespace-nowrap">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40"
                    >
                      <span className="font-mono text-[10px] opacity-70">{s.number}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Certifications */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Certifications
              </div>
              <ul className="grid grid-cols-3 gap-2">
                {certifications.map((c) => (
                  <li
                    key={c.alt}
                    className="flex items-center justify-center rounded-lg border border-border/70 bg-card p-2 h-16 hover:border-primary/40 transition-all"
                  >
                    <img
                      src={c.src}
                      alt={c.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner CTA */}
            <div className="rounded-2xl bg-ibc-navy p-6 text-primary-foreground">
              <h3 className="text-base font-semibold">Interested in partnering with IBC?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                Share your capabilities, certifications, and service areas for future teaming or
                subcontracting opportunities.
              </p>
              <a
                href="#supplier-information"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ibc-navy hover:bg-white/90 transition-colors"
              >
                Submit Supplier Information →
              </a>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 max-w-[65ch]">
            {/* 01 Partner Network */}
            <motion.article
              id="partner-network"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.05)}
              className="scroll-mt-24 rounded-2xl border border-border/70 bg-card p-6 md:p-8"
            >
              <SubsectionHeader number="01" label="Operational Partner Network" icon={Network} />
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                IBC maintains a scalable network of strategic partners and operational support resources
                to assist with specialized staffing, surge operations, field deployment support, and
                multi-jurisdiction program coordination.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                This collaborative approach supports operational flexibility while enabling
                responsiveness to varying public-sector program requirements and rapid-response
                operational needs. IBC continues to expand its partner ecosystem to support scalable
                multi-jurisdictional deployments and cooperative procurement initiatives, welcoming
                partnership discussions with businesses of all sizes across operations, emergency
                response support, staffing, program management, and logistics.
              </motion.p>
            </motion.article>

            {/* 02 Diversity Commitment */}
            <motion.article
              id="diversity-commitment"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.05)}
              className="scroll-mt-24 rounded-2xl border border-border/70 bg-card p-6 md:p-8"
            >
              <SubsectionHeader number="02" label="Supplier Diversity Commitment" icon={HeartHandshake} />
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                IBC is committed to supporting a diverse, qualified, and competitive supplier network.
                As a minority- and woman-owned business, we understand the importance of creating
                practical opportunities for other diverse and small businesses to participate in
                public-sector, cooperative contracting, and client-supported work.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                Our supplier diversity efforts are incorporated into our procurement and vendor
                management practice. This allows us to consider diverse suppliers as part of our
                sourcing, teaming, subcontracting, vendor intake, and partner engagement process.
              </motion.p>
            </motion.article>

            {/* 03 Utilization Target — stat callout */}
            <motion.article
              id="utilization-target"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.05)}
              className="scroll-mt-24 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
            >
              <SubsectionHeader number="03" label="5% Utilization Target" icon={Target} />
              <motion.div variants={fadeUp} className="mt-5 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 sm:gap-6 items-start">
                <div className="flex flex-col">
                  <span className="text-5xl md:text-6xl font-bold text-primary leading-none tracking-tight">
                    Up to 5%
                  </span>
                  <span className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                    Internal utilization target
                  </span>
                </div>
                <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                  <p>
                    IBC has established an internal supplier diversity utilization target of up to{" "}
                    <span className="font-semibold text-foreground">
                      5% of applicable subcontracted contract value
                    </span>{" "}
                    being directed to qualified diverse suppliers — depending on procurement type,
                    scope of work, client requirements, and supplier availability.
                  </p>
                  <p>
                    This target is not a quota or guarantee on every contract. Instead, it serves as a
                    practical guide for IBC's supplier outreach, sourcing, teaming, and subcontractor
                    engagement efforts.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* 04 Who We Encourage — chips */}
            <motion.article
              id="who-we-encourage"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.05)}
              className="scroll-mt-24 rounded-2xl border border-border/70 bg-card p-6 md:p-8"
            >
              <SubsectionHeader number="04" label="Who We Encourage" icon={Users} />
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                We encourage qualified diverse and small businesses to connect with us for potential
                teaming, subcontracting, staffing, consulting, operational support, training,
                technology, and project-based opportunities.
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
                {eligibleFirms.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
                  >
                    {f}
                  </li>
                ))}
              </motion.ul>
            </motion.article>

            {/* 05 Program Evolution */}
            <motion.article
              id="program-evolution"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.05)}
              className="scroll-mt-24 rounded-2xl border border-border/70 bg-card p-6 md:p-8"
            >
              <SubsectionHeader number="05" label="Program Evolution" icon={Sparkles} />
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                IBC also recognizes that some emerging suppliers may not yet have formal public-sector
                marketing materials. Where appropriate, IBC may help qualified providers understand how
                to prepare a basic capability statement that highlights their services, certifications,
                experience, geographic coverage, and readiness to support client work.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground leading-relaxed">
                IBC is currently enhancing its Supplier Diversity Program and will continue updating
                this page as additional supplier intake, reporting, and outreach resources become
                available.
              </motion.p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubsectionHeader({
  number,
  label,
  icon: Icon,
}: {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          {number}
        </div>
        <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-tight">{label}</h3>
      </div>
    </div>
  );
}
