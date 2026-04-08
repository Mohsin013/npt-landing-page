"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AlertTriangle,
  CheckCircle,
  Code,
  Globe,
  Lightbulb,
  Rocket,
  Zap,
} from "lucide-react";

const problems = [
  {
    icon: Code,
    title: "Legacy code holding you back",
    desc: "Existing projects full of bugs or slow performance? We refactor and rescue failing codebases.",
  },
  {
    icon: Globe,
    title: "Landing pages that don't convert",
    desc: "Your online presence needs to be fast and persuasive. We build high-performance marketing sites.",
  },
  {
    icon: Zap,
    title: "Deployment & Cloud headaches",
    desc: "Struggling with AWS, Vercel, or Docker? We handle your infrastructure and CI/CD pipelines.",
  },
  {
    icon: Rocket,
    title: "Ideas stay stuck without execution",
    desc: "Whether it's a new MVP or a feature update, we help businesses go online and stay online.",
  },
];

const ProblemSolution = () => {
  const ref = useScrollReveal(true);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} aria-labelledby="problem-solution-heading">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full gradient-bg opacity-5 blur-[120px] -translate-y-1/2" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <header className="reveal text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Challenges
          </span>
          <h2 id="problem-solution-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Tech shouldn't be the{" "}
            <span className="gradient-text">bottleneck</span> for your business
            growth.
          </h2>
          <p className="text-muted-foreground">
            From startups to established businesses, we solve the technical
            challenges that keep you from scaling.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problems Column */}
          <section aria-labelledby="common-challenges-heading">
            <h3 id="common-challenges-heading" className="text-lg font-semibold text-muted-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
              Common Challenges
            </h3>
            <div className="space-y-4" role="list" aria-label="Common technical challenges">
              {problems.map((p, i) => (
                <article
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-5 rounded-xl bg-destructive/5 border border-destructive/10 card-hover`}
                  role="listitem"
                >
                  <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <p.icon className="h-5 w-5 text-destructive" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {p.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Solution Column */}
          <section className="reveal reveal-delay-4" aria-labelledby="our-solution-heading">
            <div className="sticky top-8">
              <h3 id="our-solution-heading" className="text-lg font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" aria-hidden="true" />
                Our Solution
              </h3>
              <article className="gradient-border p-8 rounded-2xl bg-accent/5 border-accent/10 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-10 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" aria-hidden="true" />
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                      4-Week MVP
                    </span>
                  </div>
                  <p className="text-foreground font-semibold text-xl mb-4">
                    A Startup Studio for Non-Technical Founders
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We don't just write code. We act as your technical
                    co-founder, guiding you through every step of the product
                    lifecycle.
                  </p>
                  <ol className="space-y-3" aria-label="Development process steps">
                    {[
                      "Idea Validation",
                      "Wireframing & Design",
                      "MVP Development",
                      "Launch & Support",
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-sm text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
