import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AURON Forum. Send us a message or find answers to frequently asked questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
