import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PublicSectorHero } from "@/components/sections/PublicSectorHero";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { CapabilityAreas } from "@/components/sections/CapabilityAreas";
import { WhyIBC } from "@/components/sections/WhyIBC";
import { ProcurementReadiness } from "@/components/sections/ProcurementReadiness";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { SupplierDiversity } from "@/components/sections/SupplierDiversity";
import { CapabilityStatementCTA } from "@/components/sections/CapabilityStatementCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/public-sector-cooperative-contracting")({
  head: () => ({
    meta: [
      {
        title: "Public Sector & Cooperative Contracting | Innovative Business Concepts",
      },
      {
        name: "description",
        content:
          "IBC supports public-sector agencies and partners with program management, emergency response, staffing, logistics, data and reporting, client support, and procurement-ready delivery.",
      },
      {
        property: "og:title",
        content: "Public Sector & Cooperative Contracting | Innovative Business Concepts",
      },
      {
        property: "og:description",
        content:
          "Embedded delivery and procurement-ready execution for public-sector programs that cannot afford to fail.",
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
        <WhoWeServe />
        <CapabilityAreas />
        <WhyIBC />
        <ProcurementReadiness />
        <ExperienceHighlights />
        <SupplierDiversity />
        <CapabilityStatementCTA />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
