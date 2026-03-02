import content from "@/content/siteContent.json";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <Reveal>
              <p className="label">{content.about.label}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2>
                {content.about.heading.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < content.about.heading.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </Reveal>
            {content.about.paragraphs.map((para, i) => (
              <Reveal key={i} delay={Math.min(i + 2, 3)}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div className="about-image">
              <img
                src={content.about.image}
                alt={content.about.imageAlt}
                loading="lazy"
              />
              <div className="about-image-badge">
                {content.about.stats.map((stat) => (
                  <div key={stat.label} className="badge-stat">
                    <h4>{stat.value}</h4>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
