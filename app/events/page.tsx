import type { Metadata } from "next";
import Events from "@/components/Events";
import { getEventsSchema } from "@/utils/schema";
import { UPCOMING_EVENTS_DATA } from "@/data/events";

export const metadata: Metadata = {
  title: "Forum Events",
  description: "Browse the upcoming events, competitive programming speed runs, hackathons, and past gallery from the AURON Forum.",
};

export default function EventsPage() {
  const schema = getEventsSchema(UPCOMING_EVENTS_DATA);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Events />
    </>
  );
}
