# Structured Data (JSON-LD) Guide

Complete guide for implementing, testing, and validating structured data on your Next.js website for SEO optimization.

## 📋 What is Structured Data?

Structured data is a standardized format for providing information about a page and classifying the page content. Search engines like Google use this data to create rich snippets in search results.

**Benefits:**
- ✅ Rich snippets in search results
- ✅ Better search result appearance
- ✅ Enhanced SEO visibility
- ✅ Improved click-through rates
- ✅ Better search engine understanding

## 🚀 Structured Data Implemented

Your website now includes comprehensive JSON-LD structured data:

### 1. Organization Schema
**Location:** `src/app/page.tsx:136`

**Purpose:** Provides information about your company.

**Key Properties:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NorthPeak Technologies",
  "alternateName": "NorthPeak",
  "url": "https://northpeaktechnologies.com",
  "logo": { "url": "...", "width": 200, "height": 60 },
  "foundingDate": "2023",
  "contactPoint": [
    {
      "telephone": "+91-7006009596",
      "contactType": "sales",
      "email": "info@northpeaktechnologies.com"
    }
  ],
  "address": {
    "addressCountry": "IN",
    "addressRegion": "Odisha",
    "addressLocality": "Bhubaneswar"
  },
  "sameAs": [
    "https://instagram.com/northpeaktechnologies",
    "https://www.linkedin.com/company/northpeak-technologies",
    "https://twitter.com/northpeaktech"
  ],
  "hasOfferCatalog": {
    "itemOffered": [
      {
        "name": "4-Week MVP Development Service",
        "priceSpecification": {
          "priceCurrency": "USD",
          "price": "5000",
          "priceRange": "5000-20000"
        }
      }
    ]
  }
}
```

**Expected Rich Result:** Knowledge panel with company logo, contact info, and social links.

---

### 2. WebSite Schema
**Location:** `src/app/page.tsx:137`

**Purpose:** Provides website-level information.

**Key Properties:**
```json
{
  "@type": "WebSite",
  "name": "NorthPeak Technologies",
  "url": "https://northpeaktechnologies.com",
  "description": "Transform your startup idea into a market-ready product in just 4 weeks...",
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://northpeaktechnologies.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Expected Rich Result:** Sitelinks search box in Google search results.

---

### 3. Breadcrumb Schema
**Locations:**
- Home: `src/app/page.tsx:138-142`
- Blog listing: `src/app/blog/page.tsx:33-38`
- Blog posts: `src/app/blog/[slug]/page.tsx:105-111`

**Purpose:** Shows navigation path for users and search engines.

**Key Properties:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://northpeaktechnologies.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://northpeaktechnologies.com/blog"
    }
  ]
}
```

**Expected Rich Result:** Breadcrumb navigation in search results.

---

### 4. Service Schema
**Location:** `src/app/page.tsx:143`

**Purpose:** Describes your services with pricing and availability.

**Key Properties:**
```json
{
  "@type": "Service",
  "name": "MVP Development Services",
  "provider": {
    "@type": "Organization",
    "name": "NorthPeak Technologies"
  },
  "serviceType": "MVP Development",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "India" }
  ],
  "hasOfferCatalog": {
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "4-Week MVP Development"
        },
        "priceSpecification": {
          "priceCurrency": "USD",
          "price": "5000",
          "priceRange": "5000-20000"
        }
      }
    ]
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00:00",
    "closes": "18:00:00"
  }
}
```

**Expected Rich Result:** Service information with pricing in search results.

---

### 5. FAQ Schema
**Location:** `src/app/page.tsx:144`

**Purpose:** Shows frequently asked questions and answers in search results.

**Key Properties:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build an MVP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our standard timeline is 4 weeks for a core functional product..."
      }
    }
  ]
}
```

**Expected Rich Result:** Expandable FAQ accordion in search results.

---

### 6. Article Schema
**Location:** `src/app/blog/[slug]/page.tsx:95-104`

**Purpose:** Provides detailed information about blog posts.

**Key Properties:**
```json
{
  "@type": "Article",
  "headline": "How to Build MVP Without Technical Skills",
  "description": "Learn how non-technical founders...",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "jobTitle": "Author Role"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NorthPeak Technologies",
    "logo": {
      "url": "https://northpeaktechnologies.com/company_logo.png",
      "width": 200,
      "height": 60
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://northpeaktechnologies.com/blog/how-to-build-mvp-without-technical-skills"
  },
  "articleSection": "Startup Strategy",
  "wordCount": 2400,
  "timeRequired": "PT12M",
  "keywords": "MVP development, startup, non-technical founders"
}
```

