import type { Metadata } from "next";
import Committee from "@/components/Committee";
import { getCommitteeSchema } from "@/utils/schema";
import { COMMITTEE_DATA } from "@/data/committee";

export const metadata: Metadata = {
  title: "Executive Committee",
  description: "Meet the executive board, office-bearers, and faculty advisors directing the Technical and Non-Technical Wings of the AURON Forum.",
};

export default function CommitteePage() {
  const schema = getCommitteeSchema(COMMITTEE_DATA);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Committee />
    </>
  );
}
