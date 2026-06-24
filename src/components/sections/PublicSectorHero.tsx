import { capabilityStatementHref } from "@/data/publicSectorContent";
import { WaveAccent } from "@/components/site/WaveAccent";

export function PublicSectorHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero pt-14 pb-20 md:pt-24 md:pb-32">
      {/* Soft animated orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.16_245/0.45),transparent_70%)] blur-2xl ibc-orb-a"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,oklch(0.72_0.18_305/0.40),transparent_70%)] blur-2xl ibc-orb-b"
      />
      <WaveAccent className="pointer-events-none absolute inset-0 h-full w-full opacity-60 ibc-wave-drift" />

      <div className="ibc-container relative">
        <div className="max-w-5xl">
          <h1
            className="ibc-reveal text-[2.25rem] sm:text-6xl lg:text-[5rem] font-semibold leading-[1.05] sm:leading-[1.02] tracking-tight"
            style={{ animationDelay: "60ms" }}
          >
            Public-Sector &{" "}
            <span className="text-gradient-brand ibc-gradient-pan inline-block">
              Cooperative Contracting
            </span>
          </h1>
          <p
            className="ibc-reveal mt-5 sm:mt-8 max-w-3xl text-base sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            Scalable operational support services for government agencies, emergency response
            initiatives, and cooperative purchasing environments.
          </p>
          <div
            className="ibc-reveal mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-5"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-background hover:bg-primary transition-colors"
            >
              Connect with us
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={capabilityStatementHref}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span aria-hidden="true">↓</span>
              Capability Statement
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
