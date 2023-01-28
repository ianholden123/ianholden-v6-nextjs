import Head from "next/head";
import { HomePage } from "@/components/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian Holden | Software Engineer</title>
        <meta
          name="description"
          content="Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project."
        />
      </Head>
      <HomePage />
    </>
  );
}
