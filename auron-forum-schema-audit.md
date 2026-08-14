# Technical SEO & Schema.org Audit — auron-iota.vercel.app

**Site type identified:** AURON Forum is the official AI/ML & IT student technical community of **S.B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur** — a college club/society site (events, committee, certificates, FAQs), not an e‑commerce or professional-services business.

**A note on methodology:** page fetching in this environment renders extracted content and `<head>` metadata but does not expose raw `<script>` source. I could clearly see robust `<meta>`/Open Graph/Twitter tags on every page, but **no structured data content surfaced on any page** (home, events, committee, FAQs, contact). That absence, combined with there being no rich-result eligibility (no sitelinks search box, no event rich cards, no FAQ dropdowns) is the basis of this audit. Before implementing, re-verify with **Google Rich Results Test** and **Schema.org Validator** on the live URLs — treat this as "confirmed missing rich-result behavior, verify script absence directly in view-source."

---

## 1. What's missing and why it matters

| # | Gap | Machine-understanding impact |
|---|-----|-------------------------------|
| 1 | No `Organization` graph node | Google/Bing/LLMs cannot confidently resolve "AURON Forum" = "Aaron Forum" = "Auron SBJIT" as one entity, tie it to SBJITMR, or attach a Knowledge Panel/logo. `sameAs` links to Instagram/LinkedIn are invisible as entity signals — they're just anchor text right now. |
| 2 | No `WebSite` node / no `SearchAction` | No eligibility for a Sitelinks Search Box; no canonical "publisher" node for other schemas to reference via `@id`. |
| 3 | No `WebPage`/`CollectionPage`/`ContactPage`/`AboutPage` typing per route | Every page looks generically the same to crawlers; no `breadcrumb`, `primaryImageOfPage`, or `isPartOf` linkage back to the WebSite/Organization graph. |
| 4 | No `BreadcrumbList` | No breadcrumb rich result in SERPs; weaker internal site-hierarchy signal for a 8-page site that badly needs one. |
| 5 | **No `Event` markup on `/events`** (highest-impact gap) | This is the single biggest missed opportunity. The page has 8 clearly structured events with dates, venue, and descriptions but zero machine-readable signal — no Google Events rich results, no eligibility for Events surfaces in Search/Maps/Assistant. |
| 6 | No `FAQPage` on `/faqs` (and duplicated on `/contact`) | The FAQ content is ideal for `FAQPage` and could win SERP real estate; right now it's plain paragraph text with no Q/A pairing signal. **Caution:** Google restricts `FAQPage` rich results to authoritative government/health sites as of 2023 — still implement it (helps AI answer engines / AEO and other search engines), but don't count on the SERP accordion. |
| 7 | No `Person` markup for Committee | Faculty/office-bearers have named roles + LinkedIn profiles but no `Person`/`worksFor`/`sameAs` graph — a missed entity-association opportunity for the individuals and the institute. |
| 8 | No `EducationalOrganization`/`ParentOrganization` link to SBJITMR | The forum is a sub-entity of the college; without `parentOrganization`, search engines can't connect AURON Forum's authority to the institute's. |
| 9 | Logo/OG image lacks `ImageObject` treatment | `og:image` exists but isn't reinforced as a structured `logo`/`image` `ImageObject` with explicit width/height inside Organization — weakens Knowledge Panel/logo eligibility. |
| 10 | No `Product`/`LocalBusiness`/`Service` — **and none should be forced** | See §2 below — these types are semantically wrong for this site and using them would be a schema *incorrectness* risk (spam/misrepresentation), not a fix. |

### On "Product / Service / LocalBusiness" specifically
This is a non-commercial student forum, not a business selling goods, services, or operating storefront hours for commerce. Forcing `Product`, `Service`, or `LocalBusiness` onto it would be **structured-data spam** under Google's guidelines (misrepresenting entity type) and could trigger a manual action. The correct semantic equivalents for this content model are:

- **`Event`** is the true analog of "Product/Service" here — it's the thing being "offered" (seminars, hackathons, workshops) with dates, location, and eligibility.
- **`EducationalOrganization`** (subtype of `Organization`) is the correct entity type for AURON Forum itself, nested under SBJITMR as `parentOrganization`.
- If you want a **Place/venue** node, that's `CollegeOrUniversity` (a Place subtype), used as the `location` of each Event — not `LocalBusiness`.

I've implemented all of these below instead of the requested-but-inapplicable types, and flagged the substitution clearly at each point.

---

## 2. Priority-ordered fix roadmap

