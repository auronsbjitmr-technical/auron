import Link from "next/link";

export default function EventNotFound() {
  return (
    <div className="event-not-found">
      <h1 className="event-not-found-title">Event Not Found</h1>
      <p className="event-not-found-desc">
        The event you are looking for does not exist or may have been removed.
      </p>
      <Link href="/events#events-showcase" className="event-not-found-btn">
        Back to Upcoming Events
      </Link>
    </div>
  );
}
