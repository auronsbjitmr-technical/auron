"use client";

import { HALL_OF_FAME_PHOTOS } from "@/data/hallOfFame";
import Image from "next/image";

interface HallOfFameProps {
  onImageClick: (index: number, imagesArray: { src: string; title: string }[]) => void;
}

export default function HallOfFame({ onImageClick }: HallOfFameProps) {
  const images = HALL_OF_FAME_PHOTOS.map((photo) => ({
    src: photo.src,
    title: photo.alt,
  }));

  const handleCardClick = (index: number) => {
    onImageClick(index, images);
  };

  return (
    <section className="section-padding hall-of-fame" id="hall-of-fame">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Our Memories</span>
          <h2 className="section-title">Hall of Fame</h2>
        </div>

        <div className="hall-of-fame-grid reveal-element">
          {HALL_OF_FAME_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              className="hall-of-fame-item"
              style={{ cursor: "zoom-in" }}
              onClick={() => handleCardClick(idx)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="hall-of-fame-img"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
