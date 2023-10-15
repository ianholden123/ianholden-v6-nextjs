import { fetchAlbums } from "@/lib/Services/LastFM";
import { AboutPage } from "@/components/pages/About";
import { transformAlbums } from "@/lib/Services/LastFM";
import { TTransformedAlbum } from "@/lib/Services/LastFM/LastFm.types";

export const metadata = {
  title: "About Me | Ian Holden",
  description:
    "Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.",
};

async function getAlbums(): Promise<TTransformedAlbum[]> {
  const fetchedAlbums = await fetchAlbums({ period: "1month", limit: "3" });
  return transformAlbums(fetchedAlbums?.topalbums?.album);
}

export default async function About() {
  const albums = await getAlbums();
  return <AboutPage albums={albums} />;
}
