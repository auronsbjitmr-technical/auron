import { eventDetails, type EventDetail } from "@/data/eventDetails";

/** Shown whenever an event has no artwork of its own. */
export const AURON_DEFAULT_IMAGE = "/logo/auron.png";

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
  /** Manual display order from `eventDetails.ts`; undefined = sort last by date. */
  order?: number;
  /** false = hidden from the Timeline / Events listings. */
  listed?: boolean;
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
    image: event.image || AURON_DEFAULT_IMAGE,
    description: event.description ?? "",
    order: event.order,
    listed: event.listed,
  })
);

export const PAST_EVENTS_DATA: PastEvent[] = [];

export interface EventClassification {
  featured: UpcomingEvent | null;
  upcoming: UpcomingEvent[];
  past: UpcomingEvent[];
}

/**
 * Display order for the Timeline / Events listings: explicit `order` first
 * (ascending), then anything unordered by date. Events with `listed: false`
 * are excluded — their detail pages stay reachable via getEventBySlug().
 */
export function sortEventsForDisplay(events: UpcomingEvent[]): UpcomingEvent[] {
  return [...events].sort((a, b) => {
    const aOrder = a.order ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.order ?? Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime();
  });
}

export function classifyEvents(): EventClassification {
  const now = new Date();
  const sorted = sortEventsForDisplay(
    UPCOMING_EVENTS_DATA.filter((event) => event.listed !== false)
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
