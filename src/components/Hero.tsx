import content from "@/content/siteContent.json";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${content.hero.backgroundImage}')` }}
      ></div>
      <div className="hero-gradient"></div>
      <div className="hero-orb"></div>
      <div className="container hero-content">
        <div className="hero-inner">
          <p className="hero-tag">{content.hero.tag}</p>
          <h1>
            {content.hero.heading}
            <br />
            <span className="highlight">{content.hero.headingHighlight}</span>
          </h1>
          <p className="hero-desc">{content.hero.description}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              {content.hero.primaryCta} <ArrowIcon />
            </a>
            <a href="#services" className="btn-ghost">
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
