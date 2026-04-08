"use client";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import Lazy3DScene from "./Lazy3DScene";

const CTASection = () => {
  const ref = useScrollReveal(true);
  const { isMobile } = useDeviceDetection();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} aria-labelledby="cta-heading">
      {/* 3D Scene Background - Optimized lazy loading - only on desktop */}
      {!isMobile && (
        <Lazy3DScene
          component={() => import("./CTAScene")}
          fallback={null}
        />
      )}

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] gradient-bg opacity-10 blur-[120px] rounded-full" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10 reveal">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left div - Contact Info */}
          <section className="flex-1 gradient-border p-12 md:p-16 rounded-3xl relative overflow-hidden" aria-labelledby="contact-options-heading">
            <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
            <div className="relative">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something{" "}
                <span className="gradient-text">Amazing Together</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md">
                Book a free consultation and get expert guidance on your project.
              </p>
              <div className="flex flex-wrap gap-4" role="list" aria-label="Contact options">
                <a href="tel:+917006009596" role="listitem">
                  <Button
                    size="lg"
                    className="gradient-bg text-primary-foreground rounded-full px-8 hover:opacity-90 h-14 text-base shadow-lg shadow-primary/20"
                  >
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" /> +91-7006009596
                  </Button>
                </a>
                <a
                  href="https://wa.me/91889999096"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-border text-foreground hover:bg-muted h-14 text-base"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" /> WhatsApp
                  </Button>
                </a>
                <a href="mailto:info@northpeaktechnologies.com" role="listitem">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-border text-foreground hover:bg-muted h-14 text-base"
                  >
                    <Mail className="mr-2 h-5 w-5" aria-hidden="true" /> Email
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Right div - Quick Contact */}
          <section className="flex-1 gradient-border p-12 md:p-16 rounded-3xl relative overflow-hidden" aria-labelledby="get-started-heading">
            <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
            <div className="relative h-full flex flex-col justify-center">
              <h2 id="get-started-heading" className="text-2xl md:text-3xl font-bold mb-6">
                Get Started <span className="gradient-text">Today</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your business? Let's discuss how we can help.
              </p>
              <nav aria-label="Quick actions">
                <ul className="space-y-4" role="list">
                  <li role="listitem">
                    <a
                      href="/contact"
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 group"
                    >
                      <span className="font-medium">Schedule a Call</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </a>
                  </li>
                  <li role="listitem">
                    <a
                      href="/contact"
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 group"
                    >
                      <span className="font-medium">Request a Quote</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </a>
                  </li>
                  <li role="listitem">
                    <a
                      href="/#portfolio"
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 group"
                    >
                      <span className="font-medium">View Our Work</span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
