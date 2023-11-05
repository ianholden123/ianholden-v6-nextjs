import { PageNotFound } from "@/components/pages/404";

export const metadata = {
  title: "Page Not Found | Ian Holden",
  description:
    "Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.",
};

export default function Home() {
  return <PageNotFound />;
}
