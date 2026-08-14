import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Forum Journey",
  description: "Walk through the foundational milestones and chronological evolution of the AURON Forum.",
};

export default function TimelinePage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/timeline",
    "Forum Journey",
    "Walk through the foundational milestones and chronological evolution of the AURON Forum.",
    "timeline"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Timeline />
    </>
  );
}
