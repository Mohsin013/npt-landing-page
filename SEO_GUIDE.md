# SEO Optimization Guide

This document outlines the comprehensive SEO optimizations implemented in your Next.js application.

## ✅ Implemented SEO Features

### 1. Meta Tags & Metadata

#### Root Layout (`src/app/layout.tsx`)
- **Dynamic Title Template**: Uses `%s | NorthPeak Technologies` pattern
- **Optimized Description**: Includes primary keywords "MVP development services", "build MVP fast", "startup MVP"
- **Comprehensive Keywords**: 25+ targeted keywords including:
  - Primary: MVP development services, startup MVP, build MVP fast
  - Secondary: minimum viable product development, rapid MVP development, 4-week MVP
  - Tertiary: startup software company, tech cofounder, non-technical founders, etc.
- **Author & Publisher**: Proper attribution
- **Format Detection**: Disables auto-formatting for phone/email

#### Home Page (`src/app/page.tsx`)
- **SEO-Optimized Title**: "MVP Development Services | Build Your Startup MVP Fast"
- **Targeted Description**: Emphasizes "4 weeks" timeframe and "non-technical founders"
- **Page-Specific Keywords**: Focused on MVP development services
- **Canonical URL**: Proper canonical tag set

### 2. Open Graph Tags (Facebook/LinkedIn)
- **Type**: website
- **Title & Description**: Optimized for social sharing
- **Image**: 1200x630px with alt text
- **Site Name**: NorthPeak Technologies
- **URL**: Dynamic based on page

### 3. Twitter Cards
- **Card Type**: summary_large_image
- **Site & Creator**: @northpeaktech
- **Title & Description**: Optimized for Twitter
- **Image**: 1200x630px with alt text

### 4. Robots Meta
- **Indexing**: Enabled for all pages
- **Following**: Links followed
- **GoogleBot**: Enhanced directives:
  - max-video-preview: -1
  - max-image-preview: large
  - max-snippet: -1
- **Crawl Delay**: 1 second for Googlebot

### 5. Canonical URLs
- Set on all pages
- Points to https://northpeaktechnologies.com
- Prevents duplicate content issues

### 6. Structured Data (JSON-LD)

#### Organization Schema (`src/components/StructuredData.tsx`)
```json
{
  "@type": "Organization",
  "name": "NorthPeak Technologies",
  "url": "https://northpeaktechnologies.com",
  "logo": "...",
  "contactPoint": {...},
  "sameAs": [...]
}
```

#### WebSite Schema
- Search action
- Publisher information
- Description

#### BreadcrumbList Schema
- Navigation breadcrumbs
- Helps with rich snippets

#### Service Schema
- Service offerings (4-Week MVP, Custom Software, AI Solutions, etc.)
- HasOfferCatalog with detailed offerings
- AreaServed: Worldwide

#### FAQPage Schema
- All FAQs marked up
- Question/Answer structure
- Enables rich FAQ snippets in search results

### 7. Sitemap (`src/app/sitemap.ts`)
- **Dynamic Generation**: Built with Next.js Metadata API
- **Priority Levels**:
  - Home: 1.0 (weekly updates)
  - Services: 0.9 (weekly updates)
  - About: 0.8 (monthly updates)
  - Contact: 0.7 (monthly updates)
- **Last Modified**: Automatic timestamp
- **Language Support**: English with alternates
- **Accessible at**: `https://northpeaktechnologies.com/sitemap.xml`

### 8. Robots.txt (`src/app/robots.ts`)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /admin/
Disallow: /.well-known/

User-agent: Googlebot
Crawl-delay: 1
Sitemap: https://northpeaktechnologies.com/sitemap.xml
Host: https://northpeaktechnologies.com
```

### 9. Progressive Web App (PWA) Manifest (`public/manifest.json`)
- App name & short name
- Description
- Start URL
- Display mode: standalone
- Theme color: #6366f1
- Icons for various sizes
- Shortcuts for Contact & Services pages
- Screenshots

### 10. Accessibility & Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Semantic elements (section, article, nav, header, footer)
- ARIA labels and roles
- Alt text for all images
- Skip link support (id="main-content")

## 🎯 Target Keywords

### Primary Keywords
- MVP development services
- startup MVP
- build MVP fast

### Secondary Keywords
- minimum viable product development
- rapid MVP development
- 4-week MVP
- MVP builder
- MVP consulting

### Tertiary Keywords
- startup software company
- tech cofounder
- non-technical founders
- product development company
- SaaS development
- app development for startups
- MVP launch
- startup technology partner
- custom software development
- web application development
- AI solutions
- AI automation
- cloud infrastructure
- mobile app development
- React Native
- Next.js

## 📊 How to Use the SEO Components

### 1. Adding Structured Data to a Page

```tsx
import {
  OrganizationSchema,
  WebSiteSchema,
  BreadcrumbListSchema,
  ServiceSchema,
} from "@/components/StructuredData";

