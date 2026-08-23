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

export const eventDetails: EventDetail[] = [
  {
    slug: "forum-installation-ceremony",
    title: "Forum Installation Ceremony",
    category: "CEREMONY",
    wing: "hybrid",
    date: "Jul 25, 2026",
    dateISO: "2026-07-25T18:30:00",
    time: "6:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "The official installation ceremony of Auron's new forum body. Marks the beginning of a fresh term of leadership, vision, and community building.",
    about:
      "The Forum Installation Ceremony marks the beginning of a new chapter for Auron, the official technical forum of S.B. Jain Institute of Technology, Management and Research. This event formally inducts the new office bearers and sets the tone for the year ahead, filled with innovation, collaboration, and growth.",
  },
  {
    slug: "tug-of-war",
    title: "Tug of War",
    category: "SPORTS",
    wing: "non-technical",
    date: "Aug 01, 2026",
    dateISO: "2026-08-01T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/tugofwar.jpg",
    description:
      "A fun and energetic team event that tests strength, teamwork, coordination, and strategy for both girls & boys.",
    about:
      "Tug of War is a classic team sport that brings out the best in teamwork, physical strength, and strategy. Open to both girls and boys, this event promises high energy and excitement as teams battle it out in a test of endurance and coordination.",
  },
  {
    slug: "ctrl-create-ml",
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
    title: "TechTank",
    category: "COMPETITION",
    wing: "hybrid",
    date: "Aug 22, 2026",
    dateISO: "2026-08-22T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/TechTank.png",
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
    title: "HackSprint",
    category: "HACKATHON",
    wing: "technical",
    date: "Aug 29, 2026",
    dateISO: "2026-08-29T09:00:00",
    time: "9:00 AM - 5:00 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/assets/HackSprint.jpg",
    description:
      "Problem statement and evaluation (6 hours). Rs 300 per team (1-3 members).",
    about:
      "The IntraDept Hackathon is an intra-departmental hackathon challenge where teams of 1 to 3 members, have to work on the given problem statement over a span of 6 hours. Teams are evaluated on innovation, technical implementation and feasibility of their solution. This is a great opportunity to collaborate, learn, and build something meaningful under time pressure.",
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
    slug: "sports-august",
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
    slug: "teachers-day-central-level",
    title: "Teacher's Day Central Level",
    category: "CEREMONY",
    wing: "hybrid",
    date: "Sep 05, 2026",
    dateISO: "2026-09-05T00:00:00",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "Central level celebration for Teacher's Day across all departments.",
    about:
      "A grand central level celebration honoring teachers across all departments of S.B. Jain Institute of Technology, Management and Research. This event is a tribute to the mentors who shape the future of students through their dedication and knowledge.",
  },
  {
    slug: "sports-september",
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
  {
    slug: "git-github-deployment-ml",
    title: "Git & GitHub with Deployment (ML)",
    category: "WORKSHOP",
    wing: "technical",
    date: "Sep 28, 2026",
    dateISO: "2026-09-28T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "A hands-on seminar introducing students to Git and GitHub, covering version control, repository creation, cloning, commits, branches, merging, pull requests, collaboration, conflict resolution, and best practices for managing software projects (Rs 39 per person).",
    about:
      "This hands-on workshop introduces students to the world of version control using Git and GitHub. Topics covered include repository creation, cloning, commits, branches, merging, pull requests, collaboration workflows, conflict resolution, and best practices for managing software projects. Participants will also learn about deploying projects. A practical, project-driven approach ensures real-world applicability.",
    registrationFee: "Rs. 39 per person",
    eligibility: "ML Department Students",
    rules: [
      "Bring your own laptop with internet access",
      "Registration fee: Rs. 39 per person",
      "Hands-on practical session",
      "Covers version control, collaboration, and deployment",
    ],
  },
  {
    slug: "git-github-deployment-it",
    title: "Git & GitHub with Deployment (IT)",
    category: "WORKSHOP",
    wing: "technical",
    date: "Sep 29, 2026",
    dateISO: "2026-09-29T15:30:00",
    time: "3:30 PM",
    venue: "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    image: "/logo/auron.png",
    description:
      "A hands-on seminar introducing students to Git and GitHub, covering version control, repository creation, cloning, commits, branches, merging, pull requests, collaboration, conflict resolution, and best practices for managing software projects (Rs 39 per person).",
    about:
      "This hands-on workshop introduces students to the world of version control using Git and GitHub. Topics covered include repository creation, cloning, commits, branches, merging, pull requests, collaboration workflows, conflict resolution, and best practices for managing software projects. Participants will also learn about deploying projects. A practical, project-driven approach ensures real-world applicability.",
    registrationFee: "Rs. 39 per person",
    eligibility: "IT Department Students",
    rules: [
      "Bring your own laptop with internet access",
      "Registration fee: Rs. 39 per person",
      "Hands-on practical session",
      "Covers version control, collaboration, and deployment",
    ],
  },
  {
    slug: "interclg-hackathon",
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
];

export function getEventDetailBySlug(slug: string): EventDetail | undefined {
  return eventDetails.find((detail) => detail.slug === slug);
}

export function getAllEventDetailSlugs(): string[] {
  return eventDetails.map((detail) => detail.slug);
}
