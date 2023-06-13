import Cookies from "js-cookie";
import { StatsigProvider } from "statsig-react";
import "@/styles/globals.css";
import constants from "@/lib/Constants";
import { usePageViewTracking } from "@/lib/Hooks/usePageViewTracking";
import { Scripts } from "@/components/_miscellaneous/scripts";
import { SiteNavigation } from "@/components/organisms/SiteNavigation";
import { Footer } from "@/components/organisms/Footer";

export default function App({ Component, pageProps }) {
  // Middleware will automatically set a cookie for the user if they visit a page
  const sessionUUID = Cookies.get(constants.UUID_COOKIE);

  usePageViewTracking();

  return (
    <StatsigProvider
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
    >
      <Scripts />
      <SiteNavigation>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </SiteNavigation>
    </StatsigProvider>
  );
}
