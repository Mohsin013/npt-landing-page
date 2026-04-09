import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet NorthPeak founders. 5+ years in software engineering, AI systems, and cloud technologies. We build your startup vision.",
  openGraph: {
    title: "About Us | NorthPeak",
    description:
      "Meet NorthPeak founders. 5+ years in software engineering, AI systems, and cloud technologies. We build your startup vision.",
    url: "https://northpeaktechnologies.com/about",
  },
  twitter: {
    title: "About Us | NorthPeak",
    description:
      "Meet NorthPeak founders. 5+ years in software engineering, AI systems, and cloud technologies. We build your startup vision.",
  },
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          About <span className="gradient-text">NorthPeak Technologies</span>
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            NorthPeak Technologies was founded with a simple goal — to help
            businesses turn ideas into real, scalable products.
          </p>
          <p>
            With strong expertise in modern web development, AI, and cloud
            technologies, we focus on delivering solutions that are not just
            functional, but production-ready.
          </p>
          <p>
            We believe in ownership, clarity, and building long-term
            partnerships with our clients.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-16 flex flex-col gap-6">
          {/* Founder 1 */}
          <div className="gradient-border p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="h-24 w-24 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
                <Image
                  src="/assets/mohsin.jpeg"
                  alt="Mohsin Iqbal"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Mohsin Iqbal</h2>
                <p className="text-primary font-medium mb-4">Software Engineer & Founder</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• 5+ years of experience in full-stack and AI systems</li>
                  <li>• Built scalable applications including proctoring systems and AI tools</li>
                  <li>• Strong expertise in React, Node.js, AWS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="gradient-border p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="h-24 w-24 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
                <Image
                  src="/assets/aamir.jpeg"
                  alt="Aamir Farooq"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Aamir Farooq</h2>
                <p className="text-primary font-medium mb-4">Software Engineer & Founder</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• 5+ years of experience in web and mobile development</li>
                  <li>• Built cross-platform applications with React Native and Flutter</li>
                  <li>• Strong expertise in Next.js, TypeScript, Cloud services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
