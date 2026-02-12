# Sysovo Theme

Next.js 15 IT services website. Two versions in this repo:

## sysovo-main (Full Theme)

Complete theme with all pages and demo variants.

```
sysovo-main/
├── src/app/
│   ├── page.js              # Homepage (home-one)
│   ├── sysovo.css            # Custom homepage styles
│   ├── (demos)/              # 4 homepage variants (index-two to five)
│   └── (inner)/              # 40 inner pages
│       ├── service/          # Services main
│       ├── about/            # About page
│       ├── blog-grid/        # Blog grid + detail
│       ├── contact/          # Contact page
│       ├── case-studies/     # Case studies
│       ├── career/           # Career pages
│       ├── team/             # Team pages
│       └── ...               # Industry, legal, faq, etc.
├── src/components/           # All shared components
├── src/data/                 # Posts.json (blog data)
└── public/assets/            # Images, fonts, icons
```

## final live (Production V1)

Stripped-down version for launch. Clean nav, clean footer, only essential pages.

```
final live/
├── src/app/
│   ├── page.js              # Homepage
│   └── (inner)/
│       ├── service/          # Services main
│       ├── ai-learning-service/
│       ├── cyber-security-service/
│       ├── development-service/
│       ├── it-consulting-service/
│       ├── management-service/
│       ├── blog-grid/        # Blog grid + [slug] detail
│       ├── contact/          # Contact page
│       ├── terms-of-use/     # Terms & Conditions
│       └── privacy-policy/   # Privacy Policy
├── src/components/           # Shared components (simplified nav/footer)
├── src/data/                 # Posts.json (blog data)
└── public/assets/            # Images, fonts, icons
```

## Setup

```bash
cd "final live"   # or cd sysovo-main
npm install
npm run dev
```
