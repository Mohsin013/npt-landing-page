import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        {/* Logo section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <section>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="/#portfolio"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Work
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <p className="text-muted-foreground">Case Studies (coming soon)</p>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+91-7006009596" className="hover:text-foreground transition-colors">
                  +91-7006009596
                </a>
              </p>
              <p>
                <span className="font-medium">WhatsApp:</span>{' '}
                <a href="https://wa.me/918899990966" className="hover:text-foreground transition-colors">
                  +91-8899990966
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:info@northpeaktechnologies.com" className="hover:text-foreground transition-colors">
                  info@northpeaktechnologies.com
                </a>
              </p>
            </address>
          </section>
          <section>
            <h3 className="font-bold text-foreground mb-4">Social</h3>
            <nav aria-label="Social media links">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576376895470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Facebook</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/northpeaktechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Instagram</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/northpeak-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/company_logo.png"
              alt="NorthPeak Technologies logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <p>
              © {new Date().getFullYear()} NorthPeak Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
