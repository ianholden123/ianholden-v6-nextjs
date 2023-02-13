import Link from "next/link";

export const PageNotFoundTemplate = () => (
  <div
    className="hero min-h-screen"
    style={{ backgroundImage: `url("/ian.jpeg")` }}
  >
    <div className="hero-overlay bg-opacity-90"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
        <p className="mb-5">
          Sorry, I couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/" passHref>
          <button className="btn btn-primary">Go Home &rarr;</button>
        </Link>
      </div>
    </div>
  </div>
);
