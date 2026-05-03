import './TechBackground.css';

/**
 * Renders a subtle, non-distracting tech-themed background layer.
 * Includes a dot grid and softly floating code/tech symbols.
 */
export default function TechBackground() {
  return (
    <div className="tech-bg" aria-hidden="true">
      {/* Floating symbols */}
      <span className="tech-bg__symbol tech-bg__symbol--1">&lt;/&gt;</span>
      <span className="tech-bg__symbol tech-bg__symbol--2">01</span>
      <span className="tech-bg__symbol tech-bg__symbol--3">&#123; &#125;</span>
      <span className="tech-bg__symbol tech-bg__symbol--4">//</span>
      <span className="tech-bg__symbol tech-bg__symbol--5">**</span>
      <span className="tech-bg__symbol tech-bg__symbol--6">0x</span>
      <span className="tech-bg__symbol tech-bg__symbol--7">=&gt;</span>
      <span className="tech-bg__symbol tech-bg__symbol--8">[ ]</span>

      {/* Circuit lines */}
      <svg className="tech-bg__circuit" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 400 H200 L240 360 H400" stroke="currentColor" strokeWidth="0.5" />
        <path d="M800 0 V150 L760 190 V300" stroke="currentColor" strokeWidth="0.5" />
        <path d="M1200 600 H1000 L960 640 H800" stroke="currentColor" strokeWidth="0.5" />
        <path d="M400 800 V650 L440 610 V500" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="400" cy="360" r="3" fill="currentColor" />
        <circle cx="760" cy="300" r="3" fill="currentColor" />
        <circle cx="800" cy="640" r="3" fill="currentColor" />
        <circle cx="440" cy="500" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
