import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact NorthPeak to build your project. Call +91-7006009596 or email info@northpeaktechnologies.com. We help build your vision.",
  openGraph: {
    title: "Contact Us | NorthPeak",
    description:
      "Contact NorthPeak to build your project. Call +91-7006009596 or email info@northpeaktechnologies.com.",
    url: "https://northpeaktechnologies.com/contact",
  },
  twitter: {
    title: "Contact Us | NorthPeak",
    description:
      "Contact NorthPeak to build your project. Call +91-7006009596 or email info@northpeaktechnologies.com.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
