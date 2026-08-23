export interface HallOfFamePhoto {
  id: string;
  src: string;
  alt: string;
  eventId?: string;
}

export const HALL_OF_FAME_PHOTOS: HallOfFamePhoto[] = [
  { id: "1", src: "/hall_of_fame/CSI_Hack_1.jpeg", alt: "CSI Hackathon Hyderabad Chapter" },
  { id: "2", src: "/hall_of_fame/CSI_hack_2.jpeg", alt: "CSI Hackathon Hyderabad Chapter Winners" },
  { id: "3", src: "/hall_of_fame/ff_1.JPG", alt: "Technical Forum Members" },
  { id: "4", src: "/hall_of_fame/ff_2.jpg", alt: "Technical + Non - Technical Forum Members" },
  { id: "5", src: "/hall_of_fame/ff_3.jpg", alt: "Flash Mob Group" },
  { id: "6", src: "/hall_of_fame/ff_4.jpg", alt: "Banner Reveal" },
  {
    id: "8",
    src: "/hall_of_fame/fi_1.jpg",
    alt: "Forum Installation",
    eventId: "forum-installation-ceremony",
  },
  {
    id: "9",
    src: "/hall_of_fame/fi_3 (1).jpg",
    alt: "Head Of The Department",
    eventId: "forum-installation-ceremony",
  },
  {
    id: "10",
    src: "/hall_of_fame/tg_1.webp",
    alt: "Tug of war",
    eventId: "tug-of-war",
  },
  {
    id: "11",
    src: "/hall_of_fame/tg_2.webp",
    alt: "Tug of war",
    eventId: "tug-of-war",
  },
];
