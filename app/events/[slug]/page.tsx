import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventDetailBySlug, getAllEventDetailSlugs } from "@/data/eventDetails";
import { getEventDetailSchema } from "@/utils/schema";
import EventDetails from "@/components/EventDetails";

export function generateStaticParams() {
  return getAllEventDetailSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventDetailBySlug(slug);
  if (!event) return {};

  return {
    title: `${event.title} | AURON Forum`,
    description: event.description,
    openGraph: {
      title: `${event.title} | AURON Forum`,
      description: event.description,
      images: event.image
        ? [{ url: event.image, width: 1200, height: 630, alt: event.title }]
        : [],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventDetailBySlug(slug);

  if (!event) {
    notFound();
  }

  const schema = getEventDetailSchema(event);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EventDetails event={event} />
    </>
  );
}
