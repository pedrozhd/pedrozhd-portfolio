import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <Reveal>
          <div className="projects-head">
            <div>
              <div className="eyebrow" style={{ ["--acc" as string]: "var(--a1)" }}>
                / Projetos
              </div>
              <h2>Casos selecionados</h2>
              <p className="en">Selected work.</p>
            </div>
            <span className="projects-count">04 projetos</span>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article
                className="project-card"
                style={{ ["--acc" as string]: `var(${p.accent})` }}
              >
                <div className="project-bar">
                  <span className="project-bar-label">{p.barLabel}</span>
                  <span className="project-bar-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="project-img">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-en">{p.en}</p>
                  <p
                    className="project-desc"
                    dangerouslySetInnerHTML={{ __html: p.description }}
                  />

                  <div className="project-stats">
                    {p.stats.map((s) => (
                      <div key={s.value}>
                        <div className={`stat-num ${s.accent ? "accent" : "light"}`}>
                          {s.value}
                        </div>
                        <div className="stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
