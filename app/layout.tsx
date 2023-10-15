import Cookies from "js-cookie";
import { StatsigProvider } from "statsig-react";
import "@/styles/globals.css";
import constants from "@/lib/Constants";
import { usePageViewTracking } from "@/lib/Hooks/usePageViewTracking";
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
  // Middleware will automatically set a cookie for the user if they visit a page
  const sessionUUID = Cookies.get(constants.UUID_COOKIE);

  // usePageViewTracking();

  return (
    <html lang="en">
      <body>
        <Favicons />
        <MeticulousScript />
        {/* <StatsigProvider
          sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_API_KEY}
          waitForInitialization={true}
          user={{
            customIDs: {
              sessionUUID,
            },
          }}
          options={{
            environment: { tier: process.env.NODE_ENV },
          }}
        > */}
        <Scripts />
        <SiteNavigation>
          <main>{children}</main>
          <Footer />
        </SiteNavigation>
        {/* </StatsigProvider> */}
      </body>
    </html>
  );
}
