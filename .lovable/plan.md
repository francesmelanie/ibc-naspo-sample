
## Goal

Build the **Public Sector & Cooperative Contracting** landing page for Innovative Business Concepts (IBC), styled to match innovativebc.io (light, clean, blue→purple wave, Sora headings, soft gradients), plus a downloadable one-page capability statement PDF. Per the handoff doc, no NASPO branding or contract claims.

## Scope

**Route:** `/public-sector-cooperative-contracting` (TanStack Start file route). Index `/` will redirect to it for now (this app is a single-purpose prototype — not the full IBC site).

**Header/footer:** Recreate a lightweight version of the innovativebc.io header (IBC wordmark left, nav links, purple "Contact Us" pill button) and a simple matching footer. Note in handoff that production should swap to the real CMS header/footer.

**Sections** (per handoff):
1. Hero — eyebrow, headline, subhead, two CTAs, 4 credibility stat cards, faint wave accent
2. Who We Serve — 7 audience cards w/ icons
3. Public-Sector Capability Areas — 8-card grid
4. Why IBC ("When Execution Matters More Than Plans") — split layout, 4 supporting cards
5. Procurement Readiness — checklist grid, safe non-NASPO language
6. Experience Highlights — 5 highlight cards
7. Supplier Diversity & Partner Network — copy + cert badge row (placeholders w/ TBD note)
8. Capability Statement CTA — download button → PDF in `/public`
9. Contact — Janki Patel card + inquiry form (mailto fallback for prototype)

**One-pager PDF:** Generated server-side via the `pdf` skill (reportlab) and saved to `public/ibc-public-sector-capability-statement.pdf` so the download button serves it directly. Layout per handoff §"ONE-PAGER LAYOUT": header, positioning, capabilities (2-col), procurement readiness checklist, experience, stat cards, procurement info (NAICS/NIGP marked TBD), contact. US Letter, light blue/purple wash, Sora-style headings.

## Design System

Set up in `src/styles.css` — replace the default oklch tokens with IBC brand tokens (converted to oklch):

- `--ibc-purple #743bbc`, `--ibc-cyan #00afe8`, `--ibc-denim #407fb5`, `--ibc-navy #1b1e3c`, `--ibc-soft-gray #e5e8ed`, `--ibc-light-blue #d4e5f6`, `--ibc-page-bg #f7f9fc`
- Map to semantic tokens: `--primary` = IBC purple, `--accent` = IBC cyan, `--background` = page bg, `--card` = white, etc.
- Gradient utilities: `--gradient-brand` (purple → cyan), `--gradient-wash` (light blue → pale purple)
- Soft shadow tokens for rounded cards
- **Fonts:** Import Sora (headings) + Inter (body fallback for Aptos) via Google Fonts in `__root.tsx` head
- Decorative IBC wave SVG component used at low opacity behind hero and select sections (`aria-hidden`)

## Motion

`framer-motion` (`motion`) for restrained reveals: fade-up sections, staggered card grids, gentle card hover lift. Respect `prefers-reduced-motion` via global CSS.

## Files to create

```
src/routes/index.tsx                           → redirect to /public-sector-cooperative-contracting
src/routes/public-sector-cooperative-contracting.tsx  → page route w/ SEO head()
src/components/site/SiteHeader.tsx
src/components/site/SiteFooter.tsx
src/components/site/WaveAccent.tsx             → faint background SVG
src/components/sections/PublicSectorHero.tsx
src/components/sections/WhoWeServe.tsx
src/components/sections/CapabilityAreas.tsx
src/components/sections/WhyIBC.tsx
src/components/sections/ProcurementReadiness.tsx
src/components/sections/ExperienceHighlights.tsx
src/components/sections/SupplierDiversity.tsx
src/components/sections/CapabilityStatementCTA.tsx
src/components/sections/ContactSection.tsx
src/data/publicSectorContent.ts                → all copy blocks from handoff
src/lib/motion.ts                              → fadeUp, staggerContainer variants
src/styles.css                                 → updated brand tokens + Sora/Inter
src/routes/__root.tsx                          → add font links + updated <title>/meta
public/ibc-public-sector-capability-statement.pdf  → generated one-pager
```

## Technical Notes

- Use Lucide icons (already idiomatic in template) instead of Phosphor — visually equivalent, no extra dep needed
- `framer-motion` will be added via `bun add framer-motion`
- Form is prototype-only: client-side validation + mailto fallback to `janki@innovativebc.io`. No backend / Lovable Cloud needed unless you want real form delivery
- Cert badge row uses text placeholders ("M/WBE", "WBENC", "SBA WOSB", "NYC MWBE") with a small TBD note — handoff explicitly says don't ship real badges without leadership confirmation
- One-pager PDF is generated once via a /tmp script (reportlab) and committed to `/public`; visual QA via pdftoppm before finalizing

## SEO

- `<title>`: "Public Sector & Cooperative Contracting | Innovative Business Concepts"
- Meta description from handoff
- og:title / og:description / og:type=website
- Single H1 (hero headline), proper H2/H3 cascade

## Out of scope

- Real backend form submission (mailto only)
- Real cert badge images (placeholders w/ TBD)
- NAICS/NIGP codes in PDF (TBD per handoff)
- Rebuilding the rest of innovativebc.io — this is a single dedicated landing page
