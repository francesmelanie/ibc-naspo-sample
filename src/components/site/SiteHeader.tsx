import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logoMain from "@/assets/ibc-logo-secondary-light.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Our Core Competencies", href: "https://innovativebc.io/#competencies" },
  { label: "Our Recent Work", href: "https://innovativebc.io/#work" },
  { label: "About Us", href: "https://innovativebc.io/#about" },
  { label: "Cooperative Contracting", href: "/public-sector-cooperative-contracting" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="ibc-container flex items-center justify-between py-1 md:py-1.5">
        <a href="/" className="flex items-center" aria-label="Innovative Business Concepts">
          <img src={logoMain} alt="Innovative Business Concepts" className="h-7 md:h-9 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Contact Us
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[82%] sm:w-80">
            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 hover:bg-muted hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
