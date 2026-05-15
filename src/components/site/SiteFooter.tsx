import { IbcLogo } from "./IbcLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 mt-16">
      <div className="ibc-container py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <IbcLogo />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A boutique, minority &amp; woman-owned management consulting firm delivering bespoke
            solutions for public-sector programs.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Public Sector Lead</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="text-foreground font-medium">Janki Patel</li>
            <li><a href="mailto:janki@innovativebc.io" className="hover:text-primary transition-colors">janki@innovativebc.io</a></li>
            <li><a href="tel:+17326206290" className="hover:text-primary transition-colors">+1 (732) 620 6290</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Company</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><a href="https://innovativebc.io" className="hover:text-primary transition-colors">innovativebc.io</a></li>
            <li><a href="https://linkedin.com/company/innovativebusinessconcepts" className="hover:text-primary transition-colors">LinkedIn</a></li>
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
