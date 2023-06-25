import { trackEvent } from "@/lib/Services/Rudderstack";

export const ContactTemplate = () => {
  const handleButtonClick = (linkName: string, href: string) => {
    trackEvent("External Link", {
      name: linkName,
      href,
    });
  };

  return (
    <div className="prose container py-10">
      <h1>Contact Ian</h1>
      <p>
        If you would like to work with me on a project, I would be more than
        happy to help! Get in touch by using one of the following channels
        below:
      </p>
      <a
        href="mailto:ianholdendev@outlook.com"
        className="btn btn-neutral btn-wide mr-5"
        onClick={() =>
          handleButtonClick("Email", "mailto:ianholdendev@outlook.com")
        }
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/ianlewisholden"
        className="btn btn-neutral btn-wide mt-4 md:mt-0"
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
