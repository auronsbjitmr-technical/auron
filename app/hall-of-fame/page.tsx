import type { Metadata } from "next";
import HallOfFamePageClient from "@/components/HallOfFamePageClient";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "Cherished memories and milestones from the AURON Forum journey.",
};

export default function HallOfFamePage() {
  return <HallOfFamePageClient />;
}
