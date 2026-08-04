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
    "date": "Aug 01, 2026",
    "dateISO": "2026-08-01T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/tugofwar.jpg",
    "description": "A fun and energetic team event that tests strength, teamwork, coordination, and strategy for both girls & boys."
  },
  {
    "id": "ctrl-create-ml-2026",
    "title": "CTRL + CREATE (ML)",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Aug 03, 2026",
    "dateISO": "2026-08-03T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/canava.png",
    "description": "Open source on 5 topics (without use of AI). No entry fees. Platform: Canva. Certificate for all."
  },
  {
    "id": "ctrl-create-it-2026",
    "title": "CTRL + CREATE (IT)",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Aug 04, 2026",
    "dateISO": "2026-08-04T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/canava.png",
    "description": "Open source on 5 topics (without use of AI). No entry fees. Platform: Canva. Certificate for all."
  },
  {
    "id": "prompt-engineering-2026",
    "title": "Prompt Engineering",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Aug 08, 2026",
    "dateISO": "2026-08-08T14:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Get detailed knowledge on how to write a prompt and apply it with a practical approach. Certificate for all."
  },
  {
    "id": "ai-song-spirit-ml-2026",
    "title": "AI Song Spirit (ML)",
    "category": "SEMINAR",
    "wing": "hybrid",
    "date": "Aug 17, 2026",
    "dateISO": "2026-08-17T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/aisong.png",
    "description": "Seminar on AI music generation, followed by teams of 4 generating a song in a linked manner based on the seminar."
  },
  {
    "id": "ai-song-spirit-it-2026",
    "title": "AI Song Spirit (IT)",
    "category": "SEMINAR",
    "wing": "hybrid",
    "date": "Aug 18, 2026",
    "dateISO": "2026-08-18T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/assets/aisong.png",
    "description": "Seminar on AI music generation, followed by teams of 4 generating a song in a linked manner based on the seminar."
  },
  {
    "id": "techtank-2026",
    "title": "TechTank",
    "category": "COMPETITION",
    "wing": "hybrid",
    "date": "Aug 22, 2026",
    "dateISO": "2026-08-22T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Come up with your ideas and present them as per your convenience using a PPT. Showcases your speaking skills, confidence, and body language. Certificate provided."
  },
  {
    "id": "coding-competition-info-ml-2026",
    "title": "Coding Competition Information (ML)",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Aug 24, 2026",
    "dateISO": "2026-08-24T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Detailed information on all coding exams like ACM-ICPC, TCS CodeVita, AWS, and Google."
  },
  {
    "id": "coding-competition-info-it-2026",
    "title": "Coding Competition Information (IT)",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Aug 25, 2026",
    "dateISO": "2026-08-25T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Detailed information on all coding exams like ACM-ICPC, TCS CodeVita, AWS, and Google."
  },
  {
    "id": "intradept-hackathon-2026",
    "title": "IntraDept Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Aug 29, 2026",
    "dateISO": "2026-08-29T09:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Problem statement and evaluation (5 hours). Rs 300 per team (1-3 members)."
  },
  {
    "id": "sports-august-2026",
    "title": "Sports",
    "category": "SPORTS",
    "wing": "non-technical",
    "date": "Aug 31, 2026",
    "dateISO": "2026-08-31T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Sports activities for 3rd and 5th Semester ML-IT students."
  },
  {
    "id": "carrer-guidance-seminar-2026",
    "title": "Career Guidance Seminar",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Sep 01, 2026",
    "dateISO": "2026-09-01T11:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Guidance regarding the IT sector."
  },
  {
    "id": "teachers-day-central-level-2026",
    "title": "Teacher's Day Central Level",
    "category": "CEREMONY",
    "wing": "hybrid",
    "date": "Sep 05, 2026",
    "dateISO": "2026-09-05T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Central level celebration for Teacher's Day across all departments."
  },
  {
    "id": "sports-september-2026",
    "title": "Sports",
    "category": "SPORTS",
    "wing": "non-technical",
    "date": "Sep 07, 2026",
    "dateISO": "2026-09-07T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Sports event conducted for 5th Semester ML students."
  },
  {
    "id": "group-discussion-gd-round-info-2026",
    "title": "Group Discussion (GD Round + Info)",
    "category": "SEMINAR",
    "wing": "technical",
    "date": "Sep 12, 2026",
    "dateISO": "2026-09-12T14:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "A short seminar on GD covering its advantages and importance, followed by a discussion round with a maximum of 8 people per team."
  },
  {
    "id": "debate-competition-2026",
    "title": "Debate Competition",
    "category": "COMPETITION",
    "wing": "non-technical",
    "date": "Sep 12, 2026",
    "dateISO": "2026-09-12T14:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Debate Competition conducted for 3rd Semester ML & IT students."
  },
  {
    "id": "exhibition-engineering-day-2026",
    "title": "Exhibition \"Engineering Day\"",
    "category": "EXHIBITION",
    "wing": "hybrid",
    "date": "Sep 15, 2026",
    "dateISO": "2026-09-15T10:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "You are free to present any project or innovative idea of your choice. During the exhibition, you'll pitch and explain your project to the evaluators, and your performance will be evaluated based on your project and presentation."
  },
  {
    "id": "malhar-type-event-pykachu-hunt-2026",
    "title": "Malhar Type Event [+ Pykachu Hunt]",
    "category": "FESTIVAL",
    "wing": "non-technical",
    "date": "Sep 21, 2026",
    "dateISO": "2026-09-21T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "All sports, dance, and singing activities. Open to all."
  },
  {
    "id": "git-github-with-deployment-ml-2026",
    "title": "Git & GitHub with Deployment (ML)",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Sep 28, 2026",
    "dateISO": "2026-09-28T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "A hands-on seminar introducing students to Git and GitHub, covering version control, repository creation, cloning, commits, branches, merging, pull requests, collaboration, conflict resolution, and best practices for managing software projects (Rs 39 per person)."
  },
  {
    "id": "git-github-with-deployment-it-2026",
    "title": "Git & GitHub with Deployment (IT)",
    "category": "WORKSHOP",
    "wing": "technical",
    "date": "Sep 29, 2026",
    "dateISO": "2026-09-29T15:30:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "A hands-on seminar introducing students to Git and GitHub, covering version control, repository creation, cloning, commits, branches, merging, pull requests, collaboration, conflict resolution, and best practices for managing software projects (Rs 39 per person)."
  },
  {
    "id": "interclg-hackathon-2026",
    "title": "InterClg Hackathon",
    "category": "HACKATHON",
    "wing": "technical",
    "date": "Oct 08, 2026",
    "dateISO": "2026-10-08T00:00:00",
    "location": "S.B. Jain Institute of Technology, Management and Research, Nagpur",
    "image": "/logo/auron.png",
    "description": "Problem statement with PPT round (24 hours). Rs 400-600 per team (only 4 members)."
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
