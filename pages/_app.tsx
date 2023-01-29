import "@/styles/globals.css";
import { SiteNavigation } from "@/components/organisms/SiteNavigation";
import { Footer } from "@/components/organisms/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteNavigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
