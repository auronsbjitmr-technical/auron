import Image from "next/image";

const COLLABORATORS = [
  { name: "Hack with India", logo: "/logo/hwi.jpg" },
  { name: "CSI", logo: "/logo/csi.jpg" },
];

export default function Sponsors() {
  const duplicatedCollabs = [...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS];

  return (
    <section className="section-padding py-16" id="collaborators" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal-element" style={{ marginBottom: "40px" }}>
          <span className="section-subtitle">Our Partners</span>
          <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Collaborators</h2>
        </div>

        <div className="collab-grid reveal-element">
          {COLLABORATORS.map((collab, idx) => (
            <div key={idx} className="collab-card glass-card">
              <div className="collab-img-wrapper">
                <Image
                  src={collab.logo}
                  alt={collab.name}
                  width={160}
                  height={80}
                  className="collab-logo"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="collab-name">{collab.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
