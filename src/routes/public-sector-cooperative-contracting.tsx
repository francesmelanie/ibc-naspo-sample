import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionReveal } from "@/components/site/SectionReveal";
import { PublicSectorHero } from "@/components/sections/PublicSectorHero";
import { CapabilityAreas } from "@/components/sections/CapabilityAreas";
import { ProcurementReadiness } from "@/components/sections/ProcurementReadiness";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { SupplierDiversity } from "@/components/sections/SupplierDiversity";
import { CapabilityStatementCTA } from "@/components/sections/CapabilityStatementCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { CooperativeParticipation } from "@/components/sections/CooperativeParticipation";
import { OperationalCallout } from "@/components/sections/OperationalCallout";

export const Route = createFileRoute("/public-sector-cooperative-contracting")({
  head: () => ({
    meta: [
      {
        title: "Public Sector & Cooperative Contracting | Innovative Business Concepts",
      },
      {
        name: "description",
        content:
          "IBC supports public-sector agencies and cooperative purchasing programs with scalable staffing, program management, logistics, reporting, and field operations support.",
      },
      {
        property: "og:title",
        content: "Public Sector & Cooperative Contracting | Innovative Business Concepts",
      },
      {
        property: "og:description",
        content:
          "Scalable operational support services for government agencies, emergency response initiatives, and cooperative purchasing environments.",
      },
    ],
  }),
  component: PublicSectorPage,
});

function PublicSectorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PublicSectorHero />
        <SectionReveal><OperationalCallout /></SectionReveal>
        <SectionReveal><CapabilityAreas /></SectionReveal>
        <SectionReveal><ProcurementReadiness /></SectionReveal>
        <SectionReveal><ExperienceHighlights /></SectionReveal>
        <SectionReveal><SupplierDiversity /></SectionReveal>
        <SectionReveal><CapabilityStatementCTA /></SectionReveal>
        <SectionReveal><ContactSection /></SectionReveal>
        <SectionReveal><CooperativeParticipation /></SectionReveal>
      </main>
      <SiteFooter />
    </div>
  );
}
