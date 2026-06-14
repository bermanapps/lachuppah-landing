@AGENTS.md

# LaChupah Landing Page — Project Summary

## Repository & Deployment
- **GitHub:** https://github.com/bermanapps/lachuppah-landing
- **Deployed on:** Vercel (connected to GitHub)
- **Auto-deploy:** Every push to `main` triggers an automatic Vercel redeploy. No manual deploy step needed.
- **Production domain:** https://lachuppah.app (purchased from Namecheap, pointed to Vercel)
- **Admin portal:** https://admin.lachuppah.app

## App Store Links
- **Google Play:** https://play.google.com/store/apps/details?id=com.lachupa.lachupah
- **App Store (iOS):** https://apps.apple.com/app/id6762863228
- Both links are saved in `app/page.tsx` inside the `content` object (both `en` and `he` sections).
- As of June 2026, both store listings return 404 (not yet live). Buttons show "Launching Soon" text — update the `appStore.above` / `googlePlay.above` copy in the `content` object once the listings go live.
- **Do not change** the Android package name `com.lachupa.lachupah` or the iOS app ID `id6762863228`.

## Tech Stack
- Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript
- Bilingual: English + Hebrew with RTL support — toggle in the header
- Heebo font for Hebrew text (loaded via `next/font/google`)
- All page content lives in `app/page.tsx` inside the `content = { en: {...}, he: {...} }` object

## Key Files
- `app/page.tsx` — entire landing page (client component, bilingual)
- `app/layout.tsx` — fonts (Geist + Heebo) and metadata
- `app/globals.css` — Tailwind import, RTL font rule
- `public/lachuppah-logo.png` — app logo
- `public/images/` — 7 background/section photos

## Design
- Warm, frum, modest, professional
- Palette: navy `#1E3A5F`, gold `#C9923F`, cream `#FDFAF6`, WhatsApp green `#054D44`
- No testimonials (removed — would be fake)
