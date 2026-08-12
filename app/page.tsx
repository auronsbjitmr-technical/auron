import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      {/* Visually hidden SEO Heading & Description */}
      <div style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      }}>
        <h1>AURON Forum (also known as Aaron Forum)</h1>
        <p>
          AURON Forum is the official Technical Forum of SBJITMR CSE(AI/ML) & IT Department, Nagpur,
          focused on AI, ML, hackathons, and student innovation.
          Also searched as Aaron Forum, Auron SBJIT, or AURON Club.
        </p>
      </div>
      <Hero />
      <Sponsors />
    </>
  );
}
