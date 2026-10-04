export type EventWing = "technical" | "non-technical" | "hybrid";

export interface EventDetail {
  slug: string;
  title: string;
  category?: string;
  wing?: EventWing;
  date?: string;
  dateISO?: string;
  time?: string;
  venue?: string;
  image?: string;

  /**
   * Manual display order for the Timeline and Events tabs (1 = first).
   * Lower numbers come first; events without an `order` sort last, by date.
   * This OVERRIDES chronological sorting — set it whenever the forum flow
   * differs from the calendar.
   */
  order?: number;

  /**
   * Set to false to keep an event's detail page reachable while hiding it
   * from the Timeline and Events listings.
   */
  listed?: boolean;

  description?: string;
  about?: string;

  registrationDeadline?: string;
  registrationFee?: string;

  eligibility?: string;
  teamSize?: string;

  rules?: string[];

  schedule?: {
    time: string;
    activity: string;
  }[];

  organizers?: string[];

  contact?: {
    name: string;
    phone?: string;
    email?: string;
  }[];

  registrationLink?: string;

  additionalInformation?: string;
}

/**
 * Events are listed in calendar order in this file, but `order` controls what
 * users actually see on the Timeline and Events tabs.
 *
 * `image` is the card/hero artwork. Prefer a real photo from `public/assets`
 * or `public/hall_of_fame`; fall back to the Auron logo when no artwork
 * exists for that event. See AURON_DEFAULT_IMAGE in `data/events.ts`.
 */
