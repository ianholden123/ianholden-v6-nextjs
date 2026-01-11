import Link from "next/link";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <Link href="/">Ian Holden</Link>
      </div>
      <div className="footer-right">
        Socials
      </div>
    </footer>
  );
};
