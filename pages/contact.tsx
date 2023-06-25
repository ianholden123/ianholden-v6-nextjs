import Head from "next/head";
import { ContactPage } from "@/components/pages/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me | Ian Holden</title>
        <meta
          name="description"
          content="Contact Ian Holden to discuss how he might be able to help you build your next web project."
        />
      </Head>
      <ContactPage />
    </>
  );
}
