import Head from "next/head";
import { PageNotFound } from "@/components/pages/404";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Not Found | Ian Holden</title>
        <meta
          name="description"
          content="Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project."
        />
      </Head>
      <PageNotFound />
    </>
  );
}
