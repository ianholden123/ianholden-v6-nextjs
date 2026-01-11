"use client";

import { trackEvent } from "@/lib/Services/Rudderstack";
import "./Contact.css";

export const ContactTemplate = () => {
  const handleButtonClick = (linkName: string, href: string) => {
    trackEvent("External Link", {
      name: linkName,
      href,
    });
  };

  return (
    <div className="contact-container container">
      <h1>Contact Ian</h1>
      <p>
        If you would like to work with me on a project, I would be more than
        happy to help! Get in touch by using one of the following channels
        below:
      </p>
      <a
        href="mailto:ianholdendev@outlook.com"
        className="contact-button contact-button-primary"
        onClick={() =>
          handleButtonClick("Email", "mailto:ianholdendev@outlook.com")
        }
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/ianlewisholden"
        className="contact-button contact-button-neutral"
        onClick={() =>
          handleButtonClick(
            "LinkedIn",
            "https://www.linkedin.com/in/ianlewisholden"
          )
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
};
