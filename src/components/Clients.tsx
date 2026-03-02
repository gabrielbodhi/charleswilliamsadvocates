import content from "@/content/siteContent.json";
import Reveal from "./Reveal";
import { getServiceIcon } from "./Icons";

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="clients-head">
          <Reveal>
            <p className="label" style={{ justifyContent: "center" }}>
              {content.clients.label}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2>{content.clients.heading}</h2>
          </Reveal>
        </div>
        <div className="client-grid">
          {content.clients.items.map((client, i) => (
            <Reveal key={client.title} delay={Math.min(i, 2)}>
              <div className="client-card">
                <div className="client-card-icon">
                  {getServiceIcon(client.icon, 24)}
                </div>
                <h3>{client.title}</h3>
                <p>{client.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
