import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-grid">
        <Reveal>
          <div>
            <div className="eyebrow" style={{ ["--acc" as string]: "var(--a2)" }}>
              / Sobre
            </div>
            <h2>Trabalho onde dados e negócios se encontram.</h2>
            <p className="about-en en">I work where data meets business.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="about-body">
              Na StartSe atuo com{" "}
              <strong>
                Business Intelligence, Revenue Operations e Martech
              </strong>
              , transformando dados em insights que ajudam times a tomar decisões
              melhores, construindo dashboards que traduzem números em ações e
              desenvolvendo automações e agentes de IA para otimizar e escalar
              processos.
            </p>
            <p className="about-body">
              No dia a dia uso SQL, BigQuery, Power BI, Python e ferramentas de
              automação. Quero crescer na interseção entre{" "}
              <strong>dados e estratégia</strong>, em ambientes onde inteligência
              analítica vira vantagem competitiva de verdade.
            </p>
            <div className="quote">
              <p>
                &ldquo;O que mais me move não é a ferramenta em si, é o problema
                que ela resolve.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
