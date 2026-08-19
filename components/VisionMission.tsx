export default function VisionMission() {
  return (
    <section className="section-padding vision-section" id="about">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Our Purpose</span>
          <h2 className="section-title">Vision & Mission</h2>
        </div>

        <div className="vm-editorial">
          {/* Vision */}
          <div className="vm-block reveal-element delay-100">
            <div className="vm-block-label">
              <span className="vm-number">01</span>
              <span className="vm-label-text">Vision</span>
            </div>
            <p className="vm-description">
              To establish a world-class technology and management ecosystem that cultivates leadership, stimulates
              lateral thinking, and bridges the gap between academic theories and state-of-the-art industry innovations.
            </p>
            <ul className="vm-points">
              <li>
                <span className="vm-point-label">Technical</span>
                Nurturing next-generation software builders, researchers, and open-source contributors.
              </li>
              <li>
                <span className="vm-point-label">Non-Technical</span>
                Shaping agile managers, corporate liaisons, event coordinators, and design artists.
              </li>
              <li>
                <span className="vm-point-label">Synergy</span>
                Unifying code development with strategic marketing and execution to build viable models.
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="vm-divider reveal-element" aria-hidden="true">
            <div className="vm-divider-line" />
          </div>

          {/* Mission */}
          <div className="vm-block reveal-element delay-200">
            <div className="vm-block-label">
              <span className="vm-number">02</span>
              <span className="vm-label-text">Mission</span>
            </div>
            <p className="vm-description">
              Empowering students by providing a rich technical and operational framework filled with project-based
              learnings, national challenges, industrial interactions, and research-oriented bootcamps.
            </p>
            <ul className="vm-points">
              <li>
                <span className="vm-point-label">Technical</span>
                Hosting monthly developer sprint cycles, competitive programming, and AI research panels.
              </li>
              <li>
                <span className="vm-point-label">Non-Technical</span>
                Organizing business shark-tanks, public speaking debates, operations, and cultural management.
              </li>
              <li>
                <span className="vm-point-label">Growth</span>
                Aligning department objectives directly with technology pioneers, business leaders, and alumni.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
