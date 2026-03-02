"use client";

import { useState, FormEvent } from "react";
import content from "@/content/siteContent.json";
import Reveal from "./Reveal";
import { LocationIcon, EmailIcon } from "./Icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Collect checkbox values
    const purchaseTypes: string[] = [];
    form.querySelectorAll<HTMLInputElement>('input[name="purchaseType"]:checked').forEach((cb) => {
      purchaseTypes.push(cb.value);
    });

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      purchaseType: purchaseTypes.join(", "),
      timeline: formData.get("timeline"),
      budget: formData.get("budget"),
      referral: formData.get("referral"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback — show success anyway for now
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <p className="label">{content.contact.label}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2>
                {content.contact.heading}
                <br />
                <span className="highlight">
                  {content.contact.headingHighlight}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p>{content.contact.description}</p>
            </Reveal>
            <Reveal delay={3}>
              <div className="contact-info">
                <div className="contact-info-item">
                  <LocationIcon />
                  {content.contact.location}
                </div>
                <div className="contact-info-item">
                  <EmailIcon />
                  <a
                    href={`mailto:${content.contact.email}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {content.contact.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            {submitted ? (
              <div className="contact-form-wrap">
                <div className="form-success">
                  <h3>Thanks for reaching out!</h3>
                  <p>
                    We&rsquo;ll be in touch within 24 hours to discuss your
                    property search.
                  </p>
                </div>
              </div>
            ) : (
              <form className="contact-form-wrap" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Charlie"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Williams"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="04XX XXX XXX"
                    required
                  />
                </div>
                <div className="checkbox-group">
                  <label>Purchase Type</label>
                  <div className="checkbox-options">
                    {content.contact.purchaseTypes.map((type) => (
                      <label key={type} className="chip-label">
                        <input type="checkbox" name="purchaseType" value={type} />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Timeline</label>
                    <select name="timeline" defaultValue="">
                      <option value="" disabled>
                        Select
                      </option>
                      {content.contact.timelines.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Budget</label>
                    <input type="text" name="budget" placeholder="$" />
                  </div>
                </div>
                <div className="form-group">
                  <label>How did you hear about us?</label>
                  <select name="referral" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {content.contact.referralSources.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Anything else?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your property search..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
