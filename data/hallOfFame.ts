export interface HallOfFamePhoto {
  id: string;
  src: string;
  alt: string;
  /** Slugs from `data/eventDetails.ts` — a photo can belong to several events. */
  eventIds?: string[];
}

export interface HallOfFameEvent {
  id: string;
  title: string;
  photos: HallOfFamePhoto[];
}

/**
 * Photos are grouped by event purely to fix the display order on
 * /hall-of-fame — the array order below IS that order, do not reverse it.
 * The grid renders one flat run of photos with no per-event headers, so
 * `title` is only documentation. `eventIds` links a photo to event pages.
 */
export const HALL_OF_FAME_EVENTS: HallOfFameEvent[] = [
  {
    id: "csi-hackathon",
    title: "CSI Hackathon",
    photos: [
      {
        id: "csi-hackathon-1",
        src: "/hall_of_fame/csi-hack-1.jpeg",
        alt: "CSI Hackathon Hyderabad Chapter",
      },
      {
        id: "csi-hackathon-2",
        src: "/hall_of_fame/csi-hack-2.jpeg",
        alt: "CSI Hackathon Hyderabad Chapter Winners",
      },
    ],
  },
  {
    id: "flash-mob",
    title: "Flash Mob",
    photos: [
      { id: "flash-mob-1", src: "/hall_of_fame/flash-mob.jpg", alt: "Flash Mob Performance", eventIds: ["flash-mob"] },
      { id: "flash-mob-2", src: "/hall_of_fame/flash-mob-2.jpg", alt: "Flash Mob Performance", eventIds: ["flash-mob"] },
      {
        id: "flash-mob-3",
        src: "/hall_of_fame/flash-mob-culture-wing.jpg",
        alt: "Flash Mob — Culture Wing",
        eventIds: ["flash-mob"],
      },
      {
        id: "flash-mob-4",
        src: "/hall_of_fame/flash-mob-technical-wing.jpg",
        alt: "Flash Mob — Technical Wing",
        eventIds: ["flash-mob"],
      },
      { id: "flash-mob-5", src: "/hall_of_fame/flash-mob-group.jpg", alt: "Flash Mob Group Photo", eventIds: ["flash-mob"] },
    ],
  },
  {
    id: "forum-installation",
    title: "Forum Installation",
    photos: [
      {
        id: "forum-installation-1",
        src: "/hall_of_fame/forum-installation.jpg",
        alt: "Forum Installation Ceremony",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-2",
        src: "/hall_of_fame/forum-installation-2.jpg",
        alt: "Forum Installation Ceremony",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-3",
        src: "/hall_of_fame/forum-installation-3.jpg",
        alt: "Forum Installation Ceremony",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-4",
        src: "/hall_of_fame/forum-installation-forum-members-1.jpg",
        alt: "Forum Installation — Forum Members",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-5",
        src: "/hall_of_fame/forum-installation-badge-ceremony-1.jpg",
        alt: "Forum Installation — Badge Ceremony",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-6",
        src: "/hall_of_fame/forum-installation-badge-ceremony-2.jpg",
        alt: "Forum Installation — Badge Ceremony",
        eventIds: ["forum-installation-ceremony"],
      },
      {
        id: "forum-installation-7",
        src: "/hall_of_fame/forum-installation-former-president.jpg",
        alt: "Forum Installation — Former President",
        eventIds: ["forum-installation-ceremony"],
      },
    ],
  },
  {
    id: "tug-of-war",
    title: "Tug of War",
    photos: [
      {
        id: "tug-of-war-1",
        src: "/hall_of_fame/tug-of-war-1.webp",
        alt: "Tug of War",
        eventIds: ["tug-of-war"],
      },
      {
        id: "tug-of-war-2",
        src: "/hall_of_fame/tug-of-war-2.webp",
        alt: "Tug of War",
        eventIds: ["tug-of-war"],
      },
      {
        id: "tug-of-war-3",
        src: "/hall_of_fame/tug-of-war-3.jpg",
        alt: "Tug of War",
        eventIds: ["tug-of-war"],
      },
      {
        id: "tug-of-war-4",
        src: "/hall_of_fame/tug-of-war-4.jpg",
        alt: "Tug of War",
        eventIds: ["tug-of-war"],
      },
    ],
  },
  {
    id: "git-github-2nd-year",
    title: "Git & GitHub — 2nd Year",
    photos: [
      {
        id: "git-github-2nd-year-1",
        src: "/hall_of_fame/git-github-2nd-year.jpg",
        alt: "Git & GitHub with Deployment — 2nd Year",
        eventIds: ["git-github-2nd-year"],
      },
    ],
  },
  {
    id: "ctrl-create",
    title: "Ctrl + Create",
    photos: [
      {
        id: "ctrl-create-1",
        src: "/hall_of_fame/ctrl-create-1.jpg",
        alt: "Ctrl + Create — Canva Workshop",
        eventIds: ["ctrl-create-ml", "ctrl-create-it"],
      },
      {
        id: "ctrl-create-2",
        src: "/hall_of_fame/ctrl-create-2.jpg",
        alt: "Ctrl + Create — Canva Workshop",
        eventIds: ["ctrl-create-ml", "ctrl-create-it"],
      },
      {
        id: "ctrl-create-3",
        src: "/hall_of_fame/ctrl-create-3.jpg",
        alt: "Ctrl + Create — Canva Workshop",
        eventIds: ["ctrl-create-ml", "ctrl-create-it"],
      },
      {
        id: "ctrl-create-4",
        src: "/hall_of_fame/ctrl-create-4.jpg",
        alt: "Ctrl + Create — Canva Workshop",
        eventIds: ["ctrl-create-ml", "ctrl-create-it"],
      },
    ],
  },
  {
    id: "alumni-interaction",
    title: "Alumni Interaction",
    photos: [
      { id: "alumni-interaction-1", src: "/hall_of_fame/interaction.jpg", alt: "Alumni Interaction", eventIds: ["alumni-interaction"] },
      { id: "alumni-interaction-2", src: "/hall_of_fame/interaction-2.jpg", alt: "Alumni Interaction", eventIds: ["alumni-interaction"] },
      { id: "alumni-interaction-3", src: "/hall_of_fame/interaction-3.jpg", alt: "Alumni Interaction", eventIds: ["alumni-interaction"] },
    ],
  },
  {
    id: "viksit-bharat",
    title: "Viksit Bharat",
    photos: [
      { id: "viksit-bharat-1", src: "/hall_of_fame/viksit-bharat.jpg", alt: "Viksit Bharat", eventIds: ["viksit-bharat"] },
      { id: "viksit-bharat-2", src: "/hall_of_fame/viksit-bharat-2.jpg", alt: "Viksit Bharat", eventIds: ["viksit-bharat"] },
      { id: "viksit-bharat-3", src: "/hall_of_fame/viksit-bharat-3.jpg", alt: "Viksit Bharat", eventIds: ["viksit-bharat"] },
      { id: "viksit-bharat-4", src: "/hall_of_fame/viksit-bharat-4.jpg", alt: "Viksit Bharat", eventIds: ["viksit-bharat"] },
      { id: "viksit-bharat-5", src: "/hall_of_fame/viksit-bharat-5.jpg", alt: "Viksit Bharat", eventIds: ["viksit-bharat"] },
    ],
  },
  {
    id: "techtank",
    title: "Tech Tank",
    photos: [
      { id: "techtank-1", src: "/hall_of_fame/techtank.jpg", alt: "Tech Tank", eventIds: ["techtank"] },
      {
        id: "techtank-2",
        src: "/hall_of_fame/techtank-judges.jpg",
        alt: "Tech Tank — Judges",
        eventIds: ["techtank"],
      },
      {
        id: "techtank-3",
        src: "/hall_of_fame/techtank-lamp-lighting.jpg",
        alt: "Tech Tank — Lamp Lighting",
        eventIds: ["techtank"],
      },
      {
        id: "techtank-4",
        src: "/hall_of_fame/techtank-winner.jpg",
        alt: "Tech Tank — Winner",
        eventIds: ["techtank"],
      },
      {
        id: "techtank-5",
        src: "/hall_of_fame/techtank-runner-up.jpg",
        alt: "Tech Tank — Runner Up",
        eventIds: ["techtank"],
      },
    ],
  },
  {
    id: "git-github",
    title: "Git & GitHub",
    photos: [
      {
        id: "git-github-1",
        src: "/hall_of_fame/git-github.jpg",
        alt: "Git & GitHub with Deployment",
        eventIds: ["git-github-3rd-year"],
      },
      {
        id: "git-github-2",
        src: "/hall_of_fame/git-github-2.jpg",
        alt: "Git & GitHub with Deployment",
        eventIds: ["git-github-3rd-year"],
      },
      {
        id: "git-github-3",
        src: "/hall_of_fame/git-github-3.jpg",
        alt: "Git & GitHub with Deployment",
        eventIds: ["git-github-3rd-year"],
      },
      {
        id: "git-github-4",
        src: "/hall_of_fame/git-github-4.jpg",
        alt: "Git & GitHub with Deployment",
        eventIds: ["git-github-3rd-year"],
      },
    ],
  },
  {
    id: "hacksprint",
    title: "HackSprint",
    photos: [
      { id: "hacksprint-1", src: "/hall_of_fame/hacksprint.jpg", alt: "HackSprint", eventIds: ["Hacksprint"] },
      {
        id: "hacksprint-2",
        src: "/hall_of_fame/hacksprint-judges-committee.jpg",
        alt: "HackSprint — Judges & Committee",
        eventIds: ["Hacksprint"],
      },
      {
        id: "hacksprint-3",
        src: "/hall_of_fame/hacksprint-2.jpg",
        alt: "HackSprint — Participants",
        eventIds: ["Hacksprint"],
      },
      {
        id: "hacksprint-4",
        src: "/hall_of_fame/hacksprint-3.jpg",
        alt: "HackSprint — Participants",
        eventIds: ["Hacksprint"],
      },
      {
        id: "hacksprint-5",
        src: "/hall_of_fame/hacksprint-winner.jpg",
        alt: "HackSprint — Winner",
        eventIds: ["Hacksprint"],
      },
      {
        id: "hacksprint-6",
        src: "/hall_of_fame/hacksprint-runner-up.jpg",
        alt: "HackSprint — Runner Up",
        eventIds: ["Hacksprint"],
      },
    ],
  },
  {
    id: "teachers-day",
    title: "Teacher's Day",
    photos: [
      {
        id: "teachers-day-1",
        src: "/hall_of_fame/teachers-day.jpg",
        alt: "Teacher's Day Celebration",
        eventIds: ["teachers-day-central-level"],
      },
      {
        id: "teachers-day-2",
        src: "/hall_of_fame/teachers-day-dance.jpg",
        alt: "Teacher's Day — Dance",
        eventIds: ["teachers-day-central-level"],
      },
      {
        id: "teachers-day-3",
        src: "/hall_of_fame/teachers-day-games.jpg",
        alt: "Teacher's Day — Games",
        eventIds: ["teachers-day-central-level"],
      },
      {
        id: "teachers-day-4",
        src: "/hall_of_fame/teachers-day-guess-the-movie.jpg",
        alt: "Teacher's Day — Guess The Movie",
        eventIds: ["teachers-day-central-level"],
      },
    ],
  },
];

/** Flat list of every photo, in display order. */
export const HALL_OF_FAME_PHOTOS: HallOfFamePhoto[] = HALL_OF_FAME_EVENTS.flatMap(
  (event) => event.photos
);