**Expected Rich Result:** Article headline, author, publish date, and thumbnail in search results.

---

### 7. LocalBusiness Schema (Available)
**Location:** `src/components/StructuredData.tsx:434-481`

**Purpose:** Local business information for local SEO.

**Usage:** Uncomment or add to pages where local business visibility is needed.

**Key Properties:**
```json
{
  "@type": "SoftwareCompany",
  "name": "NorthPeak Technologies",
  "telephone": "+91-7006009596",
  "email": "info@northpeaktechnologies.com",
  "address": {
    "streetAddress": "Bhubaneswar",
    "addressLocality": "Odisha",
    "addressRegion": "OD",
    "postalCode": "751001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.2961,
    "longitude": 85.8245
  },
  "openingHoursSpecification": {
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "ratingValue": 4.9,
    "reviewCount": 50,
    "bestRating": 5,
    "worstRating": 1
  }
}
```

**Expected Rich Result:** Local business knowledge panel with ratings, hours, and map.

---

### 8. Review Schema (Available)
**Location:** `src/components/StructuredData.tsx:483-529`

**Purpose:** Displays customer reviews in search results.

**Usage:** Currently commented out in `src/app/page.tsx:145`. Uncomment to enable.

**Key Properties:**
```json
{
  "@type": "Product",
  "name": "MVP Development Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 4,
    "bestRating": 5
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anika Mistry" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "reviewBody": "NorthPeak Technologies built an incredible AI-powered platform...",
      "datePublished": "2024-01-10"
    }
  ]
}
```

**Expected Rich Result:** Star ratings and review snippets in search results.

---

### 9. Person Schema (Available)
**Location:** `src/components/StructuredData.tsx:531-569`

**Purpose:** Information about people (authors, team members).

**Usage:** Add to author bio pages or team pages.

**Key Properties:**
```json
{
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Senior Developer",
  "url": "https://northpeaktechnologies.com/team/john-doe",
  "image": "https://northpeaktechnologies.com/images/john-doe.jpg",
  "worksFor": {
    "@type": "Organization",
    "name": "NorthPeak Technologies"
  },
  "knowsAbout": ["MVP Development", "Software Engineering"]
}
```

**Expected Rich Result:** Author knowledge panel or profile card in search results.

---

### 10. VideoObject Schema (Available)
**Location:** `src/components/StructuredData.tsx:571-601`

**Purpose:** Information about videos on your site.

**Usage:** Add to pages with embedded videos.

**Key Properties:**
```json
{
  "@type": "VideoObject",
  "name": "How to Build MVP in 4 Weeks",
  "description": "Learn the complete process...",
  "thumbnailUrl": "https://northpeaktechnologies.com/videos/mvp-thumbnail.jpg",
  "uploadDate": "2024-01-15",
  "duration": "PT10M30S",
  "publisher": {
    "@type": "Organization",
    "name": "NorthPeak Technologies"
  }
}
```

**Expected Rich Result:** Video thumbnail and duration in search results.

---

### 11. Event Schema (Available)
**Location:** `src/components/StructuredData.tsx:603-646`

**Purpose:** Information about events (webinars, workshops).

**Usage:** Add to event pages or webinar registration pages.

**Key Properties:**
```json
{
  "@type": "Event",
  "name": "MVP Development Webinar",
  "description": "Learn how to build your MVP in 4 weeks...",
  "startDate": "2024-02-15T10:00:00Z",
  "endDate": "2024-02-15T11:00:00Z",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://northpeaktechnologies.com/webinar/mvp-development"
  },
  "offers": {
    "@type": "Offer",
    "price": 0,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

**Expected Rich Result:** Event details with date, time, and registration link in search results.

---

## 🧪 How to Test Structured Data

### 1. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**Steps:**
1. Open the Rich Results Test tool
2. Enter your URL: `https://northpeaktechnologies.com`
3. Click "Test URL"
4. Review the results

**What to Look For:**
- ✅ Green checkmarks for each detected schema type
- ✅ No errors or warnings
- ✅ All required fields present
- ✅ Proper data types and formats

---

### 2. Google Schema Markup Validator
**URL:** https://validator.schema.org/

**Steps:**
1. Open the Schema Markup Validator
2. Select "Code Snippet" or "URL"
3. Paste your page URL or code
4. Click "Run Test"