export default function MyPage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema={[
        { name: "Home", item: "https://northpeaktechnologies.com" },
        { name: "Services", item: "https://northpeaktechnologies.com/services" },
      ]} />
      {/* Page content */}
    </>
  );
}
```

### 2. Using the SEO Metadata Generator

```tsx
import { generateMetadata, getAllKeywords } from "@/components/SeoMeta";

export const metadata = generateMetadata({
  title: "Custom Page Title",
  description: "Custom page description",
  keywords: getAllKeywords(),
  canonical: "https://northpeaktechnologies.com/custom-page",
});
```

### 3. Adding FAQ Schema

```tsx
import { FAQPageSchema } from "@/components/StructuredData";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our standard timeline is 4 weeks for a core functional product.",
  },
  // ... more FAQs
];

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      {/* FAQ content */}
    </>
  );
}
```

## 🔧 Configuration

### Update Verification Tokens

In `src/app/layout.tsx`, update the verification tokens:

```typescript
verification: {
  google: "your-google-verification-token",
  yandex: "your-yandex-verification-token",
},
```

### Update Social Media Links

In `src/components/SeoMeta.tsx`:

```typescript
links: {
  twitter: 'https://twitter.com/your-handle',
  instagram: 'https://instagram.com/your-handle',
  linkedin: 'https://linkedin.com/company/your-company',
},
```

### Update Contact Information

In `src/components/SeoMeta.tsx`:

```typescript
contact: {
  phone: '+91-7006009596',
  whatsapp: '+91-8899990966',
  email: 'info@northpeaktechnologies.com',
},
```

## 📈 Monitoring & Analytics

### Google Search Console
1. Verify ownership using the verification token
2. Submit sitemap: `https://northpeaktechnologies.com/sitemap.xml`
3. Monitor crawl stats and index coverage
4. Check for structured data errors

### Google Analytics
Add Google Analytics tracking in `src/app/layout.tsx`:

```tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
></script>
```

## 🚀 Performance Optimization

### Image Optimization
- Use Next.js `Image` component
- Provide alt text for all images
- Use appropriate image formats (WebP, AVIF)

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Caching
- Next.js automatic caching
- Service worker registration (for PWA)
- Cache-Control headers

## 📝 Content Optimization Tips

1. **Header Tags**: Use only one H1 per page, followed by H2, H3
2. **Keyword Density**: Aim for 1-2% keyword density
3. **Content Length**: Target 1000+ words for main pages
4. **Internal Linking**: Link to relevant pages with descriptive anchor text
5. **External Links**: Link to authoritative sources
6. **Mobile-Friendly**: Ensure responsive design
7. **Page Speed**: Optimize images, minify CSS/JS
8. **URL Structure**: Use hyphens, keep URLs short and descriptive

## 🔍 Testing Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Screaming Frog SEO Spider](https://www.screamingfrog.com/seo-spider/)
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)

## 📚 Next Steps

1. ✅ Update verification tokens in `layout.tsx`
2. ✅ Submit sitemap to Google Search Console
3. ✅ Monitor performance in Google Analytics
4. ✅ Test structured data with Google's testing tools
5. ✅ Create content targeting secondary keywords
6. ✅ Build backlinks from authoritative sources
7. ✅ Regularly update content and metadata
8. ✅ Monitor keyword rankings and adjust strategy

## 🎨 Customization

### Adding New Pages to Sitemap

Edit `src/app/sitemap.ts`:

```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
```

### Adding New Keywords

Edit `src/components/SeoMeta.tsx` and update the keyword arrays:

```typescript
SEO_KEYWORDS = {
  primary: ['your primary keyword'],
  secondary: ['your secondary keywords'],
  tertiary: ['your tertiary keywords'],
},
```

---

**Last Updated**: 2026-04-08
**SEO Version**: 2.0
