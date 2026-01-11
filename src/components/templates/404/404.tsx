import Link from "next/link";
import "./404.css";

export const PageNotFoundTemplate = () => (
  <div
    className="hero"
    style={{ backgroundImage: `url("/ianHero.jpeg")` }}
  >
    <div className="hero-overlay hero-overlay-dark"></div>
    <div className="hero-content">
      <div className="hero-content-inner">
        <h1 className="hero-title-small">Page Not Found</h1>
        <p className="hero-text">
          Sorry, I couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/" className="btn btn-primary">
          Go Home &rarr;
        </Link>
      </div>
    </div>
  </div>
);
