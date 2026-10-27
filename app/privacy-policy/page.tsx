import type { Metadata } from "next";
import Link from "next/link";
import { getWebPageSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the AURON Technical Forum at S.B. Jain Institute of Technology, Management & Research, Nagpur.",
};

export default function PrivacyPolicyPage() {
  const schema = getWebPageSchema(
    "https://auron-iota.vercel.app/privacy-policy",
    "Privacy Policy",
    "Privacy Policy for the AURON Technical Forum at S.B. Jain Institute of Technology, Management & Research, Nagpur.",
    "privacy-policy"
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
          <h1 className="section-title">Privacy Policy</h1>
        </div>

        <div className="legal-card">
          <div className="legal-meta">
            <span className="legal-badge">AURON Technical Forum</span>
            <span>Last Updated: October 2026</span>
          </div>

          <div className="legal-section">
            <p className="legal-text">
              The AURON Technical Forum (&quot;AURON&quot;, &quot;we&quot;, &quot;our&quot;) is the official student-led technical
              forum under the Department of CSE (AI/ML) &amp; IT at S.B. Jain Institute of Technology, Management
              and Research (SBJITMR), Nagpur. We respect your privacy and are committed to protecting any personal
              information shared through our website.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">01</span>
              <span>Information We Collect</span>
            </h2>
            <p className="legal-text">
              We only collect information that you voluntarily provide to us or that is required for standard website functionality:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Contact Inquiries:</strong> When you send a message through our Contact page, we collect your name, email address, and message content to respond to your inquiry.
              </li>
              <li>
                <strong>Event Registrations:</strong> When registering for hackathons, workshops, seminars, or competitions, we may collect your name, student roll number / USN, semester, and college email to verify eligibility and coordinate event logistics.
              </li>
              <li>
                <strong>Certificate Lookups:</strong> When you search for event certificates, queries utilize participant names or USNs to match verified event rosters.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">02</span>
              <span>How We Use Your Information</span>
            </h2>
            <p className="legal-text">
              Information submitted through this website is used strictly for legitimate forum and academic purposes:
            </p>
            <ul className="legal-list">
              <li>To respond promptly to queries, feedback, and technical support requests.</li>
              <li>To organize student participation, track attendance, and communicate event schedules.</li>
              <li>To generate, validate, and issue verifiable digital participation and achievement certificates.</li>
              <li>To maintain website reliability, security, and prevent misuse of forum tools.</li>
            </ul>
            <p className="legal-text">
              We do not sell, rent, monetize, or trade your personal details to any commercial advertisers or third-party marketers.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">03</span>
              <span>Cookies, Storage &amp; Analytics</span>
            </h2>
            <p className="legal-text">
              Our website uses minimal, privacy-conscious browser storage mechanisms to ensure an optimal user experience:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Theme Preference:</strong> We save a simple key in your browser&apos;s local storage (<code>localStorage</code>) to remember whether you selected Light or Dark mode.
              </li>
              <li>
                <strong>Session State:</strong> Temporary session storage (<code>sessionStorage</code>) is used to control introductory animations during your visit.
              </li>
              <li>
                <strong>Performance Analytics:</strong> We use privacy-friendly performance tools (Vercel Analytics and Speed Insights) to monitor site health, load times, and technical metrics in aggregate. These tools do not profile visitors or track personal identities.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">04</span>
              <span>Third-Party Services &amp; External Links</span>
            </h2>
            <p className="legal-text">
              Our website integrates selected external services for specific capabilities:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Message Delivery:</strong> Messages sent via our contact form are delivered securely using EmailJS.
              </li>
              <li>
                <strong>External Links:</strong> The website contains links to external social profiles (such as LinkedIn and Instagram), campus map directions via Google Maps, and external development resources.
              </li>
            </ul>
            <p className="legal-text">
              AURON does not control and is not responsible for the privacy policies or content of external third-party websites. We encourage you to review their respective policies when visiting external links.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">05</span>
              <span>Data Retention &amp; Security</span>
            </h2>
            <p className="legal-text">
              We maintain appropriate technical precautions to safeguard the information you provide. Form messages and event records are stored only as long as necessary to fulfill communication, academic coordination, and certificate verification requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-section-title">
              <span className="section-num">06</span>
              <span>Questions &amp; Contact Information</span>
            </h2>
            <p className="legal-text">
              If you have any questions about this Privacy Policy or wish to update or request the removal of details submitted to AURON, please reach out to our team:
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
                General Inquiries: <Link href="/contact" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>Visit our Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

