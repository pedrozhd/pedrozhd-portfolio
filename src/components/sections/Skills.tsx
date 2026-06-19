import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <Reveal>
        <div className="eyebrow" style={{ ["--acc" as string]: "var(--a2)" }}>
          / Habilidades &amp; Ferramentas
        </div>
        <h2>O kit de trabalho</h2>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.08}>
            <div
              className="skill-card"
              style={{ ["--acc" as string]: `var(${g.accent})` }}
            >
              <div className="skill-head">
                <span className="skill-dot" />
                <h3>{g.title}</h3>
              </div>
              <div className="skill-tags">
                {g.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
