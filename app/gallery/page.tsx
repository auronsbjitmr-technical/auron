import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Browse photographs and highlights from past hackathons, ideathons, and seminars organized by the AURON Forum.",
};

export default function GalleryPage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/gallery",
    "Media Gallery",
    "Browse photographs and highlights from past hackathons, ideathons, and seminars organized by the AURON Forum.",
    "gallery"
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GalleryPageClient />
    </>
  );
}
