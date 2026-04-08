import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Layout from "@/components/Layout";

// Optimized font loading with display: swap for performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "NorthPeak Technologies",
    template: "%s | NorthPeak Technologies",
  },
  description:
    "Transform your startup idea into a market-ready product in just 4 weeks. NorthPeak Technologies provides expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders. Build MVP fast with our proven process.",
  icons: {
    icon: "/company_logo.png",
    apple: "/company_logo.png",
  },
  manifest: "/manifest.json",
  keywords: [
    "MVP development services",
    "startup MVP",
    "build MVP fast",
    "custom software development",
    "4-week MVP",
    "web application development",
    "AI solutions",
    "AI automation",
    "cloud infrastructure",
    "NorthPeak Technologies",
    "MVP builder",
    "startup software company",
    "mobile app development",
    "React Native",
    "Next.js",
    "non-technical founders",
    "startup studio",
    "minimum viable product development",
    "rapid MVP development",
    "MVP consulting",
    "software for startups",
    "tech cofounder",
    "product development company",
    "SaaS development",
    "app development for startups",
    "MVP launch",
    "startup technology partner",
  ],
  authors: [{ name: "NorthPeak Technologies", url: "https://northpeaktechnologies.com" }],
  creator: "NorthPeak Technologies",
  publisher: "NorthPeak Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://northpeaktechnologies.com"),
  alternates: {
    canonical: "https://northpeaktechnologies.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://northpeaktechnologies.com",
    title: "NorthPeak Technologies | MVP Development Services & Startup Software Solutions",
    description:
      "Transform your startup idea into a market-ready product in just 4 weeks. Expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders. Build MVP fast with our proven process.",
    siteName: "NorthPeak Technologies",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "NorthPeak Technologies - MVP Development Services & Startup Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@northpeaktech",
    creator: "@northpeaktech",
    title: "NorthPeak Technologies | MVP Development Services & Startup Software Solutions",
    description:
      "Transform your startup idea into a market-ready product in just 4 weeks. Expert MVP development services, custom software, AI solutions, and cloud infrastructure for non-technical founders. Build MVP fast with our proven process.",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "NorthPeak Technologies - MVP Development Services & Startup Software Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/company_logo.png" />
        <link rel="apple-touch-icon" href="/company_logo.png" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://northpeaktechnologies.com" />

        {/* DNS Prefetch for potential navigation targets */}
        <link rel="dns-prefetch" href="https://instagram.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://twitter.com" />

        {/* Performance Monitoring - Uncomment and add your analytics ID */}
        {/* <script
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
        /> */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        {/* Performance Monitoring Script - Web Vitals */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Report Web Vitals
                function reportWebVitals({ name, value, id }) {
                  // Replace with your analytics tracking
                  // e.g., gtag('event', name, { value: Math.round(name === 'CLS' ? value * 1000 : value), event_id: id });
                  console.log('Web Vital:', name, value);
                }

                // Core Web Vitals
                if ('PerformanceObserver' in window) {
                  const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                      switch (entry.entryType) {
                        case 'largest-contentful-paint':
                          reportWebVitals({ name: 'LCP', value: entry.startTime, id: entry.id });
                          break;
                        case 'first-input':
                          reportWebVitals({ name: 'FID', value: entry.processingStart - entry.startTime, id: entry.id });
                          break;
                        case 'layout-shift':
                          if (!entry.hadRecentInput) {
                            if (!window.clsValue) window.clsValue = 0;
                            window.clsValue += entry.value;
                            reportWebVitals({ name: 'CLS', value: window.clsValue, id: entry.id });
                          }
                          break;
                      }
                    });
                  });

                  observer.observe({ type: 'largest-contentful-paint', buffered: true });
                  observer.observe({ type: 'first-input', buffered: true });
                  observer.observe({ type: 'layout-shift', buffered: true });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
