"use client";

import { useState } from "react";
import content from "@/content/siteContent.json";
import Reveal from "./Reveal";

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
  const [activeServiceTitle, setActiveServiceTitle] = useState("Full Service");
  const activeService =
    content.services.items.find((service) => service.title === activeServiceTitle) ??
    content.services.items[0];

  const serviceStepsByTitle: Record<string, ServiceStep[]> = {
    "Full Service": fullServiceSteps,
    Negotiation: negotiationSteps,
    "Vendor Service": vendorServiceSteps,
  };

  const activeServiceSteps = serviceStepsByTitle[activeService.title] ?? [];

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
        <div className="services-tabs-layout">
          <Reveal>
            <div className="services-tabs" role="tablist" aria-orientation="vertical">
              {content.services.items.map((service) => {
                const isActive = service.title === activeService.title;
                const serviceSteps = serviceStepsByTitle[service.title] ?? [];

                return (
                  <div key={service.title} className="service-tab-item">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`service-tab${isActive ? " active" : ""}`}
                      onClick={() => setActiveServiceTitle(service.title)}
                    >
                      <span className="service-tab-title">{service.title}</span>
                      <span className="service-tab-description">{service.shortDescription}</span>
                      <span className="service-tab-tags">
                        {service.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </span>
                    </button>
                    {isActive ? (
                      <div className="service-panel-mobile" role="tabpanel">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ol className="service-steps-inline">
                          {serviceSteps.map((step) => (
                            <li key={step.headline}>
                              <strong>{step.headline}</strong>
                              <span>{step.detail}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="service-panel" role="tabpanel">
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <ol className="service-steps-inline">
                {activeServiceSteps.map((step) => (
                  <li key={step.headline}>
                    <strong>{step.headline}</strong>
                    <span>{step.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
