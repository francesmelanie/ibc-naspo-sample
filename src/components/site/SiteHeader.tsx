import { useEffect, useState } from "react";
import logoMain from "@/assets/ibc-logo-secondary-light.png";

const navLinks = [
  { label: "Our Core Competencies", href: "https://innovativebc.io/#competencies" },
  { label: "Our Recent Work", href: "https://innovativebc.io/#work" },
  { label: "About Us", href: "https://innovativebc.io/#about" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

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
          <img src={logoMain} alt="Innovative Business Concepts" className="h-9 md:h-12 w-auto" />
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
          className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
