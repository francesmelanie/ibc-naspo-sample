import monogram from "@/assets/ibc-monogram.svg";

const siteLinks = [
  { label: "Our Core Competencies", href: "https://innovativebc.io/#competencies" },
  { label: "Our Recent Work", href: "https://innovativebc.io/#work" },
  { label: "About Us", href: "https://innovativebc.io/#about" },
  { label: "Cooperative Contracting", href: "/public-sector-cooperative-contracting" },
  { label: "Contact", href: "#contact" },
];

const companyLinks = [
  { label: "innovativebc.io", href: "https://innovativebc.io" },
  { label: "LinkedIn", href: "https://linkedin.com/company/innovativebusinessconcepts" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 mt-16">
      <div className="ibc-container py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <img src={monogram} alt="Innovative Business Concepts" className="h-12 w-auto" />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A boutique, minority &amp; woman-owned management consulting firm delivering bespoke
            solutions for public-sector programs.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Site Map</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Company</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="ibc-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Innovative Business Concepts Inc.</span>
          <span>M/WBE-certified · WBENC · SBA WOSB · NYC MWBE</span>
        </div>
      </div>
    </footer>
  );
}
