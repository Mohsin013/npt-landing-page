"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Work", path: "/#portfolio", external: true },
  { label: "About", path: "/about" },
  // { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#portfolio") {
      // Small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        const element = document.getElementById("portfolio");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (window.location.pathname === "/" && !window.location.hash) {
      // Scroll to top when on home page without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="NorthPeak Technologies home">
          <Image
            src="/company_logo.png"
            alt="NorthPeak Technologies logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">NorthPeak</span>{" "}
            <span className="text-foreground">Technologies</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {navItems.map((item) =>
            item.external ? (
              <li key={item.label} role="none">
                <button
                  onClick={() => router.push("/#portfolio")}
                  className={`text-sm font-medium transition-colors hover:text-foreground text-muted-foreground bg-transparent border-0 cursor-pointer`}
                  role="menuitem"
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={item.label} role="none">
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
          <li role="none">
            <Link href="/contact" role="menuitem">
              <Button className="gradient-bg text-primary-foreground hover:opacity-90 rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden glass border-t border-border px-6 pb-6 pt-2 space-y-4">
          <ul role="menu">
            {navItems.map((item) =>
              item.external ? (
                <li key={item.label} role="none">
                  <button
                    onClick={() => {
                      router.push("/#portfolio");
                      setOpen(false);
                    }}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 cursor-pointer w-full text-left"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.label} role="none">
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li role="none">
              <Link href="/contact" onClick={() => setOpen(false)} role="menuitem">
                <Button className="gradient-bg text-primary-foreground w-full rounded-full">
                  Get Started
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
