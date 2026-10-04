"use client";

import Image from "next/image";
import { HALL_OF_FAME_PHOTOS } from "@/data/hallOfFame";

interface LightboxImage {
  src: string;
  title: string;
}

interface HallOfFameProps {
  onImageClick: (index: number, imagesArray: LightboxImage[]) => void;
}

export default function HallOfFame({ onImageClick }: HallOfFameProps) {
  const images: LightboxImage[] = HALL_OF_FAME_PHOTOS.map((photo) => ({
    src: photo.src,
    title: photo.alt,
  }));

  return (
    <section className="section-padding hall-of-fame" id="hall-of-fame">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Our Memories</span>
          <h2 className="section-title">Hall of Fame</h2>
        </div>

        <div className="hall-of-fame-grid reveal-element">
          {HALL_OF_FAME_PHOTOS.map((photo, idx) => (
            <button
              type="button"
              key={photo.id}
              className="hall-of-fame-item"
              aria-label={`Open ${photo.alt} in fullscreen`}
              onClick={() => onImageClick(idx, images)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="hall-of-fame-img"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 280px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
