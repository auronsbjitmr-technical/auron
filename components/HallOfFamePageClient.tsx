"use client";

import HallOfFame from "@/components/HallOfFame";

export default function HallOfFamePageClient() {
  const handleImageClick = (index: number, imagesArray: { src: string; title: string }[]) => {
    window.dispatchEvent(
      new CustomEvent("open-lightbox", {
        detail: { index, images: imagesArray },
      })
    );
  };

  return <HallOfFame onImageClick={handleImageClick} />;
}
