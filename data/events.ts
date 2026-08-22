import { eventDetails, type EventDetail } from "@/data/eventDetails";

export interface UpcomingEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  wing: "technical" | "non-technical" | "hybrid";
  date: string;
  dateISO: string;
  time?: string;
  location: string;
  image: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  category: string;
  wing: "technical" | "non-technical" | "hybrid";
  date: string;
  dateISO: string;
  image: string;
  description: string;
  tag: string;
}

export const UPCOMING_EVENTS_DATA: UpcomingEvent[] = eventDetails.map(
  (event: EventDetail) => ({
    id: event.slug,
    slug: event.slug,
    title: event.title,
    category: event.category ?? "",
    wing: event.wing ?? "hybrid",
    date: event.date ?? "",
    dateISO: event.dateISO ?? "",
    time: event.time,
    location: event.venue ?? "",
    image: event.image ?? "/logo/auron.png",
    description: event.description ?? "",
  })
);

export const PAST_EVENTS_DATA: PastEvent[] = [];

export interface EventClassification {
  featured: UpcomingEvent | null;
  upcoming: UpcomingEvent[];
  past: UpcomingEvent[];
}

export function classifyEvents(): EventClassification {
  const now = new Date();
  const sorted = [...UPCOMING_EVENTS_DATA].sort(
    (a, b) =>
      new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime()
  );

  const past: UpcomingEvent[] = [];
  const future: UpcomingEvent[] = [];

  for (const event of sorted) {
    const cutoff = new Date(event.dateISO).getTime();
    if (now.getTime() >= cutoff) {
      past.push(event);
    } else {
      future.push(event);
    }
  }

  return {
    featured: future[0] ?? null,
    upcoming: future.slice(1),
    past,
  };
}

export function getEventBySlug(slug: string): UpcomingEvent | undefined {
  return UPCOMING_EVENTS_DATA.find((event) => event.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return UPCOMING_EVENTS_DATA.map((event) => event.slug);
}
