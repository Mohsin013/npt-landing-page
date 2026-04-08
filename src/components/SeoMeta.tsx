import { Metadata } from 'next';

interface SeoMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  noindex = false,
  nofollow = false,
}: SeoMetaProps): Metadata {
  const baseUrl = 'https://northpeaktechnologies.com';
  const defaultTitle = 'NorthPeak Technologies | MVP Development Services & Startup Software Solutions';
  const defaultDescription =
    'Transform your startup idea into a market-ready product in just 4 weeks. Expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders.';

  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords?.join(', '),
    openGraph: {
      title: ogTitle || title || defaultTitle,
      description: ogDescription || description || defaultDescription,
      url: canonical || baseUrl,
      siteName: 'NorthPeak Technologies',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: ogTitle || title || defaultTitle,
            },
          ]
        : [
            {
              url: '/company_logo.png',
              width: 1200,
              height: 630,
              alt: 'NorthPeak Technologies - MVP Development Services',
            },
          ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle || ogTitle || title || defaultTitle,
      description: twitterDescription || ogDescription || description || defaultDescription,
      images: twitterImage || ogImage || '/company_logo.png',
      creator: '@northpeaktech',
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const SITE_CONFIG = {
  name: 'NorthPeak Technologies',
  description:
    'Transform your startup idea into a market-ready product in just 4 weeks. Expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders.',
  url: 'https://northpeaktechnologies.com',
  ogImage: '/company_logo.png',
  links: {
    twitter: 'https://twitter.com/northpeaktech',
    instagram: 'https://instagram.com/northpeaktechnologies',
    linkedin: 'https://www.linkedin.com/company/northpeaks-teachnologies',
  },
  contact: {
    phone: '+91-7006009596',
    whatsapp: '+91-8899990966',
    email: 'info@northpeaktechnologies.com',
  },
};

export const SEO_KEYWORDS = {
  primary: ['MVP development services', 'startup MVP', 'build MVP fast'],
  secondary: [
    'minimum viable product development',
    'rapid MVP development',
    '4-week MVP',
    'MVP builder',
    'MVP consulting',
  ],
  tertiary: [
    'startup software company',
    'tech cofounder',
    'non-technical founders',
    'product development company',
    'SaaS development',
    'app development for startups',
    'MVP launch',
    'startup technology partner',
    'custom software development',
    'web application development',
    'AI solutions',
    'AI automation',
    'cloud infrastructure',
    'mobile app development',
    'React Native',
    'Next.js',
  ],
};

export function getAllKeywords(): string[] {
  return [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...SEO_KEYWORDS.tertiary];
}