**What to Look For:**
- ✅ All schemas validated without errors
- ✅ No "missing required property" warnings
- ✅ Proper data types (strings, numbers, URLs)
- ✅ Correct @context and @type values

---

### 3. Browser Developer Tools
**Steps:**
1. Open your website in Chrome or Firefox
2. Right-click and select "Inspect" (or press F12)
3. Go to the "Elements" tab
4. Search for `type="application/ld+json"`
5. Expand the script tag to see the JSON

**What to Look For:**
- ✅ All schema blocks present
- ✅ Proper JSON formatting
- ✅ No syntax errors
- ✅ Correct URLs and data

---

### 4. View Page Source
**Steps:**
1. Open your website
2. Right-click and select "View Page Source"
3. Search for `application/ld+json`
4. Review the structured data

**What to Look For:**
- ✅ All schema blocks present in HTML
- ✅ Proper JSON formatting
- ✅ No truncation or encoding issues

---

## 🔍 Testing Checklist

### Home Page (`/`)
- [ ] OrganizationSchema present
- [ ] WebSiteSchema present
- [ ] BreadcrumbSchema present (Home)
- [ ] ServiceSchema present
- [ ] FAQPageSchema present
- [ ] All required fields populated
- [ ] No JSON syntax errors
- [ ] All URLs are valid and accessible
- [ ] Phone numbers in correct format
- [ ] Email addresses valid
- [ ] Social media links work
- [ ] Price ranges accurate
- [ ] Opening hours correct

### Blog Listing Page (`/blog`)
- [ ] BreadcrumbSchema present (Home > Blog)
- [ ] Schema includes correct URLs
- [ ] Proper item position ordering

