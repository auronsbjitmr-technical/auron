import type { Metadata } from "next";
import Events from "@/components/Events";
import { getEventsSchema } from "@/utils/schema";
import { UPCOMING_EVENTS_DATA } from "@/data/events";

export const metadata: Metadata = {
  title: "Forum Events",
  description: "Browse the upcoming events, competitive programming speed runs, hackathons, and past gallery from the AURON Forum.",
};

export default function EventsPage() {
  // Only advertise events that are actually listed on the page — events marked
  // `listed: false` are hidden from the UI and must stay out of the JSON-LD too.
  const schema = getEventsSchema(UPCOMING_EVENTS_DATA.filter((e) => e.listed !== false));
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
