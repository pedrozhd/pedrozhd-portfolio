import Reveal from "@/components/Reveal";

interface Tool {
  slug: string;
  name: string;
}

const toolsRowA: Tool[] = [
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "react", name: "React" },
  { slug: "python", name: "Python" },
  { slug: "googlebigquery", name: "BigQuery" },
  { slug: "googlecloud", name: "Google Cloud" },
  { slug: "looker", name: "Looker" },
  { slug: "pandas", name: "pandas" },
];

const toolsRowB: Tool[] = [
  { slug: "hubspot", name: "HubSpot" },
  { slug: "anthropic", name: "Claude" },
  { slug: "googlegemini", name: "Gemini" },
  { slug: "make", name: "Make" },
  { slug: "meta", name: "Meta Ads" },
  { slug: "googleads", name: "Google Ads" },
  { slug: "tiktok", name: "TikTok Ads" },
];

function LogoItem({ slug, name, dup }: Tool & { dup?: boolean }) {
  const url = `url(/assets/logos/${slug}.svg)`;
  return (
    <span className="logo-item" aria-hidden={dup || undefined}>
      <span
        className="logo-mark"
        style={{ maskImage: url, WebkitMaskImage: url }}
      />
      <span className="logo-name">{name}</span>
    </span>
  );
}

function LogoTrack({ items, reverse }: { items: Tool[]; reverse?: boolean }) {
  return (
    <div className={`logos-track${reverse ? " reverse" : ""}`}>
      {items.map((t) => (
        <LogoItem key={t.slug} {...t} />
      ))}
      {items.map((t) => (
        <LogoItem key={`${t.slug}-dup`} {...t} dup />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <Reveal>
        <div className="eyebrow" style={{ ["--acc" as string]: "var(--a2)" }}>
          / Habilidades &amp; Ferramentas
        </div>
        <h2>O kit de trabalho</h2>
      </Reveal>

      <Reveal>
        <div className="logos">
          <LogoTrack items={toolsRowA} />
          <LogoTrack items={toolsRowB} reverse />
        </div>
      </Reveal>
    </section>
  );
}