| Priority | Fix | Effort | SEO/AEO Impact |
|---|---|---|---|
| **P0** | `Organization` + `WebSite` graph in root layout (site-wide) | Low | Entity disambiguation, Knowledge Panel eligibility, foundation every other schema references |
| **P0** | `Event` markup on `/events` for all 8 events | Medium | Highest upside: Events rich results, Google Assistant/Maps surfaces, AI-answer citations |
| **P1** | `BreadcrumbList` on every inner page | Low | Breadcrumb rich result, crawl/hierarchy clarity |
| **P1** | `FAQPage` on `/faqs` | Low | AEO citation eligibility, potential rich result |
| **P2** | `WebPage`/`CollectionPage`/`ContactPage`/`AboutPage` typing per route | Low | Stronger per-page entity context, `isPartOf`/`about` linkage |
| **P2** | `Person` schema for Committee members | Medium | Entity graph richness, faculty authority signals |
| **P3** | `ImageObject` refinement for logo/OG images | Low | Logo eligibility in Knowledge Panel |
| **P3** | `parentOrganization` link to SBJITMR | Low | Institutional authority inheritance |

---

## 3. Production-ready JSON-LD

### 3.1 Global graph — inject on **every page** (ideally once, in the root layout `<head>`)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://auron-iota.vercel.app/#organization",
      "name": "AURON Forum",
      "alternateName": ["Aaron Forum", "Auron SBJIT", "AURON Club"],
      "url": "https://auron-iota.vercel.app/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://auron-iota.vercel.app/#logo",
        "url": "https://auron-iota.vercel.app/logo/auron.png",
        "contentUrl": "https://auron-iota.vercel.app/logo/auron.png",
        "width": 1200,
        "height": 630,
        "caption": "AURON Technical Forum Logo"
      },
      "image": { "@id": "https://auron-iota.vercel.app/#logo" },
      "description": "AURON Forum is the official AI-ML and IT technical community at SBJITMR Nagpur, focused on hackathons, coding contests, seminars, and student innovation.",
      "email": "auron@sbjit.edu.in",
      "sameAs": [
        "https://www.instagram.com/official_auronn",
        "https://www.linkedin.com/company/auron-forum"
      ],
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "S.B. Jain Institute of Technology, Management and Research",
        "alternateName": "SBJITMR",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nagpur",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      "department": {
        "@type": "EducationalOrganization",
        "name": "Department of CSE (AI/ML) & IT"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://auron-iota.vercel.app/#website",
      "url": "https://auron-iota.vercel.app/",
      "name": "AURON Forum",
      "description": "Official technical forum of SBJITMR Nagpur",
      "publisher": { "@id": "https://auron-iota.vercel.app/#organization" },
      "inLanguage": "en-US"
    }
  ]
}
</script>
```

> Note: I omitted `WebSite.potentialAction.SearchAction` — the site has no internal search endpoint. Add it only if/when a `/search?q=` route exists; a fake SearchAction is another common structured-data error.

---

### 3.2 Home page (`/`) — `WebPage` + `BreadcrumbList`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://auron-iota.vercel.app/#webpage",
  "url": "https://auron-iota.vercel.app/",
  "name": "AURON Forum | SBJITMR Technical Community Nagpur",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "about": { "@id": "https://auron-iota.vercel.app/#organization" },
  "primaryImageOfPage": { "@id": "https://auron-iota.vercel.app/#logo" },
  "description": "AURON Forum is the official AI-ML and IT technical community at SBJITMR Nagpur. Explore events, hackathons, certificates, and student innovation.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" }
    ]
  },
  "inLanguage": "en-US"
}
</script>
```

---

### 3.3 Events listing (`/events`) — `CollectionPage` + `ItemList` of `Event`

