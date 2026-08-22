// Schema.org Structured Data Helper for AURON Forum
// Ensures stable @ids, correct relationships, and maps properties programmatically.

import { UpcomingEvent } from "@/data/events";
import { type EventDetail } from "@/data/eventDetails";
import { FaqItem } from "@/data/faqs";
import { CommitteeMember } from "@/data/committee";

const toAbsoluteUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `https://auron-iota.vercel.app${path.startsWith("/") ? "" : "/"}${path}`;
};

export function getGlobalSchema() {
  return {
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
          "width": 699,
          "height": 727,
          "caption": "AURON Technical Forum Logo"
        },
        "image": { "@id": "https://auron-iota.vercel.app/#logo" },
        "description": "AURON Forum is the official AI-ML and IT technical community at SBJITMR Nagpur, focused on hackathons, coding contests, seminars, and student innovation.",
        "email": "auron@sbjit.edu.in",
        "sameAs": [
          "https://www.instagram.com/official_auronn?igsh=endvZHhqemRxM2Fm",
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
  };
}

export function getWebPageSchema(url: string, name: string, description: string, slug?: string) {
  const currentUrl = toAbsoluteUrl(slug || "");
  const breadcrumbElements = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://auron-iota.vercel.app/" }
  ];
  if (slug) {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": name,
      "item": currentUrl
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    "url": currentUrl,
    "name": slug ? `${name} | AURON Forum` : name,
    "description": description,
    "isPartOf": { "@id": "https://auron-iota.vercel.app/#website" },
    "about": { "@id": "https://auron-iota.vercel.app/#organization" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbElements
    },
    "inLanguage": "en-US"
  };
}

export function getEventsSchema(eventsData: UpcomingEvent[]) {
  return {
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
      "itemListElement": eventsData.map((event, idx) => {
        let width = 699;
        let height = 727;
        if (event.image === "/assets/aisong.png") {
          width = 768;
          height = 557;
        } else if (event.image === "/assets/canava.png") {
          width = 1236;
          height = 1600;
        } else if (event.image === "/assets/prompt.jpg") {
          width = 1024;
          height = 559;
        } else if (event.image === "/assets/tugofwar.jpg") {
          width = 995;
          height = 465;
        }

        const attendanceMode = event.wing === "hybrid"
          ? "https://schema.org/MixedEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode";

        return {
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Event",
            "@id": `https://auron-iota.vercel.app/events#${event.id}`,
            "name": event.title,
            "description": event.description,
            "startDate": event.dateISO ? event.dateISO.split("T")[0] : event.dateISO,
            "eventAttendanceMode": attendanceMode,
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "S.B. Jain Institute of Technology, Management and Research",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "image": {
              "@type": "ImageObject",
              "url": toAbsoluteUrl(event.image),
              "width": width,
              "height": height
            },
            "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
            "isAccessibleForFree": true
          }
        };
      })
    }
  };
}

export function getEventDetailSchema(event: EventDetail) {
  const wing = event.wing ?? "hybrid";
  const attendanceMode = wing === "hybrid"
    ? "https://schema.org/MixedEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode";

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `https://auron-iota.vercel.app/events/${event.slug}#event`,
    "name": event.title,
    "description": event.about || event.description,
    "startDate": event.dateISO ? event.dateISO.split("T")[0] : event.dateISO,
    "eventAttendanceMode": attendanceMode,
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": event.venue || "S.B. Jain Institute of Technology, Management and Research",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "image": event.image ? {
      "@type": "ImageObject",
      "url": toAbsoluteUrl(event.image)
    } : undefined,
    "organizer": { "@id": "https://auron-iota.vercel.app/#organization" },
    "isAccessibleForFree": true
  };
}

export function getFaqsSchema(faqsData: FaqItem[]) {
  return {
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
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getContactSchema() {
  return {
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
  };
}

export function getCommitteeSchema(committeeData: CommitteeMember[]) {
  return {
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
    "mainEntity": committeeData.map((member) => {
      let jobTitle = member.role;
      if (member.wing === "advisor" && member.role === "HoD") {
        jobTitle = "Head of Department, HoD";
      }

      const sameAs: string[] = [];
      if (member.linkedin) {
        sameAs.push(member.linkedin.startsWith("http") ? member.linkedin : `https://${member.linkedin}`);
      }
      if (member.insta) {
        sameAs.push(member.insta.startsWith("http") ? member.insta : `https://${member.insta}`);
      }
      if (member.github) {
        sameAs.push(member.github.startsWith("http") ? member.github : `https://${member.github}`);
      }

      return {
        "@type": "Person",
        "name": member.name,
        "jobTitle": jobTitle,
        "worksFor": { "@id": "https://auron-iota.vercel.app/#organization" },
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Department of CSE (AIML) & IT"
        },
        ...(sameAs.length > 0 ? { "sameAs": sameAs } : {})
      };
    })
  };
}