export const eventDetails: EventDetail[] = [
  {
    slug: "forum-installation-ceremony",
    order: 2,
    title: "Forum Installation Ceremony",
    category: "CEREMONY",
    wing: "hybrid",
    date: "Jul 25, 2026",
    dateISO: "2026-07-25T18:30:00",
    time: "6:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/hall_of_fame/forum-installation.jpg",
    description:
      "The official installation ceremony of Auron's new forum body. Marks the beginning of a fresh term of leadership, vision, and community building.",
    about:
      "The Forum Installation Ceremony marks the beginning of a new chapter for Auron, the official technical forum of S.B. Jain Institute of Technology, Management and Research. This event formally inducts the new office bearers and sets the tone for the year ahead, filled with innovation, collaboration, and growth.",
  },
  {
    slug: "tug-of-war",
    order: 4,
    title: "Tug of War",
    category: "SPORTS",
    wing: "non-technical",
    date: "Aug 01, 2026",
    dateISO: "2026-08-01T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/tug-of-war.jpg",
    description:
      "A fun and energetic team event that tests strength, teamwork, coordination, and strategy for both girls & boys. Free entry.",
    about:
      "Tug of War is a classic team sport that brings out the best in teamwork, physical strength, and strategy. Open to both girls and boys, this event promises high energy and excitement as teams battle it out in a test of endurance and coordination. No entry fee — just turn up and pull.",
    registrationFee: "Free",
  },
  {
    slug: "ctrl-create-ml",
    order: 5,
    title: "CTRL + CREATE (ML)",
    category: "WORKSHOP",
    wing: "technical",
    date: "Aug 03, 2026",
    dateISO: "2026-08-03T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/canava.png",
    description:
      "Open source on 5 topics (without use of AI). No entry fees. Platform: Canva. Certificate for all.",
    about:
      "CTRL + CREATE is a hands-on workshop designed for ML department students to unleash their creativity using Canva. Participants will work on 5 open-source design topics without the use of AI tools. This workshop encourages originality, design thinking, and practical skills. No entry fees required, and certificates will be provided to all participants.",
    registrationFee: "Free",
    eligibility: "ML Department Students",
    rules: [
      "No use of AI-generated content allowed",
      "All designs must be original work",
      "Platform: Canva",
      "5 topics will be provided during the workshop",
      "Certificate for all participants",
    ],
  },
  {
    slug: "ctrl-create-it",
    order: 6,
    title: "CTRL + CREATE (IT)",
    category: "WORKSHOP",
    wing: "technical",
    date: "Aug 04, 2026",
    dateISO: "2026-08-04T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/canava.png",
    description:
      "Open source on 5 topics (without use of AI). No entry fees. Platform: Canva. Certificate for all.",
    about:
      "CTRL + CREATE is a hands-on workshop designed for IT department students to unleash their creativity using Canva. Participants will work on 5 open-source design topics without the use of AI tools. This workshop encourages originality, design thinking, and practical skills. No entry fees required, and certificates will be provided to all participants.",
    registrationFee: "Free",
    eligibility: "IT Department Students",
    rules: [
      "No use of AI-generated content allowed",
      "All designs must be original work",
      "Platform: Canva",
      "5 topics will be provided during the workshop",
      "Certificate for all participants",
    ],
  },
  {
    slug: "techtank",
    order: 9,
    title: "TechTank",
    category: "COMPETITION",
    wing: "hybrid",
    date: "Aug 22, 2026",
    dateISO: "2026-08-22T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/tech-tank.png",
    description:
      "Come up with your ideas and present them as per your convenience using a PPT. Showcases your speaking skills, confidence, and body language. Certificate provided.",
    about:
      "TechTank is a pitch-style competition inspired by the format of Shark Tank. Participants present their innovative ideas, projects, or startup concepts using a PowerPoint presentation. Judges evaluate entries based on speaking skills, confidence, body language, and the viability of the idea. This event is designed to build presentation skills and entrepreneurial thinking.",
    rules: [
      "Present your idea using a PPT",
      "Evaluation based on speaking skills, confidence, and body language",
      "Certificate provided to all participants",
      "Be original — no plagiarized ideas",
    ],
  },
  {
    slug: "Hacksprint",
    order: 11,
    title: "HackSprint",
    category: "HACKATHON",
    wing: "technical",
    date: "Aug 29, 2026",
    dateISO: "2026-08-29T09:00:00",
    time: "9:00 AM - 5:00 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/hack-sprint.jpg",
    description:
      "Problem statement and evaluation (6 hours). Rs 300 per team (1-3 members).",
    about:
      "The IntraDept Hackathon is an intra-departmental hackathon challenge where teams of 1 to 3 members, have to work on the given problem statement over a span of 6 hours. Teams are evaluated on innovation, technical implementation and feasibility of their solution. This is a great opportunity to collaborate, learn, and build something meaningful under time pressure.",
    // REGISTRATION URL — change ONLY this value per event (any valid https:// link works)
    registrationLink: "https://hacksprint-sigma.vercel.app/",
    registrationFee: "Rs. 300 per team",
    teamSize: "1-3 members",
    rules: [
      "Teams of 1 to 3 members",
      "Problem statement will be revealed at the start of the hackathon",
      "6-hour time limit for development and evaluation",
      "No PPT round will be there",
      "Evaluation based on innovation, implementation, and presentation",
      "Registration fee: Rs. 300 per team",
    ],
  },
  {
    slug: "teachers-day-central-level",
    order: 13,
    title: "Teacher's Day Central Level",
    category: "CEREMONY",
    wing: "hybrid",
    date: "Sep 05, 2026",
    dateISO: "2026-09-05T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/teachers-day.png",
    description:
      "Central level celebration for Teacher's Day across all departments.",
    about:
      "A grand central level celebration honoring teachers across all departments of S.B. Jain Institute of Technology, Management and Research. This event is a tribute to the mentors who shape the future of students through their dedication and knowledge.",
  },
  {
    slug: "git-github-3rd-year",
    order: 10,
    title: "Git, GitHub & Deployment — 3rd Year",
    category: "WORKSHOP",
    wing: "technical",
    date: "Aug 19, 2026",
    dateISO: "2026-08-19T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/git-third-year.png",
    description:
      "A free hands-on session covering Git, GitHub and Vercel — version control, commits, branches, merging, pull requests, and deploying a project live.",
    about:
      "A practical follow-up to the 2nd year Git & GitHub session. Where the first workshop covered how to use Git and GitHub, this one goes all the way through to shipping a project: branches, merging, pull requests, resolving conflicts, and deploying on Vercel so participants leave with a live URL. Free entry, open to all 3rd year students.",
    registrationFee: "Free",
    eligibility: "3rd Year Students",
    rules: [
      "Bring your own laptop with internet access",
      "Free for all participants",
      "Hands-on practical session",
      "Covers Git, GitHub, and deploying on Vercel",
    ],
  },
  {
    slug: "interclg-hackathon",
    order: 12,
    title: "InterClg Hackathon",
    category: "HACKATHON",
    wing: "technical",
    date: "Oct 08, 2026",
    dateISO: "2026-10-08T00:00:00",
    time: "9:00 AM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Problem statement with PPT round (24 hours). Rs 400-600 per team (only 4 members).",
    about:
      "The InterClg Hackathon is an inter-college hackathon challenge spanning 24 hours. Teams of exactly 4 members will work on a given problem statement and present their solution through a PPT round. This event brings together talented developers from multiple colleges to compete, collaborate, and innovate. Teams are evaluated on technical implementation, creativity, presentation, and feasibility.",
    registrationFee: "Rs. 400-600 per team",
    teamSize: "4 members per team",
    rules: [
      "Teams of exactly 4 members",
      "24-hour hackathon duration",
      "Problem statement revealed at the start",
      "PPT round for final evaluation",
      "Registration fee: Rs. 400-600 per team",
      "Open to participants from multiple colleges",
    ],
  },

  // ---------------------------------------------------------------------------
  // Added to match the forum's flow in the Timeline / Events tabs.
  // `date` and `dateISO` must always be updated together.
  // ---------------------------------------------------------------------------
  {
    slug: "flash-mob",
    order: 1,
    title: "Flash Mob",
    category: "FESTIVAL",
    wing: "hybrid",
    date: "Jul 24, 2026",
    dateISO: "2026-07-24T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/hall_of_fame/flash-mob.jpg",
    description:
      "A synchronized flash mob performance by the Culture and Technical wings.",
    about:
      "Auron members came together for a synchronized flash mob performance, with the Culture and Technical wings planning, rehearsing, and performing as one team. What began as practice sessions turned into a high-energy show that brought the whole forum together on stage.",
  },
  {
    slug: "git-github-2nd-year",
    order: 3,
    title: "Git & GitHub — 2nd Year",
    category: "WORKSHOP",
    wing: "technical",
    date: "Jul 29, 2026",
    dateISO: "2026-07-29T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/git-second-year.png",
    description:
      "A free hands-on session for 2nd year students on how to use Git and GitHub — repositories, commits, branches, merging and pull requests.",
    about:
      "An introductory session for 2nd year students who are new to version control. Starting from what Git and GitHub are and why they matter, participants work through creating a repository, cloning it, making commits, branching, merging, and opening pull requests — so they leave comfortable using Git and GitHub day to day. Free entry, open to all 2nd year students.",
    registrationFee: "Free",
    eligibility: "2nd Year Students",
    rules: [
      "Bring your own laptop with internet access",
      "Free for all participants",
      "Hands-on practical session",
      "Covers repositories, commits, branches, merging and pull requests",
    ],
  },
  {
    slug: "alumni-interaction",
    order: 7,
    title: "Alumni Interaction",
    category: "CEREMONY",
    wing: "hybrid",
    date: "Aug 12, 2026",
    dateISO: "2026-08-12T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/alumni-interaction.jpg",
    description:
      "An interaction session with Auron's alumni, alongside the current members.",
    about:
      "Alumni of the forum came back to campus to interact with the current team. The session is a chance to share experiences, swap advice, and keep the Auron network active long after graduation.",
  },
  {
    slug: "viksit-bharat",
    order: 8,
    title: "Viksit Bharat Hackathon",
    category: "HACKATHON",
    wing: "technical",
    date: "Aug 14, 2026",
    dateISO: "2026-08-14T09:00:00",
    time: "9:00 AM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/viksit-bharat.jpeg",
    description:
      "A hackathon where teams build solutions around the Viksit Bharat theme.",
    about:
      "The Viksit Bharat Hackathon brought teams together to build technology aimed at the goals of a developed nation. Ideas ranged from smart agriculture and education tools to civic participation platforms, judged on originality, implementation and the social impact of the final build.",
  },

  // ---------------------------------------------------------------------------
  // Kept reachable at /events/<slug> but hidden from the Timeline / Events
  // listings via `listed: false`. Set `listed: true` (or delete the flag) to
  // bring any of these back into the flow.
  // ---------------------------------------------------------------------------
  {
    slug: "sports-august",
    listed: false,
    title: "Sports",
    category: "SPORTS",
    wing: "non-technical",
    date: "Aug 31, 2026",
    dateISO: "2026-08-31T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Sports activities for 3rd and 5th Semester ML-IT students.",
    about:
      "A day of sports activities designed for 3rd and 5th semester students from both ML and IT departments. This event promotes physical fitness, teamwork, and friendly competition among students. Various sports and activities will be organized throughout the day.",
    eligibility: "3rd and 5th Semester ML & IT Students",
  },
  {
    slug: "career-guidance-seminar",
    listed: false,
    title: "Career Guidance Seminar",
    category: "SEMINAR",
    wing: "technical",
    date: "Sep 01, 2026",
    dateISO: "2026-09-01T11:00:00",
    time: "11:00 AM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Guidance regarding the IT sector.",
    about:
      "This seminar provides valuable insights and guidance regarding career opportunities in the IT sector. Industry-relevant topics will be covered to help students understand career paths, skill requirements, and how to prepare for a successful career in information technology.",
  },
  {
    slug: "sports-september",
    listed: false,
    title: "Sports",
    category: "SPORTS",
    wing: "non-technical",
    date: "Sep 07, 2026",
    dateISO: "2026-09-07T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Sports event conducted for 5th Semester ML students.",
    about:
      "A sports event organized exclusively for 5th semester ML students. This event provides an opportunity for students to engage in physical activities, build team spirit, and enjoy a break from academics.",
    eligibility: "5th Semester ML Students",
  },
  {
    slug: "group-discussion-gd-round",
    listed: false,
    title: "Group Discussion (GD Round + Info)",
    category: "SEMINAR",
    wing: "technical",
    date: "Sep 12, 2026",
    dateISO: "2026-09-12T14:30:00",
    time: "2:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "A short seminar on GD covering its advantages and importance, followed by a discussion round with a maximum of 8 people per team.",
    about:
      "This event begins with an informative seminar on Group Discussions — covering their advantages, importance, and techniques for effective participation. This is followed by a practical GD round where teams of up to 8 members engage in a structured discussion. A great way to build communication and critical thinking skills.",
    teamSize: "Up to 8 members per team",
    rules: [
      "Maximum 8 members per team",
      "Seminar followed by a live GD round",
      "Evaluation based on communication, logic, and team coordination",
    ],
  },
  {
    slug: "debate-competition",
    listed: false,
    title: "Debate Competition",
    category: "COMPETITION",
    wing: "non-technical",
    date: "Sep 12, 2026",
    dateISO: "2026-09-12T14:30:00",
    time: "2:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Debate Competition conducted for 3rd Semester ML & IT students.",
    about:
      "A competitive debate event designed for 3rd semester students from both ML and IT departments. Participants will present arguments on assigned topics, showcasing their oratory skills, critical thinking, and ability to construct persuasive arguments. A platform to build confidence and public speaking abilities.",
    eligibility: "3rd Semester ML & IT Students",
  },
  {
    slug: "exhibition-engineering-day",
    listed: false,
    title: 'Exhibition "Engineering Day"',
    category: "EXHIBITION",
    wing: "hybrid",
    date: "Sep 15, 2026",
    dateISO: "2026-09-15T10:30:00",
    time: "10:30 AM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "You are free to present any project or innovative idea of your choice. During the exhibition, you'll pitch and explain your project to the evaluators, and your performance will be evaluated based on your project and presentation.",
    about:
      "Celebrate Engineering Day by showcasing your projects and innovative ideas at this exhibition. Participants are free to present any project of their choice. Each participant or team will pitch and explain their project to a panel of evaluators. Performance will be assessed based on the quality of the project and the presentation skills demonstrated. This is an excellent opportunity to receive feedback and gain recognition for your work.",
    rules: [
      "Open to present any project or innovative idea",
      "Pitch and explain your project to evaluators",
      "Evaluation based on project quality and presentation",
    ],
  },
  {
    slug: "malhar-pykachu-hunt",
    listed: false,
    title: "Malhar Type Event [+ Pykachu Hunt]",
    category: "FESTIVAL",
    wing: "non-technical",
    date: "Sep 21, 2026",
    dateISO: "2026-09-21T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "All sports, dance, and singing activities. Open to all.",
    about:
      "A vibrant festival-style event featuring a variety of activities including sports, dance, and singing. Inspired by the Malhar festival format, this event also includes a fun Pykachu Hunt activity. Open to all students — a perfect occasion to unwind, perform, and celebrate together.",
    rules: [
      "Open to all students",
      "Includes sports, dance, and singing activities",
      "Pykachu Hunt activity included",
    ],
  },
];

export function getEventDetailBySlug(slug: string): EventDetail | undefined {
  return eventDetails.find((detail) => detail.slug === slug);
}

export function getAllEventDetailSlugs(): string[] {
  return eventDetails.map((detail) => detail.slug);
}