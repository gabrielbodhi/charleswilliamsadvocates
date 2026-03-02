import Link from "next/link";

const steps = [
  {
    title: "Define your brief and budget strategy",
    detail:
      "We clarify exactly what you need in a property, where you should buy, and how to structure a realistic budget strategy before search begins.",
  },
  {
    title: "Run comprehensive market research",
    detail:
      "We assess current market conditions, recent comparable sales, suburb performance, and active supply so every decision is data-backed.",
  },
  {
    title: "Identify and shortlist suitable properties",
    detail:
      "We source on-market and suitable opportunities, then build a focused shortlist aligned to your goals, risk profile, and budget.",
  },
  {
    title: "Arrange and attend inspections on your behalf",
    detail:
      "We coordinate inspection times, inspect with a buyer-advocate lens, and report back clearly so you can make confident decisions quickly.",
  },
  {
    title: "Complete full due diligence",
    detail:
      "Before you commit, we coordinate and review key checks including building reports, contract review, and comparable sales analysis.",
  },
  {
    title: "Negotiate to secure the best possible price",
    detail:
      "We handle all communication with selling agents and run a disciplined negotiation strategy designed to protect your position and lower your final price.",
  },
  {
    title: "Manage the process through to settlement",
    detail:
      "From accepted offer to settlement, we keep the transaction moving, manage key milestones, and reduce stress across the full purchase journey.",
  },
];

const idealFor = [
  "First home buyers navigating the process for the first time",
  "Busy professionals with limited time for search and inspections",
  "Interstate buyers needing trusted local representation",
  "Any buyer wanting expert guidance from start to finish",
];

export default function FullServicePage() {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="container">
          <p className="label">Full Service</p>
          <h1>End-to-end buyer advocacy in clear steps</h1>
          <p className="service-detail-intro">
            We handle your property purchase from start to finish, giving you
            direct access to an experienced Melbourne advocate who saves you
            time, stress, and often tens of thousands through expert
            negotiation.
          </p>
          <Link href="/#services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <ol className="service-step-list">
            {steps.map((step, index) => (
              <li key={step.title} className="service-step-card">
                <p className="service-step-number">Step {index + 1}</p>
                <h2>{step.title}</h2>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="service-detail-block">
            <h3>Who this is ideal for</h3>
            <ul>
              {idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