This is the **highest-priority fix**. Each event card on the page maps directly to an `Event` node. Use `eventAttendanceMode` = Mixed/Offline depending on the "HYBRID"/"TECH" tags, and `eventStatus` = `EventScheduled` for upcoming, `EventScheduled` (past-tense completed events can stay `EventScheduled` unless cancelled/postponed — schema.org has no "completed" status).

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://auron-iota.vercel.app/events#webpage",
  "url": "https://auron-iota.vercel.app/events",
  "name": "Forum Events",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "description": "Browse the upcoming events, competitive programming speed runs, hackathons, and past gallery from the AURON Forum.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://auron-iota.vercel.app/events" }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#ai-song-spirit-ml",
          "name": "AI Song Spirit (ML)",
          "description": "Seminar on AI music generation, followed by teams of 4 generating a song in a linked manner based on the seminar.",
          "startDate": "2026-08-17",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/assets/aisong.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#ai-song-spirit-it",
          "name": "AI Song Spirit (IT)",
          "description": "Seminar on AI music generation, followed by teams of 4 generating a song in a linked manner based on the seminar.",
          "startDate": "2026-08-18",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/assets/aisong.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#techtank",
          "name": "TechTank",
          "description": "Come up with your ideas and present them as per your convenience using a PPT. Showcases speaking skills, confidence, and body language. Certificate provided.",
          "startDate": "2026-08-22",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/logo/auron.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#coding-competition-info-ml",
          "name": "Coding Competition Information (ML)",
          "description": "Detailed information on all coding exams like ACM-ICPC, TCS CodeVita, AWS, and Google.",
          "startDate": "2026-08-24",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/logo/auron.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#forum-installation-ceremony",
          "name": "Forum Installation Ceremony",
          "description": "The official installation ceremony of Auron's new forum body, marking the beginning of a fresh term of leadership, vision, and community building.",
          "startDate": "2026-07-25",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/logo/auron.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#tug-of-war",
          "name": "Tug of War",
          "description": "A fun and energetic team event that tests strength, teamwork, coordination, and strategy for both girls & boys.",
          "startDate": "2026-08-01",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/assets/tugofwar.jpg",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#ctrl-create-ml",
          "name": "CTRL + CREATE (ML)",
          "description": "Open source design workshop on 5 topics (without use of AI). No entry fees. Platform: Canva. Certificate for all.",
          "startDate": "2026-08-03",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/assets/canava.png",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Event",
          "@id": "https://auron-iota.vercel.app/events#prompt-engineering",
          "name": "Prompt Engineering",
          "description": "A hands-on workshop covering how to write effective prompts, applied through a practical approach. Certificate for all.",
          "startDate": "2026-08-08",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "S.B. Jain Institute of Technology, Management and Research",
            "address": { "@type": "PostalAddress", "addressLocality": "Nagpur", "addressRegion": "Maharashtra", "addressCountry": "IN" }
          },
          "image": "https://auron-iota.vercel.app/assets/prompt.jpg",
          "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
          "isAccessibleForFree": true
        }
      }
    ]
  }
}
</script>
```

**Implementation tip:** if `/events` renders event data from a CMS/array in the codebase (very likely, given the repeated card structure), generate this JSON-LD **programmatically from that same data array** rather than hand-maintaining it — that's the only way it stays accurate as events change. See §4.2.

If each event ever gets its own detail page (`/events/[slug]`), duplicate the matching single `Event` object there as a standalone `<script>` block plus its own `BreadcrumbList`.

---

### 3.4 FAQs (`/faqs`) — `FAQPage`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://auron-iota.vercel.app/faqs#faqpage",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://auron-iota.vercel.app/faqs" }
    ]
  },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the core objectives of Auron Technical Forum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auron Technical Forum aims to bridge the gap between academic learning and industry expectations by promoting innovation, technical excellence, research, entrepreneurship, and collaborative problem-solving through impactful learning experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Does Auron Technical Forum collaborate with industry and professional organizations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the forum actively seeks collaborations with Computer Society of India (CSI) and Hack With India (HWI) to provide students with exposure to technologies, mentorship opportunities, and real-world learning experiences."
      }
    },
    {
      "@type": "Question",
      "name": "What types of events can I expect throughout the year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AURON organizes a diverse range of technical and non-technical events, including hackathons, coding competitions, workshops, seminars, networking opportunities, sports, and cultural events throughout the year."
      }
    },
    {
      "@type": "Question",
      "name": "How will I receive updates on upcoming events and activities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All updates regarding events, workshops, competitions, and other activities are shared through the official AURON Forum website and verified social media platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How can students participate beyond attending events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Students can participate beyond attending events by volunteering for various forum activities, collaborating with the organizing team, and supporting technical and non-technical initiatives."
      }
    }
  ]
}
</script>
```

> Use this **only** on `/faqs` (the canonical FAQ URL). The identical Q&A block also appears on `/contact` — do **not** duplicate `FAQPage` there with the same questions; that's flagged by Google as a duplicate structured-data pattern. On `/contact`, either omit FAQPage entirely or set `mainEntityOfPage` to point back to `/faqs#faqpage` instead of repeating the full markup.

---

