import "@/styles/globals.css";
import { Favicons } from "@/components/_miscellaneous/favicons";
import { MeticulousScript } from "@/components/_miscellaneous/scripts/script-meticulous";
import { Scripts } from "@/components/_miscellaneous/scripts";
import { SiteNavigation } from "@/components/organisms/SiteNavigation";
import { Footer } from "@/components/organisms/Footer";

export const metadata = {
  title: "Ian Holden | Software Engineer",
  description:
    "Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.",
  robots: "noindex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Favicons />
        <MeticulousScript />
        <Scripts />
        <SiteNavigation>
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </SiteNavigation>
      </body>
    </html>
  );
}
