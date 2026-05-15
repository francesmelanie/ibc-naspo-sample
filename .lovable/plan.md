## Plan

Replace the current navbar logo with the new `IBC-Logo-Secondary-Light.png` wordmark and reduce its size, especially on mobile.

### Changes

1. Copy `user-uploads://IBC-Logo-Secondary-Light.png` → `src/assets/ibc-logo-secondary-light.png`.
2. In `src/components/site/SiteHeader.tsx`:
   - Update the import to the new asset.
   - Reduce `<img>` height from `h-16 md:h-20` to roughly `h-9 md:h-12` (this wordmark is wider/shorter, so smaller heights still read well — fits comfortably on a 390px mobile viewport next to the Contact Us pill).
3. Leave the older `ibc-logo-main.png` file in place (not referenced; safe to delete later if desired).

No other components or styles change.
