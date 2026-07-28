"use client";

import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function ContactPageClient() {
  return (
    <section className="section-padding contact-page" style={{ background: "var(--bg-secondary)", minHeight: "80vh" }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "50px" }}>
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact & FAQs</h2>
        </div>

        <div className="contact-faq-grid">
          {/* FAQ Section - Left on desktop, Top on mobile */}
          <div className="contact-faq-column">
            <div className="contact-faq-column-header">
              <span className="section-subtitle">FAQ Help Desk</span>
              <h3 className="section-title" style={{ fontSize: "1.5rem" }}>Frequently Asked Questions</h3>
            </div>
            <Faq />
          </div>

          {/* Contact Section - Right on desktop, Bottom on mobile */}
          <div className="contact-faq-column">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
