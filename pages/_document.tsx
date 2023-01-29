import { Html, Head, Main, NextScript } from "next/document";
import { Favicons } from "@/components/_miscellaneous/favicons";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
