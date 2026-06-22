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

      <div className="skills-list">
        {skillGroups.map((g, i) => (
          <Reveal key={g.num} delay={i * 0.07}>
            <div className="skill-row">
              <span
                className="skill-num"
                style={{ ["--acc" as string]: `var(${g.accent})` }}
              >
                {g.num}
              </span>
              <h3 className="skill-name">{g.title}</h3>
              <div className="skill-chips">
                {g.items.map((item) => (
                  <span key={item} className="skill-chip">
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
