import type { Metadata } from "next";
import HallOfFamePageClient from "@/components/HallOfFamePageClient";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "Cherished memories and milestones from the AURON Forum journey.",
};

export default function HallOfFamePage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/hall-of-fame",
    "Hall of Fame",
    "Cherished memories and milestones from the AURON Forum journey.",
    "hall-of-fame"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HallOfFamePageClient />
    </>
  );
}