### 3.5 Contact (`/contact`) — `ContactPage`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://auron-iota.vercel.app/contact#webpage",
  "url": "https://auron-iota.vercel.app/contact",
  "name": "Contact",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "about": { "@id": "https://auron-iota.vercel.app/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://auron-iota.vercel.app/contact" }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://auron-iota.vercel.app/#organization",
    "email": "auron@sbjit.edu.in",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "auron@sbjit.edu.in",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    }
  }
}
</script>
```

---

### 3.6 Committee (`/committee`) — `AboutPage` + `Person` list

Semantic substitute note: these are club office-bearers/faculty, not employees of a commercial entity, so `Person.worksFor` points to the `EducationalOrganization` node, not a `LocalBusiness`.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://auron-iota.vercel.app/committee#webpage",
  "url": "https://auron-iota.vercel.app/committee",
  "name": "Executive Committee",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Committee", "item": "https://auron-iota.vercel.app/committee" }
    ]
  },
  "mainEntity": [
    {
      "@type": "Person",
      "name": "Dr. Animesh Tayal",
      "jobTitle": "Head of Department, HoD",
      "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
      "affiliation": { "@type": "EducationalOrganization", "name": "Department of CSE (AIML) & IT" },
      "sameAs": ["https://linkedin.com/in/dr-animesh-tayal-5ab477139"]
    },
    {
      "@type": "Person",
      "name": "Prof. Sweta Bokade",
      "jobTitle": "Technical Advisor",
      "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
      "affiliation": { "@type": "EducationalOrganization", "name": "Department of CSE (AIML) & IT" },
      "sameAs": ["https://www.linkedin.com/in/sweta-bokade-0a52b624a"]
    },
    {
      "@type": "Person",
      "name": "Prof. Falguni Kalambe",
      "jobTitle": "Non-Technical Advisor",
      "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
      "affiliation": { "@type": "EducationalOrganization", "name": "Department of CSE (AIML) & IT" },
      "sameAs": ["https://linkedin.com/in/falguni-kalambe-970780276"]
    },
    {
      "@type": "Person",
      "name": "Prof. Ravindra Rasekar",
      "jobTitle": "Non-Technical Advisor",
      "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
      "affiliation": { "@type": "EducationalOrganization", "name": "Department of CSE (AIML) & IT" },
      "sameAs": ["https://linkedin.com/in/ravi-rasekar-4812871a1"]
    },
    {
      "@type": "Person",
      "name": "Prof. Rahul Bambodkar",
      "jobTitle": "Technical Advisor",
      "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
      "affiliation": { "@type": "EducationalOrganization", "name": "Department of CSE (AIML) & IT" },
      "sameAs": ["https://www.linkedin.com/in/rahul-bambodkar-603a3753"]
    }
  ]
}
</script>
```

*(Fix the current bug where LinkedIn URLs are being concatenated onto the site's own domain, e.g. `auron-iota.vercel.app/linkedin.com/in/...` — those anchor `href`s are relative, not absolute. This breaks both UX and any future `sameAs` automation pulled from the DOM.)*

---

### 3.7 Generic template — every remaining page (`/vision`, `/certificates`, `/hall-of-fame`, `/timeline`)

Swap `PAGE_SLUG`, `PAGE_NAME`, and `PAGE_DESCRIPTION`; keep the `@id` pattern consistent so the graph interlinks.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://auron-iota.vercel.app/PAGE_SLUG#webpage",
  "url": "https://auron-iota.vercel.app/PAGE_SLUG",
  "name": "PAGE_NAME",
  "description": "PAGE_DESCRIPTION",
  "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
  "about": { "@id": "https://auron-iota.vercel.app/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "PAGE_NAME", "item": "https://auron-iota.vercel.app/PAGE_SLUG" }
    ]
  }
}
</script>
```

For `/certificates`, if this page lists downloadable/verifiable certificates, consider `EducationalOccupationalCredential` per certificate instead of the generic template — happy to build that out if you share the page's actual content structure (it returned no distinct list content in this crawl).

---

## 4. Implementation instructions

### 4.1 Where this goes (Next.js App Router — confirmed by `next-size-adjust` meta tag in the source)

**Global graph (§3.1):** put in `app/layout.tsx` using `next/script`, not a raw `<script>` tag, so Next handles hydration correctly:

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-organization-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebsiteGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Per-page graphs (§3.2–3.7):** export a `generateMetadata`-adjacent JSON-LD block inside each `page.tsx`, injected the same way, scoped to that route only.

### 4.2 Keep the Events schema in sync with content
Locate the array/CMS source currently powering the `/events` cards and add a small serializer that maps each event object → the `Event` shape in §3.3, so JSON-LD is generated from the same source of truth as the visible cards (no drift, no stale dates).

### 4.3 Validation checklist (do all three before shipping)
1. **Google Rich Results Test** — run against `/`, `/events`, `/faqs` post-deploy.
2. **Schema.org / SDTT (Schema Markup Validator)** — validates syntax + type conformance beyond just Google's rich-result subset.
3. **View-source spot check** — confirm the `<script type="application/ld+json">` is present in the *initial server-rendered HTML*, not injected client-side only after hydration (important since this is Next.js — `next/script strategy="beforeInteractive"` or SSR in the Server Component avoids this pitfall).

### 4.4 Ongoing hygiene
- Every `@id` above is intentionally stable (`#organization`, `#website`, `#webpage`) — reuse these exact IDs everywhere rather than inventing new blank nodes per page, so Google's Knowledge Graph resolution treats them as one entity, not many.
- Do not add `FAQPage` to more than one canonical URL per FAQ set (see §3.4 warning).
- Do not implement `Product`/`Service`/`LocalBusiness` for this entity — see §2 rationale.
