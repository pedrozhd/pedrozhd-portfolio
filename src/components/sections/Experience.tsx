import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="exp">
      <Reveal>
        <div className="eyebrow" style={{ ["--acc" as string]: "var(--a3)" }}>
          / Experiência
        </div>
        <h2>Trajetória</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="exp-row">
          <div>
            <div className="exp-when-tag">Atual</div>
            <div className="exp-date">10/2025 até o presente</div>
          </div>
          <div>
            <h3 className="exp-title">
              Business Intelligence · RevOps · Martech
            </h3>
            <div className="exp-org">StartSe</div>
            <ul className="exp-list">
              <li>
                Dashboards que traduzem números em ações para times de negócio.
              </li>
              <li>
                Automações e agentes de IA para otimizar e escalar processos.
              </li>
              <li>
                Insights de dados que apoiam decisões melhores e mais rápidas.
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="exp-row soft">
          <div>
            <div className="exp-when-tag muted">Início</div>
          </div>
          <div>
            <p className="exp-note">
              A StartSe é minha{" "}
              <strong>primeira experiência profissional</strong>, e onde
              construí tudo acima, do BI ao desenvolvimento de agentes de IA.
              <span className="en">
                StartSe is my first professional role, where I built everything
                above, from BI to AI agents.
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
