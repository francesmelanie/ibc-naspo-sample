import { Mail, Phone } from "lucide-react";
import monogram from "@/assets/ibc-monogram.svg";
import { contact } from "@/data/publicSectorContent";

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
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="text-foreground font-medium">{contact.lead}</li>
            <li className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{contact.role}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
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