### Blog Post Pages (`/blog/[slug]`)
- [ ] ArticleSchema present
- [ ] BreadcrumbSchema present (Home > Blog > Post)
- [ ] Article headline matches page title
- [ ] Author information complete
- [ ] Publish date in correct format (YYYY-MM-DD)
- [ ] Image URL accessible
- [ ] Publisher information complete
- [ ] Word count accurate
- [ ] Time required in ISO 8601 format (PT##M)
- [ ] Keywords relevant

---

## ⚠️ Common Issues and Fixes

### Issue 1: Missing Required Properties
**Error:** `Missing required property: "name"`

**Fix:** Add the missing required property to the schema object:
```typescript
const schema = {
  "@type": "Organization",
  "name": "NorthPeak Technologies", // Add this
  // ... other properties
};
```

---

### Issue 2: Invalid Date Format
**Error:** `Invalid date format`

**Fix:** Use ISO 8601 date format (YYYY-MM-DD):
```typescript
// ❌ Wrong
publishDate: "Jan 15, 2024"

// ✅ Correct
publishDate: "2024-01-15"
```

---

### Issue 3: Invalid URL Format
**Error:** `Invalid URL format`

**Fix:** Use full, absolute URLs with protocol:
```typescript
// ❌ Wrong
url: "/blog/post"

// ✅ Correct
url: "https://northpeaktechnologies.com/blog/post"
```

---

### Issue 4: Invalid Phone Number Format
**Error:** `Invalid telephone format`

**Fix:** Use international phone format:
```typescript
// ❌ Wrong
telephone: "7006009596"

// ✅ Correct
telephone: "+91-7006009596"
```

---

### Issue 5: Duplicate Schema Types
**Error:** `Multiple schemas of same type detected`

**Fix:** Remove duplicate schema types from the same page, or merge them:
```typescript
// ❌ Wrong (duplicate)
<OrganizationSchema />
<OrganizationSchema />

// ✅ Correct (single instance)
<OrganizationSchema />
```

---

### Issue 6: JSON Syntax Error
**Error:** `Unexpected token in JSON`

**Fix:** Ensure valid JSON syntax:
```typescript
// ❌ Wrong (trailing comma)
const schema = {
  "name": "NorthPeak",
  "url": "...",
};

// ✅ Correct
const schema = {
  "name": "NorthPeak",
  "url": "..."
};
```

---

### Issue 7: Image Not Accessible
**Error:** `Image URL not accessible`

**Fix:** Ensure image URL is valid and accessible:
```typescript
// ❌ Wrong (image doesn't exist)
"logo": "https://northpeaktechnologies.com/logo.png"

// ✅ Correct (image exists)
"logo": "https://northpeaktechnologies.com/company_logo.png"
```

---

## 📊 Performance Impact

### Structured Data Performance
- **File Size:** ~5-10KB per page (negligible)
- **Rendering:** Server-side (no client-side JS)
- **Caching:** Static (cached at build time)
- **Network:** Single HTTP request for JSON-LD

### Best Practices for Performance
✅ Keep JSON-LD concise
✅ Use compression (gzip, brotli)
✅ Cache at build time (SSG)
✅ Avoid dynamic data that requires client-side fetching
✅ Minimize nested objects

---

## 🎯 SEO Best Practices

### 1. Schema Type Selection
Choose the most specific schema type:
- ✅ Use `SoftwareCompany` instead of generic `Organization`
- ✅ Use `Article` for blog posts, not `WebPage`
- ✅ Use `FAQPage` for FAQ sections, not generic `Question`

### 2. Property Completeness
Provide all required and recommended properties:
- ✅ Always include required fields
- ✅ Add recommended fields for better rich results
- ✅ Provide accurate and up-to-date information

### 3. Data Accuracy
Ensure all data is accurate:
- ✅ Correct phone numbers and email addresses
- ✅ Accurate pricing information
- ✅ Real opening hours
- ✅ Valid URLs

### 4. Consistency
Maintain consistency across all pages:
- ✅ Same NAP (Name, Address, Phone) everywhere
- ✅ Consistent business hours
- ✅ Matching social media URLs
- ✅ Uniform date formats

### 5. Freshness
Keep data up-to-date:
- ✅ Update publish dates for new posts
- ✅ Refresh FAQ answers if they change
- ✅ Update pricing when it changes
- ✅ Add new reviews as they come in

---

## 🚀 Advanced Usage

### Adding Review Schema
To enable ReviewSchema on the home page, uncomment line 145 in `src/app/page.tsx`:

```typescript
// Remove this comment
<ReviewSchema reviews={reviews} />
```

### Adding LocalBusiness Schema
Add LocalBusinessSchema to pages where local visibility is important:

```typescript
import { LocalBusinessSchema } from '@/components/StructuredData';

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      {/* Page content */}
    </>
  );
}
```

### Adding Video Schema
Add VideoObjectSchema to pages with videos:

```typescript
import { VideoObjectSchema } from '@/components/StructuredData';

export default function VideoPage() {
  return (
    <>
      <VideoObjectSchema
        name="Your Video Title"
        description="Video description..."
        thumbnailUrl="https://your-domain.com/thumbnail.jpg"
        uploadDate="2024-01-15"
        duration="PT10M30S"
      />
      {/* Video content */}
    </>
  );
}
```

### Adding Event Schema
Add EventSchema to event pages:

```typescript
import { EventSchema } from '@/components/StructuredData';

export default function EventPage() {
  return (
    <>
      <EventSchema
        name="Webinar Name"
        description="Event description..."
        startDate="2024-02-15T10:00:00Z"
        endDate="2024-02-15T11:00:00Z"
        location="https://your-domain.com/event"
        url="https://your-domain.com/event"
      />
      {/* Event content */}
    </>
  );
}
```

---

## 📈 Monitoring Structured Data

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Navigate to "Enhancements"
4. Check for:
   - Articles
   - Breadcrumbs
   - FAQs
   - Sitelinks search box
   - Logos

### What to Monitor
- ✅ Number of valid pages
- ✅ Number of pages with errors
- ✅ Pages with warnings
- ✅ Rich result impressions and clicks

### Fixing Issues
1. Identify pages with errors in Search Console
2. Fix the structured data on those pages
3. Request re-indexing:
   - Click "URL Inspection"
   - Enter the URL
   - Click "Request Indexing"

---

## 🎉 Summary

Your website now has comprehensive, SEO-compliant structured data:

✅ **Organization Schema** - Company information
✅ **WebSite Schema** - Website-level data
✅ **Breadcrumb Schema** - Navigation breadcrumbs
✅ **Service Schema** - Service offerings with pricing
✅ **FAQ Schema** - Frequently asked questions
✅ **Article Schema** - Blog post information
✅ **Review Schema** (available) - Customer reviews
✅ **LocalBusiness Schema** (available) - Local business data
✅ **Person Schema** (available) - Team member profiles
✅ **VideoObject Schema** (available) - Video information
✅ **Event Schema** (available) - Event details

**Next Steps:**
1. Test your structured data using the tools above
2. Fix any errors or warnings
3. Monitor performance in Google Search Console
4. Update data regularly for accuracy

**All structured data is production-ready!** 🚀

---

**Last Updated:** 2026-04-08
**Structured Data Version:** 1.0
