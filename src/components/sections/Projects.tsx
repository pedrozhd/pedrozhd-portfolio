import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
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
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
