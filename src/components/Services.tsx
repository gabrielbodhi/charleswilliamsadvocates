"use client";

import { useState } from "react";
import content from "@/content/siteContent.json";
import Reveal from "./Reveal";
import { getServiceIcon } from "./Icons";

type ServiceStep = {
  headline: string;
  detail: string;
};

const fullServiceSteps = [
  {
    headline: "Define Brief and Budget",
    detail: "Set your search criteria and budget strategy before entering the market.",
  },
  {
    headline: "Research and Shortlist",
    detail: "Run comprehensive market research and identify suitable target properties.",
  },
  {
    headline: "Inspection Representation",
    detail: "Arrange and attend inspections on your behalf with clear feedback.",
  },
  {
    headline: "Due Diligence Review",
    detail: "Complete key checks including building reports, contract reviews, and comparable sales analysis.",
  },
  {
    headline: "Price Negotiation",
    detail: "Negotiate with agents to secure the best possible purchase price.",
  },
  {
    headline: "Settlement Management",
    detail: "Manage the process through to settlement with end-to-end support.",
  },
] satisfies ServiceStep[];

const negotiationSteps = [
  {
    headline: "Set Price Guardrails",
    detail: "Confirm your target property and define a budget-aligned price range.",
  },
  {
    headline: "Determine True Value",
    detail: "Conduct detailed market analysis to establish fair value and negotiation range.",
  },
  {
    headline: "Complete Critical Checks",
    detail: "Perform due diligence including building and pest inspections, contract review, and comparable sales analysis.",
  },
  {
    headline: "Build Offer Strategy",
    detail: "Develop a strategic bidding or offer approach based on campaign context.",
  },
  {
    headline: "Lead Agent Communication",
    detail: "Handle all communication and negotiation with the selling agent.",
  },
  {
    headline: "Secure the Right Outcome",
    detail: "Use Melbourne-specific market leverage to secure the property within budget.",
  },
] satisfies ServiceStep[];

const vendorServiceSteps = [
  {
    headline: "Select the Right Agent",
    detail: "Evaluate and interview multiple agents to find the best fit for your property and goals.",
  },
  {
    headline: "Review Agreements",
    detail: "Review and negotiate agency agreements and marketing proposals before signing.",
  },
  {
    headline: "Plan Campaign Strategy",
    detail: "Set pricing, timing, and campaign approach to maximize buyer competition.",
  },
  {
    headline: "Monitor Performance",
    detail: "Track the agent's performance and marketing execution throughout the campaign.",
  },
  {
    headline: "Apply Data-Driven Oversight",
    detail: "Use market knowledge and proven agent metrics to guide key decisions.",
  },
  {
    headline: "Maximize Sale Result",
    detail: "Position the campaign for the strongest possible sale outcome from start to finish.",
  },
] satisfies ServiceStep[];

export default function Services() {
  const [showFullServiceSteps, setShowFullServiceSteps] = useState(false);
  const [showNegotiationSteps, setShowNegotiationSteps] = useState(false);
  const [showVendorServiceSteps, setShowVendorServiceSteps] = useState(false);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head">
          <div>
            <Reveal>
              <p className="label">{content.services.label}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2>{content.services.heading}</h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p>{content.services.description}</p>
          </Reveal>
        </div>
        <div className="service-cards">
          {content.services.items.map((service, i) => (
            <Reveal key={service.title} delay={Math.min(i, 2)}>
              {service.title === "Full Service" ? (
                <div
                  className={`service-card service-card-link${showFullServiceSteps ? " expanded" : ""}`}
                >
                  <div className="service-icon">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="service-card-cta-btn"
                    onClick={() => setShowFullServiceSteps((prev) => !prev)}
                  >
                    {showFullServiceSteps
                      ? "Hide full service steps"
                      : "View full service steps"}
                  </button>
                  {showFullServiceSteps ? (
                    <ol className="service-steps-inline">
                      {fullServiceSteps.map((step) => (
                        <li key={step.headline}>
                          <strong>{step.headline}</strong>
                          <span>{step.detail}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ) : service.title === "Negotiation" ? (
                <div
                  className={`service-card service-card-link${showNegotiationSteps ? " expanded" : ""}`}
                >
                  <div className="service-icon">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="service-card-cta-btn"
                    onClick={() => setShowNegotiationSteps((prev) => !prev)}
                  >
                    {showNegotiationSteps
                      ? "Hide negotiation steps"
                      : "View negotiation steps"}
                  </button>
                  {showNegotiationSteps ? (
                    <ol className="service-steps-inline">
                      {negotiationSteps.map((step) => (
                        <li key={step.headline}>
                          <strong>{step.headline}</strong>
                          <span>{step.detail}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ) : service.title === "Vendor Service" ? (
                <div
                  className={`service-card service-card-link${showVendorServiceSteps ? " expanded" : ""}`}
                >
                  <div className="service-icon">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="service-card-cta-btn"
                    onClick={() => setShowVendorServiceSteps((prev) => !prev)}
                  >
                    {showVendorServiceSteps
                      ? "Hide vendor service steps"
                      : "View vendor service steps"}
                  </button>
                  {showVendorServiceSteps ? (
                    <ol className="service-steps-inline">
                      {vendorServiceSteps.map((step) => (
                        <li key={step.headline}>
                          <strong>{step.headline}</strong>
                          <span>{step.detail}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ) : (
                <div className="service-card">
                    <div className="service-icon">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
