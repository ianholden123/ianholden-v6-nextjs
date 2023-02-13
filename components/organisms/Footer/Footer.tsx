import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <Link href="/">Ian Holden</Link>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        Socials
      </div>
    </footer>
  );
};
