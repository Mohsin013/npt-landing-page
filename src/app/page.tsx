import { Metadata } from "next";
import FloatingParticles from "@/components/FloatingParticles";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import AIProminence from "@/components/AIProminence";
import ProblemSolution from "@/components/ProblemSolution";
import SolutionSection from "@/components/SolutionSection";
import TimelineSection from "@/components/TimelineSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import {
  OrganizationSchema,
  WebSiteSchema,
  BreadcrumbSchema,
  ServiceSchema,
  FAQPageSchema,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "NorthPeak | MVP Development Services",
  description:
    "Transform your startup idea into a market-ready product in 4 weeks. Expert MVP development for non-technical founders with custom software and AI solutions.",
  keywords: [
    "MVP development services",
    "startup MVP",
    "build MVP fast",
    "minimum viable product development",
    "rapid MVP development",
    "4-week MVP",
    "MVP builder",
    "MVP consulting",
    "startup software company",
    "tech cofounder",
    "non-technical founders",
    "product development company",
    "SaaS development",
    "app development for startups",
    "MVP launch",
    "startup technology partner",
  ],
  openGraph: {
    title: "MVP Development Services | Build Your Startup MVP Fast | NorthPeak",
    description:
      "Transform your startup idea into a market-ready product in 4 weeks. Expert MVP development for non-technical founders with custom software and AI solutions.",
    url: "https://northpeaktechnologies.com",
    type: "website",
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
    title: "MVP Development Services | Build Your Startup MVP Fast | NorthPeak",
    description:
      "Transform your startup idea into a market-ready product in 4 weeks. Expert MVP development for non-technical founders with custom software and AI solutions.",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "NorthPeak Technologies - MVP Development Services & Startup Software Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://northpeaktechnologies.com",
  },
};

export default function HomePage() {
  const faqs = [
    {
      question: "How long does it take to build an MVP?",
      answer: "Our standard timeline is 4 weeks for a core functional product. This includes strategy, UI/UX design, development, and deployment.",
    },
    {
      question: "What tech stack do you use?",
      answer: "We primarily use React, Next.js, Node.js, and Supabase. This modern stack allows us to build fast, scalable, and secure applications quickly.",
    },
    {
      question: "Do you help with deployments and cloud setup?",
      answer: "Yes, we handle the entire deployment process. We'll help you set up your cloud infrastructure on platforms like AWS, Vercel, or Google Cloud.",
    },
    {
      question: "Can you fix or refactor my existing project?",
      answer: "Absolutely. We specialize in project rescue, fixing bugs, improving performance, and refactoring legacy codebases to make them scalable.",
    },
    {
      question: "What happens after the MVP is launched?",
      answer: "We offer ongoing support and scaling options. Once your MVP is live, we can help you iterate based on user feedback and scale your infrastructure.",
    },
  ];

  const reviews = [
    {
      author: "Anika Mistry",
      rating: 5,
      text: "NorthPeak Technologies built an incredible AI-powered platform for us. The system intelligently generates personalized modules and analyzes reports to help autistic and ADHD children improve their emotional skills.",
      date: "2024-01-10",
    },
    {
      author: "Sruti Pujari",
      rating: 5,
      text: "NorthPeak Technologies delivered a complete, scalable solution for our platform. From matching clients with therapists to building both mobile app and PWA with a powerful admin dashboard — everything was executed seamlessly.",
      date: "2024-01-15",
    },
    {
      author: "Azad Arsalan",
      rating: 5,
      text: "NorthPeak Technologies created a high-quality landing page that not only represents our business professionally but also helps us generate consistent leads. The impact was visible almost immediately.",
      date: "2024-01-20",
    },
    {
      author: "Dr. Suhaib Amin",
      rating: 5,
      text: "NorthPeak Technologies delivered a complete solution — website, lead funnel, backend systems, and payment integration — all executed flawlessly. Highly recommended.",
      date: "2024-01-25",
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://northpeaktechnologies.com" },
        ]}
      />
      <ServiceSchema />
      <FAQPageSchema faqs={faqs} />
      {/* <ReviewSchema reviews={reviews} /> */}

      <FloatingParticles />
      <main>
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>
        <TechMarquee />
        <AIProminence />
        <ProblemSolution />
        <SolutionSection />
        <TimelineSection />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
