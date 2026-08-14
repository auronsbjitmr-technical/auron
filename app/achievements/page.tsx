import type { Metadata } from "next";
import Achievements from "@/components/Achievements";
import Alumni from "@/components/Alumni";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Achievements & Recognition",
  description: "Celebrate our Smart India Hackathon trophies, elite ACM ICPC regionals rank, and success placements of our graduates.",
};

export default function AchievementsPage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/achievements",
    "Achievements & Recognition",
    "Celebrate our Smart India Hackathon trophies, elite ACM ICPC regionals rank, and success placements of our graduates.",
    "achievements"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Achievements />
      <Alumni />
    </>
  );
}
