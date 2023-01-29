import Link from "next/link";

export const PageNotFoundTemplate = () => (
  <div className="px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-2 mb-6">
          Sorry, I couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/">Go Home &rarr;</Link>
      </div>
    </div>
  </div>
);
