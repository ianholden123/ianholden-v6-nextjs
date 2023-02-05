import "@/styles/globals.css";
import { Scripts } from "@/components/_miscellaneous/scripts";
import { SiteNavigation } from "@/components/organisms/SiteNavigation";
import { Footer } from "@/components/organisms/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Scripts />
      <SiteNavigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
