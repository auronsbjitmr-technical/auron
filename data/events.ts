export interface UpcomingEvent {
  id: string;
  title: string;
  category: string;
  wing: 'technical' | 'non-technical' | 'hybrid';
  date: string;
  dateISO: string;
  location: string;
  image: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  category: string;
  wing: 'technical' | 'non-technical' | 'hybrid';
  date: string;
  dateISO: string;
  image: string;
  description: string;
  tag: string;
}

export const UPCOMING_EVENTS_DATA: UpcomingEvent[] = [
  {
    "id": "forum-installation-2026",
    "title": "Forum Installation Ceremony",
    "category": "CEREMONY",
    "wing": "hybrid",
    "date": "Jul 25, 2026",
    "dateISO": "2026-07-25T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "The official installation ceremony of Auron's new forum body. Marks the beginning of a fresh term of leadership, vision, and community building."
  },
  {
    "id": "tug-of-war-2026",
    "title": "Tug of War",
    "category": "SPORTS",
    "wing": "non-technical",
    "date": "Aug 1, 2026",
    "dateISO": "2026-08-01T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/tugofwar.jpg",
    "description": "A fun and energetic team event that tests strength, teamwork, coordination, and strategy for both girls & boys."
  },
  {
    "id": "neural-canva-2026",
    "title": "Neural Canva",
    "category": "COMPETITION",
    "wing": "technical",
    "date": "Aug 3, 2026",
    "dateISO": "2026-08-03T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/canava.jpg",
    "description": "Open source on 5 topics (without used of AI) no entry fees. Platform: Canva (certificate for all)."
  },
  {
    "id": "sbjain-got-latent-2026",
    "title": "SBJain Got Latent",
    "category": "CULTURAL",
    "wing": "non-technical",
    "date": "Aug 3, 2026",
    "dateISO": "2026-08-03T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/latent.jpg",
    "description": "Talent showcase organized by the Core Committee for 5th Semester students."
  },
  {
    "id": "prompt-engineering-2026",
    "title": "Prompt Engineering",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Aug 4, 2026",
    "dateISO": "2026-08-04T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/prompt.jpg",
    "description": "Get detailed knowledge on how to write a prompt and apply it with a practical approach. Certificate for all."
  },
  {
    "id": "pykachu-hunt-2026",
    "title": "Pykachu Hunt",
    "category": "COMPETITION",
    "wing": "technical",
    "date": "Aug 8, 2026",
    "dateISO": "2026-08-08T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/treasure_hunt.png",
    "description": "An interactive campus treasure hunt that moves competitive coding out of the lab. Participants navigate physical campus locations to find hidden QR codes, solving real-time Python puzzles to unlock the next node and complete the challenge."
  },
  {
    "id": "ai-song-spirit-2026",
    "title": "AI Song Spirit",
    "category": "SEMINAR",
    "wing": "hybrid",
    "date": "Aug 17, 2026",
    "dateISO": "2026-08-17T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/ai_music.png",
    "description": "Seminar on AI music generation followed by teams of 4 generating a song in a linked manner based on the seminar."
  },
  {
    "id": "techtank-2026",
    "title": "TechTank",
    "category": "COMPETITION",
    "wing": "hybrid",
    "date": "Aug 22, 2026",
    "dateISO": "2026-08-22T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/techtank.png",
    "description": "Come up with your ideas and present it as per your convenience using PPT. Showcases speaking skills, confidence, and body language. Certificate provided."
  },
  {
    "id": "coding-competition-info-2026",
    "title": "Coding Competition Information Session",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Aug 24, 2026",
    "dateISO": "2026-08-24T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/coding_info.png",
    "description": "Detailed info session on all coding exams like ACM-ICPC, TCS CodeVita, AWS, Google, conducted by Dr. Animesh Tayal."
  },
  {
    "id": "intra-hackathon-2026",
    "title": "Intra-Dept Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Aug 29, 2026",
    "dateISO": "2026-08-29T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/hack.png",
    "description": "Problem statement with PPT round (6 hr). Entry fee: Rs 200 per team (min 2, max 4 members). Conducted with HackWithIndia (HWI)."
  },
  {
    "id": "career-seminar-2026",
    "title": "Career Guidance Seminar",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Sept 1, 2026",
    "dateISO": "2026-09-01T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/ai_symposium.png",
    "description": "Guidance regarding the IT Sector, career pathways, and industry insights conducted by HackWithIndia (HWI)."
  },
  {
    "id": "teachers-day-2026",
    "title": "Teacher's Day Central Level",
    "category": "CEREMONY",
    "wing": "hybrid",
    "date": "Sept 5, 2026",
    "dateISO": "2026-09-05T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/teachers_day.png",
    "description": "Central level celebration honoring faculties across all departments."
  },
  {
    "id": "group-discussion-2026",
    "title": "Group Discussion (GD Round + Info)",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Sept 12, 2026",
    "dateISO": "2026-09-12T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/gd.png",
    "description": "A short seminar on GD covering advantages and importance, followed by a practical discussion round with a maximum of 8 people per team."
  },
  {
    "id": "debate-competition-2026",
    "title": "Debate Competition",
    "category": "COMPETITION",
    "wing": "non-technical",
    "date": "Sept 12, 2026",
    "dateISO": "2026-09-12T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/debate.png",
    "description": "Non-technical debate competition testing public speaking, critical thinking, and argumentative skills."
  },
  {
    "id": "engineering-day-exhibition-2026",
    "title": "Exhibition 'Engineering Day'",
    "category": "EXHIBITION",
    "wing": "hybrid",
    "date": "Sept 15, 2026",
    "dateISO": "2026-09-15T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/exhibition.png",
    "description": "Present any project or innovative idea of your choice. Pitch and explain your project to evaluators; performance is evaluated based on project quality and presentation."
  },
  {
    "id": "malhar-event-2026",
    "title": "Malhar Type Event",
    "category": "CULTURAL",
    "wing": "non-technical",
    "date": "Sept 21, 2026",
    "dateISO": "2026-09-21T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/malhar.png",
    "description": "Cultural event open to all students featuring sports, dance, singing, and open mic activities."
  },
  {
    "id": "git-github-deployment-2026",
    "title": "Git & GitHub with Deployment",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Sept 28, 2026",
    "dateISO": "2026-09-28T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/git_github.png",
    "description": "A hands-on seminar introducing students to Git and GitHub, covering version control, repository creation, cloning, commits, branches, merging, pull requests, collaboration, conflict resolution, and deployment practices (Rs 39 per person)."
  },
  {
    "id": "inter-hackathon-2026",
    "title": "Inter-College Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Oct 8, 2026",
    "dateISO": "2026-10-08T18:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/hackathon.png",
    "description": "Problem statement with PPT round (24 hr). Entry fee: Rs 400-600 per team (only 4 members). Conducted with HackWithIndia (HWI) for students all over Maharashtra."
  }
];

