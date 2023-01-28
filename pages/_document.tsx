import { Html, Head, Main, NextScript } from "next/document";
import { Favicons } from "@/components/_miscellaneous/favicons";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
