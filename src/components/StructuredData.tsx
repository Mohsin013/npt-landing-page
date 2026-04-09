interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NorthPeak Technologies",
    alternateName: "NorthPeak",
    url: "https://northpeaktechnologies.com",
    logo: {
      "@type": "ImageObject",
      url: "https://northpeaktechnologies.com/company_logo.png",
      width: 200,
      height: 60,
      caption: "NorthPeak Technologies Logo",
    },
    description:
      "NorthPeak Technologies is a premier software development company specializing in MVP development services for non-technical founders and startups. We transform startup ideas into market-ready products in just 4 weeks.",
    foundingDate: "2023",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7006009596",
        contactType: "sales",
        email: "info@northpeaktechnologies.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8899990966",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Odisha",
      addressLocality: "Bhubaneswar",
    },
    sameAs: [
      "https://instagram.com/northpeaktechnologies",
      "https://www.linkedin.com/company/northpeak-technologies",
      "https://twitter.com/northpeaktech",
    ],
    socialMediaPosting: [
      {
        "@type": "BlogPosting",
        headline: "MVP Development Insights",
        url: "https://northpeaktechnologies.com/blog",
      },
    ],
    knowsAbout: [
      "MVP Development",
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "AI Solutions",
      "Cloud Infrastructure",
      "Startup Consulting",
      "Product Development",
    ],
    areaServed: ["Worldwide"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemOffered: [
        {
          "@type": "Offer",
          name: "4-Week MVP Development Service",
          description: "Transform your startup idea into a market-ready product in just 4 weeks",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "5000",
            priceRange: "5000-20000",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  return <StructuredData data={schema} />;
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NorthPeak Technologies",
    alternateName: "NorthPeak",
    url: "https://northpeaktechnologies.com",
    description:
      "Transform your startup idea into a market-ready product in just 4 weeks. Expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders.",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://northpeaktechnologies.com/company_logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://northpeaktechnologies.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData data={schema} />;
}

export function BreadcrumbListSchema(items: { name: string; item: string }[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return <StructuredData data={schema} />;
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MVP Development Services",
    description:
      "Expert MVP development services to transform your startup idea into a market-ready product in just 4 weeks. We provide custom software, AI solutions, and cloud infrastructure for non-technical founders and startups worldwide.",
    provider: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
      logo: "https://northpeaktechnologies.com/company_logo.png",
    },
    serviceType: "MVP Development",
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "4-Week MVP Development",
            description:
              "Transform your startup idea into a market-ready product in just 4 weeks with our proven MVP development process. Includes strategy, design, development, testing, and deployment.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "5000",
            priceRange: "5000-20000",
            validFrom: "2024-01-01",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Build scalable, production-ready software solutions tailored to your business needs. From web applications to enterprise systems.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "10000",
            priceRange: "10000-50000",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions & Automation",
            description:
              "Integrate powerful AI and automation into your products. Custom LLM integrations, automated content generation, intelligent chatbots, and AI-driven analytics.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "8000",
            priceRange: "8000-30000",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Infrastructure & DevOps",
            description:
              "Handle your infrastructure and CI/CD pipelines with expert deployment support. AWS, Vercel, Google Cloud, Docker, and Kubernetes.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "5000",
            priceRange: "5000-25000",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native iOS and Android apps using Flutter or React Native. Cross-platform development with native performance.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "12000",
            priceRange: "12000-50000",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "High-performance web applications built with Next.js, React, and modern technologies. Fast, scalable, and SEO-friendly.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "8000",
            priceRange: "8000-40000",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Stunning, user-centric designs that convert visitors into customers. Wireframing, prototyping, and high-fidelity designs.",
            image: "https://northpeaktechnologies.com/company_logo.png",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "3000",
            priceRange: "3000-15000",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00:00",
      closes: "18:00:00",
    },
    termsOfService: "https://northpeaktechnologies.com/terms",
  };

  return <StructuredData data={schema} />;
}

export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

export function ArticleSchema({
  title,
  description,
  author,
  publishDate,
  image,
  url,
  category,
  readTime,
}: {
  title: string;
  description: string;
  author: { name: string; role: string };
  publishDate: string;
  image?: string;
  url: string;
  category: string;
  readTime: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
          width: 1200,
          height: 630,
          caption: title,
        }
      : undefined,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: "https://northpeaktechnologies.com",
    },
    publisher: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://northpeaktechnologies.com/company_logo.png",
        width: 200,
        height: 60,
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: category,
    wordCount: Math.round(parseInt(readTime) * 200), // Approximate: 200 words per minute
    timeRequired: `PT${parseInt(readTime)}M`,
    keywords: "MVP development, startup, non-technical founders, software development",
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  return <StructuredData data={schema} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: "NorthPeak Technologies",
    description:
      "Premier software development company specializing in MVP development services for startups and non-technical founders. Build your product in just 4 weeks.",
    url: "https://northpeaktechnologies.com",
    telephone: "+91-7006009596",
    email: "info@northpeaktechnologies.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhubaneswar",
      addressLocality: "Odisha",
      addressRegion: "OD",
      postalCode: "751001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.2961,
      longitude: 85.8245,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 50,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return <StructuredData data={schema} />;
}

export function ReviewSchema({
  reviews,
}: {
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MVP Development Services",
    image: "https://northpeaktechnologies.com/company_logo.png",
    description:
      "Expert MVP development services to transform your startup idea into a market-ready product in just 4 weeks.",
    brand: {
      "@type": "Brand",
      name: "NorthPeak Technologies",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  };

  return <StructuredData data={schema} />;
}

export function PersonSchema({
  name,
  role,
  image,
  url,
}: {
  name: string;
  role: string;
  image?: string;
  url?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: role,
    url: url || "https://northpeaktechnologies.com",
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
          caption: name,
        }
      : undefined,
    worksFor: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
    },
    knowsAbout: [
      "MVP Development",
      "Software Engineering",
      "Product Development",
      "Startup Consulting",
    ],
  };

  return <StructuredData data={schema} />;
}

export function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601 duration, e.g., "PT10M30S"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    publisher: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
      logo: "https://northpeaktechnologies.com/company_logo.png",
    },
  };

  return <StructuredData data={schema} />;
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: url,
    },
    organizer: {
      "@type": "Organization",
      name: "NorthPeak Technologies",
      url: "https://northpeaktechnologies.com",
    },
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: url,
    },
  };

  return <StructuredData data={schema} />;
}
