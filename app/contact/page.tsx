import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import { getContactSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AURON Forum. Send us a message or find answers to frequently asked questions.",
};

export default function ContactPage() {
  const schema = getContactSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPageClient />
    </>
  );
}
