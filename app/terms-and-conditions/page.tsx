import type { Metadata } from "next";
import Link from "next/link";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the official AURON Technical Forum website, events, and resources.",
};

export default function TermsAndConditionsPage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/terms-and-conditions",
    "Terms & Conditions",
    "Terms and conditions for using the official AURON Technical Forum website, events, and resources.",
    "terms-and-conditions"
  );

  return (
    <section className="legal-content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <span className="section-subtitle">Legal & Policies</span>
          <h1 className="section-title">Terms &amp; Conditions</h1>
        </div>

        <div className="legal-card">
          <div className="legal-meta">
            <span className="legal-badge">AURON Technical Forum</span>
            <span>Last Updated: October 2026</span>
          </div>

          <div className="legal-section">
            <p className="legal-text">
              Welcome to the official website of the AURON Technical Forum (&quot;AURON&quot;, &quot;we&quot;, &quot;us&quot;),
              based at S.B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur. By accessing
              or browsing this website, you acknowledge and agree to abide by the following terms and conditions.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">01</span>
              <span>Acceptable Use</span>
            </h2>
            <p className="legal-text">
              This website is provided for educational, informational, and student community purposes. When using this site, you agree to:
            </p>
            <ul className="legal-list">
              <li>Use the website solely for lawful, educational, and constructive purposes.</li>
              <li>Provide accurate and authentic information when submitting forms or looking up event credentials.</li>
              <li>Refrain from attempting to disrupt, degrade, overload, or compromise website security, servers, or form endpoints.</li>
              <li>Respect fellow participants, students, faculty, and forum members across all interactions.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">02</span>
              <span>Intellectual Property &amp; Content</span>
            </h2>
            <p className="legal-text">
              All original content featured on this website—including the AURON logo, graphics, design elements, written descriptions, event documentation, and codebase—is the property of the AURON Technical Forum and SBJITMR, unless otherwise indicated.
            </p>
            <p className="legal-text">
              You may view, read, and reference website content for personal, non-commercial, and academic use. Any unauthorized duplication, modification, or commercial exploitation of forum trademarks, logos, or assets without prior written consent is strictly prohibited.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">03</span>
              <span>Events &amp; Forum Activities</span>
            </h2>
            <p className="legal-text">
              Information concerning upcoming events, technical sprints, workshops, hackathons, and guest lectures is published to keep students and visitors informed:
            </p>
            <ul className="legal-list">
              <li>Event schedules, venues, rules, and speaker lineups may occasionally be updated or rescheduled by the committee to ensure smooth execution.</li>
              <li>Registration for specific competitions or workshops may have eligibility criteria or capacity limits announced per event.</li>
              <li>All participants in AURON activities are expected to uphold academic integrity and adhere to the code of conduct established by SBJITMR.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">04</span>
              <span>Certificates &amp; Verification</span>
            </h2>
            <p className="legal-text">
              AURON provides a digital certificate lookup and download system for students and participants who attend recognized forum events:
            </p>
            <ul className="legal-list">
              <li>Certificates are issued strictly to individuals who fulfill the participation or achievement criteria for the respective event.</li>
              <li>Official certificates are tied to verified student records (including Student USN and event rosters).</li>
              <li>Any alteration, falsification, unauthorized duplication, or fraudulent claim of an AURON certificate is strictly forbidden and may be reported to institutional authorities.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">05</span>
              <span>External Links &amp; Website Updates</span>
            </h2>
            <p className="legal-text">
              For your convenience, our website may include hyperlinks to external third-party services (such as LinkedIn, Instagram, Google Maps, and external developer tools). AURON does not control or assume responsibility for the content, availability, or policies of external sites.
            </p>
            <p className="legal-text">
              We may periodically revise website content, features, or these Terms &amp; Conditions to reflect ongoing developments within the forum. Continued use of the website following any updates indicates your acceptance of the updated terms.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">06</span>
              <span>Contact Information</span>
            </h2>
            <p className="legal-text">
              If you have any questions, suggestions, or concerns regarding these Terms &amp; Conditions or forum operations, please feel free to get in touch with us:
            </p>
            <div className="legal-contact-card">
              <div><strong>AURON Technical Forum</strong></div>
              <div>Department of CSE (AI/ML) &amp; IT</div>
              <div>S.B. Jain Institute of Technology, Management and Research, Nagpur</div>
              <div>
                Email:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=auron@sbjit.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auron@sbjit.edu.in
                </a>
              </div>
              <div>
                Phone: <a href="tel:+917057533890">+91 70575 33890</a>
              </div>
              <div>
                Inquiries: <Link href="/contact" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>Visit our Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

