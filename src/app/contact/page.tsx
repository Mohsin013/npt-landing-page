import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NorthPeak Technologies. Tell us about your project and we'll help you build it. Call us at +91-7006009596 or email info@northpeaktechnologies.com",
  openGraph: {
    title: "Contact Us | NorthPeak Technologies",
    description:
      "Get in touch with NorthPeak Technologies. Tell us about your project and we'll help you build it.",
    url: "https://northpeaktechnologies.com/contact",
  },
  twitter: {
    title: "Contact Us | NorthPeak Technologies",
    description:
      "Get in touch with NorthPeak Technologies. Tell us about your project and we'll help you build it.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
