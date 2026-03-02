import content from "@/content/siteContent.json";
import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="statement">
      <div className="container">
        <Reveal>
          <p className="statement-text">
            &ldquo;{content.statement.text}{" "}
            <strong>{content.statement.bold1}</strong>,{" "}
            <strong>{content.statement.bold2}</strong>, and someone who&rsquo;s{" "}
            <span className="acc">{content.statement.accent}</span>.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
