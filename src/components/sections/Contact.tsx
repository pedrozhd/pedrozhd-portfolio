import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <Reveal>
        <div className="contact-card">
          <div
            className="eyebrow"
            style={{ ["--acc" as string]: "rgba(255,255,255,0.8)" }}
          >
            / Contato
          </div>
          <h2>Vamos transformar dados em vantagem.</h2>
          <p className="contact-en">Let&apos;s turn data into advantage.</p>
          <div className="contact-actions">
            <a href="mailto:pedrohenriquefc06@gmail.com" className="btn-light">
              pedrohenriquefc06@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pedrozhd/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pedrozhd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>

      <div className="footer-row">
        <span className="footer-name">Pedro França</span>
        <span className="footer-meta">© 2026 · Negócios × Dados × IA</span>
      </div>
    </section>
  );
}