export const PAST_EVENTS_DATA: PastEvent[] = [
  // {
  //   "id": "forum-installation-2026",
  //   "title": "Forum Installation Ceremony",
  //   "category": "CEREMONY",
  //   "wing": "non-technical",
  //   "date": "Jul 25, 2026",
  //   "dateISO": "2026-07-25T18:30:00",
  //   "image": "/logo/auron.png",
  //   "description": "The official installation ceremony of Auron's new forum body. Marks the beginning of a fresh term of leadership, vision, and community building.",
  //   "tag": "INSTALLATION"
  // }
];

export interface EventClassification {
  featured: UpcomingEvent | null;
  upcoming: UpcomingEvent[];
  past: UpcomingEvent[];
}

export function classifyEvents(): EventClassification {
  const now = new Date();
  const sorted = [...UPCOMING_EVENTS_DATA].sort(
    (a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime()
  );

  const past: UpcomingEvent[] = [];
  const future: UpcomingEvent[] = [];

  for (const event of sorted) {
    const cutoff = new Date(event.dateISO).getTime();
    if (now.getTime() >= cutoff) {
      past.push(event);
    } else {
      future.push(event);
    }
  }

  return {
    featured: future[0] ?? null,
    upcoming: future.slice(1),
    past,
  };
}
