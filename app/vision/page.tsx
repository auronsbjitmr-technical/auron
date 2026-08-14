import type { Metadata } from "next";
import VisionMission from "@/components/VisionMission";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Learn about the mission, values, and vision driving the Technical & Non-Technical Wings of the AURON Forum.",
};

export default function VisionPage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/vision",
    "Vision & Mission",
    "Learn about the mission, values, and vision driving the Technical & Non-Technical Wings of the AURON Forum.",
    "vision"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <VisionMission />
    </>
  );
}
