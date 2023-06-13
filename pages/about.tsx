import Head from "next/head";
import { fetchTopAlbums } from "@/lib/Services/LastFM";
import { AboutPage } from "@/components/pages/About";

export default function Home({ albums }) {
  return (
    <>
      <Head>
        <title>About Me | Ian Holden</title>
        <meta
          name="description"
          content="Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project."
        />
      </Head>
      <AboutPage albums={albums} />
    </>
  );
}

export async function getStaticProps() {
  const albums = await fetchTopAlbums();
  return { props: { albums } };
}
