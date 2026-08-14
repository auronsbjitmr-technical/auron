import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { getFaqsSchema } from "@/utils/schema";
import { FAQS_DATA } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Get quick answers about forum registration, technical sprints, guest seminars, project mentoring, and non-technical management challenges.",
};

export default function FaqsPage() {
  const schema = getFaqsSchema(FAQS_DATA);
  return (
    <section className="section-padding faq-page" style={{ background: "var(--bg-secondary)", minHeight: "80vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="section-header" style={{ marginBottom: "50px" }}>
          <span className="section-subtitle">FAQ Help Desk</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <Faq />
      </div>
    </section>
  );
}
